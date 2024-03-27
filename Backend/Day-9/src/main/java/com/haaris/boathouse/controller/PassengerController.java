package com.haaris.boathouse.controller;

import com.haaris.boathouse.model.Passenger;
import com.haaris.boathouse.service.PassengerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import com.haaris.boathouse.constant.Api;
@RequestMapping(Api.AUTH)
@RestController
@CrossOrigin("*")
public class PassengerController {

    @Autowired
    private final PassengerService passengerService;

    public PassengerController(PassengerService passengerService) {
        this.passengerService = passengerService;
    }

    @PostMapping(value="/savepassenger")
    public ResponseEntity<Passenger> savePassenger(@RequestBody Passenger passenger) {
        Passenger savedPassenger = passengerService.savePassenger(passenger);
        return new ResponseEntity<>(savedPassenger, HttpStatus.CREATED);
    }

    @GetMapping(value="/getpassenger")
    public ResponseEntity<List<Passenger>> getAllPassengers() {
        List<Passenger> passengers = passengerService.getAllPassengers();
        return new ResponseEntity<>(passengers, HttpStatus.OK);
    }

    @GetMapping(value="/getpassenger/{id}")
    public ResponseEntity<Passenger> getPassengerById(@PathVariable Long id) {
        Passenger passenger = passengerService.getPassengerById(id);
        if (passenger != null) {
            return new ResponseEntity<>(passenger, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePassengerById(@PathVariable Long id) {
        passengerService.deletePassengerById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
