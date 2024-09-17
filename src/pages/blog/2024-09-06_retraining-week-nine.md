---
layout: ../../layouts/Post.astro
title: IT Specialist retraining - Week nine
description: A reflection on the ninth week of my retraining in IT with Constructors and more in Java 
publishDate: Friday, September 06 2024
author: "mdohr07"
image: "/assets/blog/2024-09/Screenshot2024-09-05_1.png"
alt: A Java code with colorful notes and arrows
---
music: "Falling - Infraction, Aim To Head"<br>
mood: Sad

Nope, I don't feel smarter yet. I still feel very stupid and behind. This week was less slow, the teacher has now stepped on the gas. But at the same time we were released extra early the last two days because it was specially hot.

## Study you must
Yesterday's home office day came as a blessing to me, because we were free to work on whatever. That day the teacher and I had established that I have trouble with parameter passing. I get confused with what goes where, especially when there are numbers and the variable names are single letter names (x, y, a, etc.). But in my defense: it's really hard to focus while melting in your chair with certain people making constant noise. So, in our little pen and paper tests I did poorly. Those tests have some code (no syntax highlighting, just black on white) and we have to be able to tell what the output is gonna be. The focus was overloading methods. That is, when functions have the same name but a different signature (like, when they have different parameters or a different amount of them).

<img src="https://i.giphy.com/tpiXQIuC9kKYg.webp" alt="Yoda looks very reassuring and calm while saying that is why you fail">

## My other teacher
When I was home I asked my other teacher - namely ChatGPT - to give me tasks like the ones our human teacher had given us. Without the result of course. Only when I thought I had the solution I would ask for confirmation. And did I struggle... When I finally managed to foresee the result correctly, I had ChatGPT up the level a bit and began failing again. I quit when it was time to wind down and I couldn't think anymore anyway. 

![Screenshot of my practice with notes](</assets/blog/2024-09/Screenshot2024-09-05_2.png>) 
![Screenshot of my practice with notes](</assets/blog/2024-09/Screenshot2024-09-05_3.png>) 
![Screenshot of my practice with notes](</assets/blog/2024-09/Screenshot2024-09-05_4.png>)

## Static vs non-static
Today I went to class hoping that I would be able to do better now, but there is no time to let things sink in and yet again we moved on to the next topic which is static versus non-static members of classes. What I gathered is, that static members (like methods and variables) <b>can exist only once</b> and objects can be created from them. But <b>static classes cannot be instantiated</b>, they are rather a kind of "helper class" that only contains static methods and fields. Also, Static methods can only access static variables or other static methods because they are <b>not linked to a specific object of the class</b>.

```java
public class Example {
    // A static variable
    public static int counter = 0;

    // A static method
    public static void showCounter() {
        System.out.println("Counter: ” + counter);
    }
}

// Usage
// Call without creating an object
Example.showCounter(); 
```

```java
public class OuterClass {
    public static class InnerClass {
        public void showMessage() {
            System.out.println(“I am a static inner class”);
        }
    }
}

// Usage:
OuterClass.InnerClass obj = new OuterClass.InnerClass();
obj.showMessage();
```

Summary:
- <b>Static methods and variables belong to the class</b>, not to an object, and they can be used without creating an object of the class.
- Normal classes with static methods and variables can have objects, but static methods and variables are independent of these objects.
- Static inner classes cannot be instantiated directly, but the static methods are called instead.

For the record I also add one of the little tests of today that I couldn't solve.

```java
// Given the following class definition:
class Test {
public static int a = 1;
public int b = 2;
}

// What output does the following code snippet generate?
Test test1 = new Test();
test1.a = 3;
test1.b = 4;
Test.a = 5;
Test test2 = new Test();
test2.a = 6;
test2.b = 7;
System.out.print(test1.a);
System.out.print(test1.b);
```

<img src="https://i.giphy.com/zOvBKUUEERdNm.webp" alt="a baboon in crisis in front of a computer, just like me">

## Outlook
Yeah I don't think I can have much of a weekend. I do believe one also needs free time, at the very least one day off, but how do I catch up if I don't study all weekend? 😓

<a href="https://youtu.be/z0UfcyHxiBQ?si=AZXxflgWoH3EgFIs" target=_blank>Falling - Infraction, Aim To Head</a>
