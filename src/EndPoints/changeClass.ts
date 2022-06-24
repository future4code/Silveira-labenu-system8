import { Request, Response } from "express"
import TeacherDatabase from "../Data/TeachersDatabase"




export default async function changeClass(req: Request, res: Response): Promise<void> {
    const statusCode = 201

    const { id, turma_id } = req.body
    try {

        const classDB = new TeacherDatabase()

        await classDB.changeClass(id, turma_id)
        res.status(statusCode).send("Turma alterada com sucesso")

    } catch (error: any) {

        res.status(404).send({ error: error.message })
    }

}