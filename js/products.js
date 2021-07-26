// Cadastrar Produtos

const formProduct = document.getElementById('form-product');

formProduct.addEventListener('submit', (e) => {
  e.preventDefault();
  let name = document.getElementById('name').value;
  let category = document.getElementById('category').value;
  let description = document.getElementById('description').value;
  let price = document.getElementById('price').value;
  let quantidade = document.getElementById('quantidade').value;

  let products = JSON.parse(localStorage.getItem('products')) ?? [];

  let id = products == null ? 1 : products.length + 1;

  let data = {
    id,
    name,
    category,
    description,
    price,
    quantidade,
  };

  products.push(data);

  let jsonData = JSON.stringify(products);

  localStorage.setItem('products', jsonData);

  window.history.back();
});
