package com.haaris.boathouse.service;

import com.haaris.boathouse.dto.request.LoginRequest;
import com.haaris.boathouse.dto.request.RegisterRequest;
import com.haaris.boathouse.dto.response.LoginResponse;

public interface AuthenticationService {

    String register(RegisterRequest registerRequest);

    LoginResponse login(LoginRequest loginRequest);

}
