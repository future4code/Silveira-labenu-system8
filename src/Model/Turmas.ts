import { jana } from "./Docentes";
import idGenerator from "./GeradorID";
import { Modulo } from "./Types";

export class Trumas {
    constructor(private id: string, private nome:string, private docentes: string[] | string, private modulo: number){}
}

export const Silveira = new Trumas(idGenerator(10),'Silveira',[jana.id],Modulo.cinco)
