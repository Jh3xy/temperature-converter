
const btns = document.querySelectorAll('.btn')
const input = document.getElementById('temperature-input')
const convertBtn = document.querySelector('.convert-btn')
const tag =  document.querySelector('.tag')
const description = document.querySelector('.description')

let mode = 'celsius'
// console.log(mode)
// console.log(tag)  



// Active State Handling
btns.forEach(
  (btn)=>{
    btn.addEventListener('click', ()=>{
      // Loop through btns and remove active class
      btns.forEach((b)=>{b.classList.remove('active')})
      // Then add the active class to the clicked button
      btn.classList.add('active')
      
      // Clear Input current value
      input.value = ''
      
      // Get Active btn
      const activeBtn = document.querySelector('.active')
      
      // Set mode variable to be equal to activeBtn data-id
      mode = activeBtn.dataset.id
      console.log(activeBtn)
      console.log(`current mode is: ${mode}`)
      
      if (mode === 'fahrenheit') {
        tag.innerHTML = "&deg;F"
        description.innerHTML = "Fahrenheit to Celsius"
      } else {
        tag.innerHTML = "&deg;C"
        description.innerHTML = "Celsuis to Fahrenheit"
      }
      
    })
  }
)


convertBtn.addEventListener("click", ()=> {
  // Check Mode
  if (mode === 'celsius') {
      console.log(`Calculations will be in ${mode}`)
    } else {
      
      console.log(`Calculations will be in ${mode}`)
  }
})







