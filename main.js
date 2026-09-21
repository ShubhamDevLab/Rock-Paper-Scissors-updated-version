let computerMove;
let Wins = 0;
let Losses = 0;
let Ties = 0;
let result;


const moveImages = {
    rock: 'Image/rock.png',
    paper: 'Image/paper.png',
    scissors: 'Image/scissors.png'
};

const shakeSound = new Audio('Audio/shake.mp3');
const revealSound = new Audio('Audio/common-button-2.mp3');
const loseSound = new Audio('Audio/are-baap-re-yaad-aya.mp3')
const winSound = new Audio('Audio/i-got-this-fahhhh.mp3')
const tieSound = new Audio('Audio/is-ka-karan-narendar-modi.mp3')



function RestButton()
{
    Wins=0;
    Losses=0;
    Ties=0;
    document.getElementById("var-Ties").textContent = Ties;
    document.getElementById("var-Wins").textContent = Wins;
    document.getElementById("var-Losses").textContent = Losses;
}

function UpdateStatus(myMove,compMove,result)
{
    shakeSound.pause();
    if(result==='You win! 🎉')
    {
        winSound.play();
        winSound.volume=0.2;
    }
    else if(result==='You lose')
    {
        loseSound.play();
        loseSound.volume=0.2;
    }
    else if(result==='It\'s a draw')
    {
        tieSound.play();
        tieSound.volume=0.2;
    }
    document.getElementById("var-Result").textContent = result; 
    document.getElementById("myMove").innerHTML = `<img src="${moveImages[myMove.toLowerCase()]}" style ="transform: rotate(-30deg)" width="100">`;
    document.getElementById("compMove").innerHTML = `<img src="${moveImages[compMove.toLowerCase()]}" style = "transform: rotate(-150deg)" width="100">`;
    console.log(`Your move is ${myMove} and computer move is ${compMove}`);
}

function GetComputerValue()
{
    let randomNum;

    randomNum = Math.random();

    if(randomNum >= 0 && randomNum < 1/3)
    {
       return 'Rock';
    }
    else if(randomNum >= 1/3 && randomNum < 2/3)
    {
       return 'Paper';
    }
    else if(randomNum >= 2/3 && randomNum < 1)
    {
        return 'Scissors';
    }
}

function CheckCondition(comMove, myMove)
{
    if(comMove==='Rock' && myMove==='Rock')
    {
        console.log("Tie");
        Ties++;
        document.getElementById("var-Ties").textContent = Ties;   
        return 'It\'s a draw';
    }
    else if(comMove==='Rock' && myMove==='Paper')
    {
        console.log('You win!');
        Wins++;
        document.getElementById("var-Wins").textContent = Wins;
        return 'You win! 🎉';
    }
    else if(comMove==='Rock' && myMove==='Scissors')
    {
        console.log('You lose!');
        Losses++;
        document.getElementById("var-Losses").textContent = Losses;
        return 'You lose';
    }
    else if(comMove==='Paper' && myMove==='Paper')
    {
        console.log("Tie");
        Ties++;
        document.getElementById("var-Ties").textContent = Ties;   
        return 'It\'s a draw';
    }
    else if(comMove==='Paper' && myMove==='Scissors')
    {
        console.log('You win!');
        Wins++;
        document.getElementById("var-Wins").textContent = Wins;
        return 'You win! 🎉';
    }
     else if(comMove==='Paper' && myMove==='Rock')
    {
        console.log('You lose!');
        Losses++;
        document.getElementById("var-Losses").textContent = Losses;
        return 'You lose';
    }
    else if(comMove==='Scissors' && myMove==='Scissors')
    {
        console.log("Tie");
        Ties++;
        document.getElementById("var-Ties").textContent = Ties;   
        return 'It\'s a draw';
    }
    else if(comMove==='Scissors' && myMove==='Rock')
    {
        console.log('You win!');
        Wins++;
        document.getElementById("var-Wins").textContent = Wins;
        return 'You win! 🎉';
    }
    else if(comMove==='Scissors' && myMove==='Paper')
    {
        console.log('You lose!');
        Losses++;
        document.getElementById("var-Losses").textContent = Losses;
        return 'You lose';
    }
}

// 1. UPDATED ANIMATION HELPER: Drives the sequential text updates alongside the shaking
function startCountdownAnimation(str) {
    const resultLabel = document.getElementById("var-Result");
    const myMoveContainer = document.getElementById("myMove");
    const compMoveContainer = document.getElementById("compMove");

    // Instant Start (0ms)
    resultLabel.textContent = "Rock...";
    shakeSound.currentTime = 0;
    shakeSound.volume = 0.3;
    shakeSound.play().catch(e => console.log("Audio play deferred:", e));

    myMoveContainer.innerHTML = `<img src="${moveImages.rock}" class="is-shaking" width="100">`;
    compMoveContainer.innerHTML = `<img src="${moveImages.rock}" class="is-shaking" width="100">`;

    // Paper hits on the second downward stroke swing
    setTimeout(() => {
        resultLabel.textContent = "Paper...";
    }, 600);

    // Scissors hits on the third downward stroke swing
    setTimeout(() => {
        resultLabel.textContent = "Scissors...";
    }, 1200);

    // Shoot displays precisely during the peak wind-up stretch
    setTimeout(() => {
        resultLabel.textContent = "Shoot!";
    }, 1750);
}

// 2. UPDATED BUTTON HANDLERS: Adjusted execution blocks to feed choice data down seamlessly
function RockButton(str) {
    startCountdownAnimation(str);

    setTimeout(() => {
        computerMove = GetComputerValue();
        result = CheckCondition(computerMove, str);
        UpdateStatus(str, computerMove, result);
        revealSound.play();
    }, 2000);
}

function PaperButton(str) {
    startCountdownAnimation(str);

    setTimeout(() => {
        computerMove = GetComputerValue();
        result = CheckCondition(computerMove, str);
        UpdateStatus(str, computerMove, result);
        revealSound.play();
    }, 2000);
}

function ScissorsButton(str) {
    startCountdownAnimation(str);

    setTimeout(() => {
        computerMove = GetComputerValue();
        result = CheckCondition(computerMove, str);
        UpdateStatus(str, computerMove, result);
        revealSound.play();
    }, 2000);
}


function toggleVolume() {
  const audio = document.getElementById("myAudio");
  const button = document.getElementById("volumeToggle");
  const buttonText = document.getElementById("buttonText");

  shakeSound.volume=0.001; 
  // Toggle the muted state
  audio.muted = !audio.muted;

  // Update button appearance and icon based on state
  if (audio.muted) {
    buttonText.innerText = "Unmute";
    button.className = "muted";
  } else {
    buttonText.innerText = "Mute";
    button.className = "unmuted";
  }
}