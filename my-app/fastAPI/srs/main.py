from fastapi import FastAPI
from .schemas import Student
from fastapi.middleware.cors import CORSMiddleware
import psycopg2

app = FastAPI()
origins = [""]

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:5500",
    "http://127.0.0.1:5500",
    "http://127.0.0.1:5500/my-app/public/ListOfStudents.html"
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

DB_CRED = {
    "dbname": "group",
    "dbuser": "postgres",
    "dbpassword": 123456,
    "dbhost": "localhost",
    "dbport": 5432
}

con = psycopg2.connect(dbname=DB_CRED['dbname'], user=DB_CRED['dbuser'],password=DB_CRED['dbpassword'], host=DB_CRED['dbhost'])
cursor = con.cursor()

@app.post('/create_student',status_code=200)
def create_student(item: Student):
    cursor.execute(f"""INSERT INTO students(id, familiya, imya, otchestvo, birthdate) 
                    VALUES ((SELECT nextval('students_id')), '{item.familiya}','{item.imya}','{item.otchestvo}','{item.birthdate}')""")
    con.commit()
    return "родили"

@app.get('/get_all_students')
def get_all_students():
    cursor.execute("SELECT * FROM students")
    fet = cursor.fetchall()
    output_List = []
    for student in fet:
        output_List.append({'id':student[0],'familiya':student[1],'imya':student[2],'otchestvo':student[3], 'birthdate':student[4]})
    return output_List


@app.get("/get_by_student_{id}")
def get_by_student_id(id):
    cursor.execute(f"SELECT * FROM students WHERE id = {id}")
    fet = cursor.fetchall()
    if len(fet)>0 :
        return {'familiya':fet[0][1],'imya':fet[0][2],'otchestvo':fet[0][3],'birthdate':fet[0][4]}
    else:
        return "ничего"

@app.get("/is_over_18_{id}")
def is_over_18_(id):
    cursor.execute(f"SELECT * FROM students WHERE age(current_date,birthdate) > '18 years' AND birthdate NOT NULL AND id = {id}")
    fet = cursor.fetchall()
    if len(fet)>0 :
        return {'familiya':fet[0][1],'imya':fet[0][2],'otchestvo':fet[0][3],'birthdate':fet[0][4]}
    else:
        return "ничего"
    
@app.patch("/Change_info_{id}")
def Change_info(item: Student,id):
    cursor.execute(f"UPDATE students SET familiya = '{item.familiya}', imya = '{item.imya}', otchestvo = '{item.otchestvo}', birthdate = '{item.birthdate}' WHERE id = {id}")
    con.commit()
    return "готово"

@app.get("/get_by_{familiya}")
def get_by_(familiya):
    cursor.execute(f"SELECT * FROM students WHERE familiya LIKE '{familiya}%' OR imya LIKE '{familiya}%' OR otchestvo LIKE '{familiya}%'")
    fet = cursor.fetchall()
    output_List = []
    for student in fet:
        output_List.append({'familiya':student[1],'imya':student[2],'otchestvo':student[3], 'birthdate':student[4]})
    return output_List
