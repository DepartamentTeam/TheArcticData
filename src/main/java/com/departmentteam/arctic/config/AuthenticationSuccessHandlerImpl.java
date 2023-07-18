package com.departmentteam.arctic.config;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;

import java.io.IOException;
import java.util.Set;

public class AuthenticationSuccessHandlerImpl implements AuthenticationSuccessHandler {
    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
                                        Authentication authentication) throws IOException, ServletException {
        String redirectURL = request.getContextPath();
        Set<String> roles = AuthorityUtils.authorityListToSet(authentication.getAuthorities());
        //if (roles.contains("ROLE_ADMIN")) {
        //    redirectURL = "/admin";
        //} else{
        //    redirectURL = "/welcome";
        //}
        System.out.println(redirectURL);
        for (String role : roles) {
            System.out.println(role);
        }
        response.sendRedirect(redirectURL);
    }
}
