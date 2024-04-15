export default class Servico {
    public nome!: string
    public consumo!: number
    public valor!: number
    public consumoMasculino : number
    public consumoFeminino: number
    public consumoOutros: number

    constructor(nome: string, valor: number) {
        this.nome = nome;
        this.consumo = 0;
        this.valor = valor;
        this.consumoMasculino = 0;
        this.consumoFeminino = 0;
        this.consumoOutros = 0;

    }

    public adicionarConsumo(): void {
        this.consumo++;
    }

    //GETTERS

    public get getNome(): string {
        return this.nome;
    }

    public get getConsumo(): number {
        return this.consumo;
    }

    public get getValor(): number {
        return this.valor;
    }

    public get getConsumoMasculino() {
        return this.consumoMasculino;
    }

    public get getConsumoFeminino() {
        return this.consumoFeminino;
    }

    public get getConsumoOutros() {
        return this.consumoOutros;
      }


    //SETTERS 

    public set setValor(valor:number){
        this.valor = parseFloat(valor.toFixed(2));
    }

    public set setNome(nome:string){
        this.nome = nome;
    }

    public set setConsumo(quantidade : number){
        this.consumo = this.consumo + quantidade
    }

    public set setConsumoMasculino (quantidade : number){
        this.consumoMasculino= this.consumoMasculino + quantidade;
    }

    public set setConsumoFeminino (quantidade : number){
        this.consumoFeminino= this.consumoFeminino + quantidade;
    }

    public set setConsumosOutros (quantidade : number){
        this.consumoOutros= this.consumoOutros + quantidade;
    }
}
