    let form = document.querySelector('.form')
    let d1 = document.querySelector('#day').value
    let m1 = document.querySelector('#month').value
    let y1 = document.querySelector('#year').value

    let today = new Date();
    let d2 = today.getDate();
    let m2 = today.getMonth() + 1
    let y2 = today.getFullYear();
    let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let d, y, m

    form.addEventListener('submit', checkInput)

    function checkInput(e) {
        if (d1 === "") {
            e.peventDefault
            errorMsg(d1, 'this field cannot be empty')
        }
        else {
        }
    }
    
    function errorMsg(input, message) {
        const parentDiv = document.querySelectorAll('input').parent
        const p = parentDiv.querySelector('p')
        parentDiv.classList.add('error')
        p.innerText = message
    }
    
    

    // function calculateAge() {
    //     
    //     if (d1 > d2) {
    //         d2 = d2 + month[m2 - 1]
    //         m2--
    //     }  
    //     if (m1 > m2) {
    //         m2 = m2 + 12
    //         y2--
    //     }
          
    //        d = d2 - d1;
    //        y = y2 - y1;
    //        m = m2 - m1
        
    //     const age = document.querySelector('.result')
    //     age.innerHTML = 'Your Age is '+y+' Years '+m+' Months '+d+' Days';
    // }

