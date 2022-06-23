import { Request, Response } from "express";
import TeacherDatabase from "../Data/TeachersDatabase";
import { Docentes } from "../Model/Docentes";
import idGenerator from "../Model/GeradorID";



export default async function createTeacher(req: Request, res: Response) {
    const statusCode = 201
    const id: string = idGenerator(10)
    const { nome, email, data_nasc, turma_id, especialidades } = req.body

    const especialidadeId = especialidades.map((especialidade: string) => {

        return { id: idGenerator(5), nome: especialidade }
    })
        
    try {
        const teacherDB = new TeacherDatabase()
        const teacher = new Docentes(id, nome, email, data_nasc, turma_id, especialidadeId)
        await teacherDB.create(teacher)

        res.status(statusCode).send()

    } catch (error: any) {

        res.status(404).send({ error: error.message })
    }

}