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
var ListagemProdutos = /** @class */ (function (_super) {
    __extends(ListagemProdutos, _super);
    function ListagemProdutos(produtos) {
        var _this = _super.call(this) || this;
        _this.produtos = produtos;
        return _this;
    }
    ListagemProdutos.prototype.listar = function () {
        console.log("\n1 - Listar todos os produtos.");
        console.log("2 - Listagem geral dos produtos mais consumidos.");
        console.log("3 - Listagem dos produtos mais consumidos por g\u00EAnero.");
        var entrada = new entrada_1.default();
        var opcao = entrada.receberNumero("Selecione a listagem desejada: ");
        switch (opcao) {
            case 1:
                this.listarTodosProdutos();
                break;
            case 2:
                this.produtosMaisConsumidos();
                break;
            case 3:
                this.produtosMaisConsumidosPorGenero();
                break;
            default:
                this.listarTodosProdutos();
                break;
        }
    };
    ListagemProdutos.prototype.listarTodosProdutos = function () {
        console.log("\nLista de todos os produtos:");
        this.produtos.forEach(function (produto) {
            console.log("Nome: " + produto.nome);
            console.log("Valor: " + produto.valor);
            console.log("--------------------------------------");
        });
        console.log("\n");
    };
    ListagemProdutos.prototype.produtosMaisConsumidos = function () {
        console.log("\nLista dos produtos mais consumidos:");
        var produtosMaisConsumidos = this.produtos.sort(function (a, b) { return b.consumo - a.consumo; });
        produtosMaisConsumidos.forEach(function (produto) {
            console.log("Nome: " + produto.nome);
            console.log("Valor: " + produto.valor);
            console.log("Consumo: " + produto.consumo);
            console.log("--------------------------------------");
        });
        console.log("\n");
    };
    ListagemProdutos.prototype.produtosMaisConsumidosPorGenero = function () {
        console.log("\nLista dos produtos mais consumidos por g\u00EAnero:");
        var produtosMaisConsumidosFeminino = this.produtos.sort(function (a, b) { return b.consumoFeminino - a.consumoFeminino; });
        var produtosMaisConsumidosMasculino = this.produtos.sort(function (a, b) { return b.consumoMasculino - a.consumoMasculino; });
        var produtosMaisConsumidosOutros = this.produtos.sort(function (a, b) { return b.consumoOutros - a.consumoOutros; });
        produtosMaisConsumidosFeminino.forEach(function (produto) {
            console.log("\nMais consumidos pelas mulheres:");
            console.log("Nome: " + produto.nome);
            console.log("Valor: " + produto.valor);
            console.log("Consumo: " + produto.consumoFeminino);
            console.log("--------------------------------------");
        });
        console.log("\n");
        produtosMaisConsumidosMasculino.forEach(function (produto) {
            console.log("\nMais consumidos pelas mulheres:");
            console.log("Nome: " + produto.nome);
            console.log("Valor: " + produto.valor);
            console.log("Consumo: " + produto.consumoMasculino);
            console.log("--------------------------------------");
        });
        console.log("\n");
        produtosMaisConsumidosOutros.forEach(function (produto) {
            console.log("\nMais consumidos pelas mulheres:");
            console.log("Nome: " + produto.nome);
            console.log("Valor: " + produto.valor);
            console.log("Consumo: " + produto.consumoOutros);
            console.log("--------------------------------------");
        });
        console.log("\n");
    };
    return ListagemProdutos;
}(listagem_1.default));
exports.default = ListagemProdutos;
