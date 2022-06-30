export class Turmas {
    constructor(private id: string, private nome:string, private modulo: number){}
    public getId = () => this.id
    public getNome = () => this.nome
    public getModulo = () => this.modulo
}


