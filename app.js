import { dadoCursoAlunos } from "./service/alunos.js"

import { dadosAluno } from "./service/alunos.js"


const main = document.querySelector('main');

const header = document.querySelector('header');

const carregarInicioMain = async () => {

    main.replaceChildren()
    //Container que vai guardar todo conteudo.
    const inicio = document.createElement('div')
    inicio.classList.add('inicio')

    //Titulo e imagem de dispositivoa
    const apresentacao = document.createElement('div')
    apresentacao.classList.add('apresentacao')

    const apresentacaoH1 = document.createElement('h1')
    apresentacaoH1.append("Escolha um")

    const apresentacaoSpan = document.createElement('span')
    apresentacaoSpan.textContent = "  curso"

    apresentacaoH1.appendChild(apresentacaoSpan)


    const apresentacaoBr = document.createElement('br')

    apresentacaoH1.append(apresentacaoBr)
    apresentacaoH1.append("para gerenciar")

    const apresentacaoImg = document.createElement('img')
    apresentacaoImg.src = "./img/modelos.svg"

    apresentacao.append(apresentacaoH1, apresentacaoImg)

    const estudante = document.createElement('div')
    estudante.classList.add('estudante')

    const estudanteImg = document.createElement('img')
    estudanteImg.src = "./img/studant.svg"

    estudante.append(estudanteImg)

    const cursos = document.createElement('div')
    cursos.classList.add('cursos')

    const buttonDs = document.createElement('button')
    buttonDs.classList.add('box-curso')

    const icon = document.createElement('i')
    icon.classList.add('fas', 'fa-code')

    const buttonDsP = document.createElement('p')
    buttonDsP.textContent = "DS"

    buttonDs.append(icon, buttonDsP)

    buttonDs.addEventListener('click', async () => {

        await curso(1, "Desenvolvimento de sistemas")
    })
    const buttonRd = document.createElement('button')
    buttonRd.classList.add('box-curso')


    const iconRd = document.createElement('i')
    iconRd.classList.add('fa-solid', 'fa-network-wired')

    const buttonRdP = document.createElement('p')
    buttonRdP.textContent = "REDES"

    buttonRd.append(iconRd, buttonRdP)

    buttonRd.addEventListener('click', async () => {
        await curso(2, "Redes")
    })
    cursos.append(buttonDs, buttonRd)

    inicio.append(apresentacao, estudante, cursos)

    main.append(inicio)

}

const carregarInicioHeader = (tela, cursoId, nome) => {
    header.replaceChildren()
    // DIV LOGO
    const logoHeader = document.createElement('div')
    logoHeader.classList.add('logo-header')

    const logoImg = document.createElement('img')
    logoImg.src = './img/logo-image.png'
    logoImg.alt = 'logo'

    const logoTitulo = document.createElement('h2')


    const logoTituloBr = document.createElement('br')

    logoTitulo.append('Lion', logoTituloBr, 'School')

    logoHeader.append(logoImg, logoTitulo)


    // BOTÃO SAIR
    const buttonHeader = document.createElement('button')
    buttonHeader.classList.add('bnt-header')
    const buttonTexto = document.createElement('h2')
    const buttonImg = document.createElement('img')
    buttonImg.src = './img/voltar.png'
    buttonImg.alt = 'icon-sair'

    if (tela === undefined) {

        buttonTexto.textContent = 'Sair'
        buttonHeader.addEventListener('click', () => {
            window.close()
        })
    }
    else if (tela == true) {
        buttonTexto.textContent = 'Voltar'
        buttonHeader.addEventListener('click', () => {
            primeiraTela()
        })
    }
    else {
        buttonTexto.textContent = 'Voltar'
        buttonHeader.addEventListener('click',async () => {
            await curso(cursoId, nome)
        })
    }

    buttonHeader.append(buttonImg, buttonTexto)

    header.append(logoHeader, buttonHeader)
}

const primeiraTela = () => {
    carregarInicioMain()
    carregarInicioHeader()
}

const curso = async (cursoId, nome) => {

    main.replaceChildren()
    const alunos = document.createElement('div')
    alunos.classList.add('alunos')

    const status = document.createElement('div')
    status.classList.add('status')

    const containerStatus = document.createElement('div')
    containerStatus.classList.add('container-status')

    const saberStatus = document.createElement('button')
    saberStatus.classList.add('saber-status')

    containerStatus.append(saberStatus)

    const legenda = document.createElement('div')
    legenda.classList.add('legenda')

    const legendaP = document.createElement('p')
    legendaP.textContent = "LEGENDA"

    const cursando = document.createElement('div')
    cursando.classList.add('cursando')

    const containerAzul = document.createElement('div')
    containerAzul.classList.add('container-azul')

    const cursandoP = document.createElement('p')
    cursandoP.textContent = "Cursando"

    cursando.append(containerAzul, cursandoP)

    const finalizado = document.createElement('div')
    finalizado.classList.add('finalizado')

    const containerAmarelo = document.createElement('div')
    containerAmarelo.classList.add('container-amarelo')

    const finalizadoP = document.createElement('p')
    finalizadoP.textContent = "Finalizado"

    finalizado.append(containerAmarelo, finalizadoP)

    legenda.append(legendaP, cursando, finalizado)

    status.append(containerStatus, legenda)

    const alunosCursoH1 = document.createElement('h1')
    alunosCursoH1.textContent = nome

    const containerAlunos = document.createElement('div')
    containerAlunos.classList.add('container-alunos')


    const dadosAluno = await dadoCursoAlunos(cursoId)
    dadosAluno.forEach(aluno => {
        let cardAluno = document.createElement("div")
        cardAluno.classList.add("card-aluno")

        let img = document.createElement('img')
        img.src = aluno.foto

        let alunoP = document.createElement("p")
        alunoP.textContent = aluno.nome

        cardAluno.append(img, alunoP)
        cardAluno.addEventListener("click", () => {
            carregarAluno(aluno.id)
        })
        containerAlunos.append(cardAluno)
    });

    alunos.append(status, alunosCursoH1, containerAlunos)


    main.append(alunos)

    carregarInicioHeader(true)
    console.log(header)
}


const carregarAluno = async (id_aluno) => {
    main.replaceChildren()

    const infoAluno = document.createElement('div')
    infoAluno.classList.add("info-aluno")

    const dadoAluno = await dadosAluno(id_aluno)
    const aluno = document.createElement("div")
    aluno.classList.add("aluno")

    const imgAluno = document.createElement("img")
    imgAluno.src = dadoAluno.foto

    const alunoP = document.createElement("p")
    alunoP.textContent = dadoAluno.nome

    aluno.append(imgAluno, alunoP)
    

    const desempenho = document.createElement("div")
    desempenho.classList.add("desempenho")

    const containerNotas = document.createElement("div")
    containerNotas.classList.add("container-notas")

    dadoAluno.desempenho.forEach(nota => {
        let notaDiv = document.createElement("div")
        notaDiv.classList.add("nota")

        let numero = document.createElement("div")
        numero.classList.add("numero")

        let numeroP = document.createElement("p")
        numeroP.textContent = nota.valor
       

        numero.appendChild(numeroP)

        let containerSombra = document.createElement("div")
        containerSombra.classList.add("container-sombra")

        let containerCor = document.createElement("div")
        containerCor.classList.add("container-cor")

        containerCor.style.height = `${nota.valor}%`

        let cor = trocarCorContainer(nota.valor)
        console.log(cor)
        containerCor.style.backgroundColor = cor

        containerSombra.appendChild(containerCor)

        let materia = document.createElement("div")
        materia.classList.add("materia")

        let materiaP = document.createElement("p")
        materiaP.textContent = nota.categoria

        materia.append(materiaP)

        notaDiv.append(numero, containerSombra, materia)

        containerNotas.append(notaDiv)
    })

    carregarInicioHeader(false,dadoAluno.id_curso)
    desempenho.append(containerNotas)
    infoAluno.append(aluno,desempenho)
    main.append(infoAluno)
}

const trocarCorContainer = (valor) => {
    if (valor != undefined && valor != null && valor != "" && !isNaN(valor)) {
        if (valor <= 60 && valor >= 50) {
            const cor = "#E5B657"
            return cor
        }
        else if (valor > 0 && valor < 50) {
            const cor = "#C11010"
            return cor
        }
        else {
            const cor = "#3347B0"
            return cor
        }
    } else {
        return false
    }

}

//  <div class="info-aluno">
//             <div class="aluno">
//                 <img src="./img/300.jpg" alt="">
//                 <p>José Matheus da Silva Miranda</p>
//             </div>
//             <div class="desempenho">
//                 <div class="container-notas">
//                     <div class="nota">
//                         <div class="numero">
//                             <p>96</p>
//                         </div>
//                         <div class="container-sombra">
//                             <div class="container-cor"></div>
//                         </div>
//                         <div class="materia">
//                             <p>SOP</p>
//                         </div> 
//                     </div>

//                 </div>
//             </div>
//         </div>


primeiraTela()
