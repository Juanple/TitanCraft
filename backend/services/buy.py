from flask import request, jsonify, Blueprint
from connection import getConnection

buy = Blueprint('buy', __name__)

@buy.route('/buy', methods=['POST'])
def buy_now():

    data = request.get_json()
    product_name = data['productName']
    
    connection = getConnection()
    cursor = connection.cursor()

    cursor.execute('SELECT command FROM product WHERE title = %s', (product_name, ))
    command = cursor.fetchall()
    print(command)

    connection.commit()
    cursor.close()
    connection.close()