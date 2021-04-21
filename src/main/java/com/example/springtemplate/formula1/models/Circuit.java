package com.example.springtemplate.formula1.models;

import java.text.SimpleDateFormat;
import java.util.Date;

public class Circuit {
  private String name;
  private String location;
  private String country;

  Date date = new Date();
  SimpleDateFormat DateFor = new SimpleDateFormat("MM/dd/yyyy");
  private String constructionYear = DateFor.format(date);
}
