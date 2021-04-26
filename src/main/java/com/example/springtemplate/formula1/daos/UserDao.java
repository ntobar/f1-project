package com.example.springtemplate.formula1.daos;

import com.example.springtemplate.formula1.models.User;
import com.example.springtemplate.formula1.repositories.UserRepository;
import java.util.List;
import javax.jws.soap.SOAPBinding.Use;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public class UserDao {
  @Autowired
  UserRepository repository;

  @PostMapping("/api/users")
  public User createUser(@RequestBody User user) { return repository.save(user); }

  @GetMapping("/api/users")
  public List<User> findAllUsers() {
    return (List<User>) repository.findAll();
  }

  

  @GetMapping("api/users/{userId}")
  public User findUserById(
          @PathVariable("userId") Integer id) {
    return repository.findById(id).get();
  }

  @GetMapping("api/users/{userId}/name/{name}")
  public User updateUserName(
          @PathVariable("userId") Integer id,
          @PathVariable("name") String newUserName) {
    User user = repository.findById(id).get();
    user.setUsername(newUserName);
    return repository.save(user);
  }

//  @PutMapping("/api/users/{userId}")
//  public User updateUser(
//          @PathVariable("userId") Integer id,
//          @RequestBody() User newUser) {
//    User user = this.findUserById(id);
//    user.setUsername(newUser.getUsername());
//    user.setAbbreviation(newUser.getAbbreviation());
//    user.setFoundingDate(newUser.getFoundingDate());
//    user.setHeadquarters(newUser.getHeadquarters());
//    return repository.save(user);
//  }

  @DeleteMapping("api/users/{userId}")
  public void deleteUser(
          @PathVariable("userId") Integer id) {
    repository.deleteById(id);
  }
}
