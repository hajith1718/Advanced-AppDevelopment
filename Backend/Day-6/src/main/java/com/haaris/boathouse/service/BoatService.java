package com.haaris.boathouse.service;

import java.util.List;

import com.haaris.boathouse.model.Boat;

public interface BoatService {
    public Boat saveBoat(Boat boat);
    public Boat updateBoat(int id, Boat boat);
    public List<Boat> getAllBoats();
    public void deleteBoat(int id);
    public Boat findById(int id);
    List<Boat> findByFromAndCheckAndCheckOutAndRooms(String from, String check, String checkOut, int rooms);
    List<Boat> findBoatsInFareRange(double minFare, double maxFare);
    List<Boat> findBoatsByLowToHighFare();
List<Boat> findBoatsByHighToLowFare();
List<Boat> findBoatsByClass(String boatClass);


}
