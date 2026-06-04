import { RegistradorDePonto } from "../interface/RegistradorDePonto";
import { Trabalhador } from "../interface/Trabalhador";


export class Atendente  implements Trabalhador , RegistradorDePonto {
    trabalhar(): void {
        console.log("Atendente esta atendendo Clientes.");
    }
    baterPonto(): void {
        console.log("Atendente bateu o ponto.");
    }
}

// Agora o atendente só tem:

   // trabalhar()
   // baterPonto()

// Ele não é obrigado a ter comissão nem aprovação de relatório.