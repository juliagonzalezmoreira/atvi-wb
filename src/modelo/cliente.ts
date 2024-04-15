import CPF from "./cpf"
import Produto from "./produto"
import RG from "./rg"
import Servico from "./servico"
import Telefone from "./telefone"

export default class Cliente {
    public nome: string
    public nomeSocial: string
    private genero: string
    private cpf: CPF
    private rgs: Array<RG>
    private dataCadastro: Date
    private telefones: Array<Telefone>
    private produtosConsumidos: Array<Produto>
    private servicosConsumidos: Array<Servico>
    private quantidadeProdutos: number
    private quantidadeServicos: number
    private totalGastoProdutos: number
    private totalGastoServicos: number
    private totalGasto: number

    constructor(nome: string, nomeSocial: string, cpf: CPF, genero: string) {
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.cpf = cpf
        this.genero = genero
        this.rgs = []
        this.dataCadastro = new Date()
        this.telefones = []
        this.produtosConsumidos = []
        this.servicosConsumidos = []
        this.quantidadeProdutos = 0
        this.quantidadeServicos = 0
        this.totalGastoProdutos = 0
        this.totalGastoServicos = 0
        this.totalGasto = 0
    }

    //GETTERS
    public get getCpf(): CPF {
        return this.cpf
    }

    public get getRgs(): Array<RG> {
        return this.rgs
    }

    public get getGenero() {
        return this.genero
    }

    public get getDataCadastro(): Date {
        return this.dataCadastro
    }

    public get getTelefones(): Array<Telefone> {
        return this.telefones
    }

    public get getProdutosConsumidos(): Array<Produto> {
        return this.produtosConsumidos
    }

    public get getServicosConsumidos(): Array<Servico> {
        return this.servicosConsumidos
    }

    public get getQuantidadeProdutos() {
        return this.quantidadeProdutos
    }

    public get getQuantidadeServicos() {
        return this.quantidadeServicos
    }

    public get getTotalGastoProdutos() {
        return this.totalGastoProdutos
    }

    public get getTotalServicos() {
        return this.totalGastoServicos
    }

    public get getTotalGasto(){
        return this.totalGasto
    }

    //SETTERS

    public set setTotalGasto( valor : any){
        this.totalGasto += valor;
    }

    public set setQuantidadeProdutos ( valor :any){
        this.quantidadeProdutos += valor;
    }

    public set setQuantidadeServicos ( valor : any){
        this.quantidadeServicos += valor
    }

    public set setTotalGastoProduto(valor : any){
        this.totalGastoProdutos += valor
    }

    public set setTotalGastoServico(valor : any){
        this.totalGastoServicos += valor
    }

    public set setProdutosConsumidos(produto : Produto){
        this.produtosConsumidos.push(produto);
    }

    public set setServicosConsumidos(servico : Servico){
        this.servicosConsumidos.push(servico)
    }
}