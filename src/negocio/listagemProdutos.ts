import Entrada from "../io/entrada";
import Produto from "../modelo/produto";
import Listagem from "./listagem";

export default class ListagemProdutos extends Listagem{
  
    private produtos: Array<Produto>
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
    }

    public listar(): void {
        console.log("\n1 - Listar todos os produtos.")
        console.log(`2 - Listagem geral dos produtos mais consumidos.`)
        console.log(`3 - Listagem dos produtos mais consumidos por gênero.`)

        
        let entrada = new Entrada()
        const opcao = entrada.receberNumero("Selecione a listagem desejada: ")

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

    }
    public listarTodosProdutos(): void {
        console.log(`\nLista de todos os produtos:`);
        this.produtos.forEach(produto => {
            console.log(`Nome: ` + produto.nome);
            console.log(`Valor: ` + produto.valor)
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }

    public produtosMaisConsumidos(): void {
        console.log(`\nLista dos produtos mais consumidos:`);

        const produtosMaisConsumidos = this.produtos.sort((a, b) => b.consumo - a.consumo);
        
        produtosMaisConsumidos.forEach((produto)=> {
            console.log(`Nome: ` + produto.nome);
            console.log(`Valor: ` + produto.valor)
            console.log(`Consumo: ` + produto.consumo)
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);

    }

    public produtosMaisConsumidosPorGenero(): void {
        console.log(`\nLista dos produtos mais consumidos por gênero:`);

        const produtosMaisConsumidosFeminino = this.produtos.sort((a, b) => b.consumoFeminino - a.consumoFeminino);
        const produtosMaisConsumidosMasculino = this.produtos.sort((a, b) => b.consumoMasculino - a.consumoMasculino);
        const produtosMaisConsumidosOutros = this.produtos.sort((a, b) => b.consumoOutros - a.consumoOutros);

        produtosMaisConsumidosFeminino.forEach((produto)=> {
            console.log(`\nMais consumidos pelas mulheres:`);
            console.log(`Nome: ` + produto.nome);
            console.log(`Valor: ` + produto.valor)
            console.log(`Consumo: ` + produto.consumoFeminino)
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);

        produtosMaisConsumidosMasculino.forEach((produto)=> {
            console.log(`\nMais consumidos pelas mulheres:`);
            console.log(`Nome: ` + produto.nome);
            console.log(`Valor: ` + produto.valor)
            console.log(`Consumo: ` + produto.consumoMasculino)
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);

        produtosMaisConsumidosOutros.forEach((produto)=> {
            console.log(`\nMais consumidos pelas mulheres:`);
            console.log(`Nome: ` + produto.nome);
            console.log(`Valor: ` + produto.valor)
            console.log(`Consumo: ` + produto.consumoOutros)
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);

    }
}