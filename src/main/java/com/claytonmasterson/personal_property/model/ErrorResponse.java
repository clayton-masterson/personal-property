package com.claytonmasterson.personal_property.model;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

/**
 * This is boilerplate code generated by Bootify.io
 */

@Getter
@Setter
public class ErrorResponse {

    private Integer httpStatus;
    private String exception;
    private String message;
    private List<FieldError> fieldErrors;

}
