import assert from 'assert'

describe("Meu primeiro teste", () => {
    it("Verificar igualdade", () => {
       let aux = 2
       assert.strictEqual(aux,2)
    })
    it("Verificar desigualdade", () => {
        let aux = 2
        assert.strictEqual(aux,3)
     })
})