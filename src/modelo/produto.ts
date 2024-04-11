export default class Produto {
    public nome!: string
    public quantidade!: number
    public valor!: number
    public consumo!: number

    constructor(nome: string, quantidade: number, valor: number) {
        this.nome = nome;
        this.quantidade = quantidade;
        this.valor = valor;
        this.consumo = 0;
      }
    
      public getNome(): string {
        return this.nome;
      }
    
      public getConsumo(): number {
        return this.consumo;
      }
    
      public getValor(): number {
        return this.valor;
      }
    
      public adicionarConsumo(): void {
        this.consumo++;
      }
}