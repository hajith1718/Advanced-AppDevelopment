package com.haaris.boathouse.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.haaris.boathouse.model.User;

public interface UserRepository extends JpaRepository<User, String> {
    Optional<User> findByEmail(String email);
}
