package com.haaris.boathouse.service.impl;

import static com.haaris.boathouse.enumerated.Role.*;

import java.util.Optional;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.haaris.boathouse.dto.request.RegisterRequest;
import com.haaris.boathouse.model.User;
import com.haaris.boathouse.repository.UserRepository;
import com.haaris.boathouse.service.SuperAdminService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@SuppressWarnings("null")
public class SuperAdminServiceImpl implements SuperAdminService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public String registerAdmin(RegisterRequest registerRequest) {
        Optional<User> userExist = userRepository.findByEmail(registerRequest.getEmail());
        if (userExist.isPresent()) {
            return "Admin already exists with email id " + registerRequest.getEmail();
        }
        var user = User.builder().name(registerRequest.getName()).email(registerRequest.getEmail())
                .password(passwordEncoder.encode(registerRequest.getPassword()))
                .phoneNumber(registerRequest.getPhoneNumber()).role(ADMIN).active(true).build();
        userRepository.save(user);
        return "Admin registered successfully.";
    }
}
