let input = document.querySelector(".input");
let submit_btn = document.querySelector(".submit-btn");
let captcha = document.getElementById("captcha-text");
let msg = document.querySelector(".msg");
let ref_captcha = document.querySelector("#captcha-container>img")

function generateRandomCaptcha(length) {
  const characters = 
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let captcha = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    captcha += characters.charAt(randomIndex);
  }
  return captcha;
}

function refreshCaptcha() {
  const captchaText = generateRandomCaptcha(6);
  captcha.textContent = captchaText;
}

// Initial generation of captcha
refreshCaptcha();

ref_captcha.addEventListener("click",()=>{
    refreshCaptcha();
    ref_captcha.classList.toggle('rotate');
})

function validateCaptcha() {
  if (captcha.textContent == input.value) {
    msg.innerHTML = `Enterd captcha is valid`;
    msg.style.color = `green`;
    refreshCaptcha();
  } else if ((input.value = ``)) {
    msg.innerHTML = ``;
  } else {
    msg.innerHTML = `Enterd captcha is not valid`;
    msg.style.color = `red`;
  }
}

submit_btn.addEventListener("click", () => {
  validateCaptcha();
});
