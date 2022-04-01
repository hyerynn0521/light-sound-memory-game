# Pre-work - _Memory Game_

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: Hyerin Lee

Time spent: 7 hours spent in total

Link to project: https://glitch.com/edit/#!/nonstop-candy-leech

## Required Functionality

The following **required** functionality is complete:

- [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [x] "Start" button toggles between "Start" and "Stop" when clicked.
- [x] Game buttons each light up and play a sound when clicked.
- [x] Computer plays back sequence of clues including sound and visual cue for each button
- [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [x] User wins the game after guessing a complete pattern
- [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

- [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [x] Buttons use a pitch (frequency) other than the ones in the tutorial
- [x] More than 4 functional game buttons
- [x] Playback speeds up on each turn
- [x] Computer picks a different pattern each time the game is played
- [ ] Player only loses after 3 mistakes (instead of on the first mistake)
- [ ] Game button appearance change goes beyond color (e.g. add an image)
- [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![Losing gameplay](https://cdn.glitch.global/96d3a536-4bdc-485f-903e-bd408bc6eec8/lose-game.gif?v=1648775231402)
<img src="https://cdn.glitch.global/96d3a536-4bdc-485f-903e-bd408bc6eec8/win-game.gif?v=1648775238208"></img>


## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.
   <br><br>[StackOverflow](https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript) 
   <br>[Medium]( https://javascript.plainenglish.io/how-to-generate-an-array-of-random-numbers-in-javascript-f883de667e84)
  


2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)
   <p>
    A challenge that I encountered during the creation of this submission was adding the extra features, especially speeding up the button playtime after each turn. The reason why I first had trouble with this was that every time I would try to reduce the playtime by subtracting from the variables clueHoldTime and cluePauseTime after each turn, the game would stop working. I was confused at first and thought maybe I was adding the subtraction in the wrong place. I first started by deleting that code again to make sure that this code was the problem. When I deleted the line that subtracted, the game worked fine so I knew that somehow the subtraction was a problem. At this point, I had no idea why this would cause a problem. I gave myself a break to let my brain rest, and came back to the project later. When I got back a few hours later, I realized that the two variables that I was trying to modify were of type const, which cannot be modified. To make sure this was the problem, I then decided to look at the console to see if there was an error from there that caused the game to stop functioning. Fortunately, the console did show an error that I was trying to modify a const variable, which is illegal. I changed the variable type to the regular “var”, and the code worked fine after.
    <br><br>
    However, there was another problem with this feature, which was that even after the gameplay was done and the game was restarted, the speed was faster in the beginning than it should have been. I parsed through the code manually from the point where I subtracted the clueHoldTime and cluePauseTime till the point where the game was finished. When I parsed through the code where the game is started again, I realized I had not reset the variables back to their original values, which resulted in the new game starting at a faster speed than it should be. I was able to reset the two variables in the startGame() function, which completed this extra feature without any more errors.
  </p>

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)
   <br><p>
  After completing this project, some questions that I have about web development is first, are there generally more people working on backend or frontend, and how is the development process of frontend and backend in terms of timeline? Are they implemented concurrently, or is it usually frontend first, and then backend, etc? Also, Is it essential for a frontend developer to have some degree of UI/UX skills to know how to make users feel more satisfied by coding, or do UI/UX designers do all those jobs? Similar to the previous question, is it important for frontend developers to have design knowledge or artistic abilities since frontend is the visual part of the website? 
<br><br>Another question I have is do frontend developers interact more with UI/UX designers, or backend developers? What does a typical day as a frontend developer look like? In the area of frontend development, are there constantly new languages being developed or would you say it’s pretty static in terms of innovations in the languages of frontend development? I also forgot to ask the important question: which languages are essential to learn as a frontend developer besides the common JavaScript/HTML/CSS? If there are other essential languages, what are the pros and cons to each one compared to JS?

</p>

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)
   <br><p>
  If I had extra hours to work on this project, I would want to add a feature to select the difficulty of the light and sound memory game. Before starting the game, users would select a difficulty (easy, medium, hard) from a dropdown and once it’s selected, the game would start with the corresponding difficulty level. Easy level would have only 4 levels with slow speed, medium would have 6 levels with faster speed, and hard would have 8 levels with fastest speed out of the three.
<br><br>It would also be interesting to allow users to select different sound libraries. For example, there could be a sound library of animal sounds, piano sounds, nature sounds or other interesting sound effects which users can choose from. If a user selected an animal library, each button would make an animal sound, and so on. 
<br><br>To make the game more interactive and competitive, there could also be a score board of all users who played this game on the website. The scores would be calculated based on difficulty level of the game, and how fast the users are able to complete all levels.  Making the game into a multi-user platform would increase the interactive-ness of the game as more people would want to play to compete with each other. 
<br><br>If all of these features were to be implemented, the game would have better user experience and in general become more customizable, which is good from the user perspective. These features would definitely make the game more fun instead of being a one-dimensional simple sound and memory game. 

</p>
   

## Interview Recording URL Link

[My 5-minute Interview Recording](https://youtu.be/3QpdPjkBLVI)

## License

    Copyright Hyerin Lee

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
