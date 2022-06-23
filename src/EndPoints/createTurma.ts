import { Request, Response } from "express";
import turmaDataBase from "../Data/turmaDataBase";
import idGenerator from "../Model/GeradorID";
import { Turmas } from "../Model/Turmas";

export default async function createTurma(req:Request, res:Response) {
    const statusCode = 201
    const id:string = idGenerator(10)
    const {nome, modulo} = req.body
    try {
        const turmaDB = new turmaDataBase()
        const turma = new Turmas(id, nome, modulo)
        await turmaDB.createTurma(turma)
        res.status(statusCode).send("Turma criada com sucesso!")
    } catch (error:any) {
        res.status(404).send({error:error.message})
        
    }
    
}