package com.haaris.boathouse.config;

import static com.haaris.boathouse.enumerated.Role.*;

import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.haaris.boathouse.model.User;
import com.haaris.boathouse.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@SuppressWarnings("null")
public class UserCli implements CommandLineRunner {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) throws Exception {
        if (userRepository.count() > 0)
            return;
        var superadmin = User.builder().name("Haaris").email("haaris@gmail.com")
                .password(passwordEncoder.encode("haaris")).phoneNumber("6380544882").role(SUPERADMIN).active(true)
                .build();
        userRepository.save(superadmin);
    }

}
