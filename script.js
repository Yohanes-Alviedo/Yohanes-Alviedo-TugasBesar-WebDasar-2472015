const foods = [
  {
    name: 'Adobo',
    description: 'Hidangan ayam atau babi dengan saus kecap, cuka, dan bawang putih khas Filipina.',
    image: 'OSK.jpeg',
  },
  {
    name: 'Lechon',
    description: 'Babi panggang yang renyah dan menjadi sajian spesial pada acara besar.',
    image: 'DSC08445-2.jpg',
  },
  {
    name: 'Sinigang',
    description: 'Sup asam yang menyegarkan dengan sayuran dan daging atau ikan.',
    image: 'OSK (1).jpeg',
  },
  {
    name: 'Halo-Halo',
    description: 'Pencuci mulut dingin dengan campuran buah, jelly, es serut, dan susu kental manis.',
    image: 'OSK (2).jpeg',
  },
  {
    name: 'Pancit',
    description: 'Mie goreng dengan sayuran dan daging, hidangan wajib saat perayaan.',
    image: 'OSK (3).jpeg',
  },
];

const foodGrid = document.getElementById('foodGrid');

foods.forEach(food => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <img src="${food.image}" alt="${food.name}" />
    <div class="card-content">
      <h3>${food.name}</h3>
      <p>${food.description}</p>
    </div>
  `;
  foodGrid.appendChild(card);
});

document.getElementById('exploreBtn').addEventListener('click', () => {
  document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
});

const orderForm = document.getElementById('orderForm');
const formMessage = document.getElementById('formMessage');

orderForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = orderForm.name.value.trim();
  const email = orderForm.email.value.trim();
  const dish = orderForm.dish.value;
  const quantity = parseInt(orderForm.quantity.value);

  if (!name || !email || !dish || quantity < 1) {
    formMessage.textContent = 'Mohon isi semua kolom dengan benar!';
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    formMessage.textContent = 'Email tidak valid!';
    return;
  }

  formMessage.style.color = 'green';
  formMessage.textContent = `Terima kasih, ${name}! Pesanan Anda untuk ${quantity}x ${dish} telah diterima.`;

  // Reset form setelah submit
  orderForm.reset();

  // Hapus pesan setelah 5 detik
  setTimeout(() => {
    formMessage.textContent = '';
    formMessage.style.color = '#d9480f';
  }, 5000);
});
