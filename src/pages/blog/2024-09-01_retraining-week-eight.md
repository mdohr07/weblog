---
layout: ../../layouts/Post.astro
title: IT Specialist retraining - Week eight
description: A reflection on the eighth week of my retraining in IT with Object Orientation in Java 
publishDate: Sunday, September 01 2024
author: "mdohr07"
image: "/assets/blog/2024-09/nani.jpeg"
alt: drawn mummy says NANI?!
---
music: "none"<br>
mood: Anxious

That week was a bit strange. It feels like it went rather slow and sluggish 🐌 
In the beginning of the week we learned about two dimensional arrays. As if one dimensional Arrays weren't struggle enough! I don't know why, but I have trouble remembering Array syntax. I'll have to practice more. We also started with Methods in Java. Those are a bit confusing, but also cool. Seems very useful and practial, once understood. 

We were supposed to start with Object Orientation in this week too, but that didn't happen until Friday. We were sent to work from home sometimes, because of the heat. The classroom becomes really hot and stuffy so that nobody's brain is working anymore when the heat outside rises and inside it's even worse. That was the main reason why it went so slowly this week. Then people - including myself on Thursday - were missing for one reason or another and so we started with Object Orientation on Friday, then, got released earlier too. The day that I wasn't coming, I studied from home. I did repetition of Methods in Java and Arrays.

## My homework

```java
public class MethodenKlassenspiegel {
    static int[] gradeCount = new int[6]; // Array für Notenanzahl

    // Methode zum Setzen und Zählen der Noten
    static void setGrades(int[] testResults) {

        for (int result : testResults) {
            if (result >= 92) {
                gradeCount[0]++; // 1
            } else if (result >= 81) {
                gradeCount[1]++; // 2
            } else if (result >= 67) {
                gradeCount[2]++; // 3
            } else if (result >= 50) {
                gradeCount[3]++; // 4
            } else if (result >= 30) {
                gradeCount[4]++; // 5
            } else {
                gradeCount[5]++; // Note 6
            }
        }
    }

    static void printGrades() {
        System.out.println("GRADE  |  1 |  2 |  3 |  4 |  5 |  6 |");
        System.out.println("-------+----+----+----+----+----+----+");
        System.out.printf("COUNT  | %2d | %2d | %2d | %2d | %2d | %2d |\n",
                gradeCount[0], gradeCount[1], gradeCount[2], gradeCount[3], gradeCount[4], gradeCount[5]);
    }
```

```java
    // Hauptmethode
    public static void main(String[] args) {
        int[] testResults = {92, 80, 29, 81, 100, 66, 91, 50, 70, 82, 30, 85, 96, 67};
        setGrades(testResults);
        printGrades(); // Kein Argument notwendig, da gradeCount eine Klassenvariable ist
    }
}
```

I hope that next week will feel more productive and that I will also feel less stupid than I have been feeling lately. This post is shorter than usual, but I'm gonna call it finished here. 

Bye 👋