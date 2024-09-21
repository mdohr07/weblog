---
layout: ../../layouts/Post.astro
title: IT Specialist retraining - Week six
description: A reflection on the sixth week of my retraining in IT with Java
publishDate: Sunday, August 18 2024
author: "mdohr07"
image: "/assets/blog/2024-08/palindromeCode.png"
alt: My Java code in IntelliJ
music: "Art3mis & Parzival - Gunship, Stella Le Page"
mood: Indecisive
---
This week was horribly hot outside, but also inside of the classroom, which made focussing harder. We got to write some little console programs to train ourselves and in the end we compared our results and got to see several approaches to do the same thing. 

## No pastry for me (yet?)
There were points during learning that I have felt very stupid and also times, in which I felt kind of smart. I often have the feeling, that the others solve the problems almost effortlessly. There are a few people in out class, for who this actually might be the case (and they already get bribed with pastry), but realisticly thinking I am probably not alone with my struggles. One just doesn't always get to see the other people's fights. So when I was really stuck, I turned to Google or ChatGPT. I don't wand this to be misunderstood: I don't just ask ChatGPT to solve my task and copy/paste it and call it done. Instead I am trying to get answers to specific, isolated problems, that I am having in that moment to get unstuck. I know, that I ultimately have to understand these things myself.

<img src ="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2xjd3lvNWtnaW93OXE5eTU3dG8ya3ZiNXdqbGxwbnh0dHh2dnI4ZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l2JdYAtRfAgmCPOKc/giphy.webp" alt ="Homer orders a huge bucket of ice cream for Lisa pretending it's just because she is his little girl" />

## Ternary operator
Our knowledge and understanding is gonna be put to the test soon enough. There are some things that I need to review for sure. One of those thing is the ternary operator. I doubt, that I will ever want to use this, but I might be wrong. If I want to or not though, I have to know this for better test results either way. The operator makes sense, but also is confusing. That might well be a beginner thing. One of the advanced students solved one of our tasks with a very long ternary operator, or rather several, all inline 🤯

```java
// Ternary operator
// Syntax:
// = condition? valueTrue : valueFalse

price = (weight <= 10)? 5.0 : 10.0;
// Is weight <= 10?  y- price is 5.0 : n- price is 10.0;Ö
```

Same thing but with conditionals:
```java
int weight = 10;
double price;

if ( weight <= 10 ) {
	price = 5;
}

else {
	price = 10;
}
```

## Palindrome checker program
The last problem we had to solve was to write a console program that checks if a word is a palindrome or not and prints a message abbout that in the console. I finished this task in the classrom when I could have gone home. But I wanted it to be finished and also at home I can't neccessarily focus better than in class. On Friday it wasn't too hot and all the noisy people went home right away so I saw my chances of being able to focus as being pretty high. 
We didn't learn about the Scanner in Java yet, but some people had already used it so the teacher did give an example with it. I didn't know how to use it, so that was helpful and an inspiration to use it.
My approach was to figure out first how to do the palindrome-check on a given word. Surprisingly I solved this one relatively fast. It was a big help that in a task from earlier that week I iterated through a String backwards, that came in very handy in this one. Because I could just iterate backwards again (nah, I didn't remember all of it and had to check what I did sometimes), then output the same String but backwards through that and then I "only" had to figure out how to compare those two. The teacher had just told us about the existence of `.equals` and `.equalsIgnoreCase` (they compare Strings), so that was another hint. 

After it all worked with a given word, I tried the Scanner. As a note to myself, this is what is needed:
```java
// package ...
import java.util.Scanner; // Needs import

//public class ...
	// main method ...
Scanner = new Scanner(System.in); // Calls new Scanner
String word = Scanner.nextLine(); // To input word in the next line
```

And this is how my code ended up being:
```java
Scanner = new Scanner(System.in); // Calls new Scanner

System.out.print("Enter a word: "); // Prompt
String word = Scanner.nextLine(); // To input word in the next line

String reverse = ""; // Empty String to put chars into
int i = word.length() -1; // Puts i to the end of the String

while ( i >= 0) {
	char character = word.charAt(i);
	reverse = reverse + character; // Adds chars to the String
	i--;
}

if ( reverse.equalsIgnoreCase(word)) {
	System.out.println( word + " is a palindrome.");
}
else {
	System.out.println( word + " is not a palindrome.")
}
```

The bonus task was the same thing but with a sentence. According to the teacher, we were gonna run into new problems because of the spaces and stuff. I did it as a homework but hadno problems, it was just the same as with the single word. This is without the Scanner though. 
```java
String sentence = "Never odd or even";
        String reverse = "";
        int i = sentence.length() -1;

        while(i >= 0) {
            char character = satz.charAt(i);
            reverse = reverse + character;
            i--;
        }
        if ( andersrum.equalsIgnoreCase(sentence)) {
            System.out.printf("The sentence \"%s\" is a palindrome.", sentence);
        }
        else {
            System.out.printf("The sentence \"%s\" is not a palindrome.", sentence);
        }
```

<img src="https://i.giphy.com/xaO6TmgQmKEQ4516sE.webp" alt="first rule of programming: if it works, don't touch it" />

## Other stuff
We also got the thing with the licences fixed, where GitHub Education didn't accept our proof and we couldn't activate the licenses in IntelliJ as a result. We as students had to do nothing, except try again with new instructions, the rest was managed by the staff. So now it's all fine and dandy. 

This week it happened a few times that we got given tasks that we then can complete where ever we want. Meaning, we can go home. That was mainly because of the unbearable heat in the classroom. Half the time I stayed in the classroom and did my work there, but other times I took it home. Meaning, I also had to bring the laptop from class. But then - with a little bit of help from my classmate - I made a repository for my project folder that contains all of the stuff we are learning. Of course it's set to private 😉

Also: Watching the Tour De France Femmes 2024 on the side whenever I can. Didn't quite get why Reusser isn't participating (sickness or honeymoon?) but I was disappointed to not being able to see her doing the single time trial, which is my favourite. I am not diappointed that Vollering is not winning all the time right now (sorry, Demi :p) but pleasantly surprised to see Maria Giulia Confalonieri in the higher ranks this year, would have been extra happy if she had been the one to do the time trial. But who knows? Maybe next year!
