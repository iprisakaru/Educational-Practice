package com.bsu;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

public class StatusServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        PrintWriter wr = response.getWriter();
        wr.println("<html>");
        wr.println("<head><title>Title</title></head>");
        wr.println("<h1>Application Is Running</h1>");
        wr.println("</html>");
    }

}