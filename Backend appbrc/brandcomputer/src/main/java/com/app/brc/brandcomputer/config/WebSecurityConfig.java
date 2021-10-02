package com.app.brc.brandcomputer.config;

import com.app.brc.brandcomputer.login.security.jwt.AuthenticationEntryPointJWT;
import com.app.brc.brandcomputer.login.security.jwt.AuthenticationTokenFilter;
import com.app.brc.brandcomputer.login.services.UserServiceImplement;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.access.hierarchicalroles.RoleHierarchy;
import org.springframework.security.access.hierarchicalroles.RoleHierarchyImpl;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.access.expression.DefaultWebSecurityExpressionHandler;
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
                .expressionHandler(webExpressionHandler())
                .antMatchers("/api/register/**", "/api/login/**")
                .permitAll()
                .antMatchers("/api/motherboard/**").hasAnyRole("USER", "GUEST")
                .antMatchers("/api/powerSource/**").hasAnyRole("USER", "GUEST")
                .antMatchers("/api/fan-case/**").hasAnyRole("USER", "GUEST")
                .antMatchers("/api/cpu-cooler/**").hasAnyRole("USER", "GUEST")
                .antMatchers("/api/sound-card/**").hasAnyRole("USER", "GUEST")
                .antMatchers("/api/memory-ram/**").hasAnyRole("USER", "GUEST")
                .antMatchers("/api/optical-unit/**").hasAnyRole("USER", "GUEST")
                .antMatchers("/api/processor/**").hasAnyRole("USER", "GUEST")
                .antMatchers("/api/video-card/**").hasAnyRole("USER", "GUEST")
                .antMatchers("/api/case/**").hasAnyRole("USER", "GUEST")
                .antMatchers("/api/broken/**").hasAnyRole("USER", "GUEST")
                .antMatchers("/api/computer/**").hasAnyRole("USER", "GUEST")
                .antMatchers("/api/computer-assembly").hasAnyRole("USER", "GUEST")
                .antMatchers("/api/company-data/**").hasAnyRole("USER", "GUEST")
                .antMatchers("/api/providers/**").hasAnyRole("ADMIN", "ACCOUNTANT")
                .antMatchers("/api/product-code/**").hasAnyRole("USER", "ADMIN")
                .antMatchers("/api/storage/**").hasAnyRole("USER", "GUEST")
                .antMatchers("/api/nir/**").hasRole("ADMIN")
                .anyRequest()
                .authenticated();

        http.addFilterBefore(authenticationTokenFilter(), UsernamePasswordAuthenticationFilter.class);
    }

    @Bean
    public RoleHierarchy roleHierarchy() {
        RoleHierarchyImpl roleHierarchy = new RoleHierarchyImpl();
        String hierarchy = "ROLE_ADMIN > ROLE_ACCOUNTANT > ROLE_USER > ROLE_GUEST";
        roleHierarchy.setHierarchy(hierarchy);
        return roleHierarchy;
    }

    public DefaultWebSecurityExpressionHandler webExpressionHandler() {
        DefaultWebSecurityExpressionHandler expressionHandler = new DefaultWebSecurityExpressionHandler();
        expressionHandler.setRoleHierarchy(roleHierarchy());
        return expressionHandler;
    }
}
