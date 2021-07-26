const products = JSON.parse(localStorage.getItem('products'));
const customers = JSON.parse(localStorage.getItem('customers'));

let dataCustomers = document.getElementById('data-customers');
let dataProducts = document.getElementById('data-products');
let dataRenda = document.getElementById('data-renda');

dataProducts.innerHTML = 0;
dataRenda.innerHTML = 0;

// get Products
if (products !== null) {
  dataProducts.innerHTML = products.length;

  const tBodyProducts = document.getElementById('tbody-products');

  let productsTable = products
    .map(
      (prod) =>
        `<tr>
            <td colspan="1">${prod.id}</td>
            <td colspan="1">
                <b>${prod.name}</b></br>
                <hr>
                <span>Descrição</span></br>
                ${prod.description}
            </td>
            <td colspan="1">${prod.category}</td>
            <td colspan="1">$${prod.price}</td>
            <td colspan="1">${prod.quantidade}</td>
        </tr>`
    )
    .join('');

  tBodyProducts.innerHTML = productsTable;
}

// get customers
dataCustomers.innerHTML = 0;

if (customers !== null) {
  dataCustomers.innerHTML = customers.length;

  const cardCustomers = document.getElementById('card-customer');

  let customer = customers
    .map(
      (client) =>
        `<div class="customer">
          <div class="info">
            <img
              src=${client.photo}
              width="40px"
              height="40px"
              alt=""
            />
            <div>
              <h4>${client.name}</h4>
              <small>${client.carrer} <span class="las la-phone"></span> ${client.mobile}</small>
              <p><span class="las la-comment"></span> ${client.email}</p>
            </div>
          </div>
        </div>`
    )
    .join('');

  cardCustomers.innerHTML = customer;
}
