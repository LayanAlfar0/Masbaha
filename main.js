let buttons= document.querySelectorAll("button");
for(let i=0;i<buttons.length;i++)
{
    let count=0;
    buttons[i].onclick=(e)=>{
        e.target.nextElementSibling.firstChild.textContent=`" ${++count} "`;
    }
}