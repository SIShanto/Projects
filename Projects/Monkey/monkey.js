const closed=document.querySelector(".closed");
const open=document.querySelector(".open");

closed.addEventListener('click',()=>
{
    if(open.classList.contains('open')){
        open.classList.add('active');
        closed.classList.remove('active');
    }
})

open.addEventListener('click',()=>{
    if(closed.classList.contains('closed'))
    {
     open.classList.remove('active');
     closed.classList.add('active');
 }
   
})