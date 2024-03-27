package com.haaris.boathouse.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name="boatdetails")
public class Boat {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="boat_id")
    private int boatId;

    @Column(name = "from_location")
    private String from;

    @Column(name = "check_in")
    private String check;

    @Column(name = "check_out")
    private String checkOut;

    @Column(name = "number_of_rooms")
    private int rooms;

    @Column(name = "boat_name")
    private String boatName;

    @Column(name = "fare")
    private double fare;

    @Column(name = "boat_class")
    private String boatClass;

    @OneToMany(mappedBy = "boat", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Passenger> passengers;

    // @OneToMany(mappedBy = "boat", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    // private List<Rating> ratings;

    public Boat() {
        super();
    }

    public Boat(int boatId, String from, String check, String checkOut, int rooms, String boatName, double fare, String boatClass) {
        this.boatId = boatId;
        this.from = from;
        this.check = check;
        this.checkOut = checkOut;
        this.rooms = rooms;
        this.boatName = boatName;
        this.fare = fare;
        this.boatClass = boatClass;
    }

    public int getBoatId() {
        return boatId;
    }

    public void setBoatId(int boatId) {
        this.boatId = boatId;
    }

    public String getFrom() {
        return from;
    }

    public void setFrom(String from) {
        this.from = from;
    }

    public String getCheck() {
        return check;
    }

    public void setCheckIn(String check) {
        this.check = check;
    }

    public String getCheckOut() {
        return checkOut;
    }

    public void setCheckOut(String checkOut) {
        this.checkOut = checkOut;
    }

    public int getRooms() {
        return rooms;
    }

    public void setRooms(int rooms) {
        this.rooms = rooms;
    }

    public String getBoatName() {
        return boatName;
    }

    public void setBoatName(String boatName) {
        this.boatName = boatName;
    }

    public double getFare() {
        return fare;
    }

    public void setFare(double fare) {
        this.fare = fare;
    }

    public String getBoatClass() {
        return boatClass;
    }

    public void setBoatClass(String boatClass) {
        this.boatClass = boatClass;
    }

    public List<Passenger> getPassengers() {
        return passengers;
    }

    public void setPassengers(List<Passenger> passengers) {
        this.passengers = passengers;
    }

    // public List<Rating> getRatings() {
    //     return ratings;
    // }

    // public void setRatings(List<Rating> ratings) {
    //     this.ratings = ratings;
    // }
}
