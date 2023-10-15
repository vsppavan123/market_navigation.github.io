// Product data
const productData = {
  "vegetables": {"line": 1, "stand": 1},
  "fruits": {"line": 1, "stand": 2},
  "Dairy products": {"line": 2, "stand": 2},
  "General items": {"line": 2, "stand": 3},
  "snacks": {"line": 3, "stand": 3},
  "Meats": {"line": 3, "stand": 4},
  "Drinks": {"line": 4, "stand": 4},
  "frozen": {"line": 4, "stand": 5},
  "baking": {"line": 5, "stand": 5},
  "Condiments": {"line": 5, "stand": 6},
  "Canned goods": {"line": 6, "stand": 6},
  "Household items": {"line": 5, "stand": 7},
  "Toiletries": {"line": 6, "stand": 7},
  "Pet products": {"line": 6, "stand": 7}
};

// Function to show product modal
function displayProductModal(productName) {
  const productInfo = productData[productName];
  if (productInfo) {
    const { line, stand } = productInfo;
    const modalProductName = document.getElementById('modalProductName');
    const modalProductImage = document.getElementById('modalProductImage');
    const modalProductInfo = document.getElementById('modalProductInfo');

    // Set modal content
    modalProductName.textContent = `Product: ${productName}`;
    modalProductImage.innerHTML = `<img src="img/${productName}.png" alt="${productName}">`;
    modalProductInfo.textContent = `Line: ${line}, Stand: ${stand}`;

    // Display the modal
    const modal = document.getElementById('productModal');
    modal.style.display = 'block';

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
  } else {
    alert('Product information not found.');
  }
}

// Get all product cards
const productCards = document.querySelectorAll('.product-card');

// Add click event listener to each product card
productCards.forEach(productCard => {
  productCard.addEventListener('click', () => {
    // Get product name from data attribute
    const productName = productCard.getAttribute('data-product-name');
    // Display product modal
    displayProductModal(productName);
  });
});
