// Lấy các phần tử cần dùng
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const addProductBtn = document.getElementById('addProductBtn');
const addProductForm = document.getElementById('addProductForm');
const cancelBtn = document.getElementById('cancelBtn');
const errorMsg = document.getElementById('errorMsg');
const productList = document.getElementById('product-list');

// Tìm kiếm sản phẩm
searchBtn.addEventListener('click', () => {
  const keyword = searchInput.value.trim().toLowerCase();
  const products = document.querySelectorAll('.product-item');

  products.forEach(item => {
    const name = item.querySelector('.product-name').textContent.toLowerCase();
    item.style.display = name.includes(keyword) ? '' : 'none';
  });
});

// Toggle form thêm sản phẩm
addProductBtn.addEventListener('click', () => {
  addProductForm.classList.toggle('hidden');
});

// Nút Hủy trong form
cancelBtn.addEventListener('click', () => {
  addProductForm.classList.add('hidden');
  addProductForm.reset();
  errorMsg.textContent = '';
});

// Xử lý submit form thêm sản phẩm
addProductForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('newName').value.trim();
  const price = document.getElementById('newPrice').value.trim();
  const desc = document.getElementById('newDesc').value.trim();

  if (!name || !price || isNaN(price) || Number(price) <= 0) {
    errorMsg.textContent = 'Vui lòng nhập tên và giá hợp lệ!';
    return;
  }

  errorMsg.textContent = '';

  const newItem = document.createElement('article');
  newItem.className = 'product-item';
  newItem.innerHTML = `
    <h3 class="product-name">${name}</h3>
    <p class="product-desc">${desc}</p>
    <p class="product-price">Giá: ${price}₫</p>
  `;

  productList.prepend(newItem);
  addProductForm.reset();
  addProductForm.classList.add('hidden');
});
