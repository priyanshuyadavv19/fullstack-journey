let themeToggle = document.getElementById('themeToggle')
let body = document.body

themeToggle.addEventListener('click',function() {
  body.classList.toggle('dark-mode')
  
  let darkCondition = body.classList.contains('dark-mode')

  if (darkCondition) {
    themeToggle.textContent = 'Light Mode'
  } else {
      themeToggle.textContent = 'Dark Mode'
  }
})

