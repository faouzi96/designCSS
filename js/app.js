
const menuBtn = document.getElementById('menu-icon')
const navigation = document.querySelector('.navigation')
const socialMediaIcons = document.querySelector('.social-media')

const footerSideIcon = document.querySelector('#footerSide-icon')
const footerSide = document.querySelector('.footerSide')

menuBtn.addEventListener("click",()=>{
    navigation.classList.toggle('active')
    socialMediaIcons.classList.toggle('active')
})

footerSideIcon.addEventListener("click",()=>{
    footerSide.classList.toggle('reduce')
})