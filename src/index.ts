import { app } from "./app";
import createStudent from "./EndPoints/createStudents";
import  getAllStudents  from "./EndPoints/getAllStudents";
import searchStudent from "./EndPoints/searchStudent";

app.get('/estudantes', getAllStudents)

app.get('/estudantes/search', searchStudent)

app.post('/estudantes', createStudent)