// const dayJsObj = dayjs()
// console.log(dayJsObj.format("DD/MM/YYYY"))
const form = document.querySelector('.form')
const day = document.querySelector('#day')
let dayValue = day.value;
const month = document.querySelector('#month')
let monthValue = month.value
const year = document.querySelector('#year')
let yearValue = year.value;

form.addEventListener('submit', (e) => {
    e.preventDefault()
    validateDate()
})