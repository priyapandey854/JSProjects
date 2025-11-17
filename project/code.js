const buttons = document.querySelectorAll('.button')
const body= document.querySelector('body')

buttons.forEach( function (button) {
    // console.log(button);
    button.addEventListener('click', function (p) {
        console.log(p);
        console.log(p.target);
        
        if (p.target.id === 'grey') {
            // body.style.backgroundColor='gray'
            body.style.backgroundColor=p.target.id   
        }
        
        if (p.target.id === 'yellow') {
            // body.style.backgroundColor='gray'
            body.style.backgroundColor=p.target.id   
        }
        
        if (p.target.id === 'black') {
            // body.style.backgroundColor='gray'
            body.style.backgroundColor=p.target.id   
        }
        
        if (p.target.id === 'pink') {
            // body.style.backgroundColor='gray'
            body.style.backgroundColor=p.target.id   
        }
        
        if (p.target.id === 'blue') {
            // body.style.backgroundColor='gray'
            body.style.backgroundColor=p.target.id   
        }
    })
})