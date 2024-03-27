package com.haaris.boathouse.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.haaris.boathouse.constant.Api;
import com.haaris.boathouse.model.Boat;
import com.haaris.boathouse.model.Passenger;
import com.haaris.boathouse.service.BoatService;
@RequestMapping(Api.AUTH)
@RestController
@CrossOrigin("*")
public class BoatController {

    @Autowired
    private BoatService boatService;

    @PostMapping(value="/saveboat")
public Boat saveBoat(@RequestBody Boat boat) {
    System.out.println("Boat details saved successfully");
    Boat savedBoat = boatService.saveBoat(boat); // Save the boat first to obtain its ID

    // Iterate through each passenger in the boat and set the boat for each passenger
    List<Passenger> passengers = savedBoat.getPassengers();
    if (passengers != null) {
        for (Passenger passenger : passengers) {
            passenger.setBoat(savedBoat);
        }
    }

    // Save the passengers with their associated boat
    savedBoat.setPassengers(passengers);
    return boatService.saveBoat(savedBoat);
}

    

    @GetMapping(value="/getboats")
    public List<Boat> getAllBoats() {
        return boatService.getAllBoats();
    }

    @GetMapping(value="/getboat/{id}")
    public Boat getBoatById(@PathVariable int id) {
        return boatService.findById(id);
    }

    @PutMapping("/updateboat/{id}")
    public Boat updateBoat(@PathVariable int id, @RequestBody Boat boat) {
        return boatService.updateBoat(id, boat);
    }

    @DeleteMapping("/deleteboat")
    public String deleteBoat(@RequestParam int id) {
        boatService.deleteBoat(id);
        return "Boat deleted successfully";
    }
    @GetMapping("/getboat/{from}/{checkIn}/{checkOut}/{rooms}")
public List<Boat> findByFromAndCheckAndCheckOutAndRooms(
        @PathVariable String from,
        @PathVariable String checkIn,
        @PathVariable String checkOut,
        @PathVariable int rooms) {
    return boatService.findByFromAndCheckAndCheckOutAndRooms(from, checkIn, checkOut, rooms);
}

@GetMapping("/boats/{minFare}/{maxFare}")
public List<Boat> findBoatsInFareRange(@PathVariable double minFare, @PathVariable double maxFare) {
    return boatService.findBoatsInFareRange(minFare, maxFare);
}
@GetMapping("/boats/lowtohigh")
public List<Boat> findBoatsByLowToHighFare() {
    return boatService.findBoatsByLowToHighFare();
}

@GetMapping("/boats/hightolow")
public List<Boat> findBoatsByHighToLowFare() {
    return boatService.findBoatsByHighToLowFare();
}
@GetMapping("/boats/class/{boatClass}")
public List<Boat> findBoatsByClass(@PathVariable String boatClass) {
    return boatService.findBoatsByClass(boatClass);
}
}
