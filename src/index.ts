import { app } from "./app";
import createStudent from "./EndPoints/createStudents";
import createTurma from "./EndPoints/createTurma";
import getActiveTurma from "./EndPoints/getActiveTurma";
import  getAllStudents  from "./EndPoints/getAllStudents";
import getAllTurmas from "./EndPoints/getAllTurma";
import searchStudent from "./EndPoints/searchStudent";


app.get('/estudantes', getAllStudents)

app.get('/estudantes/search', searchStudent)

app.get('/turma', getAllTurmas)

app.get('/turma/active', getActiveTurma)

app.post('/estudantes', createStudent)

app.post('/turma', createTurma)

