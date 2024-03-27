package com.haaris.boathouse.repository;

import com.haaris.boathouse.model.Passenger;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PassengerRepository extends JpaRepository<Passenger, Long> {
    // Define custom query methods if needed
}
