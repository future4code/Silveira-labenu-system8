import { Request, Response } from "express";
import TurmaDataBase from "../Data/turmaDataBase";


export default async function changeModuleTurma(req:Request, res:Response) {
   const {id , modulo} = req.body
   const statusCode = 200
    try {
        const turmaDB = new TurmaDataBase()
        await turmaDB.changeTurma(id, modulo)
        res.status(statusCode).send("Mudança concluida com sucesso!")
    } catch (error:any) {
        console.log(error.sqlMessage)
        res.status(400).send("Erro de atualização!")
        
    }
    
} 