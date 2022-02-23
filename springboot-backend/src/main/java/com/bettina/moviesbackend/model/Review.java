//package com.bettina.moviesbackend.model;
//
//import javax.persistence.*;
//import java.time.LocalDate;
//
//@Entity
//@Table(name ="review")
//public class Review {
//    @Id
//    @GeneratedValue(strategy = GenerationType.AUTO)
////    @Column(nullable = false, updatable = false)
//    private Long id;
//    private String review;
//    @Column(name = "user_id")
//    private Long userId;
//    @Column(name = "movie_id")
//    private Long movieId;
//
//    public Review() {
//    }
//
//    public Review(Long id, String review, Long userId, Long movieId) {
//        this.id = id;
//        this.review = review;
//        this.userId = userId;
//        this.movieId = movieId;
//    }
//
//    public Long getId() {
//        return id;
//    }
//
//    public String getReview() {
//        return review;
//    }
//
//    public Long getUserId() {
//        return userId;
//    }
//
//    public Long getMovieId() {
//        return movieId;
//    }
//
//    public void setId(Long id) {
//        this.id = id;
//    }
//
//    public void setReview(String review) {
//        this.review = review;
//    }
//
//    public void setUserId(Long userId) {
//        this.userId = userId;
//    }
//
//    public void setMovieId(Long movieId) {
//        this.movieId = movieId;
//    }
//
//    @Override
//    public String toString() {
//        return "Review{" +
//                "id=" + id +
//                ", review='" + review + '\'' +
//                ", userId=" + userId +
//                ", movieId=" + movieId +
//                '}';
//    }
//}
