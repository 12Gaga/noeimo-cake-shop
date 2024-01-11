const icon=document.querySelector(".bx-cart");
const quit=document.querySelector(".bxs-no-entry");
const MotherTag=document.querySelector(".mother2");
const ShowCartTag=document.getElementById("showcart");
const sideBarTag=document.querySelector(".sideBar");
const tilteBar=document.querySelector("#title1");


const straw =[
    {name:"Fresh Strawberry",image:"https://i.pinimg.com/originals/f4/b4/f1/f4b4f1c3b02cb806b7a792bdbe893089.jpg",price:"9000"},
    {name:"Creamy layer Straw",image:"https://wellfedbaker.com/wp-content/uploads/2023/05/gluten-free-strawberry-cake-32.jpg",price:"4000"},
    {name:"Creamy Strawberry",image:"https://stylesweet.com/wp-content/uploads/2022/06/StrawberryChiffonCake_06.jpg",price:"3000"},
    {name:"Mini Straw",image:"https://www.rainbownourishments.com/wp-content/uploads/2022/02/vegan-strawberry-cake-2-1.jpg",price:"3000"},
    {name:"Ice-cream Straw",image:"https://bonnibakery.com/wp-content/uploads/2023/02/Chocolate-Strawberry-Cake_37-2.jpg.webp",price:"8000"},
    {name:"Cupcake Straw",image:"https://files.steviala.eu/cache/meta_tags/images/1500x1500/f/e/6/2/6053f051b4eff0fd61e74f5f2b89eb65c737/strawberry-tiramisu-cake-enjoy-the-italian-way-without-sugars.webp",price:"4000"},
    {name:"Cupcake1 Straw",image:"https://www.bakeandbacon.com/wp-content/uploads/2021/08/strawberry-filled-cupcakes-15.jpg",price:"3000"},
]

const choco =[
    {name:"Vegan Choco",image:"https://www.upcakes.sg/wp-content/uploads/2019/06/IMG_9231-1200x1500.jpg",price:"10000"},
    {name:"Flavour Choco",image:"https://www.jocooks.com/wp-content/uploads/2013/04/chocolate-magic-cake-1-15.jpg",price:"3000"},
    {name:"BroWnie Choco",image:"https://olivesnthyme.com/wp-content/uploads/2023/02/Brownie-Cake-18.jpg",price:"12000"},
    {name:"Drip Choco",image:"https://inbloombakery.com/wp-content/uploads/2020/09/chocolate-drip-cake-1.jpg",price:"10000"},
    {name:"Choco",image:"https://wellfedbaker.com/wp-content/uploads/2023/01/small-chocolate-cake-9.jpg",price:"13000"},
    {name:"Coco Choco",image:"https://www.thatskinnychickcanbake.com/wp-content/uploads/2015/05/coca-cola-cake-6-scaled.jpg",price:"3000"},
    {name:"Choco Cupcake",image:"https://joyfoodsunshine.com/wp-content/uploads/2021/02/best-chocolate-cupcake-recipe-6.jpg",price:"2000"},
]

const cheese =[
    {name:"Cotton Cheese",image:"https://takestwoeggs.com/wp-content/uploads/2022/05/Japanese-Cotton-Cheesecake-Takestwoeggs-final-photography-2.jpg",price:"3000"},
    {name:"Royale Salted Cheese",image:"https://media.neimanmarcus.com/f_auto,q_auto/01/hc_3517758_100000_m",price:"2500"},
    {name:"Cheese Pudding",image:"https://www.craftpassion.com/wp-content/uploads/cotton-cheesecake-1-1200.jpg",price:"4000"},
    {name:"Philadelhia Cheese",image:"https://britneybreaksbread.com/wp-content/uploads/2022/11/philadelphia-no-bake-cheesecake.jpg",price:"1500"},
    {name:"Zuccini Cheese",image:"https://goodcheapeats.com/wp-content/uploads/2014/09/zucchini-cake-with-cream-cheese-hero-5.jpg",price:"3000"},
    {name:"Royale Italian cheese",image:"https://media.neimanmarcus.com/f_auto,q_auto/01/nm_3639507_100000_m",price:"3000"},
    {name:"Cheese cake",image:"https://hsaa.hsobjects.com/h/menuitems/images/006/857/499/0a02069a78258860465d372cebecd148-size1200.jpeg",price:"5500"},
]

const berry =[
    {name:"Blueberry Lemon",image:"https://sculptedkitchen.com/wp-content/uploads/2023/04/decorated-lemon-poppyseed-cake-with-cutout.jpg",price:"2000"},
    {name:"Blueberry Capcake",image:"https://olivesnthyme.com/wp-content/uploads/2023/05/Blueberry-Cupcakes-9.jpg",price:"3000"},
    {name:"Berry mini cake",image:"https://thedarkchocolatebakery.com/wp-content/uploads/2021/10/berry-cheesecake-same-day-delivery-dallas.png",price:"2500"},
    {name:"Moist choco berry",image:"https://sculptedkitchen.com/wp-content/uploads/2021/12/blueberry-chocolate-bundt-cake.jpg",price:"4000"},
    {name:"Berry muffin",image:"https://inbloombakery.com/wp-content/uploads/2022/04/blueberry-muffins-9.jpg",price:"2500"},
    {name:"Eggless pancake berry",image:"https://www.rainbownourishments.com/wp-content/uploads/2022/02/vegan-berry-ice-cream-cake-1.jpg",price:"2000"},
    {name:"Berry pound cake",image:"https://i0.wp.com/www.sweetteaandthyme.com/wp-content/uploads/2021/07/blueberry-pound-cake-topped.jpg?fit=1200%2C1500&ssl=1",price:"3500"},
]

icon.addEventListener("click",()=>{
    ShowCartTag.style.display="block";
    MotherTag.style.filter="brightness(50%)";
    MotherTag.style.opacity="0.5";
})

quit.addEventListener("click",()=>{
    ShowCartTag.style.display="none";
    MotherTag.style.filter="brightness(100%)";
    MotherTag.style.opacity="1";
})

const stawTag=document.getElementById("strawTag");
const chocoTag=document.getElementById("chocoTag");
const cheeseTag=document.getElementById("CheeseTag");
const blueTag=document.getElementById("blueTag");




let j=1;
const change=(tagName,arrayName)=>{
    for(let i=0;i<arrayName.length;i++){
        const product=document.createElement("div");
        product.classList.add("product");
        
        const productUnder=document.createElement("div");
        productUnder.classList.add("productUnder");
        

        const productimage=document.createElement("div");
        productimage.classList.add("productImage");
        const imageproduct=document.createElement("img");
        imageproduct.classList.add("img6")
        imageproduct.src=arrayName[i].image;
        const buttonDiv=document.createElement("div");
        buttonDiv.classList.add("productOver");
        const btn4=document.createElement("button");
        btn4.classList.add("btn4","AddToCart");
        btn4.id=j;
        btn4.append("Add To Cart");
        buttonDiv.append(btn4);
        productimage.append(imageproduct,buttonDiv);
        
        const productSummery=document.createElement("div");
        productSummery.classList.add("productSummery");
        const productName=document.createElement("h4");
        productName.classList.add("productName","changesize");
        productName.append(arrayName[i].name);
        const productPrice=document.createElement("h4");
        productPrice.classList.add("productPrice","changesize");
        productPrice.append(arrayName[i].price);
        
        productSummery.append(productName,productPrice);
        productUnder.append(productimage,productSummery);
        product.append(productUnder);
        
        tagName.append(product);
        j++;
        }
}
change(stawTag,straw);
change(chocoTag,choco);
change(cheeseTag,cheese);
change(blueTag,berry);

// const addbtn=document.querySelectorAll(".btn4");
// console.log(addbtn);
// addbtn.forEach(btn=>{
//     btn.addEventListener("click",()=>{
//         btn.classList.add("AddToCart");
//     })
// })
let productInCart=[];
const products=document.querySelectorAll(".productUnder");
console.log(products);
const showItem=document.getElementById("shoppingList");
const tolCost=document.getElementById("cost");
const submitbtm=document.querySelector(".check");

const totalcosting=()=>{
    let sum=0;
    productInCart.forEach(pro=>{
        sum+=pro.price;
    })
    return sum;
}

const updateShoppingCartHTML=()=>{
       if(productInCart.length>0){
        let result=productInCart.map((pros)=>{
            return `
            <li class="BuyItem">
            <div class="flexx">
                <img src="${pros.images}" class="ItemImage">
                    <div class="nmpri">
                        <h5 class="changesize1">${pros.name}</h5>
                        <h6 class="changesize1"><span>Base price - </span>${pros.basePrice}MMK</h6>
                        <h6 class="changesize1">${pros.price}MMK</h6>
                    </div>
                </div>
                    <div class="plusminus">
                        <button class="minus fs" id="${pros.id}">-</button>
                        <b><span class="countOfProduct">${pros.count}</span></b>
                        <button class="plus fs" id="${pros.id}">+</button>
                    </div>
                
                    <hr>
            </li>
            `
        })
        showItem.innerHTML=result.join("");
        tolCost.innerHTML=totalcosting()+"MMK";
        document.querySelector(".check").classList.remove("hidden");
       }
       else{
        showItem.innerHTML=`<h4 class="changesize" style="font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">Cart list is empty.</h4>`;
        document.querySelector(".check").classList.add("hidden");
        tolCost.innerHTML="";

       }
}

const updateProductInCart=(pro)=>{
        for(let i=0;i<productInCart.length;i++){
            if(productInCart[i].id==pro.id){
               productInCart[i].count+=1;
               productInCart[i].price=productInCart[i].basePrice*productInCart[i].count;
               return;
            }       
}
productInCart.push(pro);
}
products.forEach(pd=>{
    pd.addEventListener("click",(e)=>{
        if(e.target.classList.contains("AddToCart")){
            const productId=e.target.id;
            console.log(productId);
            const productsName=pd.querySelector(".productName").innerHTML;
            console.log(productsName);
            const productsPrice=pd.querySelector(".productPrice").innerHTML;
            const productsImage=pd.querySelector("img").src;
       
            let productToCart={
                name:productsName,
                images:productsImage,
                id:productId,
                count:1,
                price: +productsPrice,
                basePrice: +productsPrice,
            }
            updateProductInCart(productToCart);
            updateShoppingCartHTML();
        }
    })
    updateShoppingCartHTML();
})
console.log(showItem);
showItem.addEventListener("click",(e)=>{
    const plusbtn=e.target.classList.contains("plus")
    const minusbtn=e.target.classList.contains("minus");
   if(plusbtn || minusbtn){
    for(let i=0;i<productInCart.length;i++){
        if(productInCart[i].id==e.target.id){
            if(plusbtn){
                productInCart[i].count+=1;
            }
            else if(minusbtn){
                productInCart[i].count-=1;
            }
            productInCart[i].price=productInCart[i].basePrice*productInCart[i].count;
        }
        if(productInCart[i].count<=0){
            productInCart.splice(i,1);
        }
    }
    updateShoppingCartHTML();
   }

})



const clickbtn=document.querySelectorAll(".btn4");
console.log(clickbtn);
clickbtn.forEach(ck=>{
    ck.addEventListener("click",()=>{
        ck.style.padding="7px";
       setTimeout(()=>{
        ck.style.padding="10px";
       },200);
    })
})

sideBarTag.addEventListener("click",()=>{
    console.log("hello");
    if(tilteBar.classList.contains("shows")){
        tilteBar.classList.remove("shows");
        tilteBar.style.display="none";
    }
    else{
        tilteBar.classList.add("shows");
        tilteBar.style.display="block";
    }
 })


