const btn= document.getElementById('btn');
const cont= document.getElementById('cont');

btn.addEventListener('click',()=>
{
    creatNotification();
})

const creatNotification =()=>
{
    const notif= document.createElement('div')
    notif.classList.add("toast");
    cont.appendChild(notif);
    notif.innerText = "Stop clicking me you Idiot!!!😡😡";
    setTimeout(()=>
    {
        notif.remove();
        
    },5000);
}