import pymysql

def getConnection():
    return pymysql.connect(
        host='localhost',
        user='root',
        password='',
        database='titancraft'
    )