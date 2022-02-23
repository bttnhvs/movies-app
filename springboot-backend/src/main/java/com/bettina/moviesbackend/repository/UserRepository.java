//package com.bettina.moviesbackend.repository;
//
//
//import com.bettina.moviesbackend.model.User;
//import org.springframework.data.jpa.repository.JpaRepository;
//
//public interface UserRepository extends JpaRepository<User,Long> {
//    User findByUsername(String username);
//}
package com.bettina.moviesbackend.repository;


import com.bettina.moviesbackend.model.Person;
import com.bettina.moviesbackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User,Integer> {
    User findByUserName(String username);
    void deleteUserById(Long id);
    Optional<User> findUserById(Long id);
}
