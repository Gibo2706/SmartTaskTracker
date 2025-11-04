package com.example.smarttasktracker.config;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@ConfigurationProperties(prefix = "app")
public class AppProperties {

    private final Security security = new Security();

    @Setter
    private int defaultPageSize = 20;
    @Setter
    private List<String> allowedOrigins;

    public Security getSecurity() {
        return security;
    }

    public int getDefaultPageSize() {
        return defaultPageSize;
    }

    public List<String> getAllowedOrigins() {
        return allowedOrigins;
    }

    @Getter
    public static class Security {
        private final Jwt jwt = new Jwt();

        @Setter
        @Getter
        public static class Jwt {
            private String secret;
            private long expirationMs = 3600000L;

        }
    }
}

