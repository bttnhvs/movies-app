package com.bettina.moviesbackend.service;
import com.bettina.moviesbackend.UserNotFoundException;
import com.bettina.moviesbackend.model.Movie;
import com.bettina.moviesbackend.model.Person;
import com.bettina.moviesbackend.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PersonService {
    private final PersonRepository personRepository;

    @Autowired
    public PersonService(PersonRepository personRepository){
        this.personRepository = personRepository;
    }

//    public List<Person> getPersons() {
//        return personRepository.findAll();
//
//    }

    public List<Person> findAllPersons() {
        return personRepository.findAll();
    }

//    public  Movie addEmployee(Movie movie) {
//        movie.setEmployeeCode(UUID.randomUUID().toString());
//        return movieRepository.save(movie);
//    }

    public void addPerson(Person person) {
        Optional<Person> movieOptional = personRepository.findPersonByName(person.getName());
        if (movieOptional.isPresent()) {
            throw new IllegalStateException("movie taken");
        }
        personRepository.save(person);
    }

    public Person updatePerson(Person person) {
        return personRepository.save(person);
    }

    public Person findPersonById(Long id) {
        return personRepository.findPersonById(id)
                .orElseThrow(() -> new UserNotFoundException("User by id " + id + " was not found"));
    }

    public void deletePerson(Long id){
        personRepository.deletePersonById(id);
    }


//    public List<Person> findAllPersons() {
//        return personRepository.findAll();
//    }

//    public List<Person> getPerson() {
//        return personRepository.findAll();
//
//    }
//
//    public Person findPersonById(Long id) {
//        return personRepository.findPersonById(id)
//                .orElseThrow(() -> new UserNotFoundException("User by id was not found"));
//    }

//    public void addNewMovie(Movie movie) {
//        Optional<Movie> movieOptional = movieRepository
//                .findMovieByEmail(movie.getEmail());
//        if (movieOptional.isPresent()) {
//            throw new IllegalStateException("email taken");
//        }
//        movieRepository.save(movie);
//    }

//    public void deleteMovie(Long movieId){
//
//        boolean exists = movieRepository.existsById(movieId);
//        if (!exists){
//            throw  new IllegalStateException("movie with id " + movieId + "does not exists");
//        }
//        movieRepository.deleteById(movieId);
//    }
}
