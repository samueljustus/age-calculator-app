const form = document.querySelector('.form')
const dayInput = document.querySelector('#day')
const monthInput = document.querySelector('#month')
const yearInput = document.querySelector('#year')
const input = document.querySelectorAll('input')


const today = new Date();
let day = today.getDate();
let month = today.getMonth() + 1;
let year = today.getFullYear();

function validateDate() {
    let validator = true;  // validator is initially set to true
    input.forEach((input) => {
        if(input.value === "") {
            const parent = input.parentElement
            const p = parent.querySelector('p')
            parent.classList.add('error')
            p.innerText = 'this field is required'
            validator = false;   // validator is now false because input is an empty field
        }
        else if (monthInput.value > 12) {
            const parent = monthInput.parentElement
            const p = parent.querySelector('p')
            parent.classList.add('error')
            p.innerText = 'Must be a valid month'
            validator = false;
        }
        else if (dayInput.value > 31) {
            const parent = dayInput.parentElement
            const p = parent.querySelector('p')
            parent.classList.add('error')
            p.innerText = 'Must be a valid day'
            validator = false;
        }
        else {
            const parent = input.parentElement
            parent.classList.remove('error')
            const p = parent.querySelector('p')
            p.innerText = ''
            validator = true;
        }
        
    })
    return validator
}
