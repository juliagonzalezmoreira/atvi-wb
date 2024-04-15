"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Servico = /** @class */ (function () {
    function Servico(nome, valor) {
        this.nome = nome;
        this.consumo = 0;
        this.valor = valor;
        this.consumoMasculino = 0;
        this.consumoFeminino = 0;
        this.consumoOutros = 0;
    }
    Servico.prototype.adicionarConsumo = function () {
        this.consumo++;
    };
    Object.defineProperty(Servico.prototype, "getNome", {
        //GETTERS
        get: function () {
            return this.nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Servico.prototype, "getConsumo", {
        get: function () {
            return this.consumo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Servico.prototype, "getValor", {
        get: function () {
            return this.valor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Servico.prototype, "getConsumoMasculino", {
        get: function () {
            return this.consumoMasculino;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Servico.prototype, "getConsumoFeminino", {
        get: function () {
            return this.consumoFeminino;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Servico.prototype, "getConsumoOutros", {
        get: function () {
            return this.consumoOutros;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Servico.prototype, "setValor", {
        //SETTERS 
        set: function (valor) {
            this.valor = parseFloat(valor.toFixed(2));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Servico.prototype, "setNome", {
        set: function (nome) {
            this.nome = nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Servico.prototype, "setConsumo", {
        set: function (quantidade) {
            this.consumo = this.consumo + quantidade;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Servico.prototype, "setConsumoMasculino", {
        set: function (quantidade) {
            this.consumoMasculino = this.consumoMasculino + quantidade;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Servico.prototype, "setConsumoFeminino", {
        set: function (quantidade) {
            this.consumoFeminino = this.consumoFeminino + quantidade;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Servico.prototype, "setConsumosOutros", {
        set: function (quantidade) {
            this.consumoOutros = this.consumoOutros + quantidade;
        },
        enumerable: false,
        configurable: true
    });
    return Servico;
}());
exports.default = Servico;
