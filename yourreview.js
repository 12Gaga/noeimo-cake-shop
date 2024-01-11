const btn3tag=document.querySelector(".btn33");
const icontag=document.querySelectorAll('.bx1');

btn3tag.addEventListener("click",()=>{
    alert("Review successful");
})

icontag.forEach(icon=>{
    icon.addEventListener("click",(e)=>{
        if(e.target.classList.contains('bxs-star')){
            icon.classList.remove('bxs-star');
        }else{
        icon.classList.add('bxs-star');
        }
    })
})