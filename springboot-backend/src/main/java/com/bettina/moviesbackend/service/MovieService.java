package com.bettina.moviesbackend.service;

import com.bettina.moviesbackend.model.Movie;
import com.bettina.moviesbackend.repository.MovieRepository;
import com.bettina.moviesbackend.UserNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MovieService {
    private final MovieRepository movieRepository;

    @Autowired
    public MovieService(MovieRepository movieRepository){
        this.movieRepository = movieRepository;
    }

//    public List<Movie> getMovies() {
//        return movieRepository.findAll();
//    }


//
//    public Movie updateMovie(Movie movie) {
//        return movieRepository.save(movie);
//    }
//
//    public Movie findMovieById(Long id) {
//        return movieRepository.findMovieById(id).orElseThrow(()-> new MovieNotFoundException("Movie by id was not found"));
//    }
//
//    public void deleteMovie(Long id){
//
////        boolean exists = movieRepository.existsById(movieId);
////        if (!exists){
////            throw  new IllegalStateException("movie with id " + movieId + "does not exists");
////        }
//        movieRepository.deleteMovieById(id);
//    }
//}

//    public Movie addMovie(Movie movie) {
//        //movie.setEmployCode(UUID.randomUUID().toString());
////        return movieRepository.save(movie);
//        Optional<Movie> movieOptional = movieRepository.findMovieByName(movie.getName());
//        if (movieOptional.isPresent()) {
//            throw new IllegalStateException("movie taken");
//        }
//        movieRepository.save(movie);
//    }

    public List<Movie> findAllMovies() {
        return movieRepository.findAll();
    }

//    public  Movie addEmployee(Movie movie) {
//        movie.setEmployeeCode(UUID.randomUUID().toString());
//        return movieRepository.save(movie);
//    }

    public void addMovie(Movie movie) {
        Optional<Movie> movieOptional = movieRepository.findMovieByName(movie.getName());
        if (movieOptional.isPresent()) {
            throw new IllegalStateException("movie taken");
        }
        movieRepository.save(movie);
    }

    public Movie updateMovie(Movie movie) {
        return movieRepository.save(movie);
    }

    public Movie findMovieById(Long id) {
        return movieRepository.findMovieById(id)
                .orElseThrow(() -> new UserNotFoundException("User by id " + id + " was not found"));
    }

    public void deleteMovie(Long id){
        movieRepository.deleteMovieById(id);
    }
}
