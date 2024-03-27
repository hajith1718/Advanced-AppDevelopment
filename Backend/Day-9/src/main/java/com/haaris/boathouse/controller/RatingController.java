// package com.haaris.boathouse.controller;

// import com.haaris.boathouse.constant.Api;
// import com.haaris.boathouse.model.Rating;
// import com.haaris.boathouse.service.RatingService;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.*;

// import java.util.List;

// @RequestMapping(Api.AUTH)
// @RestController
// @CrossOrigin("*")
// public class RatingController {

//     @Autowired
//     private final RatingService ratingService;

//     public RatingController(RatingService ratingService) {
//         this.ratingService = ratingService;
//     }

//     @PostMapping("/rate")
//     public ResponseEntity<Rating> saveRating(@RequestBody Rating rating) {
//         Rating savedRating = ratingService.saveRating(rating);
//         return new ResponseEntity<>(savedRating, HttpStatus.CREATED);
//     }

//     @GetMapping("/{id}")
//     public ResponseEntity<Rating> getRatingById(@PathVariable Long id) {
//         Rating rating = ratingService.getRatingById(id);
//         if (rating != null) {
//             return new ResponseEntity<>(rating, HttpStatus.OK);
//         } else {
//             return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//         }
//     }

//     @GetMapping
//     public ResponseEntity<List<Rating>> getAllRatings() {
//         List<Rating> ratings = ratingService.getAllRatings();
//         return new ResponseEntity<>(ratings, HttpStatus.OK);
//     }

//     @PutMapping("/{id}")
//     public ResponseEntity<Rating> updateRating(@PathVariable Long id, @RequestBody Rating updatedRating) {
//         Rating rating = ratingService.getRatingById(id);
//         if (rating != null) {
//             updatedRating.setRatingId(id);
//             Rating savedRating = ratingService.saveRating(updatedRating);
//             return new ResponseEntity<>(savedRating, HttpStatus.OK);
//         } else {
//             return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//         }
//     }

//     // Add more controller methods as needed
// }
