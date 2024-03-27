"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var entrada_1 = __importDefault(require("../io/entrada"));
var empresa_1 = __importDefault(require("../modelo/empresa"));
var cadastroCliente_1 = __importDefault(require("../negocio/cadastroCliente"));
var cadastroProduto_1 = __importDefault(require("../negocio/cadastroProduto"));
var cadastroServico_1 = __importDefault(require("../negocio/cadastroServico"));
var listagemClientes_1 = __importDefault(require("../negocio/listagemClientes"));
var listagemProdutos_1 = __importDefault(require("../negocio/listagemProdutos"));
var listagemServico_1 = __importDefault(require("../negocio/listagemServico"));
console.log("Bem-vindo ao cadastro do Grupo World Beauty");
var empresa = new empresa_1.default();
var execucao = true;
while (execucao) {
    console.log("Op\u00E7\u00F5es:");
    console.log("1 - Cadastrar cliente");
    console.log("2 - Listar todos os clientes");
    console.log("3 - Cadastrar produto");
    console.log("4 - Listar todos os produtos");
    console.log("5 - Cadastrar servi\u00E7o");
    console.log("6 - Listar todos os servi\u00E7os");
    console.log("7 - Atualizar dados do cliente");
    console.log("8 - Excluir cliente");
    console.log("0 - Sair");
    var entrada = new entrada_1.default();
    var opcao = entrada.receberNumero("Por favor, escolha uma op\u00E7\u00E3o: ");
    switch (opcao) {
        case 1:
            var cadastro = new cadastroCliente_1.default(empresa.getClientes);
            cadastro.cadastrar();
            break;
        case 2:
            var listagem = new listagemClientes_1.default(empresa.getClientes);
            listagem.listar();
            break;
        case 3:
            var cadastroProduto = new cadastroProduto_1.default(empresa.getProdutos);
            cadastroProduto.cadastrar();
            break;
        case 4:
            var listagemProduto = new listagemProdutos_1.default(empresa.getProdutos);
            listagemProduto.listar();
            break;
        case 5:
            var cadastroServico = new cadastroServico_1.default(empresa.getServicos);
            cadastroServico.cadastrar();
            break;
        case 6:
            var listagemServicos = new listagemServico_1.default(empresa.getServicos);
            listagemServicos.listar();
            break;
        case 7:
            var atualizarCliente = new cadastroCliente_1.default(empresa.getClientes);
            atualizarCliente.update();
            break;
        case 8:
            var deletarClinte = new cadastroCliente_1.default(empresa.getClientes);
            deletarClinte.delete();
            break;
        case 0:
            execucao = false;
            console.log("At\u00E9 mais");
            break;
        default:
            console.log("Opera\u00E7\u00E3o n\u00E3o entendida :(");
    }
}
