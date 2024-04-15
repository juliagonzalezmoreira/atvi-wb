import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa"
import CadastroCliente from "../negocio/cadastroCliente";
import CadastroProduto from "../negocio/cadastroProduto";
import CadastroServico from "../negocio/cadastroServico";
import ListagemClientes from "../negocio/listagemClientes";
import ListagemProdutos from "../negocio/listagemProdutos";
import ListagemServicos from "../negocio/listagemServico";

console.log(`Bem-vindo ao cadastro do Grupo World Beauty`)
let empresa = new Empresa()
let execucao = true

while (execucao) {
    console.log(`Opções:`);

    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Opções de listagem de cliente`);
    console.log(`3 - Cadastrar produto`);
    console.log(`4 - Opções de listagem de produto`);
    console.log(`5 - Cadastrar serviço`);
    console.log(`6 - Opções de listagem de serviços`);
    console.log(`7 - Atualizar dados do cliente`);
    console.log(`8 - Excluir cliente`);
    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            let cadastro = new CadastroCliente(empresa.getClientes)
            cadastro.cadastrar()
            break;

        case 2:
            let listagem = new ListagemClientes(empresa.getClientes)
            listagem.listar()
            break;

        case 3:
            let cadastroProduto = new CadastroProduto(empresa.getProdutos)
            cadastroProduto.cadastrar()
            break;

        case 4:
            let listagemProduto = new ListagemProdutos(empresa.getProdutos)
            listagemProduto.listar()
            break;       

        case 5:
            let cadastroServico = new CadastroServico(empresa.getServicos)
            cadastroServico.cadastrar()
            break;

        case 6:
            let listagemServicos = new ListagemServicos(empresa.getServicos)
            listagemServicos.listar()
            break;

        case 7:
            let atualizarCliente = new CadastroCliente(empresa.getClientes)
            atualizarCliente.update()
            break;

        case 8:
            let deletarCliente = new CadastroCliente(empresa.getClientes)
            deletarCliente.delete()
            break;
        case 0:
            execucao = false;
            console.log("At\u00E9 mais");
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}