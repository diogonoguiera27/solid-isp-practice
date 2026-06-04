import { Funcionario } from "./interface/Funcionario";

export class Atendente implements Funcionario {
  trabalhar(): void {
    console.log("Atendente esta atendendo Clientes.");
  }

  baterPonto(): void {
    console.log("Atendente bateu o ponto.");
  }

  calcularComissao(): number {
    throw new Error("Atendente não recebe comissão.");
  }

  aprovarRelatorio(): void {
    throw new Error("Atendente não aprova relatório.");
  }
}

// Aqui está ferindo ISP.

// O Atendente foi obrigado a implementar métodos que ele não usa:
 // calcularComissao()
 // aprovarRelatorio()