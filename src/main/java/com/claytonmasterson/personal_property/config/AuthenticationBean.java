package com.claytonmasterson.personal_property.config;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AuthenticationBean {

    private String message;

    public AuthenticationBean(String message) {
        this.message = message;
    }
}
