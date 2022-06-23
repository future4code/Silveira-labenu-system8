import { Turmas } from "../Model/Turmas";
import { Turma } from "../Model/Types";
import BaseDataBase from "./BaseDataBase";

export default class turmaDataBase extends BaseDataBase {
    public getAllTurmas = async ():Promise<Turma[]> =>{
        try {
            return await BaseDataBase.connection("turma").select("*")

        } catch (error:any) {
            throw new Error('Erro no banco de dados')
        }
    }
    public getActive = async (modulo:number):Promise<Turma[] | undefined> =>{
        try {
            return await BaseDataBase.connection("turma").where("modulo",">",modulo)
        } catch (error) {
            throw new Error('Erro no banco de dados')
        }
    }

    public createTurma = async (turma:Turmas):Promise<void> =>{
       try {
        await BaseDataBase.connection("turma")
        .insert({
            id:turma.getId(),
            nome:turma.getNome(),
            modulo:turma.getModulo()
        })
       } catch (error:any) {
        
       } 
    }
}