
/***********************************************************************************************************************
 * Objetivo: Arquivo responsável pela renderização da página
 * Data: 25/02/2026
 * Autor: Breno Oliveira Assis Reis
 * Versão: 1.0
 ***********************************************************************************************************************/

import { dadoCurso, dadoCursoAlunos, dadosAluno, validarId } from "../service/alunos"

test('Validação das entradas de dados para um número válido:', function () {
    expect(validarId('a')).toBe(false)
    expect(validarId(null)).toBe(false)
    expect(validarId(5)).toBe(true)
    expect(validarId(5.5)).toBe(true)
    expect(validarId("5,5")).toBe(false)
    expect(validarId()).toBe(false)
})

test('Validação das entradas e saida de dados da fução que retorna os alunos do curso:', async function () {
    expect(await dadoCursoAlunos('a')).toBe(false)
    expect(await dadoCursoAlunos()).toBe(false)
    
})

test('Validação das entradas e saida de dados da fução que retorna o aluno:', async function () {
    expect(await dadosAluno('a')).toBe(false)
    expect(await dadosAluno()).toBe(false)
   
})

