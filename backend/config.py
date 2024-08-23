import os
from dotenv import load_dotenv
load_dotenv()


class Config:
    SQLALCHEMY_DATABASE_URI="mysql+pymysql://root:@localhost/swaaba_aralee"
    JWT_SECRET_KEY = "cars"
    

    

