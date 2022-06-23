import idGenerator from "./GeradorID";
import { Especialidades, EspecificidadesEnum, Especialidade, Hobbys,  Usuario } from "./Types";

export class Docentes extends Usuario implements Especialidades {
    especialidades: Especialidade[] = []
    constructor(id:string,nome:string,email:string,data_nasc:string,turma_id:string, especialidades:Especialidade[]){
        super(id,nome,email,data_nasc,turma_id)
        this.especialidades = especialidades
    }
    
}



