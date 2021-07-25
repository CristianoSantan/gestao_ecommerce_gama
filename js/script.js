const products = JSON.parse(localStorage.getItem('products'));
const customers = JSON.parse(localStorage.getItem('customers'));

let dataCustomers = document.getElementById('data-customers');
let dataProducts = document.getElementById('data-products');

dataCustomers.innerHTML = customers.length;
dataProducts.innerHTML = products.length;
