const form = document.getElementById('form');
const fullName = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const back = document.getElementById('back');
const next = document.getElementById('next');
const steps = document.querySelectorAll('#step');

const stepsActive = document.querySelectorAll('.step-indicator');
let sliderSteps = Array.from(document.querySelectorAll('.step'));
let sliderCount = sliderSteps.length;
// console.log(sliderCount)
let currentStep = 1;

checker()

form.addEventListener('submit', (e)=> {
    e.preventDefault();
})
next.addEventListener('click', nextStep)
back.addEventListener('click', backStep)

function nextStep() {
    if (checkValidity()) {
    //   if (currentStep == sliderCount) {
    //     return false;
    //   } else {
        currentStep++;
        checker();
        sum();
    //   }
    }
}

function backStep() {
    if(currentStep === 1) {
        return false
    }else {
        currentStep--;
        checker()
    }
}

function checker() {
    removeActive()

    sliderSteps[currentStep - 1].classList.add('active');

    if(currentStep == 5) {
        back.style.display = 'none'
        next.style.display = 'none'
        return false
    }else {
        stepsActive[currentStep - 1].classList.add('active');
    }

    if(currentStep == 4) {
        next.innerText = "Confirm";
    }else {
        next.innerText = "Next Step";
    }

    if(currentStep === 1) {
        back.style.display = 'none'
    }else {
        back.style.display = 'block'
    }

    if(currentStep == sliderCount ) {
        console.log("this is the last step")
    }
}

function removeActive() {
    sliderSteps.forEach((el)=> {
        el.classList.remove("active")
    })
    stepsActive.forEach((el)=> {
        el.classList.remove("active")
    })
}

// function checkValidity() {
//   let currentInputs = sliderSteps[currentStep - 1].querySelectorAll("input");
//   // console.log(currentInputs)

//   currentInputs.forEach(currentiInput => {
//     //   console.log(input);
//     if (currentiInput.value === "") {
//       console.log("please fill inputs");
//       return false;
//     }

//     return true
//   });
// }

function checkValidity() {
    let currentInputs = sliderSteps[currentStep - 1].querySelectorAll('input');

    let allInputsFilled = true;
    let checkBoxChecked = false;

    for (let i = 0; i < currentInputs.length; i++) {
        if (currentInputs[i].type === 'checkbox') {
            if (currentInputs[i].checked) {
                checkBoxChecked = true;
            }
        } else if (currentInputs[i].value === "") {
            allInputsFilled = false;
        }
    }

    if (!allInputsFilled) {
        console.log("Please fill all text inputs.");
        return false;
    }

    if (!checkBoxChecked) {
        console.log("Please check the checkbox.");
        return false;
    }

    console.log("All text inputs are filled, and the checkbox is checked.");
    return true;
}



// ############ first step #################

const nameReg = /^[a-zA-Z]+ [a-zA-Z]+$/;
const emailReg = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$/;
const phoneReg = /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}/;

fullName.addEventListener('input', ()=> {
    const alertName = document.querySelector('#alert-name');

    if(fullName.value !== '' && fullName.value.match(nameReg)) {
        fullName.style.borderColor = "var(--Cool-gray)";
        alertName.style.visibility = "hidden";
        return true
    }else {
        fullName.style.borderColor = "var(--Strawberry-red)";
        alertName.style.visibility = "visible";
    }
})

email.addEventListener('input', ()=> {
    const alertEmail = document.querySelector('#alert-email');

    if(email.value !== '' && email.value.match(emailReg)) {
        email.style.borderColor = "var(--Cool-gray)";
        alertEmail.style.visibility = "hidden";
        return true
    }else {
        email.style.borderColor = "var(--Strawberry-red)";
        alertEmail.style.visibility = "visible";
    }
})

phone.addEventListener('input', ()=> {
    const alertPhone = document.querySelector('#alert-phone');

    if(phone.value !== '' ) {
        phone.style.borderColor = "var(--Cool-gray)";
        alertPhone.style.visibility = "hidden";
        return true
    }else {
        phone.style.borderColor = "var(--Strawberry-red)";
        alertPhone.style.visibility = "visible";
    }
})

// #########################################

// ############ second step Monthly Yearly Select #################

const MYSelect = document.querySelector('.choose_plan input')

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

const pricesEX = { 
    monthly: {
        os : 1,
        ls : 2,
        cp : 2
    },
    yearly: {
        os : 10,
        ls : 20,
        cp : 20
    }
};


MYSelect.addEventListener('click', (e)=> {
    const pricesS2 = sliderSteps[1].querySelectorAll('.price');
    const pricesS3 = sliderSteps[2].querySelectorAll('.price');


    if(MYSelect.checked) {
        pricesS2[0].innerHTML = "$" + prices.yearly.arcade + "/yr"; // $9/yr
        pricesS2[1].innerHTML = "$" + prices.yearly.advance + "/yr"; // $120/yr
        pricesS2[2].innerHTML = "$" + prices.yearly.pro + "/yr"; // $150/yr
        
        pricesS3[0].innerHTML = "+$" + pricesEX.yearly.os + "/yr"; // $9/yr
        pricesS3[1].innerHTML = "+$" + pricesEX.yearly.ls + "/yr"; // $120/yr
        pricesS3[2].innerHTML = "+$" + pricesEX.yearly.cp + "/yr"; // $150/yr

    }else {
        pricesS2[0].innerHTML = "$" + prices.monthly.arcade + "/mo"; // $9/mo
        pricesS2[1].innerHTML = "$" + prices.monthly.advance + "/mo"; // $120/mo
        pricesS2[2].innerHTML = "$" + prices.monthly.pro + "/mo"; // $150/mo
        
        pricesS3[0].innerHTML = "+$" + pricesEX.monthly.os + "/mo"; 
        pricesS3[1].innerHTML = "+$" + pricesEX.monthly.ls + "/mo"; 
        pricesS3[2].innerHTML = "+$" + pricesEX.monthly.cp + "/mo"; 
    }
    

})

// ##########################################

// ############ second step #################

const cardS2 = document.querySelectorAll('.step2 .monthly .card')
const cardPlanName = document.querySelectorAll('.step2 .monthly .card .plan-name')
const cardPlanPrice = document.querySelectorAll('.step2 .monthly .card .price')
const choosenPlanName = document.querySelector('.checkout .selected_plan p');
const choosenPlanPrice = document.querySelector('.checkout .selected_plan .price');

const cardExName = document.querySelectorAll('.step3 .cards .card .plan-name')
const cardEXPrice = document.querySelectorAll('.step3 .cards .card .price')
const choosenExName = document.querySelector('.checkout .selected_addons');
// const choosenExPrice = document.querySelector('.checkout .selected_plan .price');


cardS2.forEach((cardEl2, i) => {
    cardEl2.addEventListener('click', (e)=> {
        cardS2.forEach(card => {
            card.classList.remove('active');
        });
        cardEl2.classList.add('active');

        if(cardEl2.classList.contains('active')) {
            choosenPlanName.innerHTML = cardPlanName[i].innerText;
            choosenPlanPrice.innerHTML = cardPlanPrice[i].innerText;
        }
    })
})

// #########################################




// ############ third step #################
const cardS3 = document.querySelectorAll('.step3 .cards .card');

cardS3.forEach((cardEl3, i) => {

    cardEl3.classList.remove('active')
    cardEl3.addEventListener('click', (e)=> {
        e.target.parentNode.classList.toggle('active');

        if(cardEl3.classList.contains('active')) {
            choosenExName.innerHTML += `
            <div class="addons">
                <p>${cardExName[i].innerText}</p>
                <p class="price">${cardEXPrice[i].innerText}</p>
            </div>
        `;
        }else {
            choosenExName.innerHTML = `
            <div class="addons">
                <p>${cardExName[i].innerText}</p>
                <p class="price">${cardEXPrice[i].innerText}</p>
            </div>
        `;
        }
    })
})

// #########################################

// ############ checkout step  #################



function sum() {
    const checkOut = document.querySelectorAll('.step4 .price');
  if (currentStep == 4) {
    cardS3.forEach((card) => {
      if (card.classList.contains("active")) {
        console.log("current step is 4");
        const allSelectedAddons = document.querySelectorAll(".checkout .selected_addons .addons");
        let allSelectedAddonsPri = parseInt(
          Array.from(
            document.querySelectorAll(
              ".checkout .selected_addons .addons .price"
            )
          )
        );
      }
    });
  }

  let priceNumber = /\d+/g;
  let arr = [];

  for (i = 0; i < checkOut.length; i++) {
    let textContent = checkOut[i].innerText;

    if (textContent.match(priceNumber)) {
      let nms = textContent.match(priceNumber);

      for (j = 0; j < nms.length; j++) {
        arr.push(nms[j]);
        // console.log(arr);
      }

      const sum = arr.reduce(
        (accumulator, currentValue) => +accumulator + +currentValue,
        0
      );

      let total = document.querySelector("#total-price");
      total.innerHTML = "$" + sum + "/mo";

      if(MYSelect.checked) {
        total.innerHTML = "$" + sum + "/yr"
      }else {
        total.innerHTML = "$" + sum + "/mo"
      }
    }
  }
}

// #############################################

