const text="I don't know what is happening";

let index=0;

const writeText=()=>
{
    document.body.innerText=text.slice(0,index);
    index++;
    if(index>text.length)
    {
        index=0;
    }
}
setInterval(writeText,150);