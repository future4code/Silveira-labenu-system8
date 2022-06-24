import { Request, Response } from "express";
import StudentDatabase from "../Data/StudentsDatabase";
import { Estudantes } from "../Model/Estudante";
import idGenerator from "../Model/GeradorID";


export default async function createStudent(req:Request,res:Response) {
    const statusCode = 201
    let errorCode: number = 400
    const id = idGenerator(5)
    const {nome,email,data_nasc,turma_id,hobbys} = req.body
    const hobbysWithId = hobbys.map((hobby:string) => {
        return {id:idGenerator(15),nome:hobby}
    })
    try {

        if (!nome || !email ||!data_nasc||!turma_id||!hobbys) {
            errorCode = 422
            throw new Error('Verifique se todos os campos estão preenchidos')
        }

        const studentDB = new StudentDatabase()
        const student = new Estudantes(id,nome,email,data_nasc,turma_id,hobbysWithId)
        await studentDB.create(student)
        res.status(statusCode).send()
    } catch (error:any) {
        res.status(errorCode).send({ message: error.message })
        res.status(400).send({ message: error.message || error.sqlMessage })
    }
}