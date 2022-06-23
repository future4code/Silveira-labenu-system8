import { Request, Response } from "express"
import TeacherDatabase from "../Data/TeachersDatabase"


export default async function getAllTeachers (req:Request,res:Response):Promise<void>  {
    const statusCode = 200
    try {
        const teachersDB = new TeacherDatabase() 
        res.status(statusCode).send(await teachersDB.getAll())
    } catch (error:any) {
        
        res.status(404).send({error:error.message})
    }
}