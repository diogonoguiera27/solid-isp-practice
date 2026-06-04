import { Trabalhador } from "../interface/Trabalhador";
import { RegistradorDePonto } from "../interface/RegistradorDePonto";
import { Comissionado } from "../interface/Comissionado";

export class Vendedor implements Trabalhador, RegistradorDePonto, Comissionado {
  trabalhar(): void {
    console.log("Vendedor está vendendo produtos.");
  }

  baterPonto(): void {
    console.log("Vendedor bateu o ponto.");
  }

  calcularComissao(): number {
    return 500;
  }
}

// Agora o vendedor só tem o que realmente usa:
    // trabalhar()  
    // baterPonto()
    // calcularComissao()