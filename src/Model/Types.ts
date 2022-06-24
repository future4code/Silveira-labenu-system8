export abstract class Usuario {
    protected turma_id:string = 'K2dRx6'
    constructor (
        protected id:string,  protected nome:string, protected email:string, protected data_nasc:string
        ) {}
}

export  class teste {
    teste:string = ''
    teste2:string = 'asdv'
    constructor(){
    }
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

export type Student = {
    id: string,
    nome: string,
    email: string,
    data_nasc: string,
    turma_id: string
}

export type hobby = {
    id: string,
    nome: string
}

export type Especialidade = {
    id:string,
    // nome:EspecificidadesEnum VER ISSO DEPOIS
    nome: string
}
export interface Especialidades  {
    especialidades: Especialidade[]
}

export interface Hobbys {
    hobbys: hobby[]
}

export type Teacher = {
    id: string,
    nome: string,
    email: string,
    data_nasc: string,
    turma_id: string
}
  
export type Turma= {
    id:string,
    nome:string,
    modulo:number

}