import java.util.Date;
import java.util.Random;

public class Reviews {

    private long id;
    private String userName;
    private String text;
    private int ratting;

    public Reviews(String pavlvch, String text, int ratting) {
        this.userName = userName;
        this.text = text;
        if (ratting > 5 && ratting < 1) this.ratting = -1;
        this.ratting = ratting;
        Date date = new Date();
        Random random = new Random();
        long a = date.getTime() % 100000;
        this.id = random.nextInt((int) (date.getTime() % 100000));
    }

    public long getId() {
        return id;
    }


    public int getRatting() {
        return ratting;
    }

    public void setRatting(int ratting) {
        this.ratting = ratting;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }
}
