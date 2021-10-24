/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
const secUList = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section');
//const fragment = document.createDocumentFragment();

sections.forEach(section=>{
    const sectionDataNav = section.getAttribute('data-nav');
    const sectionLi = document.createElement('li');
    const secName =document.createElement('p');
    //aLink.href="#"+section.id
    secName.innerText=sectionDataNav;
    secName.setAttribute('style','color: #000')
    sectionLi.appendChild(secName);
    sectionLi.addEventListener("click",()=>{
    
        section.scrollIntoView({behavior: "smooth",block: "end",inline: "nearest"});
    });
    secUList.appendChild(sectionLi);

});









function callback(entries){
    entries.forEach( (entry)=>{

        if(entry.isIntersecting){
         
          let activenav = entry.target.getAttribute('data-nav');

          sections.forEach((mysec)=>{
            if(mysec.classList.contain('your-active-class')){
                mysec.classList.remove('your-active-class');
            }
            if(mysec.id===activenav){
                alert(mysec.id);
                mysec.classList.add('your-active-class');
            }
          });

          const liList = document.querySelectorAll('li');

          liList.forEach((liElem)=>{
            if(liElem.classList.contain('item-active-class')){
                liElem.classList.remove('item-active-class');
            }
            if(liElem.firstChild.innerText===activenav){
                liElem.classList.add('item-active-class');
            }

            
          });

          

         

        }

    });
}

let options = {
    root:document.querySelector('#scrollArea'),
    rootMargin: '0px',
    threshold: 1.0
}

let observer = new IntersectionObserver(callback,options);

function toggleActiveState(){

 sections.forEach( (sec)=>{observer.observe(sec);} );

}

window.addEventListener('scroll',toggleActiveState);
   

