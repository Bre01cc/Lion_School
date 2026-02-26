
/***********************************************************************************************************************
 * Objetivo: Arquivo responsável por fazer requisições para API 
 * Data: 25/02/2026
 * Autor: Breno Oliveira Assis Reis
 * Versão: 1.0
 ***********************************************************************************************************************/

// Retorna todos os alunos pelo id do curso
export const dadoCursoAlunos = async (id_curso) => {

    const validar = validarId(id_curso)

    const idCurso = Number(id_curso.toFixed(0))
    if (validar) {
        const url = `https://lion-school-phbo.onrender.com/alunos?curso_id=${idCurso}`
        const response = await fetch(url)
        const data = response.json()
        return data
    }
    else
        return validar


}

// Retorna todos os cursos
export const dadoCurso = async () => {

    const url = `https://lion-school-phbo.onrender.com/cursos`
    const response = await fetch(url)
    const data = response.json()
    return data

}

//Retorna verdadeiro caso o id seja valido
const validarId = (id) => {
    if (id == null || id == undefined || isNaN(id) || id == '')
        return false
    else
        return true
}

//Retorna os dados de um aluno pelo seu id
export const dadosAluno = async (id_aluno) => {

    const validar = validarId(id_aluno)
    const idAluno = Number(id_aluno.toFixed(0))
    if (validar) {
        const url = `https://lion-school-phbo.onrender.com/alunos/${idAluno}`
        const response = await fetch(url)
        const data = response.json()
        return data
    }
    else
        return validar
}