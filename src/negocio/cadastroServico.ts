import Entrada from "../io/entrada"
import Servico from "../modelo/servico"
import Cadastro from "./cadastro"

export default class CadastroServico extends Cadastro {
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(produtos: Array<Servico>) {
        super()
        this.servicos = produtos
        this.entrada = new Entrada()
    }

    public cadastrar(): void {
        console.log(`\nInício do cadastro de um novo serviço`)
        let nomeServico = this.entrada.receberTexto(`Digite o nome do novo serviço: `)
        const valorServico = this.entrada.receberNumero('Por favor, digite o valor do serviço:');
        let servicos = new Servico(nomeServico, valorServico)
        servicos.nome = nomeServico
        servicos.valor = valorServico
        this.servicos.push(servicos)
    }
}