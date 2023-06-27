    let form = document.querySelector('.form')
    let day = document.querySelector('#day')
    let month= document.querySelector('#month')
    let year = document.querySelector('#year')

    let d1 = day.value
    let m1 = month.value
    let y1 = year.value

    let today = new Date();
    
    let d2 = today.getDate();
    let m2 = today.getMonth() + 1
    let y2 = today.getFullYear();
    let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let d, y, m

    form.addEventListener('submit', (e) => {
        e.preventDefault()
    })




    // function calculateAge() {
    //     
    //     if (d1 > d2) {
    //         d2 = d2 + months[m2 - 1]
    //         m2--
    //     }  
    //     if (m1 > m2) {
    //         m2 = m2 + 12
    //         y2--
    //     }
          
    //        d = d2 - d1;
    //        y = y2 - y1;
    //        m = m2 - m1
    // }

