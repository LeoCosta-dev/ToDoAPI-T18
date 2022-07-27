export default class ValidacoesService{
    /**
     * 
     * @param {string} nome 
     * @returns boolean
     */
    static validaNome(nome){
        return nome.length >= 3
    }

    /**
     * Método que valida se o e-mail está no padrão "string@string.com"
     * @param {string} email 
     * @returns boolean
     */
    static validaEmail(email){
        const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i
        return regex.test(email)
    }

    /**
     * 
     * @param {string} telefone 
     * @returns boolean
     */
    static validaTelefone(telefone){
        const tel = parseInt(telefone)
        return tel == telefone
    }

    /**
     * 
     * @param {string} nome 
     * @param {string} email 
     * @param {string} telefone 
     * @returns boolean
     */
    static isValid(nome, email, telefone){
        return this.validaNome(nome) && this.validaTelefone(telefone) && this.validaEmail(email)
    }
}