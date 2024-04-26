

function generatePassword() {
  let length = parseInt(document.getElementById("length").value);
  let includeUppercase = document.getElementById("uppercase").checked;
  let includeNumbers = document.getElementById("numbers").checked;
  let includeSpecialChars = document.getElementById("specialChars").checked;

    let charset = "abcdefghijklmnopqrstuvwxyz";
    
  if (includeUppercase) {
    charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
   if (includeNumbers) {
      charset += "0123456789";
      console.log(charset);
  }
  if (includeSpecialChars) {
    charset += "!@#$%^&*()-_=+[]{}|;:',.<>?";
  }

    let password = "";

  for (let i = 0; i < length; i++) {
    let pwd = Math.floor(Math.random() * charset.length);
    password += charset[pwd];
  }

  document.getElementById("password").textContent = password;
}



