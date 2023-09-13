const form = document.getElementById('form');
const fullName = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const back = document.getElementById('back');
const next = document.getElementById('next');
const steps = document.querySelectorAll('#step');
const stepsActive = document.querySelectorAll('.step-indicator');
let currentStep = 1;

let sliderSteps = Array.from(document.querySelectorAll('.step'));
let sliderStepsActive = Array.from(stepsActive);
let slidlength = sliderSteps.length;
let slidActivelength = sliderStepsActive.length;

checker();

next.addEventListener('click', nextStep);
back.addEventListener('click', backStep);

function nextStep() {
            if( currentStep === 0) {
                console.log("currentStep === 0")
                return false
            }else {
                
                currentStep++;
                checker();
                // validatForm(currentStep);
            }
    }

function backStep() {
    if(currentStep == 1){
        console.log("currentStep == 1")
        return false
    }else {
        currentStep--;
        checker();
        // validatForm(currentStep);
    }
}

function checker() {
    removeActive();
    validatForm(currentStep);
    sliderSteps[currentStep - 1].classList.add('active');
    sliderStepsActive[currentStep - 1].classList.add('active');

    if(currentStep == slidlength) {
        next.textContent = 'validate';
    }else {
        next.textContent = 'Next Step';
    }

    if(currentStep == 1) {
        back.classList.add('disabled')
    }else{
        back.classList.remove('disabled')
    }
}


function removeActive() {
    sliderSteps.forEach((step)=> {
        step.classList.remove('active');
    })
    sliderStepsActive.forEach((stepActive)=> {
        stepActive.classList.remove('active');
    })
}

function validatForm(input) {

            const inputs = sliderSteps[input - 1].querySelectorAll('input');
            
            if(inputs.value !== "") {
                document.querySelector('.alert').style.visibility = 'visible';
                return false;
            }else {
                nextStep()
                console.log("fot")
            }
            
};

form.addEventListener('submit', (e)=> {
    e.preventDefault();
});

    fullName.addEventListener('input', ()=> {
        const namePattern = /^[a-zA-Z]+ [a-zA-Z]+$/;
        const alert = document.querySelector('#alert-name');
    
        if(fullName.value.match(namePattern)) {
            fullName.style.border = '1px solid #473dff';
            alert.style.visibility = "hidden";
        }else {
            fullName.style.border = '1px solid #ed3548';
            alert.style.visibility = "visible";
        }
    });
    email.addEventListener('input', ()=> {
        const emailPattern = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$/;
        const alert = document.querySelector('#alert-email');
    
        if(email.value.match(emailPattern)) {
            email.style.border = '1px solid #473dff';
            alert.style.visibility = "hidden";
        }else {
            email.style.border = '1px solid #ed3548';
            alert.style.visibility = "visible";
        }
    });
    phone.addEventListener('input', ()=> {
        const phonePattern = /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}/;
        const alert = document.querySelector('#alert-phone');
    
        if(!phone.value.match(phonePattern)) {
            phone.style.border = '1px solid #473dff';
            alert.style.visibility = "hidden";
        }else {
            phone.style.border = '1px solid #ed3548';
            alert.style.visibility = "visible";
        }
    });
    
    
    // monthly to yearly radio switch
    const ChosePlan = document.getElementById('change_plan');
    // console.log(ChosePlan)
    const price = document.querySelectorAll('.price');
    const charge = document.querySelectorAll('#charge');
    // console.log(price, charge);
    const selectedCard = document.querySelectorAll('.step3 .card');

    const prices = {
        monthly: {
            arcade : 9,
            advance : 12,
            pro : 15
        },
        yearly: {
            arcade : 90,
            advance : 120,
            pro : 150
        }
    };

    // console.log(prices.monthly.arcade)
    // console.log(prices.monthly.pro)
    // console.log(prices.yearly.arcade)

    const charges = [
        {   monthly:'$1/mo', 
            yearly:'$10/yr'},
        {   monthly:'$2/mo', 
            yearly:'$20/yr'} ,
        {   monthly:'$2/mo', 
            yearly:'$20/yr'},
    ];
    
    
    // Select your plan card 
    const planName = document.querySelector('.plan_name p');
    
    const selectPlan = (cardNo) => {
        const allCards = document.querySelectorAll('.card');
        allCards.forEach((element) => {
            element.classList.remove(["active"]);
            document.querySelector('.plan_name p').innerHTML;
        });
        const selectedCard = document.querySelector('.card-' + cardNo);
        selectedCard.classList.add(["active"]);
    };
    const selectPlanName = selectPlan;
    selectPlanName.value = document.querySelector('.step2 .card p').innerHTML;
    
    // let MY ;
    
    ChosePlan.addEventListener('click', ($event)=> {    
        if ($event.target.checked) {
          prices.forEach((priceTag, index) => {
            priceTag.innerHTML = prices[index].yearly + '<p class="bonus">2 months free</p>';
            MY = "monthly";
          });
        } else {
          prices.forEach((priceTag, index) => {
            priceTag.innerHTML = prices[index].monthly;
            MY = "yearly";
          });
        }
        console.log(MY)
    });
    
    // Step 3
    ChosePlan.addEventListener('change', ($event)=> {    
           if ($event.target.checked) {
            console.log(charge);
          charge.forEach((chargeTag, i) => {
            chargeTag.innerHTML = charges[i].yearly;
            document.querySelector('.plan_name p').textContent = ' (Yearly)';
        });
        } else {
          charge.forEach((charge, i) => {
            charge.innerHTML = charges[i].monthly;
            document.querySelector('.plan_name p').textContent = ' (Monthly)';
          });
        }   
    });
    
    
    // console.log(selectedCard);
    document.querySelector('.step3 #online-service').addEventListener('change', ($event)=> {
        if($event.target.checked) {
            selectedCard[0].classList.add('active');
            document.querySelector('.addons-1').innerHTML = '<p>Online Services</p>' + charges[0].monthly
            
            
        }else {
            selectedCard[0].classList.remove('active');
            document.querySelector('.addons-1').innerHTML = '';
        }
    });
    
    // const selectedCard2 = document.querySelector('.step3 .card2');
    document.querySelector('.step3 #larger-storage').addEventListener('change', ($event)=> {
        if($event.target.checked) {
            selectedCard[1].classList.add('active');
            document.querySelector('.addons-2').innerHTML = '<p>Larger Storage</p>';
        }else {
            selectedCard[1].classList.remove('active');
            document.querySelector('.addons-2').innerHTML = '';
        }
    });
    document.querySelector('.step3 #cust-profile').addEventListener('change', ($event)=> {
        if($event.target.checked) {
            selectedCard[2].classList.add('active');
            document.querySelector('.addons-3').innerHTML = '<p>Customizable Profile</p>';
        }else {
            selectedCard[2].classList.remove('active');
            document.querySelector('.addons-3').innerHTML = '';
        }
    });






// }

// Step 4 

// document.querySelector('')

// select form elements
// const form = document.getElementById("form");
// const name = document.getElementById("name");
// const email = document.getElementById("email");
// const phone = document.getElementById("phone");
// const monthly = document.querySelector(".monthly");
// const changePlan = document.getElementById("change_plan");

// // select next and prev buttons
// const nextBtns = document.querySelectorAll(".next-btn");
// const prevBtns = document.querySelectorAll(".prev-btn");

// // select all steps
// const steps = document.querySelectorAll(".step");

// // set current step
// let currentStep = 0;

// // handle form submit
// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   // perform validation on form fields
//   if (validateForm()) {
//     // submit the form
//     form.submit();
//   }
// });

// // handle next button click
// nextBtns.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     if (validateForm()) {
//       // move to next step
//       currentStep++;
//       updateSteps();
//     }
//   });
// });

// // handle prev button click
// prevBtns.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     // move to previous step
//     currentStep--;
//     updateSteps();
//   });
// });

// // function to update steps
// function updateSteps() {
//   // hide all steps
//   steps.forEach((step) => {
//     step.style.display = "none";
//   });

//   // show current step
//   steps[currentStep].style.display = "block";

//   // update step indicators
//   const indicators = document.querySelectorAll(".step_nmbr");
//   indicators.forEach((indicator, index) => {
//     if (index === currentStep) {
//       indicator.classList.add("active");
//     } else {
//       indicator.classList.remove("active");
//     }
//   });

//   // disable prev button on first step
//   if (currentStep === 0) {
//     prevBtns.forEach((btn) => {
//       btn.disabled = true;
//     });
//   } else {
//     prevBtns.forEach((btn) => {
//       btn.disabled = false;
//     });
//   }

//   // change next button text on last step
//   if (currentStep === steps.length - 1) {
//     nextBtns.forEach((btn) => {
//       btn.textContent = "Submit";
//     });
//   } else {
//     nextBtns.forEach((btn) => {
//       btn.textContent = "Next";
//     });
//   }
// }

// // function to validate form fields
// function validateForm() {
//   // reset all error messages
//   const errorMessages = document.querySelectorAll(".alert");
//   errorMessages.forEach((message) => {
//     message.style.display = "none";
//   });

//   // check if name field is not empty
//   if (name.value.trim() === "") {
//     const alertName = document.getElementById("alert-name");
//     alertName.style.display = "block";
//     return false;
//   }

//   // check if email field is valid
//   const emailRegex = /^\S+@\S+\.\S+$/;
//   if (!emailRegex.test(email.value)) {
//     const alertEmail = document.getElementById("alert-email");
//     alertEmail.style.display = "block";
//     return false;
//   }

//   // check if phone field is valid
//   if (phone.value.length < 6) {
//     const alertPhone = document.getElementById("alert-phone");
//     alertPhone.style.display = "block";
//     return false;
//   }

//   // check if plan is selected
//   const selectedPlan = monthly.querySelector("input:checked");
//   if (!selectedPlan) {
//     alert("Please select a plan.");
//     return false;
//   }

//   // check if add-ons are selected

