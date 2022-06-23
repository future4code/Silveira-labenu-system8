import { app } from "./app";
import changeClass from "./EndPoints/changeClass";
import createStudent from "./EndPoints/createStudents";
import createTeacher from "./EndPoints/createTeacher";
import  getAllStudents  from "./EndPoints/getAllStudents";
import getAllTeachers from "./EndPoints/getAllTeachers";
import searchStudent from "./EndPoints/searchStudent";

app.get('/estudantes', getAllStudents)

app.get('/estudantes/search', searchStudent)

app.post('/estudantes', createStudent)

app.put("/docentes", changeClass)

app.post("/docentes", createTeacher);

app.get("/docentes", getAllTeachers );