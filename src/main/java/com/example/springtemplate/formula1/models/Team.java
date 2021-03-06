package com.example.springtemplate.formula1.models;

import java.util.Date;
import java.util.List;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "teams")
public class Team {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;
  private String name;
  private String abbreviation;
  private Date foundingDate;
  private String headquarters;

  @OneToMany(mappedBy = "team")
  private List<User> users;

  @OneToMany(mappedBy = "team")
  private List<Race> races;

  @OneToMany(mappedBy = "team")
  private List<F1_Car> f1_cars;

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getAbbreviation() {
    return abbreviation;
  }

  public void setAbbreviation(String abbreviation) {
    this.abbreviation = abbreviation;
  }

  public Date getFoundingDate() {
    return foundingDate;
  }

  public void setFoundingDate(Date foundingDate) {
    this.foundingDate = foundingDate;
  }

  public String getHeadquarters() {
    return headquarters;
  }

  public List<User> getUsers() {
    return users;
  }

  public void setUsers(List<User> users) {
    this.users = users;
  }

  public void setHeadquarters(String headquarters) {
    this.headquarters = headquarters;
  }

  public List<Race> getRaces() {
    return races;
  }

  public void setRaces(List<Race> races) {
    this.races = races;
  }

  public List<F1_Car> getF1_cars() {
    return f1_cars;
  }

  public void setF1_cars(List<F1_Car> f1_cars) {
    this.f1_cars = f1_cars;
  }
  
  public Team(String name, String abbreviation, Date foundingDate, String headquarters) {
    this.name = name;
    this.abbreviation = abbreviation;
    this.foundingDate = foundingDate;
    this.headquarters = headquarters;
  }

  public Team() {}
}
