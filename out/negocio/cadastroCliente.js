"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var entrada_1 = __importDefault(require("../io/entrada"));
var cliente_1 = __importDefault(require("../modelo/cliente"));
var cpf_1 = __importDefault(require("../modelo/cpf"));
var cadastro_1 = __importDefault(require("./cadastro"));
var CadastroCliente = /** @class */ (function (_super) {
    __extends(CadastroCliente, _super);
    function CadastroCliente(clientes) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        _this.entrada = new entrada_1.default();
        return _this;
    }
    CadastroCliente.prototype.cadastrar = function () {
        console.log("\nIn\u00EDcio do cadastro do cliente");
        var nome = this.entrada.receberTexto("Por favor informe o nome do cliente: ");
        var nomeSocial = this.entrada.receberTexto("Por favor informe o nome social do cliente: ");
        var generoCliente = this.entrada.receberNumero('Por favor infome o gênero do cliente (1 - Feminino | 2- Masculino | 3- Outro): ');
        var genero;
        switch (generoCliente) {
            case 1:
                genero = 'Feminino';
                break;
            case 2:
                genero = 'Masculino';
                break;
            case 3:
                genero = 'Outro';
                break;
        }
        var valor = this.entrada.receberTexto("Por favor informe o n\u00FAmero do cpf: "); //cpf
        var data = this.entrada.receberTexto("Por favor informe a data de emiss\u00E3o do cpf, no padr\u00E3o dd/mm/yyyy: ");
        var partesData = data.split('/');
        var ano = new Number(partesData[2].valueOf()).valueOf();
        var mes = new Number(partesData[1].valueOf()).valueOf();
        var dia = new Number(partesData[0].valueOf()).valueOf();
        var dataEmissao = new Date(ano, mes, dia);
        var cpf = new cpf_1.default(valor, dataEmissao);
        var cliente = new cliente_1.default(nome, nomeSocial, cpf, genero);
        this.clientes.push(cliente);
        console.log("\nCadastro conclu\u00EDdo :)\n");
    };
    CadastroCliente.prototype.update = function () {
        console.log("\nIn\u00EDcio da atualiza\u00E7\u00E3o do cliente");
        var cpfClienteUpdate = this.entrada.receberTexto('Por favor inserir o CPF do cliente a ser atualizado: ');
        var clienteUpdate = this.clientes.find(function (cliente) { return cliente.getCpf.getValor == cpfClienteUpdate; });
        if (clienteUpdate) {
            console.log("Op\u00E7\u00F5es:");
            console.log("1 - Mudar nome");
            console.log("2 - Mudar nome social");
            var opcaoUpdate = this.entrada.receberNumero("Por favor, escolha uma op\u00E7\u00E3o: ");
            switch (opcaoUpdate) {
                case 1:
                    var nomeNovo = this.entrada.receberTexto("Por favor informe o novo nome do cliente: ");
                    clienteUpdate.nome = nomeNovo;
                    break;
                case 2:
                    var nomeSocialNovo = this.entrada.receberTexto("Por favor informe o novo nome social do cliente: ");
                    clienteUpdate.nomeSocial = nomeSocialNovo;
                    break;
                default:
                    console.log("Opera\u00E7\u00E3o n\u00E3o entendida :(");
            }
            console.log("\nAtualiza\u00E7\u00E3o conclu\u00EDda :)\n");
        }
        else {
            console.log("\nCliente n\u00E3o encontrado :(\n");
        }
    };
    CadastroCliente.prototype.delete = function () {
        console.log("\nIn\u00EDcio da exclus\u00E3o do cliente");
        var cpfClienteExcluido = this.entrada.receberTexto('Por favor inserir o CPF do cliente a ser excluído: ');
        var clienteDeleteIndex = this.clientes.findIndex(function (cliente) { return cliente.getCpf.getValor == cpfClienteExcluido; });
        if (clienteDeleteIndex != -1) {
            this.clientes.splice(clienteDeleteIndex, 1);
            console.log("Cliente exclu\u00EDdo com sucesso!\n");
        }
        else {
            console.log("Cliente não encontrado.\n");
        }
    };
    return CadastroCliente;
}(cadastro_1.default));
exports.default = CadastroCliente;
