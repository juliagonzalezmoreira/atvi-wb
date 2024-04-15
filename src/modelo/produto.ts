export default class Produto {
    public nome: string
    public quantidade: number
    public valor: number
    public consumo: number
    public consumoMasculino : number
    public consumoFeminino: number
    public consumoOutros: number

    constructor(nome: string, quantidade: number, valor: number) {
        this.nome = nome;
        this.quantidade = quantidade;
        this.valor = valor;
        this.consumo = 0;
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
    

      // SETTERS

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