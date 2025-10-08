document.addEventListener('DOMContentLoaded', () => {
    // 1. obter referências aos elementos do DOM
    const billAmountInput = document.getElementById('bill-amount');
    const tipPercentageInput = document.getElementById('tip-percentage');
    const calculateButton = document.getElementById('calculate-btn');
    const tipTotalSpan = document.getElementById('tip-total');
    const billTotalSpan = document.getElementById('bill-total');
    //função principal para calcular e exibir a gorjeta
      function calculateTip() {
        // Obter os valores e convertê-los para números
        const billAmount = parseFloat(billAmountInput.value);
        const tipPercentage = parseFloat(tipPercentageInput.value);

        // Validação básica
        if (isNaN(billAmount) || billAmount < 0 || isNaN(tipPercentage) || tipPercentage < 0) {
            alert("Por favor, insira valores válidos e positivos.");
            // Limpa os resultados em caso de erro
            tipTotalSpan.textContent = "R$ 0.00";
            billTotalSpan.textContent = "R$ 0.00";
            return; 
        }

        // Lógica de cálculo
        const tipAmount = (billAmount * tipPercentage) / 100;
        const totalBill = billAmount + tipAmount;

        // Função auxiliar para formatar como moeda brasileira (R$)
        const formatCurrency = (value) => {
            return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        };

        // Exibir os resultados formatados
        tipTotalSpan.textContent = formatCurrency(tipAmount);
        billTotalSpan.textContent = formatCurrency(totalBill);
    }

    // 2. Adicionar o Event Listener (Ouvinte de Evento)
    calculateButton.addEventListener('click', calculateTip);

    // Opcional: Adicionar o cálculo ao pressionar Enter nos campos de input
    billAmountInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') calculateTip();
    });
    tipPercentageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') calculateTip();
    });
});