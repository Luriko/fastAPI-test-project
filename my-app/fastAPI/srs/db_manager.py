import psycopg2

DB_CRED = {
    "dbname": "group",
    "dbuser": "postgres",
    "dbpassword": 123456,
    "dbhost": "localhost",
    "dbport": 5432
}

class DbManager:
    def __init__(self):
        self.con = psycopg2.connect(dbname=DB_CRED['dbname'], user=DB_CRED['dbuser'],password=DB_CRED['dbpassword'], host=DB_CRED['dbhost'])
        self.cursor = self.con.cursor()

    def enter(self):    
        return self.cursor

    def exit(self):
        self.conn.close()

    def execute_db_script(self, script, select=False):
        if select is False:
            try:
                self.cursor.execute(script)
                self.conn.commit()
                return True
            except Exception:
                self.conn.rollback()
                return False
        else:
            try:
                self.cursor.execute(script)
                return self.cursor.fetchall()
            except Exception:
                self.conn.rollback()
                return []



# cursor.execute("INSERT INTO students(id, familiya, imya, otchestvo) VALUES ((SELECT nextval('students_id')), 'I','I','i')")
# con.commit()