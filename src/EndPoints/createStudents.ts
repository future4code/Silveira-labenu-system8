import { Request, Response } from "express";
import StudentDatabase from "../Data/StudentsDatabase";
import { Estudantes } from "../Model/Estudante";


export default async function createStudent(req:Request,res:Response) {
    const statusCode = 201
    const {id,nome,email,data_nasc,turma_id,hobbys} = req.body
    try {
        const studentDB = new StudentDatabase()
        const student = new Estudantes(id,nome,email,data_nasc,turma_id,hobbys)
        await studentDB.create(student)
        res.status(statusCode).send()
    } catch (error:any) {
        res.status(404).send({error:error.message})
    }
}