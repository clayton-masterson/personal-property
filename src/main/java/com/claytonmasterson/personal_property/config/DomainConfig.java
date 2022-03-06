package com.claytonmasterson.personal_property.config;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.transaction.annotation.EnableTransactionManagement;


@Configuration
@EntityScan("com.claytonmasterson.personal_property.domain")
@EnableJpaRepositories("com.claytonmasterson.personal_property.repos")
@EnableTransactionManagement
public class DomainConfig {
}