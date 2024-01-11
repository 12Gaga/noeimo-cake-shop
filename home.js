const iconsTag=document.querySelectorAll('.ic');
const monther1Tag=document.getElementById("mother");
const iconTag=document.getElementById("icon1");
const subTag=document.getElementById("btn3");
const tilteBar=document.querySelector("#title1");
const imgtag=document.getElementById("img12");
const boxtag=document.querySelectorAll(".box");
const order11tag=document.getElementsByClassName("order11")[0];
const kpayTag=document.querySelector("#kpay");
const wpayTag=document.querySelector("#wpay");
const ApayTag=document.querySelector("#Apay");
const IpayTag=document.querySelector("#Ipay");
const slidetag=document.querySelector(".slides");
const titleTag=document.querySelector("#title1");

// For heart icon
iconsTag.forEach(icon=>{
    icon.addEventListener("click",(e)=>{
        if(e.target.classList.contains('bxs-heart')){
            icon.classList.remove("bxs-heart");
        }else{
            icon.classList.add("bxs-heart");
        }
    })
})


// showing payment box after clicking  “ Order this ”  button 
boxtag.forEach(box=>{
    box.addEventListener("click",(e)=>{
      if(e.target.classList.contains("btn1")){
        monther1Tag.style.opacity="0.3px";
        monther1Tag.style.filter="blur(15px)";
        order11tag.style.display="block";
       const img12tag=box.querySelector("img").src;
       imgtag.src=img12tag;
      }
    })
})

// for close icon
iconTag.addEventListener("click",()=>{
    monther1Tag.style.opacity="1px";
    monther1Tag.style.filter="blur(0px)";
    order11tag.style.display="none";
    localStorage.clear();
    existing();
})

// alert box after clicking submit from payment box
subTag.addEventListener("click",()=>{
    order11tag.style.display="none";
    alert("Order successful");
    monther1Tag.style.opacity="1px";
    monther1Tag.style.filter="blur(0px)";
    localStorage.clear();    
    existing();
})

// change choosing for payment
kpayTag.addEventListener("click",()=>{
    wpayTag.checked=false;
    ApayTag.checked=false;
    IpayTag.checked=false;
    localStorage.setItem('pay','1');
    payment();
})

wpayTag.addEventListener("click",()=>{
    kpayTag.checked=false;
    ApayTag.checked=false;
    IpayTag.checked=false;
    localStorage.setItem('pay','1');
    payment();
})

ApayTag.addEventListener("click",()=>{
    wpayTag.checked=false;
    kpayTag.checked=false;
    IpayTag.checked=false;
    localStorage.setItem('pay','1');
    payment();
})

IpayTag.addEventListener("click",()=>{
    wpayTag.checked=false;
    ApayTag.checked=false;
    kpayTag.checked=false;
    localStorage.setItem('pay','1');
    payment();
})

const payment=()=>{
    if(localStorage.getItem('pay')==1){
        subTag.disabled=false;
        subTag.style.backgroundColor="rgb(155, 47, 112)";
        subTag.style.color="white";
        subTag.style.cursor="pointer";
    }
}

const existing=()=>{
    subTag.disabled=true;
    subTag.style.backgroundColor="white";
    subTag.style.color="gray";
    subTag.style.cursor="not-allowed";
    wpayTag.checked=false;
    ApayTag.checked=false;
    IpayTag.checked=false;
    kpayTag.checked=false;
}

slidetag.addEventListener("click",()=>{
    if(slidetag.classList.contains('click')){
        slidetag.classList.remove("click");
        titleTag.style.display="none";
    }else{
        slidetag.classList.add("click");
        titleTag.style.display="block";
    }
})