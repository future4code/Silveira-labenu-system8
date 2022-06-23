import { Request, Response } from "express";
import turmaDataBase from "../Data/turmaDataBase";

export default async function getActiveTurma(req:Request, res:Response):Promise<void> {
    const statusCode = 200
    const modulo = Number(req.query.modulo) || 0 
    try {
        const getActiveTurmaDB = new turmaDataBase()
        res.status(statusCode).send(await getActiveTurmaDB.getActive(modulo))
    } catch (error:any) {
        res.status(400).send("Não existe turmas ativas nesse modulo!")
        
    }
    
}