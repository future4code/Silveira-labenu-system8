import { Request, Response } from "express"
import StudentDatabase from "../Data/StudentsDatabase"


export default async function getAllStudents (req:Request,res:Response):Promise<void>  {
    const statusCode = 200
    try {
        const studentsDB = new StudentDatabase() 
        res.status(statusCode).send(await studentsDB.getAll())
    } catch (error:any) {
        res.status(404).send({error:error.message})
    }
}