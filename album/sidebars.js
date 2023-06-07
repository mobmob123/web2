var toggleButton = document.getElementById("toggle-button");
var container = document.getElementsByClassName("container")[0];
let data;


toggleButton.addEventListener("click", function() {
  container.classList.toggle("sidebar-expanded");
  if(toggleButton.innerText=="展\n開")
    toggleButton.innerText="收\n起"
  else
    toggleButton.innerText="展\n開"
  
});


$(".add").click(function () { 
  let badge = $(".cart-badge");
  AddCart(Ingredient, Measure,Name);
  badge.text( Number(badge.text())+1);
});


// 保存购物车数据到本地存储
function saveCartToLocalStorage(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

// 从本地存储中加载购物车数据
function loadCartFromLocalStorage() {
  const cart = localStorage.getItem('cart');
  return cart ? JSON.parse(cart) : { recipes: [] };
}

// 在页面加载时加载购物车数据
window.addEventListener('load', function() {
  const cart = loadCartFromLocalStorage();
  data =cart;
  $(".cart-badge").text(cart.recipes.length);
  // 在此处更新购物车界面
});

// 当购物车更新时保存到本地存储
function AddCart(a, b, name) {
  const cart = loadCartFromLocalStorage();
  const newRecipe = {
    ingredient: a,
    measure: b ,
    title :name
  };

  cart.recipes.push(newRecipe);
  saveCartToLocalStorage(cart);
  data = loadCartFromLocalStorage();
}

function getdata(callback){
  const cart = loadCartFromLocalStorage();
  callback(cart);
}

function clearCart() {
  localStorage.removeItem("cart");
  location.reload();
}

function deleteRecipe(i){
let temp = loadCartFromLocalStorage();

console.log((i));


temp.recipes.splice(i, 1);

saveCartToLocalStorage(temp);

location.reload();
}


document.addEventListener('click', handleClick);

function handleClick(event) {
  // 檢查點選的目標是否是<div id="a">
  if (event.target.id !== "toggle-button") {
    // 執行你的函數
    $(".container").removeClass("sidebar-expanded");
  }
  if (event.target.id !== "popup" && !event.target.closest('.col')) {
     hidePopup();
  }
}


