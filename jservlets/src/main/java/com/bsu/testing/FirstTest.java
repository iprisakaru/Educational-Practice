package com.bsu.testing;

import javax.servlet.*;
import javax.servlet.http.*;
import java.io.IOException;

public class FirstTest extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.sendRedirect("http://localhost:8080/status");
    }

}
