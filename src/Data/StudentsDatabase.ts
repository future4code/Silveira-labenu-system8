import { Estudantes } from "../Model/Estudante";
import { Student } from "../Model/Types";
import BaseDataBase from "./BaseDataBase";

export default class StudentDatabase extends BaseDataBase {
    public  getAll = async ():Promise<Student[]> => {
        try {
            return  await BaseDataBase.connection('Estudantes').select('*')
        } catch (error) {
            throw new Error('Erro no banco de dados')
        }
    }

    public  search = async (term:string):Promise<Student[]> => {
        try {
            return  await BaseDataBase.connection('Estudantes').select('*').where('nome','LIKE',`%${term}%`)
        } catch (error) {
            throw new Error('Erro no banco de dados')
        }
    }

    public create = async (student:Estudantes):Promise<void> => {
        try {
            await BaseDataBase.connection('Estudantes')
            .insert({ 
                id: student.getId(),
                nome: student.getNome(),
                email: student.getEmail(),
                data_nasc: student.getData_nasc(),
                turma_id: student.getTurma_id(),
        })
        } catch (error:any) {
            throw new Error('Erro no banco de dados')
        }
    }
}