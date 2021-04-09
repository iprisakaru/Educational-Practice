package com.bsu;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class NameServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException{
        String params = req.getParameter("name");
        if (params.length() <=100) {
            resp.getWriter().println("Name is " + params);
        }
    }
}