
const btns = document.querySelectorAll('.btn')
const input = document.getElementById('temperature-input')
const inputWrap = document.querySelector('.input-wrap')
const convertBtn = document.querySelector('.convert-btn')
const tag =  document.querySelector('.tag')
const description = document.querySelector('.description')
const resultDisplay = document.querySelector('.result')


let mode = 'celsius';



// Active State Handling
btns.forEach(
  (btn)=>{
    btn.addEventListener('click', ()=>{
      // Loop through btns and remove active class
      btns.forEach((b)=>{b.classList.remove('active')})
      // Then add the active class to the clicked button
      btn.classList.add('active')
      
      // Clear Input and rsults current value
      input.value = ''
      resultDisplay.innerHTML = '--'
      
      // Get Active btn
      const activeBtn = document.querySelector('.active')
      
      // Set mode variable to be equal to activeBtn data-id
      mode = activeBtn.dataset.id
      // console.log(activeBtn)
      // console.log(`current mode is: ${mode}`)
      
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


convertBtn.addEventListener("click", () => {
  if (input.value === '') {
    // Display error message
    // Add the shake animation class
    inputWrap.classList.add("shake-horizontal");

    // Remove it after 1 second
    setTimeout(() => {
      inputWrap.classList.remove("shake-horizontal");
    }, 1000);

  } else {
    let temp = Number(input.value); 
    // Convert input to number for calculation

    if (mode === 'celsius') {
      // Celsius → Fahrenheit
      let result = (temp * 9/5) + 32;
      console.log(result);
      resultDisplay.innerHTML = `${result.toFixed(1)} &deg;F`;
    } else {
      // Fahrenheit → Celsius
      let result = (temp - 32) * 5/9;
      console.log(result);
      resultDisplay.innerHTML = `${result.toFixed(1)} &deg;C`; 
      
      //result.toFixed rounds up the number
    }
  }
});









