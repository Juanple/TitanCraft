from connection import getConnection
from flask import jsonify, Blueprint

get_product_card = Blueprint('get_product_card', __name__)

@get_product_card.route('/product/<category>', methods=['GET'])
def getProductList(category):

    connection = getConnection()
    cursor = connection.cursor()

    cursor.execute('SELECT img_url, title, description, price, discount, color, command FROM product WHERE category = %s', (category, ))
    productList = cursor.fetchall()

    connection.commit()
    cursor.close()
    connection.close()

    return jsonify({'response': productList}), 200