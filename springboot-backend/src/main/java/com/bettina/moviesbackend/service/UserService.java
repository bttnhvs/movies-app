//package com.bettina.moviesbackend.service;
//
//import com.bettina.moviesbackend.model.Role;
//import com.bettina.moviesbackend.model.User;
//
//import java.util.List;
//
//public interface UserService {
//
//    User saveUser(User user);
//    Role saveRole(Role role);
//    void addRoleToUser(String username, String roleName);
//    User getUser(String username);
//    List<User> getUsers();
//
//}
package com.bettina.moviesbackend.service;

import com.bettina.moviesbackend.model.Movie;
import com.bettina.moviesbackend.model.User;
import com.bettina.moviesbackend.repository.MovieRepository;
import com.bettina.moviesbackend.UserNotFoundException;
import com.bettina.moviesbackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository){
        this.userRepository = userRepository;
    }


    public List<User> findAllUsers() {
        return userRepository.findAll();
    }

    public void addUser(User user) {
        Optional<User> userOptional = Optional.ofNullable(userRepository.findByUserName(user.getUserName()));
        if (userOptional.isPresent()) {
            throw new IllegalStateException("user taken");
        }
        userRepository.save(user);
    }

    public User updateUser(User user) {
        return userRepository.save(user);
    }

    public User findUserById(Long id) {
        return userRepository.findUserById(id)
                .orElseThrow(() -> new UserNotFoundException("User by id " + id + " was not found"));
    }

    public void deleteUser(Long id){
        userRepository.deleteUserById(id);
    }
}
