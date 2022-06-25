const images = document.getElementById("images");

let idx=0;
const img =document.querySelectorAll("#images img");
const run =() =>
{
    idx++ ;
    if(idx>img.length-1)
    {
        idx=0;

    } 
    images.style.transform = `translateX(${-idx*500}px)`;
}
setInterval (run,2000);
