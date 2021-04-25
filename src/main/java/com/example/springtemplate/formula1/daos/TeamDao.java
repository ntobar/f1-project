package com.example.springtemplate.formula1.daos;

import com.example.springtemplate.formula1.models.Team;
import com.example.springtemplate.formula1.repositories.TeamRepository;
import java.util.List;
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
public class TeamDao {
  @Autowired
  TeamRepository repository;

  @PostMapping("/api/teams")
  public Team createTeam(@RequestBody Team team) {
    return repository.save(team);
  }

  @GetMapping("/api/teams")
  public List<Team> findAllTeams() {
    return (List<Team>) repository.findAll();
  }

  @GetMapping("api/teams/{teamId}")
  public Team findTeamById(
      @PathVariable("teamId") Integer id) {
    return repository.findById(id).get();
  }

  @GetMapping("api/teams/{teamId}/name/{name}")
  public Team updateTeamName(
      @PathVariable("teamId") Integer id,
      @PathVariable("name") String newTeamName) {
    Team team = repository.findById(id).get();
    team.setName(newTeamName);
    return repository.save(team);
  }

  @PutMapping("/api/teams/{teamId}")
  public Team updateTeam(
      @PathVariable("teamId") Integer id,
      @RequestBody() Team newTeam) {
    Team team = this.findTeamById(id);
    team.setName(newTeam.getName());
    team.setAbbreviation(newTeam.getAbbreviation());
    team.setFoundingDate(newTeam.getFoundingDate());
    team.setHeadquarters(newTeam.getHeadquarters());
    return repository.save(team);
  }

  @DeleteMapping("api/teams/{teamId}")
  public void deleteTeam(
      @PathVariable("teamId") Integer id) {
    repository.deleteById(id);
  }
}
