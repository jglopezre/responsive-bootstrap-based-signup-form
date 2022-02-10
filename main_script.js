const submitButton = document.getElementById('form-submit-button');
const textFieldArr = Array.from(document.querySelectorAll('.form-input-field'));
const warnTextArr = Array.from(document.querySelectorAll('.warning-text'));

const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    
    for (let i = 0; i < textFieldArr.length; i++) {
        
        if(!textFieldArr[i].value) {
            warnTextArr[i].hidden = false;
            textFieldArr[i].style.outline = 'solid 4px hsl(0, 100%, 74%)';
        } else {
            warnTextArr[i].hidden = true;
            textFieldArr[i].style.outline = 'none'
        }

        if(i === 2) {
            if (!textFieldArr[i].value.match(emailPattern)) {
                warnTextArr[i].hidden = false;
                textFieldArr[i].style.outline = 'solid 4px hsl(0, 100%, 74%)';
            } else {
                warnTextArr[i].hidden = true;
                textFieldArr[i].style.outline = 'none'
            }
        } 
    }
})