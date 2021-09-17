package com.app.brc.brandcomputer.config;

import com.app.brc.brandcomputer.login.security.jwt.AuthenticationEntryPointJWT;
import com.app.brc.brandcomputer.login.security.jwt.AuthenticationTokenFilter;
import com.app.brc.brandcomputer.login.services.UserServiceImplement;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    private UserServiceImplement userServiceImplement;
    private AuthenticationEntryPointJWT authenticationEntryPointJWT;

    @Autowired
    public WebSecurityConfig(UserServiceImplement userServiceImplement, AuthenticationEntryPointJWT authenticationEntryPointJWT) {
        this.userServiceImplement = userServiceImplement;
        this.authenticationEntryPointJWT = authenticationEntryPointJWT;
    }

    @Bean
    public AuthenticationTokenFilter authenticationTokenFilter() {
        return new AuthenticationTokenFilter();
    }

    @Override
    protected void configure(AuthenticationManagerBuilder authenticationManagerBuilder) throws Exception {
        authenticationManagerBuilder.userDetailsService(userServiceImplement).passwordEncoder(passwordEncoder());
    }

    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.cors()
                .and()
                .csrf()
                .disable()
                .exceptionHandling()
                .authenticationEntryPoint(authenticationEntryPointJWT)
                .and()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .authorizeRequests()
                .antMatchers("/api/register/**", "/api/login/**", "/api/nir/**", "/api/product-code")
                .permitAll()
                .antMatchers(
                        "/api/motherboard/**",
                        "/api/powerSource/**",
                        "/api/fan-case/**",
                        "/api/cpu-cooler/**",
                        "/api/sound-card/**",
                        "/api/memory-ram/**",
                        "/api/optical-unit/**",
                        "/api/processor/**",
                        "/api/storage/**",
                        "/api/video-card/**",
                        "/api/case/**",
                        "/api/broken/**",
                        "/api/computer/**",
                        "/api/computer-assembly",
                        "/api/company-data/**",
                        "/api/providers/**",
                        "/api/generate-product-code-case/**",
                        "/api/generate-product-code-fan-case/**",
                        "/api/generate-product-code-cpu-cooler/**",
                        "/api/generate-product-code-power-source/**",
                        "/api/generate-product-code-motherboard/**",
                        "/api/generate-product-code-sound-card/**",
                        "/api/generate-product-code-memory-ram/**",
                        "/api/generate-product-code-optical-unit/**",
                        "/api/generate-product-code-processor/**",
                        "/api/generate-product-code-storage/**",
                        "/api/generate-product-code-computer/**",
                        "/api/generate-product-code-video-card/**").hasAnyRole("USER", "ADMIN")
                .anyRequest()
                .authenticated();

        http.addFilterBefore(authenticationTokenFilter(), UsernamePasswordAuthenticationFilter.class);
    }
}
