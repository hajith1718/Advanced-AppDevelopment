package com.haaris.boathouse.service;

import com.haaris.boathouse.model.Passenger;
import java.util.List;

public interface PassengerService {
    Passenger savePassenger(Passenger passenger);

    List<Passenger> getAllPassengers();

    Passenger getPassengerById(Long id);

    void deletePassengerById(Long id);

    Passenger getPassengerWithBoatDetailsById(Long id);

}
