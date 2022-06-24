import { Request, Response } from "express";
import StudentDatabase from "../Data/StudentsDatabase";
import { Estudantes } from "../Model/Estudante";
import idGenerator from "../Model/GeradorID";


export default async function createStudent(req:Request,res:Response) {
    const statusCode = 201
    const id = idGenerator(5)
    const {nome,email,data_nasc,hobbys} = req.body
    const revetedData_Nasc = data_nasc.split('/').reverse().join('-')
    const hobbysWithId = hobbys.map((hobby:string) => {
        return {id:idGenerator(15),nome:hobby}
    })
    try {
        const studentDB = new StudentDatabase()
        const student = new Estudantes(id,nome,email,revetedData_Nasc,hobbysWithId)
        await studentDB.create(student)
        res.status(statusCode).send()
    } catch (error:any) {
        res.status(404).send({error:error.message})
    }
}