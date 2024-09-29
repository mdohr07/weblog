---
layout: ../../layouts/Post.astro
title: Retraining week twelve
description: 
publishDate: Sunday, September 29 2024
author: "mdohr07"
image: "/assets/blog/2024-09/stressReduction.jpg"
alt: A note with a printed target on it lies on a keyboard, there are instructions to bang your head for stress reduction
music: "https://www.youtube.com/watch?v=eiL2C2Y1Pfo"
musicTitle: "Night Call Girl - Majestica"
mood: "hungry"
---
So, that was already week twelve. What did we actually do? I remember being completely confused one day and barely finishing the given task. But I also remember that everything suddenly went smoothly the next day.

This week, I wasn’t feeling well. I had constant stomach aches and didn’t have much of an appetite, so I skipped coffee and had to be careful in general. Luckily, I’m feeling better now, and I owe a lot of that to my wife, who took such good care of me and my stomach.
Object Orientation, Interfaces, Arrays…

Looking through my code, I can see that we continued to work on inheritance and polymorphism in class and also started using interfaces. We’ve also been using arrays more frequently for practice purposes.

This Java code demonstrates the creation and configuration of various furniture objects:

- **Seating Furniture:** Three Chair objects (uglyChair, flimsyChair, brokenChair) with different properties.
- **Changeable Cover Furniture:** A Sofa object (moldySofa) and a Bed object (rancidMattress) with the ability to change covers.
- **Storage Furniture:** A Shelf object (ricketyShelf) and a Wardrobe object (rottenWardrobe) for storage purposes.

Finally, all these objects are added to a Furniture array, showcasing inheritance and polymorphism in object-oriented programming.
```java
// SEATING furniture
        Chair uglyChair = new Chair();
        uglyChair.setSeats(1);
        uglyChair.setArmRest(true);

        Chair flimsyChair = new Chair();
        flimsyChair.setSeats(1);
        flimsyChair.setArmRest(false);

        Chair brokenChair = new Chair();
        brokenChair.setSeats(0);
        brokenChair.setArmRest(false);

// COVER changeable
        Sofa moldySofa = new Sofa();
        moldySofa.setSeats(3);
        moldySofa.setColor("Brown-ish");
        moldySofa.changeCover();

        Bed rancidMattress = new Bed();
        rancidMattress.setWidth(90);
        rancidMattress.changeCover();

// STORAGE furniture
        Shelf ricketyShelf = new Shelf();
        ricketyShelf.setVolume(5);
        ricketyShelf.setDesigner("Destructeur Gras");

        Wardrobe rottenWardrobe = new Wardrobe();
        rottenWardrobe.setNumberOfShirts(20);

        Furniture[] furniture = new Furniture[7];
        furniture[0] = uglyChair;
        furniture[1] = flimsyChair;
        furniture[2] = brokenChair;
        furniture[3] = moldySofa;
        furniture[4] = rancidMattress;
        furniture[5] = ricketyShelf;
        furniture[6] = rottenWardrobe;
```
**Polymorphism** is a concept in object-oriented programming that allows objects of different classes to be treated uniformly. However, they must have a common base class or interface. This allows methods to be applied to objects of different types without needing to know their specific type.

## The Test is Coming Soon

That stresses me out a bit! My last test result wasn’t bad, it was “okay,” but I’d like to do better. However, I’m not really finding time to study outside of class. Right now, I’m trying to practice with flashcards on the tram and hope that will be enough.

Some topics I think I haven’t quite mastered yet include:

### Static Methods
A static method belongs to the class itself, not to individual objects of the class. It can be called without creating an instance of the class.

### Access Modifiers and their UML Representation

- public (+) ______ all classes
- protected (#) ___ all classes in the same package and all derived ones
- default (~) _____ all classes in the same package
- private (-) _____ only within the class itself

### Constructors

- Special methods in a class that are automatically called when a new object of the class is created
- Constructors have the same name as the class
- … and initialize the attributes of the object
- No return value (not even void)!
- Can have parameters

Example:
```java
    public Chair(int numberOfSeats) {
        this.seats = numberOfSeats;
    }
```

### Overriding (Inheritance!)

- Re-implementing a method in a subclass that has already been defined in the superclass
- The method has the same name, return type, and parameters as in the superclass
- Used to change the behavior of an inherited method

```java
class Animal {
    public void makeNoise() {
        System.out.println("Animal makes a noise");
    }
}
```
```java
class duck extends Animal {
    @Override
    public void make Noise() {
        System.out.println("Quack quack!");
    }
}
```

### Overloading

- Multiple methods with the same name but different parameters in the same class
- The methods differ in the number or types of their parameters
- Allows for the same functionality to be used with different input parameters

```java
class Dog {
    public void bark() {
        System.out.println("woof!");
    }
    
        public void bark(int anzahl) {
        for (int i = 0; i < anzahl; i++) {
            System.out.println("Woof woof!");
        }
    }
```

I manage to get these things right in tasks, but explaining them is still hard. I’m trying not to stress myself out too much.
Other Stuff

Another topic this week was internships and the associated applications. We had a fairly spontaneous application preparation session and were tasked with updating our resumes (or writing one from scratch if we didn’t have one already). So, I spent quite a bit of time on that yesterday, along with another task. The other task was to choose one of the internal companies and write a cover letter for it. This won’t be sent out yet, but at least it’s done. I had already looked into this beforehand and had an idea of where I would like to apply. So, yesterday wasn’t exactly free time.
By the way, we haven’t received our application photos yet.