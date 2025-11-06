
const btns = document.querySelectorAll('.btn')
const tag = document.querySelector('tag')


btns.forEach(btn => {
  btn.addEventListener('click', () => {
    btns.forEach(b => b.classList.remove('active'))
    btn.classList.add('active')

    if (btn.dataset.id === 'celsius') {
      console.log('calculations will now be in celsius')
    } else {
        console.log('calculations will now be in fahrenheit')
    }


  })
})











