package com.bettina.moviesbackend.controller;
import com.bettina.moviesbackend.model.Person;
import com.bettina.moviesbackend.service.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.List;

@RestController

@CrossOrigin(origins = "*")
@RequestMapping(path = "api/v1/person")
public class PersonController {

    private final PersonService personService;

    @Autowired
    public PersonController(PersonService personService) {
        this.personService = personService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Person>> getAllPersons() {
        List<Person> persons = personService.findAllPersons();
        return new ResponseEntity<>(persons, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Person> getPersonById (@PathVariable("id") Long id) {
        Person person = personService.findPersonById(id);
        return new ResponseEntity<>(person, HttpStatus.OK);
    }

    @PostMapping("/add")
    public void addPerson(@RequestBody Person person) {
        //        Movie newMovie = movieService.addMovie(movie);
        //        return new ResponseEntity<>(newMovie, HttpStatus.CREATED);
        personService.addPerson(person);
    }

    @PutMapping("/update")
    public ResponseEntity<Person> updatePerson(@RequestBody Person person) {
        Person updatePerson = personService.updatePerson(person);
        return new ResponseEntity<>(updatePerson, HttpStatus.OK);
    }
    @Transactional

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deletePerson(@PathVariable("id") Long id) {
        personService.deletePerson(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}

//        @GetMapping
//            public ResponseEntity<List<Person>> getAllPersons () {
//                List<Person> persons = personService.findAllPersons();
//                return new ResponseEntity<>(persons, HttpStatus.OK);
//            }
//
//        @GetMapping("/person/{id}")
//        public ResponseEntity<Person> getPersonById (@PathVariable("id") Long id) {
//            Person person = personService.findPersonById(id);
//            return new ResponseEntity<>(person, HttpStatus.OK);
//        }

//        @PostMapping
//        public void registerNewMovie(@RequestBody Movie movie) {
//            movieService.addNewMovie(movie);
//        }
//
//        @DeleteMapping(path = "{movieId}")
//        public void deleteMovie(@PathVariable("movieId") Long movieId){
//            movieService.deleteMovie(movieId);
//        }

