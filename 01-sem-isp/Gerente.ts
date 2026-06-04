import { Funcionario } from "./interface/Funcionario";

export class Gerente implements Funcionario {
  trabalhar(): void {
    console.log("Gerente esta gerenciando a equipe.");
  }

  baterPonto(): void {
    console.log("Gerente bateu o ponto.");
  }

  calcularComissao(): number {
    console.log("Gerente calculando comissão.");
    return 2000; // Exemplo de valor
  }

  aprovarRelatorio(): void {
    console.log("Gerente aprovando relatório.");
  }
}


// O gerente aprova relatório, mas não recebe comissão.

// Mesmo assim foi obrigado a implementar calcularComissao().