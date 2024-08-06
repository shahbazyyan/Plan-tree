/* ==========Show Menu =========*/ 
const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close")

/* ==========Menu Show =========*/ 
if(navToggle){
    navToggle.addEventListener("click", () =>{
        navMenu.classList.add("show-menu")
    })
}

/* ==========Menu Hidden =========*/ 
if(navClose){
    navClose.addEventListener("click", () =>{
        navMenu.classList.remove("show-menu")
    })
}

/* ==========Remove Menu Mobile=========*/ 
const navLink = document.querySelectorAll(".nav__link")

const linkAction =() =>{
    const navMenu = document.getElementById("nav-menu")
    navMenu.classList.remove("show-menu")
}
navLink.forEach(n => n.addEventListener("click", linkAction))

/* ==========Add Blur to Header=========*/ 
const blurHeader = () =>{
    const header = document.getElementById("header")
    this.scrollY >= 50? header.classList.add("blur-header")
                      : header.classList.remove("blur-header")
}
window.addEventListener("scroll", blurHeader)

const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()

    emailjs.sendForm('service_asm7he3', 'template_8sb8uop', '#contact-form', '-dxrQ1KIgzsm_2yJ1')
       .then(() =>{
         //show send message
         contactMessage.textContent = 'Message sent successfully'

         //Remove message after five seconds
          setTimeout(() =>{
            contactMessage.textContent = ' '
          }, 5000)

          //Clear input fields
            contactForm.reset() 

       }, () =>{
         //show send message
         contactMessage.textContent = 'Message not sent (service error)'
       })
   
}

contactForm.addEventListener('submit', sendEmail)



/* ==========SHOW SCROLL UP=========*/ 
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')

    this.scrollY >= 350? scrollUp.classList.add('show-scroll')
                  : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp  )

/* ==========scroll sections active link=========*/ 
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {


const scrollY = window.pageYOffset 

sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
             sectionTop = current.offsetTop - 58,
             sectionId = current.getAttribute('id'),
             sectionsClass = document.querySelector('.nav__menu a[href* =' + sectionId +']')
    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
        sectionsClass.classList.add('active-link')
    }else{
        sectionsClass.classList.remove('active-link')
    }
})

}
window.addEventListener('scroll', scrollActive)