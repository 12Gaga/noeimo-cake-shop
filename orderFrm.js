const clickTag=document.querySelector(".btn5");
const thankTag=document.querySelector(".thanksdiv");
const orderTag=document.querySelector(".orderReview");
const sideBarTag=document.querySelector(".sideBar");
const tilteBar=document.querySelector("#title1");
const kpayTag=document.querySelector("#kpay");
const wpayTag=document.querySelector("#wpay");
const ApayTag=document.querySelector("#Apay");
const IpayTag=document.querySelector("#Ipay");

clickTag.addEventListener("click",()=>{
   thankTag.style.display="block";
   orderTag.style.filter="brightness(50%)";
   orderTag.style.filter="blur(5px)";
   alert("Your order sucessful");
   existing();
   localStorage.clear();
})

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
       clickTag.disabled=false;
       clickTag.style.backgroundColor="#21CCD3";
       clickTag.style.color="white";
       clickTag.style.cursor="pointer";
   }
}

const existing=()=>{
   clickTag.disabled=true;
   clickTag.style.backgroundColor="white";
   clickTag.style.color="gray";
   clickTag.style.cursor="not-allowed";
   wpayTag.checked=false;
   ApayTag.checked=false;
   IpayTag.checked=false;
   kpayTag.checked=false;
}