class AdCollection{

    constructor (adList){
        if(adList.length != 0){
            this._adList = adList.slice();
        }else{
            this._adList = [];
        }
    }

    _filterByVendors(ads, vendors,skip, top){
        return ads.filter(сurrentValue => vendors.includes(сurrentValue.vendor)).slice(skip,skip+top);
    }

    _filterByTags (ads, hashTags, skip, top){
        return ads.filter(currentAd =>{
            return hashTags.some(hashTag =>{ return currentAd.hashTags.includes(hashTag)})
        });
    }

    getPage(skip = 0, top = 10, filterConfig = {}){
        let adsToShow = [];
        let keys = Object.keys(filterConfig);

        if(keys.length == 0){ //no filter used
            adsToShow = this._adList.slice(skip,skip+top);
        }else if (keys.length == 1){
            if(keys[0] == 'hashTags'){
                adsToShow = this._filterByTags(this._adList, filterConfig[keys[0]],skip, top);
            } else if(keys[0] == 'vendors'){
                adsToShow = this._filterByVendors(this._adList, filterConfig[keys[0]],skip, top);
            }
        }else if(keys.length == 2){
            if(keys[0] == 'hashTags'){
                adsToShow = this._filterByTags(this._adList, filterConfig[keys[0]],skip, top);
                if (keys[1] == 'vendors'){
                    adsToShow = this._filterByVendors(adsToShow,filterConfig[keys[1]],0,top);
                }
            }else if(keys[0] == 'vendors'){
                adsToShow = this._filterByVendors(this._adList, filterConfig[keys[0]],skip, top);
                if (keys[1] == 'hashTags'){
                    adsToShow = this._filterByTags(adsToShow,filterConfig[keys[1]],0,top);
                }
            }
        }
        //sorting by creation date
        adsToShow.sort(function(a,b){
            return a.createdAt - b.createdAt;
        });
        return adsToShow;
    }

    get(id){
        let result = this._adList.find(currentValue => currentValue.id == id);
        if(result == undefined){
            return {};
        } else{
            return result;
        }
    }

    static validate(ad){
        if (typeof(ad.id) == 'string' &&
        typeof(ad.description) == 'string' && ad.description.length < 200  &&
        ad.createdAt instanceof Date &&  
        typeof(ad.link) == 'string' &&
        typeof(ad.vendor) == 'string' && ad.vendor.length != 0 &&
        ad.hashTags instanceof Array &&
        typeof(ad.discount) == 'string' &&  ad.discount.length != 0 &&
        ad.validUntil instanceof Date){
            return true;
        }else{
            return false;
        }
    }

    add(ad){
        if(this._adList.findIndex(currentValue => currentValue.id == ad.id) != -1){
            return false;
        }
        if(AdCollection.validate(ad)){
            this._adList.push(ad);
            return true;
        }else{
            return false;
        }
    }

    edit(id,changes){
        // checking not to edit fields id author createdAt
        let keys = Object.keys(changes);
        if(keys.includes('id') || keys.includes('author') || keys.includes('createdAt')){
            return false;
        }
        let ind = this._adList.findIndex(currentValue => currentValue.id == id);
        if (ind === -1) {
            return false;
        }
        let newAd = Object.assign(this._adList[ind]);
        for(let i=0;i<=keys.length;++i){
            newAd[keys[i]] = changes[keys[i]];
        }
        if(AdCollection.validate(newAd)){
            this._adList[ind] = newAd;
            return true;
        }else{
            return false;
        }
    }

    remove(id){
        let ind = this._adList.findIndex(currentValue => currentValue.id == id);
        if(ind == -1){
            return false;
        }else{
            this._adList.splice(ind,1);
            return false;
        }
    }

    addAll(adList){
        let notValidatedAds = [];
        adList.forEach(element => {
            if(!this.add(element)){
                notValidatedAds.push(element);
            }
        });
        return notValidatedAds;
    }

    clear(){
        while(this._adList.length != 0){
            this._adList.pop();
        }
    }
}




//USER
class User{
    constructor(name, isLoggedIn){
        this._name = name;
        this._isLoggedIn = isLoggedIn;
    }
}


//VIEW
class View{
    constructor(user, adCollection){
        this._user = user;
        this._adCollection = adCollection
    }

    formatDate(date) {
        let dd = date.getDate();
        if (dd < 10) dd = '0' + dd;

        let mm = date.getMonth() + 1;
        if (mm < 10) mm = '0' + mm;

        let yy = date.getFullYear() % 100;
        if (yy < 10) yy = '0' + yy;

        return dd + '.' + mm + '.' + yy;
      }


    logIn(){
        this.createHeader(user);
        this.showAds();
    }


    showAds(skip = 0, top = 10, filter = {}){
       let buttons = '';
       if(this._user._isLoggedIn){
           buttons = '<i class="far fa-file-alt fa-3x"></i>'
       } 
       const products = document.getElementsByClassName("product")[0];
       products.innerHTML = '';

       let itemCollection = [];

       this._adCollection.getPage(skip,top,filter).forEach(
           elem =>{
               const adItem = document.createElement('div');
               adItem.classList.add('product__item');

               let reviewsText = "";
               elem.reviews.slice(2).forEach(
                   review => {
                       reviewsText += `<li>${review}</li>`;
                   }
               )

               let hashTagsText = "";
               elem.hashTags.forEach(
                hashTag => {
                    hashTagsText += `<a>\#${hashTag}</a>`;
                }
            )

            adItem.innerHTML =
            `
            <div class="product__item-top">
              <div class="product__info">
                <img class="product__icon" src=${elem.photoLink} alt="Product">
                <div class="product__name"></div>
                <div class="product__vendor">${elem.vendor}</div>
                <div class="product__profit">
                  <p>${elem.discount}</p>
                  <div class="product__date">
                    <span class="text">Expires on:</span>
                    <time>${this.formatDate(elem.validUntil)}</time>
                  </div>
                </div>
              </div>
              <div class="product__desc">
                <div class="product__desc-text">
                  <p>${elem.description}</p>
                  <a class="product__desc-link" href = ${elem.link} target = "_blank">learn more</a>
                </div>
                <ul class="product__comments">
                  ${reviewsText}
                </ul>
              </div>
            </div>
            <div class="product__item-bottom">
              <div class="product__meta">
                ${hashTagsText}
              </div>
              <div class="product__control">
                ${buttons}
              </div>
              <div class="product__date-rate">
                <div class="product__rate">
                  <img id="star" src="images/product/star.png" alt="Rate Star">
                  <img id="star" src="images/product/star.png" alt="Rate Star">
                  <img id="star" src="images/product/star.png" alt="Rate Star">
                  <img id="star" src="images/product/star.png" alt="Rate Star">
                  <img id="star" src="images/product/star.png" alt="Rate Star">
                </div> 
                <div class="product__date">
                  <span class="text">Published on:</span> 
                  <time>${this.formatDate(elem.createdAt)}</time>
                </div>
              </div>
            </div>
            `;
            itemCollection.push(adItem);
           }
       )

       itemCollection.sort((a,b) => {return b.createdAt - a.createdAt});

       itemCollection.forEach(elem => {
           products.appendChild(elem);
       })


    }

    removeAd(id){
        if(this._adCollection.remove(id)){
            this.showAds();
        }
    }

    editAd(id, changes){
        if(this._adCollection.edit(id,changes)){
            this.showAds();
        }
    }

    addAd(ad){
        if(this._adCollection.add(ad)){
            this.showAds();
        }
    }

    createHeader(){
        if(this._user._isLoggedIn){
            const headerUserName = document.getElementsByClassName("nav__username")[0];
            headerUserName.innerHTML = this._user._name;
        }else{
            const headerUserName = document.getElementsByClassName("nav__username")[0];
            headerUserName.innerHTML = " ";
            const headerButton = document.getElementsByClassName("nav__link")[0];
            headerButton.innerHTML = "sign in";
        }
    }
}



let adList = [
    {
        id: '1',
        description: 'Insomnia bar 10% sale',
        createdAt: new Date('2021-03-15T23:00:00'),
        link: 'http://besso.by/',
        vendor: 'Bar Insomnia',
        photoLink: 'https://vitrumgroup.ru/upload/iblock/c8d/c8d7bf5c2886338de035551eaf8c2a31.jpg',
        validUntil: new Date('2021-06-01T23:00:00'),
        discount: '10%',
        hashTags: ['alcohol', 'bar'],
        rating: 4.75,
        reviews:["Avesome", "Amazing","The worst bar ever", "I hate this place"]
    },

    {
        id: '2',
        description: 'AirShop sneaker store discounts up to 20%',
        createdAt: new Date('2011-03-19T23:00:00'),
        link: 'https://sneakerstore.by/',
        vendor: 'AIR SHOP',
        photoLink: 'https://sneakerstore.by/image/catalog/banners/ban/logonew.png',
        validUntil: new Date('2027-06-01T23:00:00'),
        discount: '20%',
        hashTags: ['sneakers', 'style','nike','adidas','puma'],
        rating: 4.7,
        reviews:[]
    },

    {
        id: '3',
        description: 'Steam sales up to 30% on best games of the month',
        createdAt: new Date('2019-12-10T00:00:00'),
        link: 'https://store.steampowered.com/',
        vendor: 'Valve',
        photoLink: 'https://store.akamai.steamstatic.com/public/shared/images/header/logo_steam.svg?t=962016',
        validUntil: new Date('2025-07-23T00:00:00'),
        discount: '30%',
        hashTags: ['videogames', 'pc'],
        rating: 5,
        reviews:[]
    },

    {
        id: '4',
        description: '7% on sushi at SushiChefArts',
        createdAt: new Date('2021-03-15T23:00:00'),
        link: 'https://sushichefarts.by/',
        vendor: 'SushiChefArts',
        photoLink: 'https://static7.depositphotos.com/1015060/708/i/950/depositphotos_7085336-stock-photo-sushi-party-tray.jpg',
        validUntil: new Date('2024-04-01T23:00:00'),
        discount: '9%',
        hashTags: ['sushi'],
        rating: 4.5,
        reviews:[]
    },

    {
        id: '5',
        description: '60% for visiting Waterpark Lebyazhiy',
        createdAt: new Date('2021-03-15T23:00:00'),
        link: 'https://waterpark.by/ru/',
        vendor: 'Waterpark Lebyazhiy',
        photoLink: 'https://www.wildernessresort.com/wp-content/uploads/2017/04/New-Frontier-Vertical-Slide.jpg',
        validUntil: new Date('2022-06-01T23:00:00'),
        discount: '60%',
        hashTags: ['waterpark','aquapark'],
        rating: 4.0,
        reviews:[]
    },

    {
        id: '6',
        description: 'Free army agenda',
        createdAt: new Date('2022-03-15T23:00:00'),
        link: 'https://mosk.minsk.gov.by/sluzhby-i-podrazdeleniya/voennyj-komissariat',
        vendor: 'Moskovskiy district military enlistment office',
        photoLink: 'https://cdnimg.rg.ru/img/content/193/85/10/RIAN_6262816.HR.ru_d_850.jpg',
        validUntil: new Date('2027-06-01T23:00:00'),
        discount: '100%',
        hashTags: ['army'],
        rating: 1.3,
        reviews:[]
    },

    {
        id: '7',
        description: 'Bowling with 50% sale',
        createdAt: new Date('2021-03-15T23:00:00'),
        link: 'http://www.nlo.by/?p=boul',
        vendor: 'NLO club',
        photoLink: 'https://images.app.goo.gl/dgAFyP2cEduzkJUP9',
        validUntil: new Date('2021-06-01T23:00:00'),
        discount: '50%',
        hashTags: ['bowling','family'],
        rating: 4,
        reviews:[]
    },

    {
        id: '8',
        description: 'Up to 30% on visting gym',
        createdAt: new Date('2021-03-15T23:00:00'),
        link: 'https://adrenalin-fitness.by/',
        vendor: 'Adrenalin fitness',
        photoLink: 'https://jurist.mobi/wp-content/uploads/2019/07/travma-v-fitnes-klube-6.jpg',
        validUntil: new Date('2021-06-01T23:00:00'),
        discount: '30%',
        hashTags: ['health','sport','lifestle','fitness'],
        rating: 4.3,
        reviews:[]
    },

    {
        id: '9',
        description: 'Makeup at BeautyKira with 10% sale',
        createdAt: new Date('2021-03-15T23:00:00'),
        link: 'https://vk.com/salon_kira',
        vendor: 'Beauty Kira',
        photoLink: 'https://sun9-2.userapi.com/impf/c830108/v830108193/b8afb/OaOAlz4PRzg.jpg?size=1280x1280&quality=96&sign=70e9bbb681266d7322989b3def18dc1d&type=album',
        validUntil: new Date('2041-06-01T23:00:00'),
        discount: '10%',
        hashTags: ['makeup','lashes','beauty','lifestyle','nails'],
        rating: 3.9,
        reviews:[]
    },

    {
        id: '10',
        description: 'Chair Sales up to 15%',
        createdAt: new Date('2021-03-15T23:00:00'),
        link: 'https://coolchairs.com',
        vendor: 'Chair Service',
        photoLink: 'https://images.app.goo.gl/dgAFyP2cEduzkJUP9',
        validUntil: new Date('2021-06-01T23:00:00'),
        discount: '15%',
        hashTags: ['furniture'],
        rating: 3.3,
        reviews:[]
    },

    {
        id: '11',
        description: 'Contact ZOO in Titan shop',
        createdAt: new Date('2019-03-15T23:00:00'),
        link: 'https://www.instagram.com/zootitan/?hl=ru',
        vendor: 'ZOO Titan',
        photoLink: 'https://scontent.fmsq2-1.fna.fbcdn.net/v/t1.0-9/56526695_2412507618768224_4900528453188583424_o.png?_nc_cat=107&ccb=1-3&_nc_sid=e3f864&_nc_eui2=AeGIdsbaCrIi0XCB7cNTuuFqzBdQ1O8z0GbMF1DU7zPQZukMyoFl9OoVIZr6_yy9wsojxpaMD5SiemfJKrslwebS&_nc_ohc=FDhzIY9CNVkAX9oc5B9&_nc_ht=scontent.fmsq2-1.fna&oh=5e992a61ac6c454d3e1a53f8d946c49c&oe=607CC2D9',
        validUntil: new Date('2031-06-01T23:00:00'),
        discount: '75%',
        hashTags: ['zoo', 'kids','family'],
        rating: 3.8,
        reviews:[]
    },

    {
        id: '12',
        description: '30% at BSU Store',
        createdAt: new Date('2021-03-15T23:00:00'),
        link: 'https://bsustore.by/',
        vendor: 'BSU Store',
        photoLink: 'https://bsustore.by/wp-content/themes/bsu_store/images/inlinebsuwhite.svg',
        validUntil: new Date('2021-06-01T23:00:00'),
        discount: '30%',
        hashTags: ['style', 'clothes'],
        rating: 4.3,
        reviews:[]
    },

    {
        id: '13',
        description: 'Theater with 40% discount',
        createdAt: new Date('2021-03-15T23:00:00'),
        link: 'https://kupalauski.by/',
        vendor: 'Kupalauski Theater',
        photoLink: 'https://kupalauski.by/local/templates/html_dev/images/logo.png',
        validUntil: new Date('2028-06-01T23:00:00'),
        discount: '40%',
        hashTags: ['art', 'theater'],
        rating: 4.1,
        reviews:[]
    },

    {
        id: '14',
        description: '30% on Github PRO',
        createdAt: new Date('2020-03-15T23:00:00'),
        link: 'https://github.com/',
        vendor: 'Github',
        photoLink: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
        validUntil: new Date('2033-06-01T23:00:00'),
        discount: '30%',
        hashTags: ['code', 'programming','vcs'],
        rating: 4.75,
        reviews:[]
    },

    {
        id: '15',
        description: 'Coursera 20% discount',
        createdAt: new Date('2021-03-15T23:00:00'),
        link: 'https://www.coursera.org/',
        vendor: 'Coursera',
        photoLink: 'https://play-lh.googleusercontent.com/qq5__wITsoCx2kUK8TqVW2-8UDRuxET9kCzPzAPHad8umXiHRF2N0tZKuLezd0tiBQg=s180-rw',
        validUntil: new Date('2021-06-01T23:00:00'),
        discount: '20%',
        hashTags: ['education'],
        rating: 4.4,
        reviews:[]
    },

    {
        id: '16',
        description: '17% sale on Spotify',
        createdAt: new Date('2021-03-15T23:00:00'),
        link: 'https://www.spotify.com/by-ru/free/?utm_source=by-ru_brand_contextual_text&utm_medium=paidsearch&utm_campaign=alwayson_cis_by_premiumbusiness_core_brand+contextual-desktop+text+exact+by-ru+google&gclid=Cj0KCQjw3duCBhCAARIsAJeFyPUjQPRLut43oDgnFceguN3n0d-Sz3pwR4N5iDWZ-BwKYW39VA9AWugaAhLoEALw_wcB&gclsrc=aw.ds',
        vendor: 'Spotify AB',
        photoLink: 'https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg',
        validUntil: new Date('2021-06-01T23:00:00'),
        discount: '17%',
        hashTags: ['music', 'art'],
        rating: 4.75,
        reviews:[]
    },

    {
        id: '17',
        description: 'Netflix 10% discount',
        createdAt: new Date('2021-03-15T23:00:00'),
        link: 'https://www.netflix.com/',
        vendor: 'Netflix',
        photoLink: 'https://logosandtypes.com/wp-content/uploads/2020/07/netflix.svg',
        validUntil: new Date('2021-06-01T23:00:00'),
        discount: '10%',
        hashTags: ['cinema', 'tv','art'],
        rating: 4.0,
        reviews:[]
    },

    {
        id: '18',
        description: 'Kinopoisk+ 30%',
        createdAt: new Date('2021-03-15T23:00:00'),
        link: 'https://www.kinopoisk.ru/',
        vendor: 'Yandex',
        photoLink: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Kinopoisk_logo_orange.png',
        validUntil: new Date('2021-06-01T23:00:00'),
        discount: '30%',
        hashTags: ['cinema', 'art'],
        rating: 4.75,
        reviews:[]
    },

    {
        id: '19',
        description: 'Adobe products with 23% discount',
        createdAt: new Date('2021-03-15T23:00:00'),
        link: 'https://www.adobe.com/',
        vendor: 'Adobe',
        photoLink: 'https://cdn.worldvectorlogo.com/logos/photoshop-cc-4.svg',
        validUntil: new Date('2021-06-01T23:00:00'),
        discount: '23%',
        hashTags: ['adobe', 'art','pc'],
        rating: 4.5,
        reviews:[]
    },

    {
        id: '20',
        description: 'Tilda - 50% off',
        createdAt: new Date('2021-02-25T00:00:00'),
        link: 'https://tilda.cc/ru/',
        vendor: 'Tilda',
        photoLink: 'https://upload.wikimedia.org/wikipedia/commons/d/d6/Tilda_Logo.png',
        hashTags: ['tilda', 'websites', 'program'],
        discount: '50%',
        validUntil: new Date('2030-01-01T00:00:00'),
        rating: 5,
        reviews: []
    },
] 

let adCollection = new AdCollection(adList)

const user = new User("test_user", true);

const viewer = new View(user, adCollection);

viewer.logIn(); 