import { Request, Response } from "express";
import StudentDatabase from "../Data/StudentsDatabase";


export default async function searchStudent(req:Request,res:Response) {
    const statusCode = 200
    const term = req.query.term as string
    try {
        const studentDB = new StudentDatabase()
        res.status(statusCode).send(await studentDB.search(term))
    } catch (error:any) {
        res.status(404).send({error:error.message})
    }
}