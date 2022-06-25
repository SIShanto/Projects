const sound = [
  "ARTCELL",
  "Poth Chola",
  "Oniket Prantor"
];

sound.forEach((sound)=>{
  const btn=document.createElement('button');
  btn.classList.add("btn");
  btn.innerText=sound;
  btn.addEventListener("click",()=>
  {
    stopSongs();
     document.getElementById(sound).play();
  });
  document.body.appendChild (btn);
});

function stopSongs(){
    sound.forEach((sound) =>
    {   
        const song=document.getElementById(sound);
        song.pause();
        song.currentTime =0;
    })
}