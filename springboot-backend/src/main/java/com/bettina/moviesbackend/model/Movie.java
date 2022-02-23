package com.bettina.moviesbackend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Set;

@Entity
@Table(name ="movie")
public class Movie {
    @Id
//        @SequenceGenerator(
//                name ="movie_sequence",
//                sequenceName = "movie_sequence",
//                allocationSize = 1
//        )
//        @GeneratedValue(
//                strategy = GenerationType.SEQUENCE,
//                generator = "movie_sequence"
//        )
//       @GeneratedValue(
//               strategy = GenerationType.SEQUENCE
//       )
    @Column(name = "movie_id", unique = true, nullable = false)
    private Long id;
    private String name;
    private String story;
    private LocalDate releaseDate;
    private String runtime;
    private String coverImg;
    private String albumImg;
    private String director;
    private String writer;
    private String trailer;


    @JsonIgnore
    @ManyToMany
    @JoinTable(
            name = "movie_genre_join_table",
            joinColumns = @JoinColumn(name = "movie_id"),
            inverseJoinColumns = @JoinColumn(name = "genre_id")
    )
    private Set<Genre> genres;

    @JsonIgnore
    @ManyToMany
    @JoinTable(
            name = "movie_person_join_table",
            joinColumns = @JoinColumn(name = "movie_id"),
            inverseJoinColumns = @JoinColumn(name = "person_id")
    )
    private Set<Person> persons;

//    @JsonIgnore
//    @ManyToMany
//    @JoinTable(
//            name = "review",
//            joinColumns = @JoinColumn(name = "movie_id"),
//            inverseJoinColumns = @JoinColumn(name = "user_id")
//    )
//    private Set<Review> reviews;

//    @JsonProperty("genres")
//    public Set<Genre> getGenres() {
//        return genres;
//    }
//    public Movie setGenres(Set<Genre> genres) {
//        this.genres = genres;
//        return this;
//    }

    public Movie() {
    }

    public Movie(Long id, String name, String story, LocalDate releaseDate, String runtime, String coverImg, String albumImg, String director, String writer, String trailer, Set<Genre> genres, Set<Person> persons) {
        this.id = id;
        this.name = name;
        this.story = story;
        this.releaseDate = releaseDate;
        this.runtime = runtime;
        this.coverImg = coverImg;
        this.albumImg = albumImg;
        this.director = director;
        this.writer = writer;
        this.trailer = trailer;
        this.genres = genres;
        this.persons = persons;
//        this.reviews = reviews;
    }


    public Movie(String name, String story, LocalDate releaseDate, String runtime, String coverImg, String albumImg, String director, String writer, String trailer, Set<Genre> genres,  Set<Person> persons) {
        this.name = name;
        this.story = story;
        this.releaseDate = releaseDate;
        this.runtime = runtime;
        this.coverImg = coverImg;
        this.albumImg = albumImg;
        this.director = director;
        this.writer = writer;
        this.trailer = trailer;
        this.genres = genres;
        this.persons = persons;
//        this.reviews = reviews;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getStory() {
        return story;
    }

    public LocalDate getReleaseDate() {
        return releaseDate;
    }

    public String getRunTime() {
        return runtime;
    }

    public String getCoverImg() {
        return coverImg;
    }

    public String getAlbumImg() {
        return albumImg;
    }

    public String getDirector() {
        return director;
    }

    public String getWriter() {
        return writer;
    }

    public String getTrailer() {
        return trailer;
    }

    //    public Set<Genre> getGenres() {
    //       return genres;
    //   }

    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setStory(String story) {
        this.story = story;
    }

    public void setReleaseDate(LocalDate releaseDate) {
        this.releaseDate = releaseDate;
    }

    public void setRunTime(String runTime) {
        this.runtime = runTime;
    }

    public void setCoverImg(String coverImg) {
        this.coverImg = coverImg;
    }

    public void setAlbumImg(String albumImg) {
        this.albumImg = albumImg;
    }

    public void setDirector(String director) {
        this.director = director;
    }

    public void setWriter(String writer) {
        this.writer = writer;
    }

    public void setTrailer(String trailer) {
        this.trailer = trailer;
    }

    //     public void setGenres(Set<Genre> genres) {
    //    this.genres = genres;
    //   }


//    @JsonProperty("genres")
//    public Set<Genre> getGenres() {
//        return genres;
//    }
//    public Movie setGenres(Set<Genre> genres) {
//        this.genres = genres;
//        return this;
//    }

    @JsonProperty("genres")
    public Set<Genre> getGenres() {
        return genres;
    }
    public Movie setGenres(Set<Genre> genres) {
        this.genres = genres;
        return this;
    }

    @JsonProperty("persons")
    public Set<Person> getPersons() {
        return persons;
    }
    public Movie setPersons(Set<Person> persons) {
        this.persons = persons;
        return this;
    }

//    @JsonProperty("reviews")
//    public Set<Review> getReviews() {
//        return reviews;
//    }
//    public Movie setReviews(Set<Review> reviews) {
//        this.reviews = reviews;
//        return this;
//    }

    @Override
    public String toString() {
        return "Movie{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", story='" + story + '\'' +
                ", releaseDate=" + releaseDate +
                ", runTime='" + runtime + '\'' +
                ", coverImg='" + coverImg + '\'' +
                ", albumImg='" + albumImg + '\'' +
                ", director='" + director + '\'' +
                ", writer='" + writer + '\'' +
                ", trailer='" + trailer + '\'' +
                ", genres=" + genres + '\'' +
                ", persons=" + persons +
//                ", reviews=" + reviews +
                '}';
    }
}
