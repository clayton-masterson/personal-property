package com.claytonmasterson.personal_property.rest;

import com.claytonmasterson.personal_property.domain.AuthenticationBean;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class AuthController {

    @RequestMapping("/api/login")
    public AuthenticationBean helloWorldBean() {
        return new AuthenticationBean("Authenticated");
    }
}
