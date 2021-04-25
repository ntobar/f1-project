package com.example.springtemplate.formula1.repositories;

import com.example.springtemplate.formula1.models.F1_Car;
import org.springframework.data.repository.CrudRepository;

public interface F1_CarRepository
  extends CrudRepository<F1_Car, Integer> {
}
