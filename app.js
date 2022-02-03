console.log("Welcome to tic tac toe game, Created by Zaid");

let turn = "X";
let sound = new Audio("/assets/sound.mp3");
let bgmusic = new Audio("/assets/music.mp3");


// Switch on music
const volume = document.querySelector('.fa-volume-up')

volume.addEventListener('click',(e)=> {
    bgmusic.paused ? bgmusic.play() : bgmusic.pause()
    if(bgmusic.play){
        volume.style.color = 'gold'
        volume.style.fontSize = '1.5rem'
    }
    if(bgmusic.paused){
        volume.style.color = 'white'
        volume.style.fontSize = '1rem'
    }
})

const checkTurn = () => {
  return turn === "X" ? "0" : "X";
};

// if win

const ifWin = () => {
  //  define variables
  const box0 = document.querySelector("#box-0");
  const box1 = document.querySelector("#box-1");
  const box2 = document.querySelector("#box-2");
  const box3 = document.querySelector("#box-3");
  const box4 = document.querySelector("#box-4");
  const box5 = document.querySelector("#box-5");
  const box6 = document.querySelector("#box-6");
  const box7 = document.querySelector("#box-7");
  const box8 = document.querySelector("#box-8");

  // x --> y
  if (
    box0.innerText === box1.innerText &&
    box2.innerText === box1.innerText &&
    box0.innerText !== ""
  ) {
    document.querySelector("#won").innerText =
      "Congratulations !! Player - " + box0.innerText + " Won";
    document.querySelector("#won").style.backgroundColor = "rgb(117, 189, 10)";
    document.querySelector("img").style.display = "block";    

    // Winning line
    box0.style.backgroundColor = "greenyellow";
    box1.style.backgroundColor = "greenyellow";
    box2.style.backgroundColor = "greenyellow";
  }
  if (
    box3.innerText === box4.innerText &&
    box5.innerText === box4.innerText &&
    box3.innerText !== ""
  ) {
    document.querySelector("#won").innerText =
      "Congratulations !! Player - " + box3.innerText + " Won";
    document.querySelector("#won").style.backgroundColor = "rgb(117, 189, 10)";
    document.querySelector("img").style.display = "block";    

    // winning line
    box3.style.backgroundColor = "greenyellow";
    box4.style.backgroundColor = "greenyellow";
    box5.style.backgroundColor = "greenyellow";
  }
  if (
    box6.innerText === box7.innerText &&
    box8.innerText === box7.innerText &&
    box6.innerText !== ""
  ) {
    document.querySelector("#won").innerText =
      "Congratulations !! Player - " + box6.innerText + " Won";
    document.querySelector("#won").style.backgroundColor = "rgb(117, 189, 10)";
    document.querySelector("img").style.display = "block";    

    // winning line
    box6.style.backgroundColor = "greenyellow";
    box7.style.backgroundColor = "greenyellow";
    box8.style.backgroundColor = "greenyellow";
  }
  //   x
  //   |
  //   y
  if (
    box0.innerText === box3.innerText &&
    box6.innerText === box3.innerText &&
    box0.innerText !== ""
  ) {
    document.querySelector("#won").innerText =
      "Congratulations !! Player - " + box0.innerText + " Won";
    document.querySelector("#won").style.backgroundColor = "rgb(117, 189, 10)";
    document.querySelector("img").style.display = "block";    

    // winning line
    box0.style.backgroundColor = "greenyellow";
    box3.style.backgroundColor = "greenyellow";
    box6.style.backgroundColor = "greenyellow";
  }
  if (
    box1.innerText === box4.innerText &&
    box7.innerText === box4.innerText &&
    box1.innerText !== ""
  ) {
    document.querySelector("#won").innerText =
      "Congratulations !! Player - " + box1.innerText + " Won";
    document.querySelector("#won").style.backgroundColor = "rgb(117, 189, 10)";
    document.querySelector("img").style.display = "block";    

    // winning line
    box1.style.backgroundColor = "greenyellow";
    box4.style.backgroundColor = "greenyellow";
    box7.style.backgroundColor = "greenyellow";
  }
  if (
    box2.innerText === box5.innerText &&
    box8.innerText === box5.innerText &&
    box2.innerText !== ""
  ) {
    document.querySelector("#won").innerText =
      "Congratulations !! Player - " + box2.innerText + " Won";
    document.querySelector("#won").style.backgroundColor = "rgb(117, 189, 10)";
    document.querySelector("img").style.display = "block";    

    // winning line
    box2.style.backgroundColor = "greenyellow";
    box5.style.backgroundColor = "greenyellow";
    box8.style.backgroundColor = "greenyellow";
  }
  // x
  //   *
  //     *
  //        y
  if (
    box0.innerText === box4.innerText &&
    box8.innerText === box4.innerText &&
    box0.innerText !== ""
  ) {
    document.querySelector("#won").innerText =
      "Congratulations !! Player - " + box0.innerText + " Won";
    document.querySelector("#won").style.backgroundColor = "rgb(117, 189, 10)";
    document.querySelector("img").style.display = "block";    

    // winning line
    box0.style.backgroundColor = "greenyellow";
    box4.style.backgroundColor = "greenyellow";
    box8.style.backgroundColor = "greenyellow";
  }
  //        x
  //      *
  //    *
  //  y
  if (
    box2.innerText === box4.innerText &&
    box6.innerText === box4.innerText &&
    box2.innerText !== ""
  ) {
    document.querySelector("#won").innerText =
      "Congratulations !! Player - " + box2.innerText + " Won";
    document.querySelector("#won").style.backgroundColor = "rgb(117, 189, 10)";
    document.querySelector("img").style.display = "block";    

    // winning line
    box2.style.backgroundColor = "greenyellow";
    box4.style.backgroundColor = "greenyellow";
    box6.style.backgroundColor = "greenyellow";
  }
};

// Game Logic

const spaces = document.querySelectorAll(".space");
spaces.forEach((boxes) => {
  boxes.addEventListener("click", (e) => {
    if (boxes.innerText === "") {
      boxes.innerText = turn;
      turn = checkTurn();
      sound.play();
      document.querySelector("#turn").innerText = turn;
      ifWin();
    }
  });
});

// reset function
const reset = document.querySelector(".btn-reset");
reset.addEventListener("click", (e) => {
  document.querySelector("#turn").innerText = "X";
  document.querySelector("#won").innerText = "";
  document.querySelector("#won").style.backgroundColor = "white";

  document.querySelectorAll(".space").forEach((e) => {
    e.innerText = "";
    e.style.backgroundColor = "white";
  });
  document.querySelector("img").style.display = "none";
});
