package com.haaris.boathouse.service.impl;

import com.haaris.boathouse.model.Passenger;
import com.haaris.boathouse.repository.PassengerRepository;
import com.haaris.boathouse.service.PassengerService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class PassengerServiceImpl implements PassengerService {

    @Autowired
    private final PassengerRepository passengerRepository;

    public PassengerServiceImpl(PassengerRepository passengerRepository) {
        this.passengerRepository = passengerRepository;
    }

    @Override
    public Passenger savePassenger(Passenger passenger) {
        return passengerRepository.save(passenger);
    }

    @Override
    public List<Passenger> getAllPassengers() {
        return passengerRepository.findAll();
    }

    @Override
    public Passenger getPassengerById(Long id) {
        Optional<Passenger> optionalPassenger = passengerRepository.findById(id);
        return optionalPassenger.orElse(null);
    }

    @Override
    public void deletePassengerById(Long id) {
        passengerRepository.deleteById(id);
    }
    @Override
public Passenger getPassengerWithBoatDetailsById(Long id) {
    Optional<Passenger> optionalPassenger = passengerRepository.findById(id);
    if (optionalPassenger.isPresent()) {
        Passenger passenger = optionalPassenger.get();
        // Load boat details if available
        if (passenger.getBoat() != null) {
            passenger.getBoat().getBoatName(); // Trigger lazy loading if necessary
            // You can load other boat details similarly if needed
        }
        return passenger;
    }
    return null;
}
}
