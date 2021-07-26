const products = JSON.parse(localStorage.getItem('products'));
const customers = JSON.parse(localStorage.getItem('customers'));

let dataCustomers = document.getElementById('data-customers');
let dataProducts = document.getElementById('data-products');

// get Products
if (products !== null) {
  dataProducts.innerHTML = products.length;

  const tBodyProducts = document.getElementById('tbody-products');

  let productsTable = products
    .map(
      (prod) =>
        `<tr>
            <td>${prod.name}</td>
            <td>${prod.category}</td>
            <td>$${prod.price}</td>
            <td>${prod.quantidade}</td>
        </tr>
        <tr>
            <td>${prod.description}</td>
        </tr>`
    )
    .join('');

  tBodyProducts.innerHTML = productsTable;
}

// get customers

if (customers !== null) {
  dataCustomers.innerHTML = customers.length;

  const cardCustomers = document.getElementById('card-customer');

  let customer = customers
    .map(
      (client) =>
        `<div class="customer">
          <div class="info">
            <img
              src="http://agbrands.com.br/wp-content/uploads/2017/01/perfil-300x225.jpg"
              width="40px"
              height="40px"
              alt=""
            />
            <div>
              <h4>${client.name}</h4>
              <small>${client.carrer}</small>
            </div>
          </div>
          <div class="contact">
            <span class="las la-user-circle"></span>
            <span class="las la-comment"></span>
            <span class="las la-phone"></span>
          </div>
        </div>`
    )
    .join('');

  cardCustomers.innerHTML = customer;
}
