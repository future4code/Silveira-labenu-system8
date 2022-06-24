import { Request, Response } from "express";
import StudentDatabase from "../Data/StudentsDatabase";

export default async function studentChangeClass(req:Request,res:Response):Promise<void> {
    const statusCode = 200
    const {id , turma_id} = req.body
    try {
        const studentDB = new StudentDatabase()
        await studentDB.changeClass(id,turma_id)
        res.status(statusCode).send('mudança concluída')
    } catch (error:any) {
        res.status(404).send({ error: error.message })
    }
}