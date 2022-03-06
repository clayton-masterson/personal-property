package com.claytonmasterson.personal_property;

import com.claytonmasterson.personal_property.repos.InsuredItemRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;


@SpringBootApplication
public class PersonalPropertyApplication {

    public static void main(String[] args) {
        SpringApplication.run(PersonalPropertyApplication.class, args);
    }

    @Bean
    public WebMvcConfigurer configurer(){
        return new WebMvcConfigurer(){
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/*")
                        .allowedOrigins("*");
            }
        };
    }

}
