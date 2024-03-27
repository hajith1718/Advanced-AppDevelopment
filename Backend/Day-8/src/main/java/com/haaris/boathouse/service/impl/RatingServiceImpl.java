// package com.haaris.boathouse.service.impl;

// import com.haaris.boathouse.model.Rating;
// import com.haaris.boathouse.repository.RatingRepository;
// import com.haaris.boathouse.service.RatingService;

// import java.util.List;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// @Service
// public class RatingServiceImpl implements RatingService {

//     private final RatingRepository ratingRepository;

//     @Autowired
//     public RatingServiceImpl(RatingRepository ratingRepository) {
//         this.ratingRepository = ratingRepository;
//     }

//     @Override
//     public Rating saveRating(Rating rating) {
//         return ratingRepository.save(rating);
//     }

//     @Override
//     public Rating getRatingById(Long id) {
//         // TODO Auto-generated method stub
//         throw new UnsupportedOperationException("Unimplemented method 'getRatingById'");
//     }

//     @Override
//     public List<Rating> getAllRatings() {
//         // TODO Auto-generated method stub
//         throw new UnsupportedOperationException("Unimplemented method 'getAllRatings'");
//     }

//     // Implement more service methods if needed
// }
