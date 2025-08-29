import pymysql
from connection import getConnection
from flask import jsonify, Blueprint

crono = Blueprint('crono', __name__)

@crono.route('/crono', methods=['GET'])
def getProductList():

    connection = getConnection()
    cursor = connection.cursor()

    cursor.execute('SELECT img_url, title, description, price, discount, color, command FROM product WHERE category = "crono"')
    productList = cursor.fetchall()

    connection.commit()
    cursor.close()
    connection.close()

    return jsonify({'response': productList}), 200