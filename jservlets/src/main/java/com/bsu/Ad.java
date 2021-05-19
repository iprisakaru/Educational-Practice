import java.util.Date;
import java.util.List;

public class Ad {
    private String id;
    private String description;
    private Date createdAt;
    private String link;
    private String vendor;
    private String photoLink;
    private List<String> hashTags;
    private String discount;
    private Date validUntil;
    private double rating;
    private List<Reviews> reviews;

    public Ad(String id, String description, Date createdAt, String link,
              String vendor, List<String> hashTags, Date validUntil){
        this.id = id;
        this.description = description;
        this.createdAt = createdAt;
        this.link = link;
        this.vendor = vendor;
        this.hashTags = hashTags;
        this.validUntil = validUntil;
    }

    public String getId() {
        return id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public String getVendor() {
        return vendor;
    }

    public void setVendor(String vendor) {
        this.vendor = vendor;
    }

    public String getPhotoLink() {
        return photoLink;
    }

    public void setPhotoLink(String photoLink) {
        this.photoLink = photoLink;
    }

    public List<String> getHashTags() {
        return hashTags;
    }

    public void setHashTags(List<String> hashTags) {
        this.hashTags = hashTags;
    }

    public String getDiscount() {
        return discount;
    }

    public void setDiscount(String discount) {
        this.discount = discount;
    }

    public Date getValidUntil() {
        return validUntil;
    }

    public void setValidUntil(Date validUntil) {
        this.validUntil = validUntil;
    }

    public double getRating() {
        return rating;
    }

    public void setRating(double rating) {
        this.rating = rating;
    }

    public List<Reviews> getReviews() {
        return reviews;
    }

    public void setReviews(List<Reviews> reviews) {
        this.reviews = reviews;
    }

    public static boolean validate(Ad ad) {
        if (ad.getId() == null || ad.getId().length() < 1)
            return false;
        if (ad.getDescription() == null || ad.getDescription().length() >= 200)
            return false;
        if (ad.getCreatedAt() == null)
            return false;
        if (ad.getVendor() == null || ad.getVendor().length() < 1)
            return false;
        if (ad.getHashTags() == null)
            return false;
        if (ad.getDiscount() == null || ad.getDiscount().length() < 1)
            return false;
        if (ad.getValidUntil() == null)
            return false;
        return true;
    }
}
