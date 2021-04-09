package com.bsu.testing;

import javax.servlet.*;
import javax.servlet.http.*;
import java.io.IOException;

public class SecondTest extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        RequestDispatcher view = request.getRequestDispatcher("/WEB-INF/page.html");
        view.forward(request, response);
    }

}