
import com.google.gson.Gson;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.stream.Collectors;

@WebServlet("/ads/*")
public class AdServlet extends HttpServlet {
    private static AdCollection adCollection = new AdCollection(
            Arrays.asList(new Ad("0", "idk what is it", new Date(2000, 12, 12),
                    "www.famcs.by", "FAMCS BSU", new ArrayList<String>(), new Date(2021, 12, 12)))
    );

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException, ServletException {
        String id = req.getParameter("id");
        resp.setContentType("application/json");
        resp.getWriter().print((new Gson()).toJson(adCollection.getAd(id)));
    }

    @Override
    protected void doDelete(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String id = req.getParameter("id");
        resp.setContentType("application/json");
        resp.getWriter().print((new Gson()).toJson(adCollection.remove(id)));
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setContentType("application/json");
        String[] url = req.getRequestURI().split("/");
        if (url.length == 3 && url[2].equals("search")) {
            Gson gson = new Gson();
            resp.getWriter().print(adCollection.getAllAds().stream().map(gson::toJson).
                    collect(Collectors.joining("\n")));
        }
    }
}