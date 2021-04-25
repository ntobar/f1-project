package com.example.springtemplate.formula1.repositories;

import com.example.springtemplate.formula1.models.Race;
import org.springframework.data.repository.CrudRepository;

public interface RaceRepository
  extends CrudRepository<Race, Integer> {
}
