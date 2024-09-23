---
layout: ../../layouts/Post.astro
title: IT Specialist retraining - Week ten
description: A reflection on the tenth week of my retraining in IT with Constructors and more in Java 
publishDate: Wednesday, September 18 2024
author: "mdohr07"
image: "/assets/blog/2024-09/horseclass.png"
alt: My Java code of a horse object that occasionally shoots lasers from its eyes
music: none
mood: stressed
---
This post is later than planned, usually I upload one on the weekend but this time I had some disaster happening which prevented me from that. I rebuilt the site by now, some things are still missing and in some ways this is a simpler version now. But it's running. And most of my posts are revived and back online. I'll write a separate post about the issue and make today's post short because my memory is not as fresh anymore.

## Working with associations
So far we had learned to work with classes an associations, without being told what else is possible. Like, that Super Classes exist. Well, I knew of their existence but not only did (or do) I not know how to use them, but also not just me but almost everyone else in the class needed (or still needs) more practice with the older and current topics. For practice we had to implement horse objects, for reference see my code below 😋
Whenever I can I like to make the topics more fun for myself my adding silly things like the laser eyes or aliens and whatever.

This is the main class...

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
The following are the sub-classes horse and saddle. There's also a bridle class but I didn't put it here because... you get the idea.

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
## Inheritance exists
There was some confusion with another task that we got where some people - including myself - wanted to make a class that contains more class. It was with gardening machines (exciting, I know) where some of us wanted to put a more general class like "machine" above the "lawn mower" and the "power generator" because those sub-machines have similarities. Of course we all struggled, because we hadn't learned about inheritance yet, as our teacher told us. So, we ended up having to simplify our stuff again.

On Friday that week there was some maintenance happening at the company, which required the power to be turned off. And since we kind of rely on electricity, we all went into home office that day. 
The class happened through Microsoft teams and was very theoretical. But in the comfor of ones own home. Plus, we were taught about inheritance.

## To be continued
That's it for today, I'm a forgetful one. In the next entry about the IT training adventure I can write about how it went with the inheritance, because no spoilers 😋