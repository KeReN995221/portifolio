const changeThemeBtn = document.querySelector("#change-theme");
// Toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

// Load light or dark mode
function loadTheme() {
  const darkMode = localStorage.getItem("dark");

  if (darkMode) {
    toggleDarkMode();
  }
}

function copyWhatsApp(){
  const copy = '(44) 999006-0526';
  navigator.clipboard.writeText(copy).then(() =>{
    alert('Copied! ')
  })
}

loadTheme();

changeThemeBtn.addEventListener("change", function () {
  toggleDarkMode();

  // Save or remove dark mode from localStorage
  localStorage.removeItem("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("dark", 1);
  }
});


document.getElementById('bi-whatsapp').addEventListener("click",   function () {
  copyWhatsApp ();
  alert('Copied!5 ')
}); 
