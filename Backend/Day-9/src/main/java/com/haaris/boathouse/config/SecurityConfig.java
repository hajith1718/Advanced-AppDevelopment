package com.haaris.boathouse.config;

import static org.springframework.http.HttpHeaders.*;
import static org.springframework.http.HttpMethod.*;
import static org.springframework.security.config.http.SessionCreationPolicy.*;

import java.util.Arrays;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import com.haaris.boathouse.constant.Api;

import lombok.RequiredArgsConstructor;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity
@RequiredArgsConstructor
public class SecurityConfig {

        private final AuthenticationProvider authenticationProvider;
        private final JwtAuthenticationFilter jwtAuthenticationFilter;
        // private final LogoutHandler logoutHandler;

        private static final String[] WHITELIST = {
                        "/api/v1/auth/**",
                        "/saveboat",  // Add BoatController paths here
                        "/getboats",
                        "/getboat/**",
                        "/updateboat/**",
                        "/deleteboat",
                        "/v3/api-docs/**",
                        "/swagger-ui/**",
                        "/swagger-ui.html/",
                        "/swagger-resources",
                        "/swagger-resources/**"
        };

        @Bean
        public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {
                return httpSecurity
                                .csrf(AbstractHttpConfigurer::disable)
                                .authorizeHttpRequests(authorize-> authorize
                                .requestMatchers(Api.AUTH+"/**").permitAll())
                                .cors(cors -> cors.configurationSource(corsConfigurationSource()))
                                .authorizeHttpRequests(
                                                authorize -> authorize.requestMatchers(WHITELIST).permitAll()
                                                                .anyRequest().authenticated())
                                .sessionManagement(session -> session.sessionCreationPolicy(STATELESS))
                                .authenticationProvider(authenticationProvider)
                                .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class)
                                // .logout(logout ->
                                // logout.logoutUrl("/api/v1/auth/logout").addLogoutHandler(logoutHandler)
                                // .logoutSuccessHandler(
                                // (request, response, authenticated) -> SecurityContextHolder.clearContext()))
                                .build();
        }

        @Bean
        public CorsConfigurationSource corsConfigurationSource() {
                CorsConfiguration corsConfiguration = new CorsConfiguration();
                corsConfiguration.setAllowedOrigins(Arrays.asList("http://localhost:4000", "http://localhost:5173"));
                corsConfiguration.setAllowedHeaders(Arrays.asList(AUTHORIZATION, CONTENT_TYPE));
                corsConfiguration.setAllowedMethods(
                                Arrays.asList(GET.name(), POST.name(), PUT.name(), PATCH.name(), DELETE.name(),
                                                HEAD.name(),
                                                OPTIONS.name()));
                corsConfiguration.setAllowCredentials(true);
                UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
                source.registerCorsConfiguration("/**", corsConfiguration);
                return source;
        }
}
