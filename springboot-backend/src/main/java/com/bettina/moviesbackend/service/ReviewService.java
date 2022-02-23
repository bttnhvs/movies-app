//package com.bettina.moviesbackend.service;
//
//import com.bettina.moviesbackend.model.Review;
//import com.bettina.moviesbackend.repository.ReviewRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//
//
//@Service
//public class ReviewService {
//    private final ReviewRepository reviewRepository;
//
//    @Autowired
//    public ReviewService(ReviewRepository reviewRepository) {
//        this.reviewRepository = reviewRepository;
//    }
//
//    public List<Review> findAllReviews() {
//        return reviewRepository.findAll();
//    }
//}
