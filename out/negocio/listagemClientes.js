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
var listagem_1 = __importDefault(require("./listagem"));
var ListagemClientes = /** @class */ (function (_super) {
    __extends(ListagemClientes, _super);
    function ListagemClientes(clientes) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        return _this;
    }
    ListagemClientes.prototype.listar = function () {
        console.log("\n1 - Listar todos os clientes.");
        console.log("2 - Listagem de todos os clientes por g\u00EAnero.");
        console.log("3 - Listagem dos 5 clientes que mais consumiram em valor, n\u00E3o em quantidade");
        console.log("4 - Listagem dos 10 clientes que mais consumiram produtos, em quantidade.");
        console.log("5 - Listagem dos 10 clientes que mais consumiram servi\u00E7os, em quantidade.");
        console.log("6 - Listagem dos 10 clientes que menos consumiram produtos.");
        console.log("7 - Listagem dos 10 clientes que menos consumiram servi\u00E7os.");
        var entrada = new entrada_1.default();
        var opcao = entrada.receberNumero("Selecione a listagem desejada: ");
        switch (opcao) {
            case 1:
                this.listarTodosClientes();
                break;
            case 2:
                this.listarClientesPorGenero();
                break;
            case 3:
                this.listarCincoClientesMaisConsumiramValor();
                break;
            case 4:
                this.listarDezClientesMaisConsumiramProdutosQuantidade();
                break;
            case 5:
                this.listarDezClientesMaisConsumiramServicosQuantidade();
                break;
            case 6:
                this.listarDezClientesMenosConsumiramProdutos();
                break;
            case 7:
                this.listarDezClientesMenosConsumiramServicos();
                break;
            default:
                this.listarTodosClientes();
                break;
        }
    };
    ListagemClientes.prototype.listarTodosClientes = function () {
        console.log("\nLista de todos os clientes:");
        this.clientes.forEach(function (cliente) {
            console.log("Nome: " + cliente.nome);
            console.log("Nome social: " + cliente.nomeSocial);
            console.log("CPF: " + cliente.getCpf.getValor);
            console.log("--------------------------------------");
        });
        console.log("\n");
    };
    ListagemClientes.prototype.listarClientesPorGenero = function () {
        console.log("\nListar clientes por gênero");
        var clientesPorGeneroMasculino = this.clientes.filter(function (cliente) { return cliente.getGenero === 'Masculino'; });
        var clientesPorGeneroFeminino = this.clientes.filter(function (cliente) { return cliente.getGenero === 'Feminino'; });
        var clientesPorGeneroOutro = this.clientes.filter(function (cliente) { return cliente.getGenero === 'Outro'; });
        console.log("\nClientes Masculinos:");
        clientesPorGeneroMasculino.forEach(function (cliente) {
            console.log("Nome: " + cliente.nome);
            console.log("CPF: " + cliente.getCpf.getValor);
            console.log("G\u00EAnero: " + cliente.getGenero);
        });
        console.log("\nClientes Femininos:");
        clientesPorGeneroFeminino.forEach(function (cliente) {
            console.log("Nome: " + cliente.nome);
            console.log("CPF: " + cliente.getCpf.getValor);
            console.log("G\u00EAnero: " + cliente.getGenero);
        });
        console.log("\nOutros:");
        clientesPorGeneroOutro.forEach(function (cliente) {
            console.log("Nome: " + cliente.nome);
            console.log("CPF: " + cliente.getCpf.getValor);
            console.log("G\u00EAnero: " + cliente.getGenero);
        });
    };
    ListagemClientes.prototype.listarCincoClientesMaisConsumiramValor = function () {
        console.log("\nListar 5 clientes que mais consumiram em valor");
        var clientesMaisConsumiramEmValor = this.clientes.slice().sort(function (a, b) { return b.getTotalGasto - a.getTotalGasto; });
        var cincoClientesMaisConsumiramEmValor = clientesMaisConsumiramEmValor.slice(0, 5);
        cincoClientesMaisConsumiramEmValor.forEach(function (cliente) {
            console.log("Nome: " + cliente.nome);
            console.log("Nome social: " + cliente.nomeSocial);
            console.log("CPF: " + cliente.getCpf.getValor);
            console.log("Gasto Total: " + cliente.getTotalGasto);
            console.log("--------------------------------------");
        });
        console.log("\n");
    };
    ListagemClientes.prototype.listarDezClientesMaisConsumiramProdutosQuantidade = function () {
        console.log("\nListar 10 clientes que mais consumiram produtos em quantidade");
        var clientesPorProdutos = this.clientes.slice().sort(function (a, b) { return b.getQuantidadeProdutos - a.getQuantidadeProdutos; });
        var dezClientesProdutos = clientesPorProdutos.slice(0, 10);
        dezClientesProdutos.forEach(function (cliente) {
            console.log("Nome: " + cliente.nome);
            console.log("Nome social: " + cliente.nomeSocial);
            console.log("CPF: " + cliente.getCpf.getValor);
            console.log("Quantidade consumida: " + cliente.getQuantidadeProdutos);
            console.log("--------------------------------------");
        });
        console.log("\n");
    };
    ListagemClientes.prototype.listarDezClientesMaisConsumiramServicosQuantidade = function () {
        console.log("\nListar 10 clientes que mais consumiram serviços em quantidade");
        var clientesPorServicos = this.clientes.slice().sort(function (a, b) { return b.getQuantidadeServicos - a.getQuantidadeServicos; });
        var dezClientesServicos = clientesPorServicos.slice(0, 10);
        dezClientesServicos.forEach(function (cliente) {
            console.log("Nome: " + cliente.nome);
            console.log("Nome social: " + cliente.nomeSocial);
            console.log("CPF: " + cliente.getCpf.getValor);
            console.log("Quantidade consumida: " + cliente.getQuantidadeServicos);
            console.log("--------------------------------------");
        });
        console.log("\n");
    };
    ListagemClientes.prototype.listarDezClientesMenosConsumiramProdutos = function () {
        console.log("\nListar 10 clientes que menos consumiram produtos em quantidade");
        var clientesMenosConsumiramPorProdutos = this.clientes.slice().sort(function (a, b) { return a.getQuantidadeProdutos - b.getQuantidadeProdutos; });
        var dezClientesMenosConsumiramProdutos = clientesMenosConsumiramPorProdutos.slice(0, 10);
        dezClientesMenosConsumiramProdutos.forEach(function (cliente) {
            console.log("Nome: " + cliente.nome);
            console.log("Nome social: " + cliente.nomeSocial);
            console.log("CPF: " + cliente.getCpf.getValor);
            console.log("Quantidade consumida: " + cliente.getQuantidadeProdutos);
            console.log("--------------------------------------");
        });
        console.log("\n");
    };
    ListagemClientes.prototype.listarDezClientesMenosConsumiramServicos = function () {
        console.log("\nListar 10 clientes que menos consumiram serviços em quantidade");
        var clientesMenosConsumiramPorServicos = this.clientes.slice().sort(function (a, b) { return a.getQuantidadeServicos - b.getQuantidadeServicos; });
        var dezClientesMenosConsumiramServicos = clientesMenosConsumiramPorServicos.slice(0, 10);
        dezClientesMenosConsumiramServicos.forEach(function (cliente) {
            console.log("Nome: " + cliente.nome);
            console.log("Nome social: " + cliente.nomeSocial);
            console.log("CPF: " + cliente.getCpf.getValor);
            console.log("Quantidade consumida: " + cliente.getQuantidadeProdutos);
            console.log("--------------------------------------");
        });
        console.log("\n");
    };
    return ListagemClientes;
}(listagem_1.default));
exports.default = ListagemClientes;
