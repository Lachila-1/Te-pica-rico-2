(() => {
  const form = document.querySelector('#price-calculator');
  const costInput = document.querySelector('#cost');
  const salePrice = document.querySelector('#sale-price');
  const profitOutput = document.querySelector('#profit');
  const yearOutput = document.querySelector('#year');

  if (yearOutput) yearOutput.textContent = new Date().getFullYear();
  if (!form || !costInput || !salePrice || !profitOutput) return;

  const money = new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
    minimumFractionDigits: 2
  });

  function updatePrice() {
    const cost = Number.parseFloat(costInput.value);
    const validCost = Number.isFinite(cost) && cost >= 0;

    if (!validCost) {
      salePrice.textContent = money.format(0);
      profitOutput.textContent = money.format(0);
      costInput.setAttribute('aria-invalid', 'true');
      return;
    }

    costInput.removeAttribute('aria-invalid');
    profitOutput.textContent = money.format(cost * 0.4);
    salePrice.textContent = money.format(cost * 1.4);
  }

  costInput.addEventListener('input', updatePrice);
  form.addEventListener('submit', (event) => event.preventDefault());
  updatePrice();
})();
