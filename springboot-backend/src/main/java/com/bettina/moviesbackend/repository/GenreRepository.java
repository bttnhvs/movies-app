package com.bettina.moviesbackend.repository;
import com.bettina.moviesbackend.model.Genre;
import com.bettina.moviesbackend.model.Person;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface GenreRepository extends JpaRepository<Genre, Long> {
    // @Query("SELECT p FROM Person p WHERE p.id = ?1")
    //  Optional<Movie> findStudentByName(String name);
    Optional<Genre> findGenreByName(String name);
    void deleteGenreById(Long id);
    Optional<Genre> findGenreById(Long id);
}
