package com.example.springtemplate.formula1.models;

import java.util.Date;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "races")
public class Race {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;
  private Integer standing;
  private Date season;

  @ManyToOne
  private Team team;

  @ManyToOne
  private Circuit circuit;

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public Integer getStanding() {
    return standing;
  }

  public void setStanding(Integer standing) {
    this.standing = standing;
  }

  public Date getSeason() {
    return season;
  }

  public void setSeason(Date season) {
    this.season = season;
  }

  public Team getTeam() {
    return team;
  }

  public void setTeam(Team team) {
    this.team = team;
  }

  public Circuit getCircuit() {
    return circuit;
  }

  public void setCircuit(Circuit circuit) {
    this.circuit = circuit;
  }

}
