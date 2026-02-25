// Alunos do curso
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

const validarId = (id) => {
    if (id == null || id == undefined || isNaN(id) || id == '')
        return false
    else
        return true
}
//Informação do aluno
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