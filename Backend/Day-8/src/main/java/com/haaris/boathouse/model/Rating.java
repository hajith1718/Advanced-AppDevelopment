// package com.haaris.boathouse.model;

// import jakarta.persistence.*;

// @Entity
// @Table(name = "ratings")
// public class Rating {
//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     @Column(name = "rating_id")
//     private Long ratingId;

//     @Column(name = "rating_value")
//     private int ratingValue;

//     @Column(name = "review")
//     private String review;

//     @ManyToOne(fetch = FetchType.LAZY)
//     @JoinColumn(name = "boat_id")
//     private Boat boat;

//     @ManyToOne(fetch = FetchType.LAZY)
//     @JoinColumn(name = "user_id")
//     private User user;

//     // Constructors, getters, and setters...

//     public Rating() {
//     }

//     public Rating(int ratingValue, String review, Boat boat, User user) {
//         this.ratingValue = ratingValue;
//         this.review = review;
//         this.boat = boat;
//         this.user = user;
//     }

//     public Long getRatingId() {
//         return ratingId;
//     }

//     public void setRatingId(Long ratingId) {
//         this.ratingId = ratingId;
//     }

//     public int getRatingValue() {
//         return ratingValue;
//     }

//     public void setRatingValue(int ratingValue) {
//         this.ratingValue = ratingValue;
//     }

//     public String getReview() {
//         return review;
//     }

//     public void setReview(String review) {
//         this.review = review;
//     }

//     public Boat getBoat() {
//         return boat;
//     }

//     public void setBoat(Boat boat) {
//         this.boat = boat;
//     }

//     public User getUser() {
//         return user;
//     }

//     public void setUser(User user) {
//         this.user = user;
//     }
// }
