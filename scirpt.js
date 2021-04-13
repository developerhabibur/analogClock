let hr = document.getElementById('hr');
let mn = document.getElementById('mn')
let sc = document.getElementById('sc')
let body = document.querySelector('body')
let toggleClass = document.querySelector('.toggleClass')

toggleClass.addEventListener('click', function(){
    body.classList.toggle('light')
    console.log('hii');
})

setInterval(() => {
    let date = new Date()

    let hour = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()

    sc.style.transform = `rotate(${sec*6}deg)`
    mn.style.transform = `rotate(${min*6}deg)`
    hr.style.transform = `rotate(${hour*30+(min/12)}deg)`
    
}, 1000);
