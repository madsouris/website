---
layout: ../../layouts/projectDetail.astro
status: 'Active'
duration: '2019 - Present'
title: 'Workout Checklist App'
description: 'This web app was created for me to do an exercise routine. Figuring out how to build a web app is a huge help for me in learning Javascript, Typescript, Ionic framework, and some other web technologies.'
---

This web app was created for me to do an exercise routine. Figuring out how to build a web app is a huge help for me in learning Javascript, Typescript, Ionic framework, and some other web technologies.

# Design

![Workout website](https://ik.imagekit.io/madsouris/vannrith/projects/workout-1.PNG?tr=w-1200)

There is no groundbreaking design to implement here. When the user opens the app on Android or the web, it will use material design style, when the user opens the app on Apple devices, it will use iOS style. This behavior is great for keeping the UX as simple as possible.

The Ionic framework does this out of the box, with the support of Dark and Light modes as well.

# Development

![WOrkout checklist](https://ik.imagekit.io/madsouris/vannrith/projects/workout-2.PNG?tr=w-1200)
Ionic is a great framework for making mobile and web apps. It forces me to use Typescript as much as possible, so I did. Currently, the app doesn’t have a server to store and manage data, I’m using a local JSON file to store everything, and the app only read from the file. Another interesting thing for me is Pinia, it’s been fun to play with.

# Features

The app is pretty much minimal, as of this writing it has:

-   Arms, legs, core workouts
-   Each workout has short tutorial link in the thumbnail
-   Tap to check as done
-   Each workout has 2 rounds
-   Timer for the whole workout
