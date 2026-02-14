const music = document.getElementById("bgMusic");
let hearts = false, cakeCut = false;

function next(n){
  document.getElementById("p"+n).classList.remove("show");
  document.getElementById("p"+(n+1)).classList.add("show");

  music.volume = 0.2;
  music.play();

  if(!hearts){
    hearts = true;
    heartLoop();
    fireflies();
  }

  if(n+1 === 3) startCount();
}

function startCount(){
  let c = 5;
  const el = document.getElementById("count");

  const t = setInterval(()=>{
    el.innerText = --c;
    if(c === 0){
      clearInterval(t);
      document.getElementById("p3").classList.remove("show");
      document.getElementById("p4").classList.add("show");
    }
  },1000);
}

function blowCandle(){
  document.querySelector(".candle-big").innerText = "💨";
  document.querySelector(".cake").classList.remove("hidden");
}

function cutCake(){
  if(cakeCut) return;
  cakeCut = true;
  document.getElementById("knife").classList.add("cut");

  document.getElementById("loveText").classList.remove("hidden");
  animateLetter();   // 🔥 ADDED (animation)

  document.getElementById("reasons").classList.remove("hidden");
  document.querySelector(".memory").classList.remove("hidden");
}

function heartLoop(){
  setInterval(()=>{
    const h = document.createElement("div");
    h.className = "heart";
    h.innerHTML = "❤️";
    h.style.left = Math.random()*100 + "vw";
    document.body.appendChild(h);
    setTimeout(()=>h.remove(),7000);
  },600);
}

function fireflies(){
  setInterval(()=>{
    const f = document.createElement("div");
    f.className = "fly";
    f.style.left = Math.random()*100 + "vw";
    document.body.appendChild(f);
    setTimeout(()=>f.remove(),7000);
  },800);
}

/* 🔥 LETTER LINE BY LINE FADE ANIMATION (NEW FUNCTION) */

function animateLetter(){
  const container = document.getElementById("loveText");
  const text = container.innerText.trim().split("\n");
  container.innerHTML = "";

  let index = 0;

  function showNextLine(){
    if(index >= text.length) return;

    const line = document.createElement("div");
    line.className = "letter-line";
    line.textContent = text[index];
    container.appendChild(line);

    index++;
    setTimeout(showNextLine, 400); // speed control (increase = slower)
  }

  showNextLine();
}
