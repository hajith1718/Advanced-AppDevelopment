package com.haaris.boathouse.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.haaris.boathouse.model.Boat;

public interface BoatRepository extends JpaRepository<Boat,Integer>{
	

    List<Boat> findByFromAndCheckAndCheckOutAndRooms(String from, String check, String checkOut, int rooms);
    List<Boat> findByFareBetween(double minFare, double maxFare);
    List<Boat> findByOrderByFareAsc();
List<Boat> findByOrderByFareDesc();
List<Boat> findByBoatClass(String boatClass);

            

}
