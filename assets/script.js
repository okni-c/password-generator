function hasNumber(myString) {
  return /\d/.test(myString);
}

function selectOptions() {
  var length = window.prompt('How many characters should your password use? (8 through 128)');
  if (length < 8 || length > 128 || hasNumber(length) === false)  {
    alert("Please type a number specifically between 7 and 129.");
    return;
  }

  var charset = '';
  var lowchars = "abcdefghijklmnopqrstuvwxyz";
  var upchars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numchars = "0123456789";
  var spchars = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var optionsNull = true;

  let lowAns = confirm('Include lowercase characters?');
  if (lowAns) {
    charset = charset + lowchars;
    optionsNull = false;
  }
  let upAns = confirm('Include uppercase characters?');
  if (upAns) {
    charset = charset + upchars;
    optionsNull = false;
  }
  let numAns = confirm('Include numbers?');
  if (numAns) {
    charset = charset + numchars;
    optionsNull = false;
  }
  let spAns = confirm('Include special characters?');
  if (spAns) {
    charset = charset + spchars;
    optionsNull = false;
  }
  if (optionsNull) {
    alert("You didnt choose any characters to include... Awkward.");
    return;
  }
  generatePassword(length, charset);
}

function generatePassword(length, charset) {
  var password = '';
  for (var i = 0, n = charset.length; i < length; ++i) {
    password += charset.charAt(Math.floor(Math.random() * n));
  }
  writePassword(password);
}

var generateBtn = document.querySelector("#generate");

function writePassword(password) {
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
generateBtn.addEventListener("click", selectOptions);