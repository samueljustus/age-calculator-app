const form = document.querySelector('.form')
const dayInput = document.querySelector('#day')
const monthInput = document.querySelector('#month')
const yearInput = document.querySelector('#year')
const input = document.querySelectorAll('input')
const arrayOfMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

const dayOutput = document.querySelector('#dd')
const monthOutput = document.querySelector('#mm')
const yearOutput = document.querySelector('#yy')

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
        else if (yearInput.value > year) {
            const parent = yearInput.parentElement
            const p = parent.querySelector('p')
            parent.classList.add('error')
            p.innerText = 'Must be in the past'
            validator = false;
        }
        else if (dayInput.value > 28 && monthInput.value == 2) {
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

const handleAge = (event) => {
    if(validateDate()) {
        event.preventDefault()
        if (dayInput.value > day) {
            day = day + arrayOfMonth[month - 1];
            month = month - 1  // reduce month by 1 if the day inputed is greater than current daydate
        }
        if (monthInput.value > month) {
            month = month + 12   // add 12 to month
            year = year - 1;    // reduce year by 1;
        } else {
            const d = day - dayInput.value
            const m = month - monthInput.value
            const y = year - yearInput.value
    
            dayOutput.innerText = d
            monthOutput.innerText = m
            yearOutput.innerText = y
        }
       
    }
    
}
form.addEventListener('submit', handleAge)
