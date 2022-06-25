function creatHeart ()
{
    const heart =document.createElement('div');
    heart.classList.add('heart');
    heart.style.left =(Math.random()*100) +
    "vw";
    heart. style. animationDuration = Math.random ()*2+3+"s";

    heart.innerText="Sha💜nto";
    document.body.appendChild(heart);

}
setInterval(creatHeart,300);