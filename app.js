document.addEventListener('DOMContentLoaded', (event) => {
    const buttons = document.querySelectorAll('input[type="button"]');
    const display = document.getElementById('display');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.value === '=') {
                try {
                    display.value = eval(display.value.replace('x', '*'));
                } catch {
                    display.value = 'Error';
                }
            } else if (button.value === 'C') {
                display.value = '';
            } else {
                display.value += button.value;
            }
        });
    });
});
