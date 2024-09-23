---
layout: ../../layouts/Post.astro
title: This ruined my website
description: About how that cursed Gtranslate.io caused major issues on my website, leading me to rebuild it from scratch, don't make the same mistake that I did
publishDate: Saturday, September 21 2024
author: "mdohr07"
image: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXQyc2QxcHZvdGVzbzJkYmFicmdrbmU2Zm45N3FqdmF2anpveXRjZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/otP85UTRethni/giphy.webp"
alt: Cartoon Batman cries
music: "none"
mood: "tired"
---
Now I finally have time to write about the disaster that took my website down for a while.

## Stay away from Gtranslate(.io)

As the title probably already suggests, the culprit is Gtranslate. Not Google Translate — that's something different. However, it is based on Google Translate's technology, as one of (or maybe the) founders of Gtranslate is a former Google employee.

## What is Gtranslate?

You can probably guess: it's a translation tool. I was looking for an easy way to translate my website into German, especially the blog posts. It would be way too much work for me to translate each individual post myself, create a German version, and link it manually each time. I think that's understandable. When you're looking for a tool to do this job, you'll quickly realize that you have to shell out a few euros for it. At least with a setup like mine — using WordPress, for example, you'd probably find a free plugin.

Now here comes my experience, and I'm writing about it even though I'm embarrassed to have fallen for something like this.

When searching for a free translation tool, you (or in this case, I) eventually stumble upon Gtranslate, which offers a free version. The ".io" in the address gives a good feeling—it makes you think of open-source and transparency.

The free version supposedly offers all languages, machine translation, unlimited word count, and unlimited pageviews. However, it doesn't include SEO indexing, translation editing, URL translation, or language hosting. When you click through to the corresponding CMS or whatever (in my case, just plain HTML), you get something to install Gtranslate. For me, it was a code snippet that looked pretty standard at first glance.

<img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWJoa3l3dnExbnBuc2xqcmVtbjRlaHJrbGp0Y2I2Z2lveTY0anR5cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3CU1UFsYwVNZhsCs4j/giphy.webp" alt="A green cartoon duck looking closely at an egg and gets startled when an evil looking rat bursts out of it, both scream">

## What they don't tell you...

If you check out the Gtranslate FAQ, there’s no mention of something crucial—nowhere on the page do they inform you that after installing the translator, annoying ads will constantly appear. And I mean, they pop up every time you click on any link on the website. I found this, of course, awful and incredibly irritating, so I removed the code snippet right away. You would think that would solve the issue. Sure, the translation function was gone, but the ads remained.

It was maddening. First, I tried doing a "Clear Cache and Redeploy" on Netlify, but to no avail. Then I tried deleting my repository and creating a new one from the local repo. That didn’t work either. Then I tried combining the first two approaches, and again, nothing. After that, I tried creating a new branch from an older commit in my repository, making a fresh repo out of that, and deploying it again on Netlify as a new site. Still nothing. The ads stubbornly persisted and were starting to ruin my week because I couldn’t stop thinking about it, but I didn’t have much time to deal with it. I spent my breaks and train rides during the week trying to figure out how to fix the issue.

At some point during this process, I examined my own site using the browser’s developer tools while the invasive code was active. Because it wasn’t always active, ads didn’t appear with every click but seemed to show up after a certain period. I could tell if the problem was present by the appearance of a standard cursor instead of my custom cursor.

I discovered that an otherwise invisible container was overlaying my website (hence the standard cursor within the container), and inside was some PHP code. I couldn’t investigate further, though, because the code and the container would disappear after a short time. It was very mysterious.

<img src="/assets/blog/2024-09/debugging.png" alt="What the developer tools revealed">

## The solution

First, I tried once again to locate the culprit using the search function in VS Code, but again to no avail. I now believe that perhaps a kind of copy of my site had been created, or my domain name was cursed with this thing, and some specific code was expected—or however Gtranslate kept sneaking back in (whether intermittently or constantly). So, I deleted the repository again, created a new one from an Astro template, deployed it to Netlify, and voilà: no more ads.

I concluded that the cleanest and possibly even the quickest solution was to rebuild my site from scratch. I did this again during my breaks at retraining (or during moments when nothing much was happening, which I took advantage of). I still had all my blog posts, so I just had to copy them over and adjust them to my new format.

Some functionalities are still missing, unfortunately. For one, I’d like to add back the information about the music I’m listening to and my current mood to my posts. That should be relatively easy to sort out. What's a bit trickier for me is setting up the RSS feed properly again, as well as the sitemap and robots.txt. It's annoying because I had just (finally) managed to get that working recently. Now I have to do it all over again. A few static pages are missing too, as you can see, and I’m not sure yet if I’ll include them again. Maybe I’ll just leave it as is. I’ve decided to use an even simpler design—currently monochromatic, except for images or graphics. That made things a bit quicker. The color scheme, by the way, was a spontaneous decision...

<img src="https://i.giphy.com/3o6MbfslpSgZQhgaPK.webp" alt="Mr. Burns presses activates a spray can namely Bug Bomb and takes a step back when it stars hissing und humming">