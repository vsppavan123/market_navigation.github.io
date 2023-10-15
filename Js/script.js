// Get all product cards  haiiii
const productCards = document.querySelectorAll('.product-card');

// Get modal elements
const modal = document.getElementById('productModal');
const modalProductName = document.getElementById('modalProductName');
const modalProductImage = document.getElementById('modalProductImage');
const modalProductInfo = document.getElementById('modalProductInfo');

// Add click event listener to each product card
productCards.forEach(productCard => {
  productCard.addEventListener('click', () => {
    // Get product name from data attribute
    const productName = productCard.getAttribute('data-product-name');
    
    // Get line and stand information based on product name
    const productInfo = productData[productName];
    if (productInfo) {
      const { line, stand } = productInfo;

      // Set modal content
      modalProductName.textContent = `Product: ${productName}`;
      modalProductImage.innerHTML = `<img src="img/${productName}.png" alt="${productName}">`;
      modalProductInfo.textContent = `Line: ${line}, Stand: ${stand}`;

      // Display the modal
      modal.style.display = 'block';
    } else {
      alert('Product information not found.');
    }
  });
});

// Close the modal when the close button is clicked
const closeBtn = document.querySelector('.close');
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close the modal if the user clicks outside the modal content
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
