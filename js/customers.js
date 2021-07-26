// Cadastrar Clientes

const formCustomer = document.getElementById('form-customer');

formCustomer.addEventListener('submit', (e) => {
  e.preventDefault();
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let carrer = document.getElementById('carrer').value;
  let mobile = document.getElementById('mobile').value;
  let photo = document.getElementById('photo').value;

  let customers = JSON.parse(localStorage.getItem('customers')) ?? [];

  let id = customers == null ? 1 : customers.length + 1;

  let data = {
    id,
    name,
    email,
    carrer,
    mobile,
    photo,
  };

  customers.push(data);

  let jsonData = JSON.stringify(customers);

  localStorage.setItem('customers', jsonData);

  window.history.back();
});
