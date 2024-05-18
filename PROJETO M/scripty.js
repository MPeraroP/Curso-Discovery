function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a imagem 
const img = document.querySelector('#profile img')

//substituir a imagem
if (html.classList.contains("light")) {
//se tiver light mode, adicionar imagem
img.setAttribute("src", "./assets/avatar-light.png")
} 
else { 
  //se tiver sem light mode, imagem normal
  img.setAttribute("src", "./assets/avatar.png")
}

}