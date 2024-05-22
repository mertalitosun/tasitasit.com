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

//inputuna yazı engelleme 
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

 // Şu anki tarihi al
 var today = new Date();
 var dd = String(today.getDate()).padStart(2, '0');
 var mm = String(today.getMonth() + 1).padStart(2, '0'); // Ocak 0'dan başlar
 var yyyy = today.getFullYear();

 today = yyyy + '-' + mm + '-' + dd;

 // Bugünden önceki tarihleri engelle
 console.log(document.getElementById("estimatedDeadline"))
 document.getElementById("estimatedDeadline").setAttribute("min", today);
