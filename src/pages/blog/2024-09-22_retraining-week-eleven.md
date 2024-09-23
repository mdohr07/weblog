---
layout: ../../layouts/Post.astro
title: IT Specialist retraining - Week eleven
description: A reflection on the tenth week of my retraining in IT with Java, but also a photographer and a Conference
publishDate: Sunday, September 22 2024
author: "mdohr07"
image: "/assets/blog/2024-09/campusKonferenzLogo.png"
alt: a purple background and white text with Campus Konferenz Logo
music: "https://www.youtube.com/watch?v=2Si9s9SwXz8"
musicTitle: "I drop gems - _ensnare_"
mood: "calm"
---


Another week has passed. In this eleventh week, we continued to work on inheritance in Java. Most of the time before lunch was spent on theory and discussing previous tasks, and after lunch, we tackled new assignments. Our teacher specifically gave us a task involving arrays since several students seemed to struggle with that concept.

```java
        Article[] articles = new Article[6];
        articles[0] = tshirtBaZnGa;
        articles[1] = tshirtDebugging;
        articles[2] = mugInformatiker;
        articles[3] = mugPurpurTentacle;
        articles[4] = watchBinary;
        articles[5] = matDrWho;

        for (int i = 0; i < articles.length; i++) {
            System.out.println(articles[i].toString());
        }

        double totalSum = 0.0;
        for (Article article : articles) {
            System.out.printf("%-38s %6.2f Euro%n", article.getProductName(), article.getPrice());
            totalSum += article.getPrice();
        }
```

## Photos…

A photographer was scheduled for Wednesday to take pictures of, among others, the new people in the company, which included our class. First, individual photos were taken of everyone (on a voluntary basis) that we can use for our internship applications. Later, a group photo was taken, although a few classmates didn't want to be in it. Everyone who participated ended up squinting a bit from the sunlight in the photo. This picture has been circulating on Facebook since Friday. If my photo turns out acceptable, I might post it on my homepage.

## Campus Conference

The company hosts an annual event called the Campus Conference, which we were also invited to. For us as students, attendance was essentially mandatory, like a normal school day. So I'm not sure whether it was actually an invitation or more of a requirement.

The event ran from nine in the morning until four in the afternoon, and afterwards, there were (alcoholic) drinks available for networking and making new contacts.

I attended a workshop on the dark web. It wasn’t really a proper workshop; participants couldn’t actively participate in anything, only ask questions, and there was no time left for the planned discussion at the end.

After that, I only attended lectures; overall, all the events felt quite drawn-out, and my back hurt from sitting for so long.

<img src="/assets/blog/2024-09/campusKonferenz.jpeg" alt="a bunch of people from behind, seated in front of a stage where a lady is presenting the conference program that is being projectedvbehind her">

Once the official event was over and beer and wine were offered, strangely, not many of the over three hundred participants were still around. That was a bit disappointing, as it would have been a great opportunity to meet new people. Instead, small groups formed here and there, so I stayed for a while with a glass of white wine among a few of my classmates. We had a good conversation in our little group, and I enjoyed it. Still, I said goodbye after finishing my glass. A part of me would have liked to stay longer, but another part wanted to avoid coming home too late and try to remain as sober as possible on the way back.

The day was okay, but it felt quite long, and in the evening, I fell into bed especially tired.
