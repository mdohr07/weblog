---
layout: "../../../layouts/BlogPostLayout.astro"

title: IT Specialist retraining - Week ten
date: 2024-09-14
author: mdohr07
image: {}
draft: true
description: A reflection on the tenth week of my retraining in IT Object Orientation stuff in Java
category: IT training
music: "Falling - Infraction, Aim To Head"
mood: Sad
---

## Working with associations
So far we had learned to work with classes an associations, without being told what else is possible. Like, that Super Classes exist. Well, I knew of their existence but not only did (or do) I not know how to use them, but also not just me but almost everyone else in the class needed (or still needs) more practice with the older and current topics.

**Main.java**
```java
public class Main {
    public static void main(String[] args) {
        Horse horse = new Horse("Roberto");
        horse.setBreed("Irish Sport Horse");
        horse.setColor("Pink");
        horse.setPersonality("Vengeful, occasionally shoots lasers from it's eyes.");
        horse.setAge(8);
        horse.setSex("Gelding");
        horse.setHeight(167);
        horse.setPrice(9000.99);

        Saddle saddle = new Saddle();
        saddle.setColor("Purple");
        // ...

        horse.setSaddle(saddle);

        Bridle bridle = new Bridle();
        // ...
        horse.setBridle(bridle);

        System.out.println("Horse\n--------------------------------------\n");
        System.out.println(horse.asString());
    }
}
```

**Horse.java**
```java
public class Horse {
    private String name;
    private String breed;
    private String color;
    private String personality;
    private String sex;
    private int height;
    private int age;
    private double price;

    private Saddle saddle;
    private Bridle bridle;

    public Horse(String name) {
        this.name = name;
    }

    // Setters & Getters
    // ...

        public String asString() {
        return "Name: " + name +  "\n" +
                "Personality: " + personality + "\n" +
                "Breed: " + breed + "\n" +
                "Color: " + color + "\n" +
                "Sex: " + sex + "\n" +
                "Height: " + height + " kg" + "\n" +
                "Age: " + age + "\n" +
                "\nPRICE: " + price + " Euro" + "\n" +
                saddle.asString() + bridle.asString();
    }
```

**Saddle.java**
```java
public class Saddle {
    private String color;
    private String material;
    private double weight;
    private double price;

    public Saddle() {
    }

    // Setters & Getters
    // ...

        public String asString() {
        return "\nSaddle" + "\n--------------------------------------\n" +
                "Color: " + color + "\n" +
                "Material: " + material + "\n" +
                "Weight: " + weight + "\n" +
                "\nPRICE: " + price + "\n";
    }
```