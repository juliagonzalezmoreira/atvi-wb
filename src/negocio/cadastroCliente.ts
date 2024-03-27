import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import Cadastro from "./cadastro";

export default class CadastroCliente extends Cadastro {

    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do cliente`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `)
        let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `)
        //cpf ⬇️
        let valor = this.entrada.receberTexto(`Por favor informe o número do cpf: `);
        let data = this.entrada.receberTexto(`Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy: `);
        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()
        let dataEmissao = new Date(ano, mes, dia)
        let cpf = new CPF(valor, dataEmissao);
        let cliente = new Cliente(nome, nomeSocial, cpf);
        this.clientes.push(cliente)
        console.log(`\nCadastro concluído :)\n`);
    }

    public update(): void{
        console.log(`\nInício da atualização do cliente`);

       let cpfClienteUpdate = this.entrada.receberTexto('Por favor inserir o CPF do cliente a ser atualizado: ')
       let clienteUpdate= this.clientes.find(cliente => cliente.getCpf.getValor == cpfClienteUpdate)

        if(clienteUpdate){
                console.log(`Opções:`);
                console.log(`1 - Mudar nome`);
                console.log(`2 - Mudar nome social`);
                let opcaoUpdate = this.entrada.receberNumero(`Por favor, escolha uma opção: `)

                switch (opcaoUpdate) {
                    case 1:
                        let nomeNovo = this.entrada.receberTexto(`Por favor informe o novo nome do cliente: `);
                        clienteUpdate.nome = nomeNovo;
                        break;
                    case 2:
                        let nomeSocialNovo = this.entrada.receberTexto(`Por favor informe o novo nome social do cliente: `);
                        clienteUpdate.nomeSocial = nomeSocialNovo;
                        break;
                    default:
                        console.log(`Operação não entendida :(`)
                }
                console.log(`\nAtualização concluída :)\n`);
        } else {
            console.log(`\nCliente não encontrado :(\n`);
        }
    }

    public delete(): void{
        console.log(`\nInício da exclusão do cliente`);

        let cpfClienteExcluido = this.entrada.receberTexto('Por favor inserir o CPF do cliente a ser excluído: ')
        let clienteDeleteIndex = this.clientes.findIndex(cliente => cliente.getCpf.getValor == cpfClienteExcluido)

        if(clienteDeleteIndex != -1){
            this.clientes.splice(clienteDeleteIndex, 1)
            console.log(`Cliente excluído com sucesso!\n`);
        } else{
            console.log("Cliente não encontrado.\n");

        }
    }

}