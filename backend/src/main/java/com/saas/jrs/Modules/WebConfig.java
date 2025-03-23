package com.saas.jrs.Modules;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import java.net.InetAddress;
import java.net.UnknownHostException;


@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(@SuppressWarnings("null") CorsRegistry registry) {
        try {
            String localIp = InetAddress.getLocalHost().getHostAddress();
            registry.addMapping("/**")
                .allowedOrigins("http://localhost:3000", "http://" + localIp + ":3000") // Adicione o domínio do seu frontend
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                .allowedHeaders("*")
                .allowCredentials(true);
        } catch (UnknownHostException e ) {
            e.printStackTrace();
        }
    }
}
