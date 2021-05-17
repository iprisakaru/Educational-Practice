    let addItemPrototype = {
        id: '0',
        desciption: 'Wonder Women',
        createdAt: new Date('2021-03-16T00:00:00'),
        link: 'https://play.google.com/store/movies/details/%D0%A7%D1%83%D0%B4%D0%BE_%D0%96%D0%B5%D0%BD%D1%89%D0%B8%D0%BD%D0%B0_1984?id=a_Zxg6mXIf8.P',
        vendor: 'Marvel',
        photoLink: 'https://play-lh.googleusercontent.com/eT0pU0GldUEwwLEG8-KU_b49_IWL_ooQ0GPsevOoaOfeDn3KMKQKfQr8O_o59h2-JkvR0NAWTJDx3ZUaOeE=w200-h300-rw',
        hashTags: ['marvel', 'films'],
        discount: '30%',
        validUntil: new Date('2021-09-01T23:59:59'),
        rating: 3,
        reviews: []
    }

    let adList = [{
            id: '1',
            desciption: 'TikTok',
            createdAt: new Date('2021-03-16T00:00:00'),
            link: 'https://play.google.com/store/apps/details?id=com.zhiliaoapp.musically',
            vendor: 'TikTok Pte. Ltd.',
            photoLink: 'https://play-lh.googleusercontent.com/iBYjvYuNq8BB7EEEHktPG1fpX9NiY7Jcyg1iRtQxO442r9CZ8H-X9cLkTjpbORwWDG9d=s180-rw',
            hashTags: ['tiktok', 'music', 'app'],
            discount: '10%',
            validUntil: new Date('2021-05-31T00:00:00'),
            rating: 5,
            reviews: []
        },
        {
            id: '2',
            desciption: 'Instagram',
            createdAt: new Date('2021-03-16T00:00:00'),
            link: 'https://play.google.com/store/apps/details?id=com.instagram.android',
            vendor: 'Instagram',
            photoLink: 'https://play-lh.googleusercontent.com/2sREY-8UpjmaLDCTztldQf6u2RGUtuyf6VT5iyX3z53JS4TdvfQlX-rNChXKgpBYMw=s180-rw',
            hashTags: ['photo', 'music', 'app'],
            discount: '20%',
            validUntil: new Date('2021-05-31T00:00:00'),
            rating: 4,
            reviews: []
        },
        {
            id: '3',
            desciption: 'Spotify',
            createdAt: new Date('2021-03-16T00:00:00'),
            link: 'https://play.google.com/store/apps/details?id=com.spotify.music',
            vendor: 'Spotify Ltd.',
            photoLink: 'https://play-lh.googleusercontent.com/UrY7BAZ-XfXGpfkeWg0zCCeo-7ras4DCoRalC_WXXWTK9q5b0Iw7B0YQMsVxZaNB7DM=s180-rw',
            hashTags: ['audio', 'music', 'app'],
            discount: '50%',
            validUntil: new Date('2021-05-31T00:00:00'),
            rating: 5,
            reviews: []
        },
        {
            id: '4',
            desciption: 'Deezer: музыка, плейлисты и подкасты',
            createdAt: new Date('2021-03-16T00:00:00'),
            link: 'https://play.google.com/store/apps/details?id=com.instagram.android',
            vendor: 'Deezer Mobile',
            photoLink: 'https://play-lh.googleusercontent.com/2sREY-8UpjmaLDCTztldQf6u2RGUtuyf6VT5iyX3z53JS4TdvfQlX-rNChXKgpBYMw=s180-rw',
            hashTags: ['audio', 'music', 'app'],
            discount: '20%',
            validUntil: new Date('2021-05-31T00:00:00'),
            rating: 5,
            reviews: []
        },
        {
            id: '5',
            desciption: 'Яндекс.Музыка и Подкасты – скачивайте и слушайте',
            createdAt: new Date('2021-03-16T00:00:00'),
            link: 'https://play.google.com/store/apps/details?id=ru.yandex.music',
            vendor: 'Yandex Apps',
            photoLink: 'https://play-lh.googleusercontent.com/Zs0sx5AY_3Neygw6IOyeGabDlNa-jXhF6vRp2iKH1BOPkAuhooLZsCVpdWisxeDZvQ=s180-rw',
            hashTags: ['audio', 'music', 'app'],
            discount: '19%',
            validUntil: new Date('2021-05-31T00:00:00'),
            rating: 3,
            reviews: []
        },
        {
            id: '6',
            desciption: 'ВКонтакте — мессенджер, музыка и видео',
            createdAt: new Date('2021-03-16T00:00:00'),
            link: 'https://play.google.com/store/apps/details?id=com.vkontakte.android',
            vendor: 'VK.com',
            photoLink: 'https://play-lh.googleusercontent.com/LmnJkZ_97f5PHg-BE_AkntaS1v3_7MmaUO_m6oWpfKxVOriOsMPf79S52KInIJ0E_S8=s180-rw',
            hashTags: ['social', 'app'],
            discount: '40%',
            validUntil: new Date('2021-05-31T00:00:00'),
            rating: 5,
            reviews: []
        },
        {
            id: '7',
            desciption: 'Одноклассники: Социальная сеть, чат и знакомства',
            createdAt: new Date('2021-03-16T00:00:00'),
            link: 'https://play.google.com/store/apps/details?id=ru.ok.android',
            vendor: 'Odnoklassniki Ltd',
            photoLink: 'https://play-lh.googleusercontent.com/MXiDx8ELb7pJl32MDUGr9zufJlk_gwvJYRzyP4WcVx2a7vpj9x57OJxOz00giHKh1pM=s180-rw',
            hashTags: ['social', 'app'],
            discount: '20%',
            validUntil: new Date('2021-05-31T00:00:00'),
            rating: 2,
            reviews: []
        },

        {
            id: '8',
            desciption: 'WhatsApp Messenger',
            createdAt: new Date('2021-03-16T00:00:00'),
            link: 'https://play.google.com/store/apps/details?id=com.whatsapp',
            vendor: 'WhatsApp LLC',
            photoLink: 'https://play-lh.googleusercontent.com/bYtqbOcTYOlgc6gqZ2rwb8lptHuwlNE75zYJu6Bn076-hTmvd96HH-6v7S0YUAAJXoJN=s180-rw',
            hashTags: ['social', 'app'],
            discount: '5%',
            validUntil: new Date('2021-05-31T00:00:00'),
            rating: 3,
            reviews: []
        },
        {
            id: '9',
            desciption: 'Viber мессенджер: бесплатные видеозвонки и чат',
            createdAt: new Date('2021-03-16T00:00:00'),
            link: 'https://play.google.com/store/apps/details?id=com.viber.voip',
            vendor: 'Viber Media',
            photoLink: 'https://play-lh.googleusercontent.com/U6w6exKdvzjRC6ypN68s6nvn8OBlNgDOf5ub9xcqvZPAkXXVW153t9KMeD8yeAVlTxw=s180-rw',
            hashTags: ['social', 'app'],
            discount: '25%',
            validUntil: new Date('2021-05-31T00:00:00'),
            rating: 3,
            reviews: []
        },
        {
            id: '10',
            desciption: 'Badoo — Чат и знакомства онлайн',
            createdAt: new Date('2021-03-16T00:00:00'),
            link: 'https://play.google.com/store/apps/details?id=com.badoo.mobile',
            vendor: 'Badoo',
            photoLink: 'https://play-lh.googleusercontent.com/GIY7fWpdLDzy8bJNb4-0541BBNThv-NB_Db5fMhvmamGYsZzkOxOSvtkZFqewBqXs5Q=s180-rw',
            hashTags: ['social', 'app'],
            discount: '5%',
            validUntil: new Date('2021-05-31T00:00:00'),
            rating: 1,
            reviews: []
        },
        {
            id: '11',
            desciption: 'Snapchat',
            createdAt: new Date('2021-03-16T00:00:00'),
            link: 'https://play.google.com/store/apps/details?id=com.snapchat.android',
            vendor: 'Snap Inc',
            photoLink: 'https://play-lh.googleusercontent.com/KxeSAjPTKliCErbivNiXrd6cTwfbqUJcbSRPe_IBVK_YmwckfMRS1VIHz-5cgT09yMo=s180-rw',
            hashTags: ['social', 'app'],
            discount: '75%',
            validUntil: new Date('2021-05-31T00:00:00'),
            rating: 5,
            reviews: []
        },
        {
            id: '12',
            desciption: 'Discord — общайтесь и отдыхайте',
            createdAt: new Date('2021-03-16T00:00:00'),
            link: 'https://play.google.com/store/apps/details?id=com.discord',
            vendor: 'Discord Inc.',
            photoLink: 'https://play-lh.googleusercontent.com/_4zBNFjA8S9yjNB_ONwqBvxTvyXYdC7Nh1jYZ2x6YEcldBr2fyijdjM2J5EoVdTpnkA=s180-rw',
            hashTags: ['social', 'app'],
            discount: '50%',
            validUntil: new Date('2021-05-31T00:00:00'),
            rating: 5,
            reviews: []
        },
        {
            id: '13',
            desciption: 'Twitch',
            createdAt: new Date('2021-03-16T00:00:00'),
            link: 'https://play.google.com/store/apps/details?id=tv.twitch.android.app',
            vendor: 'Twitch Interactive, Inc.',
            photoLink: 'https://play-lh.googleusercontent.com/QLQzL-MXtxKEDlbhrQCDw-REiDsA9glUH4m16syfar_KVLRXlzOhN7tmAceiPerv4Jg=s180-rw',
            hashTags: ['social', 'app'],
            discount: '19%',
            validUntil: new Date('2021-05-31T00:00:00'),
            rating: 4,
            reviews: []
        },
        {
            id: '14',
            desciption: 'World War Heroes: Военный шутер',
            createdAt: new Date('2021-03-16T00:00:00'),
            link: 'https://play.google.com/store/apps/details?id=com.gamedevltd.wwh',
            vendor: 'Azur Interactive Games Limited',
            photoLink: 'https://play-lh.googleusercontent.com/lHKqAt-PZSz-7ifRyOKr6D8Y2xal4rmhpA1_qKRUpCBLlV-QlZWLuOcG8Li9mcqJqA=s180-rw',
            hashTags: ['game', 'app'],
            discount: '10%',
            validUntil: new Date('2021-05-31T00:00:00'),
            rating: 5,
            reviews: []
        },
        {
            id: '15',
            desciption: 'Critical Ops: Online Multiplayer FPS Shooting Game',
            createdAt: new Date('2021-03-16T00:00:00'),
            link: 'https://play.google.com/store/apps/details?id=com.criticalforceentertainment.criticalops',
            vendor: 'Critical Force Ltd.',
            photoLink: 'https://play-lh.googleusercontent.com/JpJqDvAlqK8gFzQ9wWfGrbx9CimSv_oRNV0iQ_pc9QA_BBcvp4vDvKfgYc_PfK58Sx8=s180-rw',
            hashTags: ['game', 'app'],
            discount: '25%',
            validUntil: new Date('2021-05-31T00:00:00'),
            rating: 4,
            reviews: []
        },
        {
            id: '16',
            desciption: 'Critical Strike CS: Counter Terrorist Online FPS',
            createdAt: new Date('2021-03-16T00:00:00'),
            link: 'https://play.google.com/store/apps/details?id=com.critical.strike2',
            vendor: 'VERTIGO GAMES',
            photoLink: 'https://play-lh.googleusercontent.com/dWQs6tx2L7YxJ-ILgyqtxNmxARc4AE7IE8xn6OvQ91LquvIjWzle94NJQtgS94M-rKg=s180-rw',
            hashTags: ['game', 'app', 'shooter'],
            discount: '20%',
            validUntil: new Date('2021-05-31T00:00:00'),
            rating: 4,
            reviews: []
        },
        {
            id: '17',
            desciption: 'Clash of Clans',
            createdAt: new Date('2021-03-16T00:00:00'),
            link: 'https://play.google.com/store/apps/details?id=com.supercell.clashofclans',
            vendor: 'Supercell',
            photoLink: 'https://play-lh.googleusercontent.com/akv2Bdp7i5Vv-sl9FuP3_dhWpUO80zULf-Pkh6RFleomEp6pZorHuCNm3FbR9oAMunVK=s180-rw',
            hashTags: ['game', 'app', 'stratagy'],
            discount: '5%',
            validUntil: new Date('2021-05-31T00:00:00'),
            rating: 2,
            reviews: []
        },
        {
            id: '18',
            desciption: 'Clash Royale',
            createdAt: new Date('2021-03-16T00:00:00'),
            link: 'https://play.google.com/store/apps/details?id=com.supercell.clashroyale',
            vendor: 'Supercell',
            photoLink: 'https://play-lh.googleusercontent.com/rIvZQ_H3hfmexC8vurmLczLtMNBFtxCEdmb2NwkSPz2ZuJJ5nRPD0HbSJ7YTyFGdADQ=s180-rw',
            hashTags: ['game', 'app', 'stratagy'],
            discount: '9%',
            validUntil: new Date('2021-05-31T00:00:00'),
            rating: 3,
            reviews: []
        },
        {
            id: '19',
            desciption: 'Brawl Stars',
            createdAt: new Date('2021-03-16T00:00:00'),
            link: 'https://play.google.com/store/apps/details?id=com.supercell.brawlstars',
            vendor: 'Supercell',
            photoLink: 'https://play-lh.googleusercontent.com/EiElcSrd6-o-19roiswSx0AZPzsq6qF3hUGHsSWDl5UVtj7G23DHkneM8ucwqyOmEg=s180-rw',
            hashTags: ['game', 'app', 'stratagy'],
            discount: '10%',
            validUntil: new Date('2021-05-31T00:00:00'),
            rating: 5,
            reviews: []
        },
        {
            id: '20',
            desciption: 'Grand Theft Auto: San Andreas',
            createdAt: new Date('2021-03-16T00:00:00'),
            link: 'https://play.google.com/store/apps/details?id=com.rockstargames.gtasa',
            vendor: 'Rockstar Games',
            photoLink: 'https://play-lh.googleusercontent.com/XRlCpj22PFJuFK43QcE3u5RxmoNUed7YO_zG-6F1PCqjrBIIURbTBDvTgLVVIk5pNeY=s180-rw',
            hashTags: ['game', 'app', 'rpg'],
            discount: '20%',
            validUntil: new Date('2021-05-31T00:00:00'),
            rating: 4,
            reviews: []
        },
        
    ]

 
class AdCollection{
     getAds(skip = 0, top = 10, filterConfig = {}){
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
                adsToShow = this._filterByVendors(adsToShow,filterConfig[keys[1]],0,top);
            }else if(keys[0] == 'vendors'){
                adsToShow = this._filterByVendors(this._adList, filterConfig[keys[0]],skip, top);
                adsToShow = this._filterByTags(adsToShow,filterConfig[keys[1]],0,top);
            }
        }
        adsToShow.sort(function(a,b){
            return a.createdAt - b.createdAt;
        });
        return adsToShow;
    }


     validateAd(ad){
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

     addAd(ad){
        for (let i =0; i<adList.length;++i){
            if(adList[i].id === ad.id){
                return false;
            }
        }
        if(AdCollection.validateAd(ad)){
            this._adList.push(ad);
            return true;
        }else{
            return false;
        }
    }

     editAd(id,changes){
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

     removeAd(id){
        for (let i = 0;i<this._adList.length;++i){
            if(this._adList[i].id === id){
                this._adList.splice(i,1);
                return true;
            }
        }
        return false;
    }

     filterByVendors(ads, vendors,skip, top){
        return ads.filter(сurrentValue => vendors.includes(сurrentValue.vendor)).slice(skip,top);
    }
    
     filterByTags (ads, hashTags, skip, top){
        return ads.filter(currentAd =>{
            return hashTags.some(hashTag =>{ return currentAd.hashTags.includes(hashTag)})
        });
    }
}

let adCollection = new AdCollection(adList);
    //--------------TESTS--------------//

    console.log('getAds');

    console.log(adCollection.getAds());

    console.log(adCollection.getAds(2));

    console.log(adCollection.getAds(15, 5));

    console.log(adCollection.getAds(2, 10, {}));

    console.log(adCollection.getAds(0, 10, {
        vendor: 'Apple'
    }));

    console.log('getAd');

    console.log(adCollection.getAd('1'));

    console.log(adCollection.getAd('100'));

    console.log('validateAd');

    console.log(adCollection.validateAd({}));

    console.log(adCollection.validateAd({
        id: '0',
        desciption: 'Wonder Women',
        createdAt: new Date('2021-03-16T00:00:00'),
        link: 'https://play.google.com/store/movies/details/%D0%A7%D1%83%D0%B4%D0%BE_%D0%96%D0%B5%D0%BD%D1%89%D0%B8%D0%BD%D0%B0_1984?id=a_Zxg6mXIf8.P',
        vendor: 'Marvel',
        photoLink: 'https://play-lh.googleusercontent.com/eT0pU0GldUEwwLEG8-KU_b49_IWL_ooQ0GPsevOoaOfeDn3KMKQKfQr8O_o59h2-JkvR0NAWTJDx3ZUaOeE=w200-h300-rw',
        hashTags: ['marvel', 'films'],
        discount: '30%',
        validUntil: new Date('2021-09-01T23:59:59'),
        rating: 3,
        reviews: []
    }));

    console.log(adCollection.validateAd({
        id: '28',
        desciption: 'Instagram',
        createdAt: new Date('2021-03-16T00:00:00'),
        link: 'https://play.google.com/store/apps/details?id=com.instagram.android',
        vendor: 'Instagram',
        photoLink: 'https://play-lh.googleusercontent.com/2sREY-8UpjmaLDCTztldQf6u2RGUtuyf6VT5iyX3z53JS4TdvfQlX-rNChXKgpBYMw=s180-rw',
        hashTags: ['photo', 'music', 'app'],
        discount: '20%',
        validUntil: new Date('2021-05-31T00:00:00'),
        rating: 4,
        reviews: []
    }));

    console.log('addAd');

    console.log(adCollection.addAd({}), adList);

    console.log(adCollection.addAd({
        id: '24',
        desciption: 'Instagram',
        createdAt: new Date('2021-03-16T00:00:00'),
        link: 'https://play.google.com/store/apps/details?id=com.instagram.android',
        vendor: 'Instagram',
        photoLink: 'https://play-lh.googleusercontent.com/2sREY-8UpjmaLDCTztldQf6u2RGUtuyf6VT5iyX3z53JS4TdvfQlX-rNChXKgpBYMw=s180-rw',
        hashTags: ['photo', 'music', 'app'],
        discount: '20%',
        validUntil: new Date('2021-05-31T00:00:00'),
        rating: 4,
        reviews: []
    }), adList);

    console.log(adCollection.addAd({
            id: '21',
            desciption: 'Instagram',
            createdAt: new Date('2021-03-16T00:00:00'),
            link: 'https://play.google.com/store/apps/details?id=com.instagram.android',
            vendor: 'Instagram',
            photoLink: 'https://play-lh.googleusercontent.com/2sREY-8UpjmaLDCTztldQf6u2RGUtuyf6VT5iyX3z53JS4TdvfQlX-rNChXKgpBYMw=s180-rw',
            hashTags: ['photo', 'music', 'app'],
            discount: '20%',
            validUntil: new Date('2021-05-31T00:00:00'),
            rating: 4,
            reviews: []
        }), adList);


    console.log(adCollection.addAd({
        id: '5',
        desciption: 'Adobe PHOTOSHOP',
        createdAt: new Date('2021-03-16T00:00:00'),
        link: 'https://www.adobe.com/',
        vendor: 'Adobe'
    }));

    console.log('editAd');

    console.log(adCollection.editAd('1', {}), getAd('1'));

    console.log(adCollection.editAd('-1', {}));

    console.log(adCollection.editAd('5', {
        vendor: 'Nike'
    }), getAd('5'));

    console.log(adCollection.editAd('5', {
        vendor: 'Nike',
        discount: '0%',
        id: '-100'
    }), getAd('5'));

    console.log(adCollection.editAd('5', {
        vendor: 12345
    }), getAd('5'));

    console.log('removeAd')

    console.log(adCollection.removeAd('2'));

    console.log(adCollection.getAds('1'));

;