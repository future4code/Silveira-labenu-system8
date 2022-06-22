import idGenerator from "./GeradorID";
import { Hobbys, Usuario } from "./Types";

export class Estudantes extends Usuario implements Hobbys{
    hobbies: string[] = []
    constructor(
        id:string,nome:string,email:string,data_nasc:string,turma_id:string, hobbies: string[]
    ){
        super(id,nome,email,data_nasc,turma_id)
        this.hobbies = hobbies
    }
}

export const adeir = new Estudantes(idGenerator(20),'adeir','adeir@gmail.com','12/12/1994',idGenerator(10),['codar','amar','dormir'])