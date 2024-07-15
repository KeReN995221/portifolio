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

async function consultarRepositorios() {
  
  const url = `https://api.github.com/users/KeReN995221/repos`;
  try{
      const resposta = await fetch(url);
      
      if(!resposta.ok){
          alert("Erro ao realizar a consulta");  
          return;
      }
      const repositorios = await resposta.json();
      
      repositorios.forEach(element => {
          const itemLista = document.createElement('li');
          itemLista.textContent = element.name;
          listaRepositorios.appendChild(itemLista);           
      });
     
  }catch(error){

  }
  status.innerText='';    
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
