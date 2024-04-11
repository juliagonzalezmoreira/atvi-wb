import Entrada from "../io/entrada"
import Produto from "../modelo/produto"
import Cadastro from "./cadastro"

export default class CadastroProduto extends Cadastro {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }

    public cadastrar(): void {
        console.log(`\nInício do cadastro de um novo produto`)
        let nomeProduto = this.entrada.receberTexto(`Digite o nome do novo produto: `)
        const valorProduto = this.entrada.receberNumero('Por favor, digite o valor do produto:');
        const quantidadeProduto = this.entrada.receberNumero('Por favor, digite a quantidade do produto:');
        let produto = new Produto(nomeProduto, valorProduto, quantidadeProduto)
        produto.nome = nomeProduto
        produto.valor = valorProduto
        produto.quantidade = quantidadeProduto
        this.produtos.push(produto)
    }

}
