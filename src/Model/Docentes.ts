
import { Especialidades, Especialidade, Usuario } from "./Types";

export class Docentes extends Usuario implements Especialidades {
    especialidades: Especialidade[] = []
    constructor(id:string,nome:string,email:string,data_nasc:string, especialidades:Especialidade[]){
        super(id,nome,email,data_nasc,)
        this.especialidades = especialidades
    }
    public getId = () => this.id
    public getNome = () => this.nome
    public getEmail = () => this.email
    public getData_nasc = () => this.data_nasc
    public getTurma_id = () => this.turma_id
    public getEspecialidades = () => this.especialidades
}



