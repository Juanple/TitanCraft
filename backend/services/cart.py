from flask import request, jsonify, Blueprint
from connection import getConnection
import pymysql

cart = Blueprint('cart', __name__)

@cart.route('/cart', methods=['POST']) # POST
def addToCart():
    data = request.get_json()
    product_name = data['productName']
    user_name = data['userName']

    connection = getConnection()
    cursor = connection.cursor()

    #Sacar el idproduct
    cursor.execute('SELECT idproduct FROM product WHERE title = %s', (product_name, ))
    idproduct = cursor.fetchall()[0][0]

    cursor.execute('INSERT INTO cart (username, idproduct) VALUES (%s, %s)', (user_name, idproduct))

    connection.commit()
    cursor.close()
    connection.close()

    return jsonify({'':''}), 200

@cart.route('/cart/<username>', methods=['GET']) # GET
def getCart(username):

    connection = getConnection()
    cursor = connection.cursor()

    cursor.execute('SELECT title, category, price, img_url, idcart FROM cart JOIN product ON (cart.idproduct = product.idproduct && username = %s)', (username, ))
    response = cursor.fetchall() # Sacar los datos de los productos para agregarlos al carrito

    connection.commit()
    cursor.close()
    connection.close()

    return jsonify({'productList':response}), 200
    
@cart.route('/cart<idcart>', methods=['DELETE']) # DELETE
def deleteProduct(idcart):

    connection = getConnection()
    cursor = connection.cursor()

    cursor.execute('DELETE FROM cart WHERE idcart = %s',(idcart, ))

    connection.commit()
    cursor.close()
    connection.close()

    return jsonify({'':''}), 200