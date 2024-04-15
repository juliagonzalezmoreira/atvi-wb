"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cliente = /** @class */ (function () {
    function Cliente(nome, nomeSocial, cpf, genero) {
        this.nome = nome;
        this.nomeSocial = nomeSocial;
        this.cpf = cpf;
        this.genero = genero;
        this.rgs = [];
        this.dataCadastro = new Date();
        this.telefones = [];
        this.produtosConsumidos = [];
        this.servicosConsumidos = [];
        this.quantidadeProdutos = 0;
        this.quantidadeServicos = 0;
        this.totalGastoProdutos = 0;
        this.totalGastoServicos = 0;
        this.totalGasto = 0;
    }
    Object.defineProperty(Cliente.prototype, "getCpf", {
        //GETTERS
        get: function () {
            return this.cpf;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "getRgs", {
        get: function () {
            return this.rgs;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "getGenero", {
        get: function () {
            return this.genero;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "getDataCadastro", {
        get: function () {
            return this.dataCadastro;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "getTelefones", {
        get: function () {
            return this.telefones;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "getProdutosConsumidos", {
        get: function () {
            return this.produtosConsumidos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "getServicosConsumidos", {
        get: function () {
            return this.servicosConsumidos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "getQuantidadeProdutos", {
        get: function () {
            return this.quantidadeProdutos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "getQuantidadeServicos", {
        get: function () {
            return this.quantidadeServicos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "getTotalGastoProdutos", {
        get: function () {
            return this.totalGastoProdutos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "getTotalServicos", {
        get: function () {
            return this.totalGastoServicos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "getTotalGasto", {
        get: function () {
            return this.totalGasto;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "setTotalGasto", {
        //SETTERS
        set: function (valor) {
            this.totalGasto += valor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "setQuantidadeProdutos", {
        set: function (valor) {
            this.quantidadeProdutos += valor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "setQuantidadeServicos", {
        set: function (valor) {
            this.quantidadeServicos += valor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "setTotalGastoProduto", {
        set: function (valor) {
            this.totalGastoProdutos += valor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "setTotalGastoServico", {
        set: function (valor) {
            this.totalGastoServicos += valor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "setProdutosConsumidos", {
        set: function (produto) {
            this.produtosConsumidos.push(produto);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "setServicosConsumidos", {
        set: function (servico) {
            this.servicosConsumidos.push(servico);
        },
        enumerable: false,
        configurable: true
    });
    return Cliente;
}());
exports.default = Cliente;
