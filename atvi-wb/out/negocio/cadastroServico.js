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
var servico_1 = __importDefault(require("../modelo/servico"));
var cadastro_1 = __importDefault(require("./cadastro"));
var CadastroServico = /** @class */ (function (_super) {
    __extends(CadastroServico, _super);
    function CadastroServico(produtos) {
        var _this = _super.call(this) || this;
        _this.servicos = produtos;
        _this.entrada = new entrada_1.default();
        return _this;
    }
    CadastroServico.prototype.cadastrar = function () {
        console.log("\nIn\u00EDcio do cadastro de um novo servi\u00E7o");
        var nomeServico = this.entrada.receberTexto("Digite o nome do novo servi\u00E7o: ");
        var servicos = new servico_1.default();
        servicos.nome = nomeServico;
        this.servicos.push(servicos);
    };
    return CadastroServico;
}(cadastro_1.default));
exports.default = CadastroServico;
