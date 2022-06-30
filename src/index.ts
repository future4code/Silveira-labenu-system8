import { app } from "./app";
import changeClass from "./EndPoints/changeClass";
import createTurma from "./EndPoints/createTurma";
import createStudent from "./EndPoints/createStudents";
import createTeacher from "./EndPoints/createTeacher";
import getAllTeachers from "./EndPoints/getAllTeachers";
import getActiveTurma from "./EndPoints/getActiveTurma";
import getAllStudents  from "./EndPoints/getAllStudents";
import getAllTurmas from "./EndPoints/getAllTurma";
import searchStudent from "./EndPoints/searchStudent";
import studentChangeClass from "./EndPoints/studentChangeClass";
import changeModuleTurma from "./EndPoints/changeModuleTurma";
import getDataTurma from "./EndPoints/getDataTurma";



app.get('/estudantes', getAllStudents)

app.get('/estudantes/search', searchStudent)

app.get("/docentes", getAllTeachers );

app.get('/turma', getAllTurmas)

app.get('/turma/active', getActiveTurma)

app.get('/turma/data/:turma_id',getDataTurma)

app.put('/estudantes', studentChangeClass)

app.put("/docentes", changeClass)

app.put("/turma", changeModuleTurma)

app.post('/estudantes', createStudent)

app.post("/docentes", createTeacher);

app.post('/estudantes', createStudent)

app.post('/turma', createTurma)




