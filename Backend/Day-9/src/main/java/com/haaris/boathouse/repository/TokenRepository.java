package com.haaris.boathouse.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.haaris.boathouse.model.Token;

public interface TokenRepository extends JpaRepository<Token, String> {
    List<Token> findAllByUser_IdAndExpiredFalseAndRevokedFalse(String email);

    Optional<Token> findByToken(String token);
}
