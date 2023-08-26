const togglleButton = document.getElementsByClassName('navigation')[0]
const navbarLink = document.getElementsByClassName('nav-bar-links')[0]

togglleButton.addEventListener('click', ()=>{
    navbarLink.classList.toggle('active')
})

