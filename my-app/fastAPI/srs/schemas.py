from pydantic import BaseModel
import datetime

# class Genre(BaseModel):
#     name: str

# class Author(BaseModel):
#     First_name: str
#     Last_name:str
#     age:int = Field(..., gt=15,lt=90)

    # @validator('age')
    # def check_age(cls,v):
    #     if v < 15:
    #         raise ValueError('Author age must me older than 15')
    #     return v      

class Student(BaseModel):
    familiya: str
    imya: str 
    otchestvo: str
    birthdate: datetime.date

class Student_id(BaseModel):
    id: int 