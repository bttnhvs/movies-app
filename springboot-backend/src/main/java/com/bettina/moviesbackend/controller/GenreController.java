package com.bettina.moviesbackend.controller;

import com.bettina.moviesbackend.model.Genre;
import com.bettina.moviesbackend.model.Person;
import com.bettina.moviesbackend.service.GenreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.List;

@RestController

@RequestMapping(path = "api/v1/genre")
public class GenreController {

    private final GenreService genreService;

    @Autowired
    public GenreController(GenreService genreService) {
        this.genreService = genreService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Genre>> getAllGenres() {
        List<Genre> genres = genreService.findAllGenres();
        return new ResponseEntity<>(genres, HttpStatus.OK);
    }
//
//    @GetMapping("/find/{id}")
//    public ResponseEntity<Person> getPersonById (@PathVariable("id") Long id) {
//        Person person = personService.findPersonById(id);
//        return new ResponseEntity<>(person, HttpStatus.OK);
//    }
//
//    @PostMapping("/add")
//    public void addPerson(@RequestBody Person person) {
//        //        Movie newMovie = movieService.addMovie(movie);
//        //        return new ResponseEntity<>(newMovie, HttpStatus.CREATED);
//        personService.addPerson(person);
//    }
//
//    @PutMapping("/update")
//    public ResponseEntity<Person> updatePerson(@RequestBody Person person) {
//        Person updatePerson = personService.updatePerson(person);
//        return new ResponseEntity<>(updatePerson, HttpStatus.OK);
//    }
//    @Transactional
//    @DeleteMapping("/delete/{id}")
//    public ResponseEntity<?> deletePerson(@PathVariable("id") Long id) {
//        personService.deletePerson(id);
//        return new ResponseEntity<>(HttpStatus.OK);
//    }
}
