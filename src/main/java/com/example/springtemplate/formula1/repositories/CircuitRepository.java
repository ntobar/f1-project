package com.example.springtemplate.formula1.repositories;

import com.example.springtemplate.formula1.models.Circuit;
import org.springframework.data.repository.CrudRepository;

public interface CircuitRepository
  extends CrudRepository<Circuit, Integer> {
}
