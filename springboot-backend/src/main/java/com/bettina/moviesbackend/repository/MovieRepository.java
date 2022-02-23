package com.bettina.moviesbackend.repository;

import com.bettina.moviesbackend.model.Movie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Long> {
    // @Query("SELECT s FROM Movie s WHERE s.id = ?1")
    Optional<Movie> findMovieByName(String name);
    void deleteMovieById(Long id);

    Optional<Movie> findMovieById(Long id);
}


