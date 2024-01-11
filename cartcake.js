// Menu categories
const cakeTag = document.querySelector("#cake");
const cupcakeTag = document.querySelector("#cupcake");
const miniTag = document.querySelector("#mini");
const sliceTag = document.querySelector("#slice");

// mother & show Menu & Add on name & add on img
const motherTag = document.querySelector("#mother");
const ShowItemTag = document.querySelector("#Showitem1");
const addOnImgTag = document.querySelector("#AddOnImg");
const addOnImgTag2 = document.querySelector("#AddOnImg2");
const addOnNameTag = document.querySelector("#AddOnName");
const addOnNameTag2 = document.querySelector("#AddOnName2");
const addOnPriceTag2 = document.querySelector("#AddOnPrice2");

// input type
const lyrprice1 = document.querySelector(".layerPrice1");
const lyrprice2 = document.querySelector(".layerPrice2");
const lyrprice3 = document.querySelector(".layerPrice3");
const lyrprice4 = document.querySelector(".layerPrice4");
const fvlstraw = document.querySelector("#falvourStraw");
const fvlchoco = document.querySelector("#falvourChoco");
const fvlberry = document.querySelector("#falvourBerry");
const fvlcheese = document.querySelector("#falvourCheese");
const itemlyr1 = document.querySelector("#Layer1");
const itemlyr2 = document.querySelector("#Layer2");
const itemlyr3 = document.querySelector("#Layer3");
const itemlyr4 = document.querySelector("#Layer4");

// Add on categories & exit & AddtocartBtn  & Count of item
const ShowAddOnCategoriesTag = document.querySelector("#ShowAddOnCategories");
const ShowAddOnCategoriesTag2 = document.querySelector("#ShowAddOnCategories2");
const exiticon = document.querySelector(".bx-no-entry");
const exiticon2 = document.querySelector(".entry");
const AddToCartTag = document.querySelector("#AddToCart");
const AddToCartTag2 = document.querySelector("#AddToCart2");
const countOfItemTag = document.querySelector("#countOfItem");
const countOfItemTag2 = document.querySelector("#countOfItem2");

// show Cart
const tolCost = document.querySelector(".tolamount");
const carticon = document.querySelector(".bxs-cart");
const showTag = document.querySelector("#shoppingList");
const showTag2 = document.querySelector("#showcart");
const cartexit = document.querySelector(".bxs-no-entry");

const CartArray = [];

// Arrays for Menus
const birthdayCake = [
  {
    name: "Fresh Strawberry",
    image:
      "https://i.pinimg.com/originals/f4/b4/f1/f4b4f1c3b02cb806b7a792bdbe893089.jpg",
    price: "9000",
  },
  {
    name: "Vegan Choco",
    image:
      "https://www.upcakes.sg/wp-content/uploads/2019/06/IMG_9231-1200x1500.jpg",
    price: "10000",
  },
  {
    name: "Creamy layer straw",
    image:
      "https://wellfedbaker.com/wp-content/uploads/2023/05/gluten-free-strawberry-cake-32.jpg",
    price: "14000",
  },
  {
    name: "Brownie Choco",
    image:
      "https://olivesnthyme.com/wp-content/uploads/2023/02/Brownie-Cake-18.jpg",
    price: "12000",
  },
  {
    name: "Drip Choco",
    image:
      "https://inbloombakery.com/wp-content/uploads/2020/09/chocolate-drip-cake-1.jpg",
    price: "10000",
  },
  {
    name: "Ice-cream Straw",
    image:
      "https://bonnibakery.com/wp-content/uploads/2023/02/Chocolate-Strawberry-Cake_37-2.jpg.webp",
    price: "18000",
  },
  {
    name: "Choco",
    image:
      "https://wellfedbaker.com/wp-content/uploads/2023/01/small-chocolate-cake-9.jpg",
    price: "13000",
  },
];

const cupcake = [
  {
    name: "Berry muffin",
    image:
      "https://inbloombakery.com/wp-content/uploads/2022/04/blueberry-muffins-9.jpg",
    price: "2500",
  },
  {
    name: "Choco capcake",
    image:
      "https://joyfoodsunshine.com/wp-content/uploads/2021/02/best-chocolate-cupcake-recipe-6.jpg",
    price: "2000",
  },
  {
    name: "Blueberry Capcake",
    image:
      "https://olivesnthyme.com/wp-content/uploads/2023/05/Blueberry-Cupcakes-9.jpg",
    price: "3000",
  },
  {
    name: "Cupcake1 Straw",
    image:
      "https://www.bakeandbacon.com/wp-content/uploads/2021/08/strawberry-filled-cupcakes-15.jpg",
    price: "3000",
  },
  {
    name: "Berry cupcake",
    image:
      "https://thedarkchocolatebakery.com/wp-content/uploads/2021/10/berry-cheesecake-same-day-delivery-dallas.png",
    price: "2500",
  },
];

const minicake = [
  {
    name: "Cotton Cheese",
    image:
      "https://takestwoeggs.com/wp-content/uploads/2022/05/Japanese-Cotton-Cheesecake-Takestwoeggs-final-photography-2.jpg",
    price: "5500",
  },
  {
    name: "Cupcake Straw",
    image:
      "https://files.steviala.eu/cache/meta_tags/images/1500x1500/f/e/6/2/6053f051b4eff0fd61e74f5f2b89eb65c737/strawberry-tiramisu-cake-enjoy-the-italian-way-without-sugars.webp",
    price: "4000",
  },
  {
    name: "Mini Straw",
    image:
      "https://www.rainbownourishments.com/wp-content/uploads/2022/02/vegan-strawberry-cake-2-1.jpg",
    price: "3000",
  },
  {
    name: "Cheese Cake",
    image:
      "https://hsaa.hsobjects.com/h/menuitems/images/006/857/499/0a02069a78258860465d372cebecd148-size1200.jpeg",
    price: "5500",
  },
  {
    name: "Moist choco berry",
    image:
      "https://sculptedkitchen.com/wp-content/uploads/2021/12/blueberry-chocolate-bundt-cake.jpg",
    price: "4000",
  },
  {
    name: "Creamy Strawberry",
    image:
      "https://stylesweet.com/wp-content/uploads/2022/06/StrawberryChiffonCake_06.jpg",
    price: "3000",
  },
  {
    name: "Cheese Pudding",
    image:
      "https://www.craftpassion.com/wp-content/uploads/cotton-cheesecake-1-1200.jpg",
    price: "4000",
  },
];

const sliceCake = [
  {
    name: "Zuccini Cheese",
    image:
      "https://goodcheapeats.com/wp-content/uploads/2014/09/zucchini-cake-with-cream-cheese-hero-5.jpg",
    price: "3000",
  },
  {
    name: "Flavour Choco",
    image:
      "https://www.jocooks.com/wp-content/uploads/2013/04/chocolate-magic-cake-1-15.jpg",
    price: "3000",
  },
  {
    name: "Eggless pancake berry",
    image:
      "https://www.rainbownourishments.com/wp-content/uploads/2022/02/vegan-berry-ice-cream-cake-1.jpg",
    price: "2000",
  },
  {
    name: "Royale Italian cheese",
    image:
      "https://media.neimanmarcus.com/f_auto,q_auto/01/nm_3639507_100000_m",
    price: "3000",
  },
  {
    name: "Philadelhia Cheese",
    image:
      "https://britneybreaksbread.com/wp-content/uploads/2022/11/philadelphia-no-bake-cheesecake.jpg",
    price: "1500",
  },
  {
    name: "Berry pound cake",
    image:
      "https://i0.wp.com/www.sweetteaandthyme.com/wp-content/uploads/2021/07/blueberry-pound-cake-topped.jpg?fit=1200%2C1500&ssl=1",
    price: "3500",
  },
  {
    name: "Blueberry Lemon",
    image:
      "https://sculptedkitchen.com/wp-content/uploads/2023/04/decorated-lemon-poppyseed-cake-with-cutout.jpg",
    price: "2000",
  },
  {
    name: "Coco Choco",
    image:
      "https://www.thatskinnychickcanbake.com/wp-content/uploads/2015/05/coca-cola-cake-6-scaled.jpg",
    price: "3000",
  },
  {
    name: "Royale Salted Cheese",
    image:
      "https://media.neimanmarcus.com/f_auto,q_auto/01/hc_3517758_100000_m",
    price: "2500",
  },
];

localStorage.clear();

// inputs listeners
fvlstraw.addEventListener("click", () => {
  fvlchoco.checked = false;
  fvlcheese.checked = false;
  fvlberry.checked = false;
  localStorage.setItem("Falvour", "1");
  layerFunction();
});

fvlchoco.addEventListener("click", () => {
  fvlstraw.checked = false;
  fvlcheese.checked = false;
  fvlberry.checked = false;
  localStorage.setItem("Falvour", "2");
  layerFunction();
});

fvlberry.addEventListener("click", () => {
  fvlstraw.checked = false;
  fvlcheese.checked = false;
  fvlchoco.checked = false;
  localStorage.setItem("Falvour", "4");
  layerFunction();
});

fvlcheese.addEventListener("click", () => {
  fvlstraw.checked = false;
  fvlchoco.checked = false;
  fvlberry.checked = false;
  localStorage.setItem("Falvour", "3");
  layerFunction();
});

itemlyr1.addEventListener("click", () => {
  itemlyr2.checked = false;
  itemlyr3.checked = false;
  itemlyr4.checked = false;
  localStorage.setItem("layer", "1");
  layerFunction();
});

itemlyr2.addEventListener("click", () => {
  itemlyr1.checked = false;
  itemlyr3.checked = false;
  itemlyr4.checked = false;
  localStorage.setItem("layer", "2");
  layerFunction();
});

itemlyr3.addEventListener("click", () => {
  itemlyr2.checked = false;
  itemlyr1.checked = false;
  itemlyr4.checked = false;
  localStorage.setItem("layer", "3");
  layerFunction();
});

itemlyr4.addEventListener("click", () => {
  itemlyr2.checked = false;
  itemlyr3.checked = false;
  itemlyr1.checked = false;
  localStorage.setItem("layer", "4");
  layerFunction();
});

// function for Add to cart btn
const layerFunction = () => {
  if (
    localStorage.getItem("layer") > 0 &&
    localStorage.getItem("Falvour") > 0
  ) {
    AddToCartTag.style.backgroundColor = "black";
    AddToCartTag.style.color = "white";
    AddToCartTag.style.cursor = "pointer";
    AddToCartTag.disabled = false;
  }
};

// function for show menu
let j;
const ShowItems = (chooseArray) => {
  ShowItemTag.innerHTML = "";
  switch (chooseArray) {
    case birthdayCake:
      j = 1;
      break;
    case cupcake:
      j = birthdayCake.length + 1;
      break;
    case minicake:
      j = birthdayCake.length + cupcake.length + 1;
      break;
    default:
      birthdayCake.length + cupcake.length + minicake.length + 1;
  }
  for (let i = 0; i < chooseArray.length; i++) {
    const boxes = document.createElement("div");
    boxes.classList.add("ShowItemUnder");

    const pic = document.createElement("img");
    pic.src = chooseArray[i].image;
    pic.classList.add("pic");

    const name = document.createElement("p");
    name.append(chooseArray[i].name);
    name.classList.add("name0");

    const price = document.createElement("p");
    price.append(chooseArray[i].price);
    price.classList.add("name0", "price0");

    const BuyTag = document.createElement("button");
    BuyTag.append("Buy");
    BuyTag.classList.add("BuyItem");
    BuyTag.id = j;
    j++;

    boxes.append(pic, name, price, BuyTag);
    ShowItemTag.append(boxes);
  }
};

// function for showing Add on categories div
const productClickByBuy = (product) => {
  if (product.id < 8) {
    addOnImgTag.src = product.img;
    addOnNameTag.innerHTML = product.name;
    lyrprice1.innerHTML = product.price;
    lyrprice2.innerHTML = product.price * 2;
    lyrprice3.innerHTML = product.price * 3;
    lyrprice4.innerHTML = product.price * 4;
    countOfItemTag.innerHTML = product.count;
    motherTag.style.opacity = "0.3px";
    motherTag.style.filter = "blur(15px)";
    ShowAddOnCategoriesTag.style.display = "block";
  } else {
    addOnImgTag2.src = product.img;
    addOnNameTag2.innerHTML = product.name;
    addOnPriceTag2.innerHTML = product.price;
    countOfItemTag2.innerHTML = product.count;
    motherTag.style.opacity = "0.3px";
    motherTag.style.filter = "blur(15px)";
    ShowAddOnCategoriesTag2.style.display = "block";
  }
};

// function for showing cart div
const productClickByAddToCart = (pds) => {
  for (let i = 0; i < CartArray.length; i++) {
    if (CartArray[i].id < 8) {
      if (
        CartArray[i].id == pds.id &&
        CartArray[i].layer == pds.layer &&
        CartArray[i].falvour == pds.falvour
      ) {
        CartArray[i].count = CartArray[i].count + pds.count;
        return;
      }
    }
    if (CartArray[i].id > 8) {
      if (CartArray[i].id == pds.id) {
        CartArray[i].count = CartArray[i].count + pds.count;
        return;
      }
    }
  }
  CartArray.push(pds);
};

// function for checking
const checking = (pdss) => {
  const checkItem = CartArray.find((item) => item.id == pdss.id);
  if (checkItem) {
    AddToCartTag.innerHTML = "Updated cart";
    AddToCartTag2.innerHTML = "Updated cart";
  } else {
    AddToCartTag.innerHTML = "Add to cart";
    AddToCartTag2.innerHTML = "Add to cart";
  }
};

// function for tol costing
const totalcosting = () => {
  let sum = 0;
  CartArray.forEach((pro) => {
    sum += pro.basePrice * pro.count;
  });
  return sum;
};

// function for cart show Div
const updateShoppingCartHTML = () => {
  if (CartArray.length > 0) {
    let result = CartArray.map((pros) => {
      if (pros.id < 8) {
        return `
            <li class="BuyItem2">
            <div class="flexx">
                <img src="${pros.img}" class="ItemImage3">
                    <div class="nmpri">
                        <h5 class="changesize1">${pros.name}</h5>
                        <h5 class="changesize1 changesize3 ">${pros.layer}</h5>
                        <h5 class="changesize1 changesize2">${pros.falvour}</h5>
   
                        <h6 class="changesize1"><span>Base price - </span>${
                          pros.basePrice
                        }MMK</h6>
                        <h6 class="changesize1">${
                          pros.basePrice * pros.count
                        }MMK</h6>
                        <div class="plusminus">
                        <button class="minus3 fs" id="${pros.id}">-</button>
                        <b><span class="countOfProduct3 changesize1">${
                          pros.count
                        }</span></b>
                        <button class="plus3 fs" id="${pros.id}">+</button>
                    </div>
                
                    </div>
                </div>
                   
                    <hr>
            </li>
            `;
      } else {
        return `
            <li class="BuyItem2">
            <div class="flexx">
                <img src="${pros.img}" class="ItemImage3">
                    <div class="nmpri">
                        <h5 class="changesize1">${pros.name}</h5>   
                        <h6 class="changesize1"><span>Base price - </span>${
                          pros.basePrice
                        }MMK</h6>
                        <h6 class="changesize1">${
                          pros.basePrice * pros.count
                        }MMK</h6>
                        <div class="plusminus">
                        <button class="minus3 fs" id="${pros.id}">-</button>
                        <b><span class="countOfProduct3 changesize1">${
                          pros.count
                        }</span></b>
                        <button class="plus3 fs" id="${pros.id}">+</button>
                    </div>
                    </div>
                </div> 
                    <hr>
            </li>
            `;
      }
    });
    showTag.innerHTML = result.join("");
    tolCost.innerHTML = totalcosting() + "MMK";
    document.querySelector(".check").classList.remove("hidden");
  } else {
    showTag.innerHTML = `<h4 class="changesize" style="font-size: 20px; color: rgb(250, 142, 10); text-align: center;">Cart list is empty.</h4>`;
    document.querySelector(".check").classList.add("hidden");
    tolCost.innerHTML = "";
  }

  const Buyy = document.querySelectorAll(".BuyItem2");
  console.log("hyugffy6fyu", Buyy);
  Buyy.forEach((pdu) => {
    pdu.addEventListener("click", (e) => {
      const plusbtn3 = e.target.classList.contains("plus3");
      const minusbtn3 = e.target.classList.contains("minus3");
      console.log("event", e.target.id);
      if (plusbtn3 || minusbtn3) {
        for (let i = 0; i < CartArray.length; i++) {
          if (e.target.id < 8) {
            const layerss = pdu.querySelector(".changesize3").innerHTML;
            console.log("ll", layerss);
            const favour = pdu.querySelector(".changesize2").innerHTML;
            console.log("ff", favour);
            if (
              CartArray[i].id == e.target.id &&
              CartArray[i].layer == layerss &&
              CartArray[i].falvour == favour
            ) {
              if (plusbtn3) {
                CartArray[i].count += 1;
              } else if (minusbtn3) {
                CartArray[i].count -= 1;
              }
              CartArray[i].price = CartArray[i].basePrice * CartArray[i].count;
            }
            if (
              CartArray[i].count <= 0 &&
              CartArray[i].layer == layerss &&
              CartArray[i].falvour == favour
            ) {
              CartArray.splice(i, 1);
            }
          }
          if (e.target.id >= 8) {
            if (CartArray[i].id == e.target.id) {
              if (plusbtn3) {
                CartArray[i].count += 1;
              } else if (minusbtn3) {
                CartArray[i].count -= 1;
              }
              CartArray[i].price = CartArray[i].basePrice * CartArray[i].count;
            }
            if (CartArray[i].count <= 0) {
              CartArray.splice(i, 1);
            }
          }
        }
        updateShoppingCartHTML();
      }
    });
  });
};

// function for clicking buy btn
const itemByBuy = () => {
  const buybtn = document.querySelectorAll(".ShowItemUnder");
  console.log(buybtn);
  buybtn.forEach((pd) => {
    pd.addEventListener("click", (e) => {
      if (e.target.classList.contains("BuyItem")) {
        const pdid = e.target.id;
        const pdname = pd.querySelector(".name0").innerHTML;
        const pdprice = pd.querySelector(".price0").innerHTML;
        const pdimg = pd.querySelector(".pic").src;
        BuyProducts = {
          img: pdimg,
          name: pdname,
          id: pdid,
          count: 1,
          price: +pdprice,
          basePrice: +pdprice,
        };
        console.log(BuyProducts);
        productClickByBuy(BuyProducts);
        checking(BuyProducts);
      }
    });
  });

  // updateShoppingCartHTML();
};

ShowAddOnCategoriesTag.addEventListener("click", (e) => {
  const plusbtn = e.target.classList.contains("plus");
  const minusbtn = e.target.classList.contains("minus");
  if (plusbtn || minusbtn) {
    if (BuyProducts.count == 1) {
      if (plusbtn) {
        BuyProducts.count += 1;
        countOfItemTag.innerHTML = BuyProducts.count;
      }
      if (minusbtn) {
        countOfItemTag.innerHTML = BuyProducts.count;
      }
    } else if (BuyProducts.count > 1) {
      if (plusbtn) {
        BuyProducts.count += 1;
        countOfItemTag.innerHTML = BuyProducts.count;
      }
      if (minusbtn) {
        BuyProducts.count -= 1;
        countOfItemTag.innerHTML = BuyProducts.count;
      }
    }
  }
});

ShowAddOnCategoriesTag2.addEventListener("click", (e) => {
  const plusbtn2 = e.target.classList.contains("plus2");
  const minusbtn2 = e.target.classList.contains("minus2");
  if (plusbtn2 || minusbtn2) {
    if (BuyProducts.count == 1) {
      if (plusbtn2) {
        BuyProducts.count += 1;
        countOfItemTag2.innerHTML = BuyProducts.count;
      }
      if (minusbtn2) {
        countOfItemTag2.innerHTML = BuyProducts.count;
      }
    } else if (BuyProducts.count > 1) {
      if (plusbtn2) {
        BuyProducts.count += 1;
        countOfItemTag2.innerHTML = BuyProducts.count;
      }
      if (minusbtn2) {
        BuyProducts.count -= 1;
        countOfItemTag2.innerHTML = BuyProducts.count;
      }
    }
  }
});

AddToCartTag.addEventListener("click", () => {
  let itemPrice;
  let itemLayer;
  switch (localStorage.getItem("layer")) {
    case "1":
      itemPrice = BuyProducts.price;
      itemLayer = "1 layer";
      break;
    case "2":
      itemPrice = BuyProducts.price * 2;
      itemLayer = "2 layers";
      break;
    case "3":
      itemPrice = BuyProducts.price * 3;
      itemLayer = "3 layers";
      break;
    default:
      itemPrice = BuyProducts.price * 4;
      itemLayer = "4 layers";
  }
  let itemFalvour;
  switch (localStorage.getItem("Falvour")) {
    case "1":
      itemFalvour = "Strawberry";
      break;
    case "2":
      itemFalvour = "Chocolate";
      break;
    case "3":
      itemFalvour = "Cheese";
      break;
    default:
      itemFalvour = "Blueberry";
  }
  console.log(BuyProducts.id);
  const AddtoCartObject = {
    img: BuyProducts.img,
    name: BuyProducts.name,
    price: +itemPrice,
    layer: itemLayer,
    falvour: itemFalvour,
    count: BuyProducts.count,
    id: BuyProducts.id,
    basePrice: +itemPrice,
  };
  console.log(AddtoCartObject);
  productClickByAddToCart(AddtoCartObject);
  updateShoppingCartHTML();
  console.log(CartArray);
  changing();
  ShowAddOnCategoriesTag.style.display = "none";
});
AddToCartTag2.addEventListener("click", () => {
  const AddtoCartObject = {
    img: BuyProducts.img,
    name: BuyProducts.name,
    price: +BuyProducts.price,
    count: BuyProducts.count,
    id: BuyProducts.id,
    basePrice: +BuyProducts.price,
  };
  console.log(AddtoCartObject);
  productClickByAddToCart(AddtoCartObject);
  updateShoppingCartHTML();
  console.log(CartArray);
  changing();
  ShowAddOnCategoriesTag2.style.display = "none";
});

// calling functions from different menu categories
window.addEventListener("load", () => {
  cakeTag.style.textShadow = "2px 2px 4px #002A29";
  cakeTag.style.opacity = "1";
  ShowItems(birthdayCake);
  itemByBuy();
});

cakeTag.addEventListener("click", () => {
  cakeTag.style.textShadow = "2px 2px 4px #002A29";
  cakeTag.style.opacity = "1";
  cupcakeTag.style.textShadow = "none";
  cupcakeTag.style.opacity = "0.7";
  miniTag.style.textShadow = "none";
  miniTag.style.opacity = "0.7";
  sliceTag.style.textShadow = "none";
  sliceTag.style.opacity = "0.7";
  ShowItems(birthdayCake);
  itemByBuy();
});

cupcakeTag.addEventListener("click", () => {
  cakeTag.style.textShadow = "none";
  cakeTag.style.opacity = "0.7";
  cupcakeTag.style.textShadow = "2px 2px 4px #002A29";
  cupcakeTag.style.opacity = "1";
  miniTag.style.textShadow = "none";
  miniTag.style.opacity = "0.7";
  sliceTag.style.textShadow = "none";
  sliceTag.style.opacity = "0.7";
  ShowItems(cupcake);
  itemByBuy();
});

miniTag.addEventListener("click", () => {
  cakeTag.style.textShadow = "none";
  cakeTag.style.opacity = "0.7";
  cupcakeTag.style.textShadow = "none";
  cupcakeTag.style.opacity = "0.7";
  miniTag.style.textShadow = "2px 2px 4px #002A29";
  miniTag.style.opacity = "1";
  sliceTag.style.textShadow = "none";
  sliceTag.style.opacity = "0.7";
  ShowItems(minicake);
  itemByBuy();
});

sliceTag.addEventListener("click", () => {
  cakeTag.style.textShadow = "none";
  cakeTag.style.opacity = "0.7";
  cupcakeTag.style.textShadow = "none";
  cupcakeTag.style.opacity = "0.7";
  miniTag.style.textShadow = "none";
  miniTag.style.opacity = "0.7";
  sliceTag.style.textShadow = "2px 2px 4px #002A29";
  sliceTag.style.opacity = "1";
  ShowItems(sliceCake);
  itemByBuy();
});

// exist Btn from add on categories
exiticon.addEventListener("click", () => {
  changing();
});

exiticon2.addEventListener("click", () => {
  changing();
  ShowAddOnCategoriesTag2.style.display = "none";
});

carticon.addEventListener("click", () => {
  motherTag.style.opacity = "0.3px";
  motherTag.style.filter = "blur(15px)";
  showTag2.style.display = "block";
});

cartexit.addEventListener("click", () => {
  motherTag.style.opacity = "1";
  motherTag.style.filter = "blur(0px)";
  showTag2.style.display = "none";
});

const changing = () => {
  motherTag.style.opacity = "1";
  motherTag.style.filter = "blur(0px)";
  ShowAddOnCategoriesTag.style.display = "none";
  fvlstraw.checked = false;
  fvlchoco.checked = false;
  fvlcheese.checked = false;
  fvlberry.checked = false;
  itemlyr1.checked = false;
  itemlyr2.checked = false;
  itemlyr3.checked = false;
  itemlyr4.checked = false;
  AddToCartTag.style.backgroundColor = "#E5E5E5";
  AddToCartTag.style.color = "#ADADAD";
  AddToCartTag.style.cursor = "not-allowed";
  AddToCartTag.disabled = true;
  localStorage.clear();
};

const sideBarTag = document.querySelector(".sideBar");
const tilteBar = document.querySelector("#title1");
sideBarTag.addEventListener("click", () => {
  console.log("hello");
  if (tilteBar.classList.contains("shows")) {
    tilteBar.classList.remove("shows");
    tilteBar.style.display = "none";
  } else {
    tilteBar.classList.add("shows");
    tilteBar.style.display = "block";
  }
});
