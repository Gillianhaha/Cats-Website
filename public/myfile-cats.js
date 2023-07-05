"use strict";
(function() {
    const buttonEl = document.querySelector(".hamburger"); 

    buttonEl.addEventListener("click", (e) => { 
        
        const expanded = e.target.getAttribute('aria-expanded');
        console.log(expanded);
        if(expanded === "false") {
            e.target.setAttribute('aria-expanded','true');
        } else {
            e.target.setAttribute('aria-expanded','false');
        }
        const navigationEl = e.target.closest('.header-nav')
        navigationEl.classList.toggle('header-nav-open');
    });

    const modalEl = document.querySelector('.modal'); 
    const openEl = document.querySelectorAll('.open'); 
    const closeEl = document.querySelector('.close'); 
    
    openEl.forEach(button => {
        button.addEventListener('click', () => { 
            modalEl.showModal(); 
        });
    });
    
    closeEl.addEventListener('click', () => { 
        modalEl.close(); 
    });
   
    const formEl = document.querySelector('.subscribe');
    const emailGroupEl = document.querySelector('.register-email');
    const confirmGroupEl = document.querySelector('.register-confirm');
    const emailInputEl = document.querySelector('.register-email-input');
    const confirmInputEl = document.querySelector('.register-confirm-input');
    const emailErrEl = document.querySelector('.register-email-error');
    const confirmErrEl = document.querySelector('.register-confirm-error');

    formEl.addEventListener('submit', (event) => { 
        let isInvalid = false;
        emailGroupEl.classList.remove('register-email-invalid'); 
        confirmGroupEl.classList.remove('register-confirm-invalid'); 
        emailErrEl.innerText = "";
        confirmErrEl.innerText = "";
        emailInputEl.style.borderColor = "";
        confirmInputEl.style.borderColor = "";

        if( !emailInputEl.value ) { 
            emailGroupEl.classList.add('register-email-invalid'); 
            emailErrEl.innerText = "This field is required"
            emailInputEl.style.borderColor = "red";
            isInvalid = true; 
        } else if ( emailInputEl.value.indexOf("@") === -1) {
            emailGroupEl.classList.add('register-email-invalid'); 
            emailErrEl.innerText = "This field be a valid email address including a @"
            emailInputEl.style.borderColor = "red";
            isInvalid = true; 
        }
        if( confirmInputEl.value !== emailInputEl.value ) { 
            confirmGroupEl.classList.add('register-confirm-invalid'); 
            confirmErrEl.innerText = "This field must match the provided email address"
            confirmInputEl.style.borderColor = "red";
            isInvalid = true; 
        }
        if( isInvalid ) { 
            event.preventDefault(); 
        }
    });

    formEl.addEventListener('change', (event) => { 
        let isInvalid = false;
        emailGroupEl.classList.remove('register-email-invalid'); 
        confirmGroupEl.classList.remove('register-confirm-invalid'); 
        emailErrEl.innerText = "";
        confirmErrEl.innerText = "";
        emailInputEl.style.borderColor = "";
        confirmInputEl.style.borderColor = "";

        if( !emailInputEl.value ) { 
            emailGroupEl.classList.add('register-email-invalid'); 
            emailErrEl.innerText = "This field is required"
            emailInputEl.style.borderColor = "red";
            isInvalid = true; 
        } else if ( emailInputEl.value.indexOf("@") === -1) {
            emailGroupEl.classList.add('register-email-invalid'); 
            emailErrEl.innerText = "This field be a valid email address including a @"
            emailInputEl.style.borderColor = "red";
            isInvalid = true; 
        }
        if( confirmInputEl.value && confirmInputEl.value !== emailInputEl.value ) { 
            confirmGroupEl.classList.add('register-confirm-invalid'); 
            confirmErrEl.innerText = "This field must match the provided email address"
            confirmInputEl.style.borderColor = "red";
            isInvalid = true; 
        }
        if( isInvalid ) { 
            event.preventDefault(); 
        }
    });

    // formEl.addEventListener('input', (event) => {
    //     let isInvalid = false;
    //     emailErrEl.innerText = "";
    //     emailInputEl.style.borderColor = "";
    //     emailGroupEl.classList.remove('register-email-invalid'); 

    //     if( !emailInputEl.value ) { 
    //         emailGroupEl.classList.add('register-email-invalid'); 
    //         emailErrEl.innerText = "This field is required"
    //         emailInputEl.style.borderColor = "red";
    //         isInvalid = true; 
    //     }
    //     if( isInvalid ) { 
    //         event.preventDefault(); 
    //     }
    // });

    // emailInputEl.addEventListener('blur',(event) => {
    //     let isInvalid = false;
    //     emailErrEl.innerText = "";
    //     emailInputEl.style.borderColor = "";
    //     emailGroupEl.classList.remove('register-email-invalid'); 

    //     if ( emailInputEl.value && emailInputEl.value.indexOf("@") === -1) {
    //         emailGroupEl.classList.add('register-email-invalid'); 
    //         emailErrEl.innerText = "This field be a valid email address including a @"
    //         emailInputEl.style.borderColor = "red";
    //         isInvalid = true; 
    //     }
    //     if( isInvalid ) { 
    //         event.preventDefault(); 
    //     }
    // });
    

})();