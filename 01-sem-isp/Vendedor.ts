import { Funcionario } from "./interface/Funcionario";

export class Vendedor implements Funcionario {
  trabalhar(): void {
    console.log("Vendedor esta vendendo produtos.");
}

  baterPonto(): void {
    console.log("Vendedor bateu o ponto.");
  }

  calcularComissao(): number {
    console.log("Vendedor calculando comissão.");
    return 1000; // Exemplo de valor
  }

  aprovarRelatorio(): void {
    console.log("Vendedor aprovando relatório.");
  }
}

// O vendedor recebe comissão, mas não aprova relatório.

// Mesmo assim foi obrigado a implementar aprovarRelatorio().