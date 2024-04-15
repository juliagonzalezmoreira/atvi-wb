import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }

    public listar(): void {
        console.log("\n1 - Listar todos os clientes.")
        console.log(`2 - Listagem de todos os clientes por gênero.`)
        console.log(`3 - Listagem dos 5 clientes que mais consumiram em valor, não em quantidade`)
        console.log(`4 - Listagem dos 10 clientes que mais consumiram produtos, em quantidade.`)
        console.log(`5 - Listagem dos 10 clientes que mais consumiram serviços, em quantidade.`)
        console.log(`6 - Listagem dos 10 clientes que menos consumiram produtos.`)
        console.log(`7 - Listagem dos 10 clientes que menos consumiram serviços.`)

        
        let entrada = new Entrada()
        const opcao = entrada.receberNumero("Selecione a listagem desejada: ")

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

    }

    public listarTodosClientes(): void {
        console.log(`\nLista de todos os clientes:`);
        this.clientes.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`CPF: ` + cliente.getCpf.getValor);
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }

    public listarClientesPorGenero(): void {
        console.log("\nListar clientes por gênero")

        const clientesPorGeneroMasculino = this.clientes.filter(cliente => cliente.getGenero === 'Masculino');
        const clientesPorGeneroFeminino = this.clientes.filter(cliente => cliente.getGenero === 'Feminino');
        const clientesPorGeneroOutro = this.clientes.filter(cliente => cliente.getGenero === 'Outro');

        console.log("\nClientes Masculinos:");
        clientesPorGeneroMasculino.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome);
            console.log(`CPF: ` + cliente.getCpf.getValor);
            console.log(`Gênero: ` + cliente.getGenero);        
        });

        console.log("\nClientes Femininos:");
        clientesPorGeneroFeminino.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome);
            console.log(`CPF: ` + cliente.getCpf.getValor);
            console.log(`Gênero: ` + cliente.getGenero);        
        });

        console.log("\nOutros:");
        clientesPorGeneroOutro.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome);
            console.log(`CPF: ` + cliente.getCpf.getValor);
            console.log(`Gênero: ` + cliente.getGenero);        
        });
    
    }

    public listarCincoClientesMaisConsumiramValor(): void {
        console.log("\nListar 5 clientes que mais consumiram em valor")

        const clientesMaisConsumiramEmValor = this.clientes.slice().sort((a, b) => b.getTotalGasto - a.getTotalGasto);
        const cincoClientesMaisConsumiramEmValor = clientesMaisConsumiramEmValor.slice(0, 5);
   
        cincoClientesMaisConsumiramEmValor.forEach((cliente)=> {
           console.log(`Nome: ` + cliente.nome);
               console.log(`Nome social: ` + cliente.nomeSocial);
               console.log(`CPF: ` + cliente.getCpf.getValor);
               console.log(`Gasto Total: ` + cliente.getTotalGasto)
               console.log(`--------------------------------------`);
           });
           console.log(`\n`);
    }

    public listarDezClientesMaisConsumiramProdutosQuantidade(): void {
     console.log("\nListar 10 clientes que mais consumiram produtos em quantidade")  
        
     const clientesPorProdutos = this.clientes.slice().sort((a, b) => b.getQuantidadeProdutos - a.getQuantidadeProdutos);
     const dezClientesProdutos = clientesPorProdutos.slice(0, 10);

     dezClientesProdutos.forEach((cliente)=> {
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`CPF: ` + cliente.getCpf.getValor);
            console.log(`Quantidade consumida: `+ cliente.getQuantidadeProdutos)
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);

    }

    public listarDezClientesMaisConsumiramServicosQuantidade(): void {
        console.log("\nListar 10 clientes que mais consumiram serviços em quantidade")

        const clientesPorServicos = this.clientes.slice().sort((a, b) => b.getQuantidadeServicos - a.getQuantidadeServicos);
        const dezClientesServicos = clientesPorServicos.slice(0, 10);
   
        dezClientesServicos.forEach((cliente)=> {
            console.log(`Nome: ` + cliente.nome);
               console.log(`Nome social: ` + cliente.nomeSocial);
               console.log(`CPF: ` + cliente.getCpf.getValor);
               console.log(`Quantidade consumida: ` + cliente.getQuantidadeServicos)
               console.log(`--------------------------------------`);
           });
           console.log(`\n`);
   
       }

    public listarDezClientesMenosConsumiramProdutos(): void {
        console.log("\nListar 10 clientes que menos consumiram produtos em quantidade")

        const clientesMenosConsumiramPorProdutos = this.clientes.slice().sort((a, b) => a.getQuantidadeProdutos - b.getQuantidadeProdutos);
        const dezClientesMenosConsumiramProdutos = clientesMenosConsumiramPorProdutos.slice(0, 10);
   
        dezClientesMenosConsumiramProdutos.forEach((cliente)=> {
            console.log(`Nome: ` + cliente.nome);
               console.log(`Nome social: ` + cliente.nomeSocial);
               console.log(`CPF: ` + cliente.getCpf.getValor);
               console.log(`Quantidade consumida: ` + cliente.getQuantidadeProdutos)
               console.log(`--------------------------------------`);
           });
           console.log(`\n`);
    }

    public listarDezClientesMenosConsumiramServicos(): void {
        console.log("\nListar 10 clientes que menos consumiram serviços em quantidade")

        const clientesMenosConsumiramPorServicos = this.clientes.slice().sort((a, b) => a.getQuantidadeServicos - b.getQuantidadeServicos);
        const dezClientesMenosConsumiramServicos = clientesMenosConsumiramPorServicos.slice(0, 10);
   
        dezClientesMenosConsumiramServicos.forEach((cliente)=> {
           console.log(`Nome: ` + cliente.nome);
               console.log(`Nome social: ` + cliente.nomeSocial);
               console.log(`CPF: ` + cliente.getCpf.getValor);
               console.log(`Quantidade consumida: ` + cliente.getQuantidadeProdutos)
               console.log(`--------------------------------------`);
           });
           console.log(`\n`);
    }

    
}