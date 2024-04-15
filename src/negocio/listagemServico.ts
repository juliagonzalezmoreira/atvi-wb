import Entrada from "../io/entrada";
import Servico from "../modelo/servico";
import Listagem from "./listagem";

export default class ListagemServicos extends Listagem{
    private servicos: Array<Servico>
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
    }

    public listar(): void {
        console.log("\n1 - Listar todos os serviços.")
        console.log(`2 - Listagem geral dos serviços mais consumidos.`)
        console.log(`3 - Listagem dos serviços mais consumidos por gênero.`)

        
        let entrada = new Entrada()
        const opcao = entrada.receberNumero("Selecione a listagem desejada: ")

        switch (opcao) {
            case 1:
                this.listarTodosServicos();
                break;
            case 2:
                this.servicosMaisConsumidos();
                break;
            case 3:
                this.servicosMaisConsumidosPorGenero();
                break;
            
            default:
                this.listarTodosServicos();
                break;
        }

    }
    public listarTodosServicos(): void {
        console.log(`\nLista de todos os serviços:`);
        this.servicos.forEach(servico => {
            console.log(`Nome: ` + servico.nome);
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }

    public servicosMaisConsumidos(): void {
        console.log(`\nLista dos serviços mais consumidos:`);

        const servicosMaisConsumidos = this.servicos.sort((a, b) => b.consumo - a.consumo);
        
        servicosMaisConsumidos.forEach((servico)=> {
            console.log(`Nome: ` + servico.nome);
            console.log(`Valor: ` + servico.valor)
            console.log(`Consumo: ` + servico.consumo)
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }

    public servicosMaisConsumidosPorGenero(): void {
        console.log(`\nLista dos serviços mais consumidos por gênero:`);

        const servicosMaisConsumidosFeminino = this.servicos.sort((a, b) => b.consumoFeminino - a.consumoFeminino);
        const servicosMaisConsumidosMasculino = this.servicos.sort((a, b) => b.consumoMasculino - a.consumoMasculino);
        const servicosMaisConsumidosOutros = this.servicos.sort((a, b) => b.consumoOutros - a.consumoOutros);

        servicosMaisConsumidosFeminino.forEach((servico)=> {
            console.log(`\nMais consumidos pelas mulheres:`);
            console.log(`Nome: ` + servico.nome);
            console.log(`Valor: ` + servico.valor)
            console.log(`Consumo: ` + servico.consumoFeminino)
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);

        servicosMaisConsumidosMasculino.forEach((produto)=> {
            console.log(`\nMais consumidos pelas mulheres:`);
            console.log(`Nome: ` + produto.nome);
            console.log(`Valor: ` + produto.valor)
            console.log(`Consumo: ` + produto.consumoMasculino)
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);

        servicosMaisConsumidosOutros.forEach((produto)=> {
            console.log(`\nMais consumidos pelas mulheres:`);
            console.log(`Nome: ` + produto.nome);
            console.log(`Valor: ` + produto.valor)
            console.log(`Consumo: ` + produto.consumoOutros)
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);

    }
}