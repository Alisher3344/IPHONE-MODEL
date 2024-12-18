const pauseAlarm = document.querySelector(".pause-alarm");
const playBtn = document.querySelector(".play-alarm");
const audio = document.querySelector("audio");
const timeH1 =document.querySelector(".big_time");
const inputValue = document.querySelector("#timeInput");


let getTime = "";
inputValue.addEventListener("input", () => {
    const a = inputValue.value;
    let date = new Date();
    let time = date.toLocaleTimeString("it-IT");
    
    if (time === `${a}:00`) {
      audio.play();
    }
});


audio.style.display = "none";
setInterval(() => {


  const hozirgiVaqt = new Date();
  const soat = hozirgiVaqt.getHours();
  const daqiqa = hozirgiVaqt.getMinutes();
  const soniya = hozirgiVaqt.getSeconds();

  const formatlash = (raqam) => (raqam < 10 ? `0${raqam}` : raqam);
  timeH1.textContent=`${formatlash(soat)}:${formatlash(daqiqa)}:${formatlash(soniya)}`;
}, 100);

playBtn.addEventListener("click", () => {
  audio.play();
});

pauseAlarm.addEventListener("click", () => {
  audio.pause();
});


