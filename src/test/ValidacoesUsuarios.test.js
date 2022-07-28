import ValidacoesUsuarios from "../services/ValidacoesUsuarios.js"

test("Validar se o nome tem 3 caracteres ou mais.", ()=>{
    expect(ValidacoesUsuarios.validaNome("Léo")).toBe(true)
})

test("Validar se o nome tem 3 caracteres ou mais.", ()=>{
    expect(ValidacoesUsuarios.validaNome(1)).toBe(false)
})

test("Validar se o nome tem 3 caracteres ou mais.", ()=>{
    expect(ValidacoesUsuarios.validaNome("Júlia")).toBe(true)
})