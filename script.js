// These variables are for show/hide login/signup forms
let loginBtn = document.querySelector('.loginBtn');
let signupBtn = document.querySelector('.signupBtn');
let loginForm = document.querySelector('.login');
let signupForm = document.querySelector('.signup');

// These variables are for show/hide password
let loginImg = document.querySelector('.loginImg img');
let signupImg = document.querySelector('.signupImg img');
let loginpass = document.querySelector('.loginpass input');
let signpass = document.querySelector('.signpass input');
let span1 = document.querySelector('.span1');
let span2 = document.querySelector('.span2');


// This function is for show/hide password
const passShowHide = (para1, para2, para3) => {
    para1.addEventListener('click', () => {
        if(para2.type == 'password') {
            para2.type = 'text';
            if(para2.type == 'text' && !para2.value == '') {
                para1.src = 'image/visible.png';
                para3.classList.add('d-none');
            } else {
                para3.classList.remove('d-none');
            }
        } else {
            para2.type = 'password';
            para1.src = 'image/close-eye.png';
        }
    })
} //? Calling function
passShowHide(loginImg, loginpass, span1);
passShowHide(signupImg, signpass, span2);

// This will show loginForm and hide signupForm with animation
loginBtn.addEventListener('click', () => {
    loginForm.classList.add('logani-come');
    loginForm.classList.remove('logani-go');
    signupForm.classList.add('signup-go');
    signupForm.classList.remove('signup-come');
    signupForm.classList.remove('d-none');
})
// This will show signupForm and hide loginForm with animation
signupBtn.addEventListener('click', () => {
    loginForm.classList.add('logani-go');
    loginForm.classList.remove('logani-come');
    signupForm.classList.add('signup-come');
    signupForm.classList.remove('signup-go');
    signupForm.classList.add('d-block');
    signupForm.classList.remove('d-none');
})

//? each function's para1, para2 is separated. There is no connection between them
// This function dispays/hides each forms
const userForm = (para1, para2, para3) => {
    para1.addEventListener('click', () => {
        para2.classList.add('');
        para2.classList.remove('');
        para3.classList.add('');
        para3.classList.remove('');
    })
}
userForm(loginBtn, loginForm, signupForm)
userForm(signupBtn, signupForm, loginForm)

// This function is active inactive for loginBtn & signupBtn
const activeBtn = (para1, para2) => {
    para1.addEventListener('click', () => {
        para1.classList.add('active');
        para2.classList.remove('active');
    })

}//? Calling function
activeBtn(loginBtn, signupBtn)
activeBtn(signupBtn, loginBtn)