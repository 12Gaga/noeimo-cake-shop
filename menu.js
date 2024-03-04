const sliderbar = document.getElementById("slider");
const listtag = document.getElementById("list");
const showpicture = document.getElementById("showpic");

const cakes = [
  {
    name: "Fresh Strawberry",
    image:
      "https://i.pinimg.com/originals/f4/b4/f1/f4b4f1c3b02cb806b7a792bdbe893089.jpg",
    price: "9000",
  },
  {
    name: "Cotton Cheese",
    image:
      "https://takestwoeggs.com/wp-content/uploads/2022/05/Japanese-Cotton-Cheesecake-Takestwoeggs-final-photography-2.jpg",
    price: "5500",
  },
  {
    name: "Vegan Choco",
    image:
      "https://www.upcakes.sg/wp-content/uploads/2019/06/IMG_9231-1200x1500.jpg",
    price: "10000",
  },
  {
    name: "Cupcake Straw",
    image:
      "https://files.steviala.eu/cache/meta_tags/images/1500x1500/f/e/6/2/6053f051b4eff0fd61e74f5f2b89eb65c737/strawberry-tiramisu-cake-enjoy-the-italian-way-without-sugars.webp",
    price: "4000",
  },
  {
    name: "Berry muffin",
    image:
      "https://inbloombakery.com/wp-content/uploads/2022/04/blueberry-muffins-9.jpg",
    price: "2500",
  },
  {
    name: "Zuccini Cheese",
    image:
      "https://goodcheapeats.com/wp-content/uploads/2014/09/zucchini-cake-with-cream-cheese-hero-5.jpg",
    price: "3000",
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
    name: "Flavour Choco",
    image:
      "https://www.jocooks.com/wp-content/uploads/2013/04/chocolate-magic-cake-1-15.jpg",
    price: "3000",
  },
  {
    name: "Moist choco berry",
    image:
      "https://sculptedkitchen.com/wp-content/uploads/2021/12/blueberry-chocolate-bundt-cake.jpg",
    price: "4000",
  },
  {
    name: "Choco capcake",
    image:
      "https://joyfoodsunshine.com/wp-content/uploads/2021/02/best-chocolate-cupcake-recipe-6.jpg",
    price: "2000",
  },
  {
    name: "Eggless pancake berry",
    image:
      "https://www.rainbownourishments.com/wp-content/uploads/2022/02/vegan-berry-ice-cream-cake-1.jpg",
    price: "2000",
  },
  {
    name: "Creamy layer straw",
    image:
      "https://wellfedbaker.com/wp-content/uploads/2023/05/gluten-free-strawberry-cake-32.jpg",
    price: "14000",
  },
  {
    name: "Royale Italian cheese",
    image:
      "https://media.neimanmarcus.com/f_auto,q_auto/01/nm_3639507_100000_m",
    price: "3000",
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
    name: "Blueberry Capcake",
    image:
      "https://olivesnthyme.com/wp-content/uploads/2023/05/Blueberry-Cupcakes-9.jpg",
    price: "3000",
  },
  {
    name: "Ice-cream Straw",
    image:
      "https://bonnibakery.com/wp-content/uploads/2023/02/Chocolate-Strawberry-Cake_37-2.jpg.webp",
    price: "18000",
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
  {
    name: "Choco",
    image:
      "https://wellfedbaker.com/wp-content/uploads/2023/01/small-chocolate-cake-9.jpg",
    price: "13000",
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

const straw = [
  {
    name: "Fresh Strawberry",
    image:
      "https://i.pinimg.com/originals/f4/b4/f1/f4b4f1c3b02cb806b7a792bdbe893089.jpg",
    price: "9000",
  },
  {
    name: "Creamy layer Straw",
    image:
      "https://wellfedbaker.com/wp-content/uploads/2023/05/gluten-free-strawberry-cake-32.jpg",
    price: "14000",
  },
  {
    name: "Creamy Strawberry",
    image:
      "https://stylesweet.com/wp-content/uploads/2022/06/StrawberryChiffonCake_06.jpg",
    price: "3000",
  },
  {
    name: "Mini Straw",
    image:
      "https://www.rainbownourishments.com/wp-content/uploads/2022/02/vegan-strawberry-cake-2-1.jpg",
    price: "3000",
  },
  {
    name: "Ice-cream Straw",
    image:
      "https://bonnibakery.com/wp-content/uploads/2023/02/Chocolate-Strawberry-Cake_37-2.jpg.webp",
    price: "18000",
  },
  {
    name: "Cupcake Straw",
    image:
      "https://files.steviala.eu/cache/meta_tags/images/1500x1500/f/e/6/2/6053f051b4eff0fd61e74f5f2b89eb65c737/strawberry-tiramisu-cake-enjoy-the-italian-way-without-sugars.webp",
    price: "4000",
  },
  {
    name: "Cupcake1 Straw",
    image:
      "https://www.bakeandbacon.com/wp-content/uploads/2021/08/strawberry-filled-cupcakes-15.jpg",
    price: "3000",
  },
];

const choco = [
  {
    name: "Vegan Choco",
    image:
      "https://www.upcakes.sg/wp-content/uploads/2019/06/IMG_9231-1200x1500.jpg",
    price: "10000",
  },
  {
    name: "Flavour Choco",
    image:
      "https://www.jocooks.com/wp-content/uploads/2013/04/chocolate-magic-cake-1-15.jpg",
    price: "3000",
  },
  {
    name: "BroWnie Choco",
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
    name: "Choco",
    image:
      "https://wellfedbaker.com/wp-content/uploads/2023/01/small-chocolate-cake-9.jpg",
    price: "13000",
  },
  {
    name: "Coco Choco",
    image:
      "https://www.thatskinnychickcanbake.com/wp-content/uploads/2015/05/coca-cola-cake-6-scaled.jpg",
    price: "3000",
  },
  {
    name: "Choco Cupcake",
    image:
      "https://joyfoodsunshine.com/wp-content/uploads/2021/02/best-chocolate-cupcake-recipe-6.jpg",
    price: "2000",
  },
];

const cheese = [
  {
    name: "Cotton Cheese",
    image:
      "https://takestwoeggs.com/wp-content/uploads/2022/05/Japanese-Cotton-Cheesecake-Takestwoeggs-final-photography-2.jpg",
    price: "5500",
  },
  {
    name: "Royale Salted Cheese",
    image:
      "https://media.neimanmarcus.com/f_auto,q_auto/01/hc_3517758_100000_m",
    price: "2500",
  },
  {
    name: "Cheese Pudding",
    image:
      "https://www.craftpassion.com/wp-content/uploads/cotton-cheesecake-1-1200.jpg",
    price: "4000",
  },
  {
    name: "Philadelhia Cheese",
    image:
      "https://britneybreaksbread.com/wp-content/uploads/2022/11/philadelphia-no-bake-cheesecake.jpg",
    price: "1500",
  },
  {
    name: "Zuccini Cheese",
    image:
      "https://goodcheapeats.com/wp-content/uploads/2014/09/zucchini-cake-with-cream-cheese-hero-5.jpg",
    price: "3000",
  },
  {
    name: "Royale Italian cheese",
    image:
      "https://media.neimanmarcus.com/f_auto,q_auto/01/nm_3639507_100000_m",
    price: "3000",
  },
  {
    name: "Cheese cake",
    image:
      "https://hsaa.hsobjects.com/h/menuitems/images/006/857/499/0a02069a78258860465d372cebecd148-size1200.jpeg",
    price: "5500",
  },
];

const berry = [
  {
    name: "Blueberry Lemon",
    image:
      "https://sculptedkitchen.com/wp-content/uploads/2023/04/decorated-lemon-poppyseed-cake-with-cutout.jpg",
    price: "2000",
  },
  {
    name: "Blueberry Capcake",
    image:
      "https://olivesnthyme.com/wp-content/uploads/2023/05/Blueberry-Cupcakes-9.jpg",
    price: "3000",
  },
  {
    name: "Berry cupcake",
    image:
      "https://thedarkchocolatebakery.com/wp-content/uploads/2021/10/berry-cheesecake-same-day-delivery-dallas.png",
    price: "2500",
  },
  {
    name: "Moist choco berry",
    image:
      "https://sculptedkitchen.com/wp-content/uploads/2021/12/blueberry-chocolate-bundt-cake.jpg",
    price: "4000",
  },
  {
    name: "Berry muffin",
    image:
      "https://inbloombakery.com/wp-content/uploads/2022/04/blueberry-muffins-9.jpg",
    price: "2500",
  },
  {
    name: "Eggless pancake berry",
    image:
      "https://www.rainbownourishments.com/wp-content/uploads/2022/02/vegan-berry-ice-cream-cake-1.jpg",
    price: "2000",
  },
  {
    name: "Berry pound cake",
    image:
      "https://i0.wp.com/www.sweetteaandthyme.com/wp-content/uploads/2021/07/blueberry-pound-cake-topped.jpg?fit=1200%2C1500&ssl=1",
    price: "3500",
  },
];

const title = ["All", "Strawberry", "Blueberry", "Chocolate", "Cheese"];

for (let i = 0; i < title.length; i++) {
  const litag = document.createElement("li");
  litag.append(title[i]);
  litag.id = i;
  litag.classList.add("li");
  listtag.append(litag);
  litag.addEventListener("click", (event) => {
    const clicktagid = event.target.id;
    const clicktag = document.getElementById(clicktagid);
    const clicktagwidth = clicktag.offsetWidth;
    const clicktagoffsetleft = clicktag.offsetLeft;
    sliderbar.style.width = clicktagwidth + "px";
    sliderbar.style.transform = `translateX(${clicktagoffsetleft}px)`;
    sliderbar.style.transition = `all 0.5s ease-in-out`;

    //   showpic
    const selectbar = parseInt(clicktagid, 10);
    if (selectbar === 0) {
      changingPic(cakes);
      zoomout();
    } else if (selectbar === 1) {
      changingPic(straw);
      zoomout();
    } else if (selectbar === 2) {
      changingPic(berry);
      zoomout();
    } else if (selectbar === 3) {
      changingPic(choco);
      zoomout();
    } else if (selectbar === 4) {
      changingPic(cheese);
      zoomout();
    }
  });
  if (i === 0) {
    sliderbar.style.width = litag.offsetWidth + "px";
  }
}

window.addEventListener("load", () => {
  changingPic(cakes);
  zoomout();
});

// ChangingFunction
const changingPic = (choosebar) => {
  showpicture.innerHTML = "";
  for (let i = 0; i < choosebar.length; i++) {
    const boxes = document.createElement("div");
    boxes.classList.add("containers");
    const boxes2 = document.createElement("div");
    boxes2.classList.add("continer1under");

    const picbox = document.createElement("div");
    picbox.classList.add("picbox");

    const pic = document.createElement("img");
    pic.src = choosebar[i].image;
    pic.classList.add("pic");

    const name = document.createElement("p");
    name.append(choosebar[i].name);
    name.classList.add("name1");

    const price = document.createElement("span");
    price.append(choosebar[i].price);
    const kyat = document.createElement("span");
    kyat.append("MMK");
    kyat.classList.add("name1");
    price.classList.add("price1", "name1");

    const detail = document.createElement("button");
    detail.append("more detail");
    detail.classList.add("details");

    picbox.append(pic, name, price, kyat, detail);
    boxes2.append(picbox);
    boxes.append(boxes2);
    showpicture.append(boxes);
  }
};

// more detail
const zoomout = () => {
  const zooms = document.querySelectorAll(".containers");
  const img7tag = document.getElementById("img7");
  const name7tag = document.getElementById("name7");
  const pricetag = document.getElementById("price7");
  const pricetag1 = document.getElementById("price8");
  const pricetag2 = document.getElementById("price9");
  const pricetag3 = document.getElementById("price10");
  const mother5tag = document.getElementById("mother5");
  const zoomtag = document.getElementById("motherZoom");

  console.log(zooms);

  // zooms.forEach((pds) => {
  //   pds.addEventListener("click", (e) => {
  //     if (e.target.classList.contains("details")) {
  //       const imgdiv = pds.querySelector(".pic").src;
  //       const namediv = pds.querySelector(".name1").innerHTML;
  //       const pricediv = pds.querySelector(".price1").innerHTML;

  //       img7tag.src = imgdiv;
  //       name7tag.innerHTML = namediv;
  //       pricetag.innerHTML = "-  " + pricediv + "MMK";
  //       pricetag1.innerHTML = "-  " + pricediv * 2 + "MMK";
  //       pricetag2.innerHTML = "-  " + pricediv * 3 + "MMK";
  //       pricetag3.innerHTML = "-  " + pricediv * 4 + "MMK";
  //       mother5tag.style.opacity = "0.3px";
  //       mother5tag.style.filter = "blur(15px)";
  //       zoomtag.style.display = "block";
  //     }
  //   });
  // });

  zoomtag.addEventListener("click", () => {
    zoomtag.style.display = "none";
    mother5tag.style.opacity = "1px";
    mother5tag.style.filter = "blur(0px)";
  });
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
