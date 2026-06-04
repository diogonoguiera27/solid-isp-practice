import { RegistradorDePonto } from "../interface/RegistradorDePonto";
import { Trabalhador } from "../interface/Trabalhador";
import { AprovadorDeRelatorio } from "../interface/AprovadorDeRelatorio";

export class Gerente  implements Trabalhador, RegistradorDePonto, AprovadorDeRelatorio    {
    trabalhar(): void {
        console.log("Gerente esta gerenciando a equipe.");
    }
    baterPonto(): void {
        console.log("Gerente bateu o ponto.");
    }
    aprovarRelatorio(): void {
        console.log("Gerente aprovou o relatório.");
    }
}