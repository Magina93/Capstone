function increment(event) {
   const clickedBtn = event.target
   const inputField = clickedBtn.previousElementSibling
   inputField.stepUp();
}
// look for the next sibling using the next element sibling

function decrement(event) {
   const clickedBtn = event.target
   const inputField = clickedBtn.nextElementSibling
   inputField.stepDown();
}
const cart = document.getElementById("#cart");
const productName = document.querySelectorAll(".product-name");
const productPrice = document.querySelector(".product-price");

const addBtn = document.querySelectorAll(".add");
addBtn.forEach(button => {
  button.addEventListener("click", addToCart);
})

function addToCart(e) {
  e.preventDefault();
  
  const item = document.createElement("div");
  item.classList.add("item");
  
  const name = document.createElement("h3");
  name.classList.add("product-name");
  name.textContent = e.target.parentNode.querySelector(".product-name").textContent;
 
  item.appendChild(name);
  cart.appendChild(item);
}



const baseURL = `http://localhost:4004/api/cart`

const getAllCart = () => axios.get(baseURL).then(cartCallback).catch(errCallback)
const deleteCart = id => axios.delete(`${baseURL}/${id}`).then(cartCallback).catch(errCallback)
const updateCart = (id, type) => axios.put(`${baseURL}/${id}`, {type}).then(cartCallback).catch(errCallback)

function submitHandler(e) {
    e.preventDefault()}