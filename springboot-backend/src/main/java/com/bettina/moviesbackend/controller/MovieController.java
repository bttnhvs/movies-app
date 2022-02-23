package com.bettina.moviesbackend.controller;

import com.bettina.moviesbackend.model.Movie;
import com.bettina.moviesbackend.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.List;

@RestController

@RequestMapping(path = "api/v1/movie")
public class MovieController {

        private final MovieService movieService;

        @Autowired
        public MovieController(MovieService movieService) {
            this.movieService = movieService;
        }

        @GetMapping("/all")
        public ResponseEntity<List<Movie>> getAllMovies () {
            List<Movie> movies = movieService.findAllMovies();
            return new ResponseEntity<>(movies, HttpStatus.OK);
        }

        @GetMapping("/find/{id}")
        public ResponseEntity<Movie> getMovieById (@PathVariable("id") Long id) {
            Movie movie = movieService.findMovieById(id);
            return new ResponseEntity<>(movie, HttpStatus.OK);
        }

        @PostMapping("/add")
        public void addMovie(@RequestBody Movie movie) {
            //        Movie newMovie = movieService.addMovie(movie);
            //        return new ResponseEntity<>(newMovie, HttpStatus.CREATED);
            movieService.addMovie(movie);
        }

        @PutMapping("/update")
        public ResponseEntity<Movie> updateMovie(@RequestBody Movie movie) {
            Movie updateMovie = movieService.updateMovie(movie);
            return new ResponseEntity<>(updateMovie, HttpStatus.OK);
        }
        @Transactional

        @DeleteMapping("/delete/{id}")
        public ResponseEntity<?> deleteMovie(@PathVariable("id") Long id) {
            movieService.deleteMovie(id);
            return new ResponseEntity<>(HttpStatus.OK);
        }
    }
    //
    //        @GetMapping
    //        public List<Movie> getMovies() {
    //            List<Movie> movies =  movieService.getMovies();
    //            return new ResponseEntity<>(movies, HttpStatus.OK);
    //        }
    //
    //        @GetMapping("/{id}")
    //        public ResponseEntity<Movie>getMovieById(@PathVariable("id")Long id);
    //        private Long id;
    //        Movie movie = movieService.findMovieById(id);
    //           return new ResponseEntity<>(movie, HttpStatus.OK);
    //        }
    //
    //        @PostMapping("/add")
    //        public void registerNewMovie(@RequestBody Movie movie) {
    //            movieService.addNewMovie(movie);
    //        }
    //
    //        @PostMapping("/add")
    //        public ResponseEntity<Movie>addMovie(@RequestBody, Movie movie) {
    //          Movie newMovie = movieService.addNewMovie(movie);
    //          return new ResponseEntity<>(newMovie, HttpStatus.CREATED);
    //    }
    //
    //    @PutMapping("/update")
    //    public ResponseEntity<Movie>updateMovie(@RequestBody, Movie movie) {
    //        Movie updateMovie = movieService.updateMovie(movie);
    //        return new ResponseEntity<>(updateMovie, HttpStatus.OK);
    //    }
    ////
    //@DeleteMapping("/delete/{id}")
    //public ResponseEntity<?>deleteMovie(@PathVariable("id")Long id) {
    //     movieService.deleteMovie(id);
    //    return new ResponseEntity<>(HttpStatus.OK);
    //}
    //}


