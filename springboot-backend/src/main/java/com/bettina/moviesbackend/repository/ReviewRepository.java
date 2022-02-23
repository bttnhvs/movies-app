//package com.bettina.moviesbackend.repository;
//import com.bettina.moviesbackend.model.Review;
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.stereotype.Repository;
//
//import java.util.Optional;
//
//@Repository
//public interface ReviewRepository extends JpaRepository<Review, Long> {
//    // @Query("SELECT p FROM Person p WHERE p.id = ?1")
//    //  Optional<Movie> findStudentByName(String name);
//    Optional<Review> findGenreByName(String name);
//    void deleteGenreById(Long id);
//    Optional<Review> findGenreById(Long id);
//}
