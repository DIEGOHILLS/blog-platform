package com.diego.blog.services;

import com.diego.blog.domain.dtos.RegisterRequest;
import com.diego.blog.domain.entities.User;

import java.util.UUID;

public interface UserService {

    User getUserById(UUID id);

    User registerUser(RegisterRequest request);
}