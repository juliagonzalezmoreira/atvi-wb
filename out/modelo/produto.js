"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Produto = /** @class */ (function () {
    function Produto(nome, quantidade, valor) {
        this.nome = nome;
        this.quantidade = quantidade;
        this.valor = valor;
        this.consumo = 0;
        this.consumoMasculino = 0;
        this.consumoFeminino = 0;
        this.consumoOutros = 0;
    }
    Produto.prototype.adicionarConsumo = function () {
        this.consumo++;
    };
    Object.defineProperty(Produto.prototype, "getNome", {
        //GETTERS
        get: function () {
            return this.nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "getConsumo", {
        get: function () {
            return this.consumo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "getValor", {
        get: function () {
            return this.valor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "getConsumoMasculino", {
        get: function () {
            return this.consumoMasculino;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "getConsumoFeminino", {
        get: function () {
            return this.consumoFeminino;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "getConsumoOutros", {
        get: function () {
            return this.consumoOutros;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "setValor", {
        // SETTERS
        set: function (valor) {
            this.valor = parseFloat(valor.toFixed(2));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "setNome", {
        set: function (nome) {
            this.nome = nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "setConsumo", {
        set: function (quantidade) {
            this.consumo = this.consumo + quantidade;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "setConsumoMasculino", {
        set: function (quantidade) {
            this.consumoMasculino = this.consumoMasculino + quantidade;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "setConsumoFeminino", {
        set: function (quantidade) {
            this.consumoFeminino = this.consumoFeminino + quantidade;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "setConsumosOutros", {
        set: function (quantidade) {
            this.consumoOutros = this.consumoOutros + quantidade;
        },
        enumerable: false,
        configurable: true
    });
    return Produto;
}());
exports.default = Produto;
