import { Estudantes } from "../Model/Estudante";
import idGenerator from "../Model/GeradorID";
import { hobby, Student,} from "../Model/Types";
import BaseDataBase from "./BaseDataBase";

export default class StudentDatabase extends BaseDataBase {
    public  getAll = async ():Promise<Student[]> => {
        try {
            const result = await BaseDataBase.connection('estudante').select('*')
            return result.map((estudante:Student) => {
                const revetedData = new Date(estudante.data_nasc).toISOString().slice(0, 10).split("-").reverse().join("/")
                return {...estudante, data_nasc: revetedData}
            })
        } catch (error) {
            throw new Error('Erro no banco de dados')
        }
    }

    public  search = async (term:string):Promise<Student[]> => {
        try {
            return  await BaseDataBase.connection('estudante').select('*').where('nome','LIKE',`%${term}%`)
        } catch (error) {
            throw new Error('Erro no banco de dados')
        }
    }

    public create = async (student:Estudantes):Promise<void> => {
        try {
            await BaseDataBase.connection('estudante')
            .insert({ 
                id: student.getId(),
                nome: student.getNome(),
                email: student.getEmail(),
                data_nasc: student.getData_nasc(),
                turma_id: student.getTurma_id(),
        })
            const hobbys = student.hobbys.map((hobby:hobby):Promise<void> => 
                BaseDataBase.connection('hobby')
                            .insert({
                                id: hobby.id,
                                nome: hobby.nome
                            }),
            )
            await Promise.all(hobbys)

            const studentsHobby = student.hobbys.map((hobby:hobby):Promise<void> => 
                BaseDataBase.connection('estudante_hobby')
                            .insert({
                                id: idGenerator(5),
                                estudante_id: student.getId(),
                                hobby_id: hobby.id,
                            })
            )
            await Promise.all(studentsHobby)
        } catch (error:any) {
            console.log({data:{message:error.sqlMessage}})
            throw new Error('Erro no banco de dados')
        }
    }

    public changeClass = async (id:string,turma_id:string):Promise<void> => {
        await BaseDataBase.connection('estudante').update({turma_id}).where({id})
    }
}


