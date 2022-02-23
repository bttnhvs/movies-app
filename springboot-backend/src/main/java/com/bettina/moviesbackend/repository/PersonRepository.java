package com.bettina.moviesbackend.repository;

import com.bettina.moviesbackend.model.Movie;
import com.bettina.moviesbackend.model.Person;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PersonRepository extends JpaRepository<Person, Long> {
    // @Query("SELECT p FROM Person p WHERE p.id = ?1")
    //  Optional<Movie> findStudentByName(String name);
    Optional<Person> findPersonByName(String name);
    void deletePersonById(Long id);
    Optional<Person> findPersonById(Long id);
}


