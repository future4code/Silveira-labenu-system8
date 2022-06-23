import idGenerator from "./GeradorID";
import { hobby, Hobbys, Usuario } from "./Types";

export class Estudantes extends Usuario implements Hobbys{
    hobbys:  hobby[] = []
    constructor(
        id:string,nome:string,email:string,data_nasc:string,turma_id:string, hobbys: hobby[]
    ){
        super(id,nome,email,data_nasc,turma_id)
        this.hobbys = hobbys
    }

    public getId = () => this.id
    public getNome = () => this.nome
    public getEmail = () => this.email
    public getData_nasc = () => this.data_nasc
    public getTurma_id = () => this.turma_id
    public getHobbys = () => this.hobbys
}

