from flask import request, jsonify, Blueprint
from connection import getConnection
from mcipc.rcon.je import Client

buy = Blueprint('buy', __name__)

@buy.route('/buy', methods=['POST'])
def buy_now():

    data = request.get_json()
    product_name = data['productName']
    username = data['username']
    
    connection = getConnection()
    cursor = connection.cursor()

    cursor.execute('SELECT command FROM product WHERE title = %s', (product_name, ))
    command = cursor.fetchall()[0][0] # Sacar comando de la db basandonos en el nombre del producto
    command_list = command.split(',')

    for e in command_list:
        commandListed = e.split(' ') # Separar la frase por espacios

        result = '' # Variable del resultado

        for i in commandListed: # Si en el comando dice nombre se remplaza por el username
            if i != 'nombre':
                result += f'{i} '
            else:
                result += f'{username} '
        print('ahora')
        with Client('199.127.60.166',8177 , passwd='Vera9404') as client:
            response = client.run(result)
            print(response)

    connection.commit()
    cursor.close()
    connection.close()

    return jsonify({'':''}),200