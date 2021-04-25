package com.example.springtemplate.formula1.repositories;

import com.example.springtemplate.formula1.models.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository
  extends CrudRepository<User, Integer> {
}
