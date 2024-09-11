// Додати обробники подій на всі чекбокси
document.querySelectorAll('.basket-checkbox').forEach(checkbox => {
	checkbox.addEventListener('change', function() {
	    const targetId = this.getAttribute('data-target');
	    const targetBlock = document.querySelector(`.quantity[data-target="${targetId}"]`);
	    
	    if (this.checked) {
		  targetBlock.style.display = 'flex';
	    } else {
		  targetBlock.style.display = 'none';
		  // Скинути кількість до 0, якщо зняти позначку
		  const quantityInput = targetBlock.querySelector('input[data-quantity-value]');
		  quantityInput.value = '0';
	    }
	});
  });
  
  // Немає потреби додавати обробник для кількості, щоб дозволити значення 0
  document.querySelectorAll('.quantity__input input[data-quantity-value]').forEach(input => {
	input.addEventListener('input', function() {
	    const value = this.value;
	    const targetId = this.closest('.quantity').getAttribute('data-target');
	    const targetCheckbox = document.querySelector(`.basket-checkbox[data-target="${targetId}"]`);
	    
	    if (value === '0') {
		  targetCheckbox.checked = false;
		  this.closest('.quantity').style.display = 'none';
	    }
	});
  });
  
  