---
layout: ../../layouts/Post.astro
title: Artistic Influences on Frontend Development
description: The upcoming retraining as an IT specialist and how it came about
publishDate: Saturday, November 11 2023
author: "mdohr07"
image: "/assets/blog/default.png"
alt: default image
music: "none"
mood: "Thoughtful"
---
I’ve always been a very visual person. It helps me immensely when I can establish a connection through something visual, and I think that has a lot to do with my close relationship with art. I often think in images, and through all kinds of visual mediums, I develop a sense, an idea, or an association that helps me understand what I need to do. Only then can I find the words to describe my idea.

In art, it’s often a goal for the artwork to evoke a feeling in the viewer, and it’s not much different for websites. However, in the world of web design, the aim is to attract users rather than evoke unpleasant emotions. My approach is to first find a feeling, a vibe, and visualize it—whether in my mind or through digital drafts and sketches.

## Integrating Creative Thinking into Code

When designing websites, I first ask myself what feeling I want to convey. I like to use colors, fonts, shapes, and images. The space for creativity is enormous, and I love experimenting with it. I often think back to the early days of the internet, where flashy elements like blinking text, MIDI music, and seemingly out-of-control animated GIFs were accepted. These details gave each website an individual character, revealing something of the inner world of the creator. While such practices are not as popular today, I find it exciting to think about which of these or similar creative elements could still be integrated into modern websites.

In code itself, artistic approaches are limited, but the structure and organization of the code can still convey a certain aesthetic. A meaningful design can, for example, be achieved by assigning intuitive and easy-to-understand variable and function names.  
As you can quickly see from my repositories on GitHub, I work a lot with CSS. However, I’m still not entirely sure what the best possible order for declarations is. It makes sense to me to start with layout properties like Flex and Grid. But on the other hand, I personally like to place the background color at the top, simply because I tend to orient myself around colors. So, I’m still figuring out the ideal order for now.

Choosing a visually appealing code editor also contributes to making the work more enjoyable. When my development environment looks the way I like it, the work becomes even more fun. This may sound superficial, but I love syntax highlighting and how it makes my code look colorful!

```css
.about-grid {
    background-image: url('img/pexels-burak-the-weekender-1253050.jpg'); /* Aha! Background Image */
    background-size: cover;
    background-position: center;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-content: center;
    column-gap: 2rem;

    width: 95%;
    min-height: 100px;
    
    margin-top: 2%;
    margin-left: 0px;
    margin-bottom: 100px;
    padding-top: 1%;
    padding-right: 50px;
    padding: 2%;

    border: 1px solid #222;
    text-align: justify;
    text-justify:distribute;
    letter-spacing: 0px;
    word-spacing: 3px;
}
```