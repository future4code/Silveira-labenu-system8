import { Request, Response } from "express";
import turmaDataBase from "../Data/turmaDataBase";

export default async function getAllTurmas(req:Request, res:Response):Promise<void> {
    const statusCode = 200
    try {
        const turmaDB = new turmaDataBase()
        res.status(statusCode).send(await turmaDB.getAllTurmas())
        
    } catch (error:any) {
        res.status(404).send("Turmas Não encontradas!"|| error.sqlMessage )
       
    }   
}