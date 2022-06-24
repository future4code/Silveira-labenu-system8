import { Request, Response } from "express";
import TurmaDataBase from "../Data/turmaDataBase";


export default async function getAllTurmas(req:Request, res:Response):Promise<void> {
    const statusCode = 200
    try {
        const turmaDB = new TurmaDataBase()
        res.status(statusCode).send(await turmaDB.getAllTurmas())
        
    } catch (error:any) {
        res.status(404).send("Turmas Não encontradas!")
        
    }
}