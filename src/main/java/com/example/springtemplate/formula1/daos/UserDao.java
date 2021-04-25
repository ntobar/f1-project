package com.example.springtemplate.formula1.daos;

import com.example.springtemplate.formula1.models.User;
import com.example.springtemplate.formula1.repositories.UserRepository;
import java.util.List;
import javax.jws.soap.SOAPBinding.Use;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
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
}
