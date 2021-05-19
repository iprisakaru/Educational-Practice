import java.util.ArrayList;
import java.util.List;

public class Filter {
    private List<String> vendors;
    private List<String> hashTags;

    public Filter() {
        this.hashTags = new ArrayList<>();
        this.vendors = new ArrayList<>();
    }

    public Filter(List<String> hashTags, List<String> vendors) {
        this.hashTags = hashTags;
        this.vendors = vendors;
    }

    public List<String> getVendors() {
        return vendors;
    }

    public void setVendors(List<String> vendors) {
        this.vendors = vendors;
    }

    public List<String> getHashTags() {
        return hashTags;
    }

    public void setHashTags(List<String> hashTags) {
        this.hashTags = hashTags;
    }
}