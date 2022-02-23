package com.bettina.moviesbackend.service;

import com.bettina.moviesbackend.UserNotFoundException;
import com.bettina.moviesbackend.model.Genre;
import com.bettina.moviesbackend.model.Person;
import com.bettina.moviesbackend.repository.GenreRepository;
import com.bettina.moviesbackend.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class GenreService {
    private final GenreRepository genreRepository;

    @Autowired
    public GenreService(GenreRepository genreRepository) {
        this.genreRepository = genreRepository;
    }

//    public List<Person> getPersons() {
//        return personRepository.findAll();
//
//    }

    public List<Genre> findAllGenres() {
        return genreRepository.findAll();
    }

//    public  Movie addEmployee(Movie movie) {
//        movie.setEmployeeCode(UUID.randomUUID().toString());
//        return movieRepository.save(movie);
//    }

//    public void addPerson(Person person) {
//        Optional<Person> movieOptional = personRepository.findPersonByName(person.getName());
//        if (movieOptional.isPresent()) {
//            throw new IllegalStateException("movie taken");
//        }
//        personRepository.save(person);
//    }
//
//    public Person updatePerson(Person person) {
//        return personRepository.save(person);
//    }
//
//    public Person findPersonById(Long id) {
//        return personRepository.findPersonById(id)
//                .orElseThrow(() -> new UserNotFoundException("User by id " + id + " was not found"));
//    }
//
//    public void deletePerson(Long id) {
//        personRepository.deletePersonById(id);
//    }
}
