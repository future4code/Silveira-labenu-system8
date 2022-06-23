import { Request, Response } from "express";
import TeacherDatabase from "../Data/TeachersDatabase";
import { Docentes } from "../Model/Docentes";
import idGenerator from "../Model/GeradorID";



export default async function createTeacher(req: Request, res: Response) {
    const statusCode = 201
    const id: string = idGenerator(10)
    const { nome, email, data_nasc, turma_id, especialidades } = req.body
    try {

        const teacherDB = new TeacherDatabase()
        const teacher = new Docentes(id, nome, email, data_nasc, turma_id, especialidades)
        await teacherDB.create(teacher)
        res.status(statusCode).send()

    } catch (error: any) {
        
        res.status(404).send({ error: error.message })
    }

}