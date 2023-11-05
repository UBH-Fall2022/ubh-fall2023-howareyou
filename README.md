# HowAreU?
- sometimes you are happy, other times, you are not.
- this app keeps track of that, to prevent you from letting one bad moment ruin an otherwise good day.

## Inspiration
This project is partly inspired by Pikmin Bloom, a mobile game from Niantic.
In the game, at a chosen time daily, it allows you to save a note about your day, these are then logged in the app along with other achievements you got in game.
I really loved this feature, but it was really a forgotten part of the app, so I decided to build something dedicated to this functionality.

## What it does
You are able to select how good (or bad) you are feeling, as well as a brief reasoning behind your thoughts. Each entry you make is logged into a database associated with the date of entry. On the overview screen, you are able to select a day on the calendar and view all your entries for that day.
It also gives you a brief description about how that day went, and sometimes provides encouragement if necessary.

## How we built it
I used React Native and Expo to build the mobile app. There is a SQLite database that stores all the entries. 

## Challenges we ran into
There were a lot of challenges. I had almost no experience in React Native, or React. At first, I was using React Native, but ran into a lot of trouble, so I decided to just rewrite it in React and then find a way to make it into an app. 
This led to huge problems with storing the database (would've required a backend) which was not my goal.
I then tried using local storage in the browser, but it was just a janky solution I was not happy with.
Thus, I rewrote it again in React Native.

## Accomplishments that we're proud of
I feel far more comfortable in the technology that I used. One of my main reasons I chose this project was to become familiar with React Native/React. 
I am super proud that I was able to actually build the APK and install the app on my phone.
I almost gave up a couple of times, but I am so happy that I stuck through it and was able to complete this project.

## What we learned
- React Native and React are significantly different.
- Good documentation is incredibly helpful
- Styling is hard but rewarding.

## What's next for howareu
There are still features to be added:
- iOS app (just needs to be tested)
- publish on Google Play (I think I need a membership)
- publish on App Store (definitely need a membership)
- swiping between tabs
- ensure consistent theming
- send notifications throughout the day to remind you to log your feelings
- settings menu


## Technology used
- React Native
- Expo
- Expo-SQlite

# UB Hacking Fall 2022 Rules 
- Teams can consist of between 1 and 4 people.
- To have your submission be considered for judging, you must submit a 2-5 minute video along with your project. Try to keep it as concise as possible!
- The projects submitted for judging cannot have been started prior to the start of the hackathon. In other words, teams can plan their projects in great detail, but they cannot begin writing code until they arrive at the hackathon.
- Additionally, we are partnering with MLH this year, which means that our hackers must follow their code of conduct which can be found here.
- Any and all resources used must be open source and specified in either the project, or the project description.
- Your project must be publically available and under source control (organizers need to be able to view your code repository) -  you can use GitHub, GitLab, Bitbucket, or any other code hosting service
- Projects can not have been submitted to another event, including other hackathons this weekend.
- [Code of Conduct](https://drive.google.com/file/d/1RH_TtRu6EOHSbOoiSj2h1Q4jswtVILzE/view)

# TODO:
- calendar
