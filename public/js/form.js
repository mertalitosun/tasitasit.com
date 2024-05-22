document.querySelectorAll('input[type="number"]').forEach(input => {
    input.addEventListener('focus', (event) => {
        if (event.target.value == '0') {
            event.target.value = '';
        }
    });
    input.addEventListener('blur', (event) => {
        if (event.target.value == '') {
            event.target.value = '0';
        }
    });
});

// telefon inputuna yazı engelleme 
document.addEventListener('DOMContentLoaded', () => {
    const numericInputs = ['phone', 'wheels']; // Numeric input IDs

    numericInputs.forEach(inputID => {
        const inputElement = document.getElementById(inputID);

        if (inputElement) {
            inputElement.addEventListener('input', (event) => {
                const input = event.target;
                input.value = input.value.replace(/[^0-9]/g, '');
            });
        }
    });
});
