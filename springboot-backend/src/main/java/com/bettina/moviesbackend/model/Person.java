package com.bettina.moviesbackend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Set;

@Entity
@Table(name ="person")
public class Person {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
//    @Column(nullable = false, updatable = false)
    private Long id;
    private String name;
    private LocalDate birthDate;
    private String nationality;
    private String personImg;
    private String biography;

//    @JsonIgnore
//    @ManyToMany
//    @JoinTable(
//            name = "movie_person_join_table",
//            joinColumns = @JoinColumn(name = "person_id"),
//            inverseJoinColumns = @JoinColumn(name = "movie_id")
//    )
//    private Set<Movie> movies;

    public Person() {
    }

    public Person(Long id, String name, LocalDate birthDate, String nationality, String personImg, String biography) {
        this.id = id;
        this.name = name;
        this.birthDate = birthDate;
        this.nationality = nationality;
        this.personImg = personImg;
        this.biography = biography;
//        this.movies = movies;
    }

    public Person(String name, LocalDate birthDate, String nationality, String personImg, String biography) {
        this.name = name;
        this.birthDate = birthDate;
        this.nationality = nationality;
        this.personImg = personImg;
        this.biography = biography;
//        this.movies = movies;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public LocalDate getBirthDate() {
        return birthDate;
    }

    public String getNationality() {
        return nationality;
    }

    public String getPersonImg() {
        return personImg;
    }

    public String getBiography() {
        return biography;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setBirthDate(LocalDate birthDate) {
        this.birthDate = birthDate;
    }

    public void setNationality(String nationality) {
        this.nationality = nationality;
    }

    public void setPersonImg(String personImg) {
        this.personImg = personImg;
    }

    public void setBiography(String biography) {
        this.biography = biography;
    }

//    @JsonProperty("movies")
//    public Set<Movie> getMovies() {
//        return movies;
//    }
//    public Person setMovies(Set<Movie> movies) {
//        this.movies = movies;
//        return this;
//    }

    @Override
    public String toString() {
        return "Person{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", birthDate=" + birthDate +
                ", nationality='" + nationality + '\'' +
                ", personImg='" + personImg + '\'' +
                ", biography='" + biography + '\'' +
                '}';
    }
}
