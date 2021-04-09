package com.bsu;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;


public class CheckServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws IOException{
        resp.setContentType("application/json");
        String response = "{\"success\":true}";
        resp.getWriter().println(response);
    }
}