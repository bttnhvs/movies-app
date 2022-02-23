package com.bettina.moviesbackend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Set;

@Entity
@Table(name ="genre")
public class Genre {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
//    @Column(nullable = false, updatable = false)
    @Column(name = "genre_id", unique = true, nullable = false)
    private Long id;
    private String name;

    @JsonIgnore
    @ManyToMany
    @JoinTable(
            name = "movie_genre_join_table",
            joinColumns = @JoinColumn(name = "movie_id"),
            inverseJoinColumns = @JoinColumn(name = "genre_id")
    )
    private Set<Movie> movies;


    public Genre() {
    }

    public Genre(String name) {
        this.name = name;
    }

    public Genre(Long id, String name, Set<Movie> movies) {
        this.id = id;
        this.name = name;
        this.movies = movies;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

//    public Set<Movie> getMovies() {
//        return movies;
//    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

//    public void setMovies(Set<Movie> movies) {
//        this.movies = movies;
//    }

//    @JsonProperty("movies")
//    public Set<Movie> getMovies() {
//        return movies;
//    }
//    public Genre setMovies(Set<Movie> movies) {
//        this.movies = movies;
//        return this;
//    }

    @JsonProperty("movies")
    public Set<Movie> getMovies() {
        return movies;
    }
    public Genre setMovies(Set<Movie> movies) {
        this.movies = movies;
        return this;
    }

    @Override
    public String toString() {
        return "Genre{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", movies=" + movies +
                '}';
    }
}
