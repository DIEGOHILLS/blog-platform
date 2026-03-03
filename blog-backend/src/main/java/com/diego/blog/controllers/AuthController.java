package com.diego.blog.controllers;

import com.diego.blog.domain.dtos.AuthResponse;
import com.diego.blog.domain.dtos.LoginRequest;
import com.diego.blog.domain.dtos.RegisterRequest;
import com.diego.blog.domain.entities.User;
import com.diego.blog.services.AuthenticationService;
import com.diego.blog.services.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthenticationService authenticationService;
    private final UserService userService;

    @Value("${security.jwt.expires-in:86400}")
    private long expiresIn;

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@Valid @RequestBody LoginRequest loginRequest) {

        UserDetails principal = authenticationService.authenticate(
                loginRequest.getEmail(),
                loginRequest.getPassword()
        );

        String token = authenticationService.generateToken(principal);

        return new ResponseEntity<>(
                AuthResponse.builder()
                        .token(token)
                        .expiresIn(expiresIn)
                        .build(),
                HttpStatus.OK
        );
    }

    @PostMapping("/register")
    public ResponseEntity<AuthResponse> register(@Valid @RequestBody RegisterRequest request) {

        // creates user in DB (with encoded password)
        User created = userService.registerUser(request);

        UserDetails principal = authenticationService.loadUserByEmail(created.getEmail());
        String token = authenticationService.generateToken(principal);

        return new ResponseEntity<>(
                AuthResponse.builder()
                        .token(token)
                        .expiresIn(expiresIn)
                        .build(),
                HttpStatus.CREATED
        );
    }
}