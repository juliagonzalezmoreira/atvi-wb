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
    console.log(`2 - Listar todos os clientes`);
    console.log(`3 - Cadastrar produto`);
    console.log(`4 - Listar todos os produtos`);
    console.log(`5 - Cadastrar serviço`);
    console.log(`6 - Listar todos os serviços`);
    console.log(`7 - Atualizar dados do cliente`);
    console.log(`8 - Excluir cliente`);
    console.log('9 - Listagem dos 10 clientes que mais consumiram produtos ou serviços, em quantidade.');
    console.log('10 - Listagem de todos os clientes por gênero.');
    console.log('11 - Listagem geral dos serviços mais consumidos.');
    console.log('12 - Listagem geral dos produtos mais consumidos.');
    console.log('13 - Listagem dos serviços mais consumidos por gênero.');
    console.log('14 - Listagem dos produtos mais consumidos por gênero.');
    console.log('15 - Listagem dos 10 clientes que menos consumiram produtos ou serviços.');
    console.log('16 - Listagem dos 5 clientes que mais consumiram em valor.');
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

        case 9:
            let listagem10Clientes = new ListagemClientes(empresa.getClientes)
            listagem10Clientes.listarDezClientesMaisConsumiramQuantidade()
            break; 

        case 10:
            let clientesPorGenero = new ListagemClientes(empresa.getClientes)
            clientesPorGenero.listarClientesPorGenero()
            break;

        case 11:
            let serviçosMaisConsumidos = new ListagemServicos(empresa.getServicos)
            serviçosMaisConsumidos.maisConsumidos()
            break

        case 12:
            let produtosMaisConsumidos = new ListagemProdutos(empresa.getProdutos)
            produtosMaisConsumidos.maisConsumidos()
            break

        case 13:
            let serviçosMaisConsumidosPorGenero = new ListagemServicos(empresa.getServicos)
            serviçosMaisConsumidosPorGenero.maisConsumidosPorGenero()
            break

        case 14:
            let produtosMaisConsumidosPorGenero = new ListagemProdutos(empresa.getProdutos)
            produtosMaisConsumidosPorGenero.maisConsumidosPorGenero()
            break

        case 15:
            let dezClientesMenosConsumiramProdutosServiços = new ListagemClientes(empresa.getClientes)
            dezClientesMenosConsumiramProdutosServiços.listarClientesMenosConsumiram()
            break

        case 16:
            let cincoClientesMaisConsumiramEmValor = new ListagemClientes(empresa.getClientes)
            cincoClientesMaisConsumiramEmValor.listarCincoClientesMaisConsumiramValor()
            break

        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}