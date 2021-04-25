package com.example.springtemplate.formula1.repositories;

import com.example.springtemplate.formula1.models.Team;
import org.springframework.data.repository.CrudRepository;

public interface TeamRepository
  extends CrudRepository<Team, Integer> {

}
