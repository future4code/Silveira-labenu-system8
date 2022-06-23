export abstract class Usuario {
    constructor (
        readonly id:string,  protected nome:string, protected email:string, protected data_nasc:string, protected turma_id:string
        ) {}
}

export enum EspecificidadesEnum  {
    JS = 'JS',
    CSS = 'CSS',
    React = "React",
    TypeScript = 'TypeScript',
    POO = 'POO'
}

export enum Modulo {
    'zero' = 0,
    'um' = 1,
    'dois' = 2,
    'tres' = 3,
    'quatro' = 4,
    'cinco' = 5,
    'seis' = 6
}

export type Especialidade = {
    id:string,
    nome:EspecificidadesEnum
}

export type Student = {
    id: string,
    nome: string,
    email: string,
    data_nasc: string,
    turma_id: string
}

export interface Especialidades  {
    especialidades: Especialidade[]
}

export interface Hobbys {
    hobbys: string[]
}
