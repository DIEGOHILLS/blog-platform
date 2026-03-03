package com.diego.blog.config;

import io.github.cdimascio.dotenv.Dotenv;
import jakarta.annotation.PostConstruct;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DotenvConfig {

    @PostConstruct
    void loadDotenvIntoSystemProperties() {
        Dotenv dotenv = Dotenv.configure()
                .ignoreIfMissing()
                .load();

        dotenv.entries().forEach(e -> {
                if (System.getProperty(e.getKey()) == null && System.getenv(e.getKey()) == null) {
                System.setProperty(e.getKey(), e.getValue());
            }
        });
    }
}
