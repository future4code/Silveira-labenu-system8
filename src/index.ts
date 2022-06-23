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


app.get('/estudantes', getAllStudents)

app.get('/estudantes/search', searchStudent)

app.post('/estudantes', createStudent)

app.put("/docentes", changeClass)

app.post("/docentes", createTeacher);

app.get("/docentes", getAllTeachers );

app.get('/turma', getAllTurmas)

app.get('/turma/active', getActiveTurma)

app.post('/estudantes', createStudent)

app.post('/turma', createTurma)


