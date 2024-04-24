const Forms = document.querySelectorAll('.container');

const show = element =>{
    element.style.display = 'inline';
}

const hide = element =>{
    element.style.display = 'none';
}

function validForm(inputBoxes, inputFields){
    let isValid = true;
    inputFields.forEach((inputField, idx) =>{
        if(inputField.value === ''){
            inputBoxes[idx].classList.add('warning-red');
            isValid = false;
        }
        else{
            inputBoxes[idx].classList.remove('warning-red');
        }
    });
    return isValid;
}

function disableInputs(inputFields, submitButton) {
    let buttonIcon = submitButton.querySelector('.btn-icon');
    let loaderAnimation = submitButton.querySelector('.loader');

    if (buttonIcon) {
        hide(buttonIcon);
    }

    if (loaderAnimation) {
        show(loaderAnimation);
    }
    console.log(buttonIcon, loaderAnimation);
    setTimeout(() => {
        if (loaderAnimation) {
            hide(loaderAnimation);
        }

        if (buttonIcon) {
            show(buttonIcon);
        }

        submitButton.querySelectorAll('p')[0].innerHTML = 'Submitted!';
        submitButton.disabled = true;

        inputFields.forEach(iptField => {
            iptField.value = '';
            iptField.disabled = true;
        });
    }, 5000); 
}

Forms.forEach( Form => {
    const inputBoxes = Form.querySelectorAll('.ipt-box');
    const inputFields = Form.querySelectorAll('.ipt-box > .ipt-field');
    const submitButton = Form.querySelectorAll('.btn')[0];
    submitButton.addEventListener('click', (event)=>{
        if(!validForm(inputBoxes, inputFields)){
            event.preventDefault();
        }
        else{
            event.preventDefault();
            disableInputs(inputFields, submitButton);
        }
    });
});

