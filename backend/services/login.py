from flask import jsonify, request, Blueprint
import pymysql
import bcrypt

login = Blueprint('login', __name__)

@login.route('/login', methods=['POST'])
def verify_login():

    data = request.get_json()
    input_name = data['username']
    input_password = data['password']

    try:
        connection = pymysql.connect( # Comunicarse con la db del servidor
            host = '104.238.205.84',
            port = 3306,
            user = 'u16188_WWshZhBbjr',
            password = 'FttS9PZU9WHIbkWjG^@0+jEa',
            database = 's16188_nlogin'
        )

        cursor = connection.cursor()

        # Buscar el hash de la contraseña en la db
        cursor.execute('SELECT password FROM nlogin WHERE last_name = %s',(input_name, ))
        response = cursor.fetchall()

        # Verificar si el usuario existe
        if len(response) == 0:
            return jsonify({'login': False}), 401
        
        # Converir la contraseña de la db a bytes
        password = response[0][0].encode('utf-8')
        
        # Convertir la contraseña introducida por el usuario a bytes 
        encode_input_password = input_password.encode('utf-8')

        # Verificar si la contraseña es incorrecta comparandolas
        if bcrypt.checkpw(encode_input_password, password) == False:
            return jsonify({'login': False}), 401
        
        #En caso de que el usuario y contraseña sean correctos:
        return jsonify({'admin': False}), 200

    except Exception as error: # Captar algun error de conexion con la db
        print(f'Error de conexion con la base de datos: {error}')
        return jsonify({'login': False}), 401

    finally: # Cerrar conexion
        connection.commit()
        cursor.close()
        connection.close()
        