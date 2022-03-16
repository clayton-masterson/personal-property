package com.claytonmasterson.personal_property.rest;

import com.claytonmasterson.personal_property.domain.AuthenticationBean;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/api")
public class AuthController {

    @GetMapping(path = "/login")
    public AuthenticationBean helloWorldBean() {
        return new AuthenticationBean("Authenticated");
    }
}
