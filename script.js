//Global constants
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; // how long to wait before starting playback of the clue sequence

//Global Variables
var pattern = [];
var progress=0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; //must be between 0.0 and 1.0
var guessCounter = 0;

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function startGame(){
  //initialize game variables
  clueHoldTime = 1000;
  cluePauseTime = 333;
  for(let i = 0; i<8; i++) {pattern.push(randomIntFromInterval(1, 6))}
  progress = 0;
  gamePlaying = true;
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence()
  
}

function stopGame(){
  gamePlaying = false;
  pattern = [];
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("startBtn").classList.remove("hidden");
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}
function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; // set delay to initial wait time
  for (let i=0;i<=progress;i++){
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue, delay, pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime
    delay += cluePauseTime;
  }
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("You've won! You are the master of light and sound :)");
}

function guess(btn){
  console.log("user guessed: " + btn)
  if(!gamePlaying){
    return;
  }
  if(pattern[guessCounter] == btn){
    //Guess was correct!
    if(guessCounter == progress){
      if(progress == pattern.length - 1){
        //GAME OVER: WIN!
        winGame();
      }else{
        //Pattern correct. Add next segment
        progress++;
        clueHoldTime -= 100
        cluePauseTime -= 20
        playClueSequence();
      }
    }else{
      //so far so good... check the next guess
      guessCounter++;
    }
  }else{
    //Guess was incorrect
    //GAME OVER: LOSE!
    loseGame();
  }
  
  //add game logic here
}

//////////////////////////////
// Sound Synthesis Functions//
//////////////////////////////
const freqMap = {
  1: 250,
  2: 350,
  3: 540,
  4: 600,
  5: 440,
  6: 493.8
  
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)
