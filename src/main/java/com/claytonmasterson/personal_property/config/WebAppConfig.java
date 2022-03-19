package com.claytonmasterson.personal_property.config;

import org.springframework.boot.web.server.ConfigurableWebServerFactory;
import org.springframework.boot.web.server.ErrorPage;
import org.springframework.boot.web.server.WebServerFactoryCustomizer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * This class redirects 404/NOT_FOUND requests back to the home page.
 */

@Configuration
public class WebAppConfig implements WebMvcConfigurer {

    /**
     * This method redirects the 404/NOT_FOUND error pages to a /notFound path.
     */
    @Bean
    public WebServerFactoryCustomizer<ConfigurableWebServerFactory> containerCustomizer() {
        return container -> container.addErrorPages(new ErrorPage(HttpStatus.NOT_FOUND, "/notFound"));
    }

    /**
     * This method redirects anything at /notFound back to /index.html, which
     * will serve the root of our Angular app.
     */
    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addRedirectViewController("/notFound", "/index.html");
    }
}
