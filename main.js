// https://lion-school-phbo.onrender.com/
const inicio = document.getElementById('inicio')
const carregarInicioMain =()=>{
  
   inicio.classList.add('ativo')
}
carregarInicioMain()
const limaparMain = ()=>{
    inicio.classList.remove('ativo')
    inicio.classList.add('desativo')
}
document.getElementById('DS').addEventListener('click', ()=>{
 limaparMain()
}) 