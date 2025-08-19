from flask import Flask, jsonify, request
from flask_cors import CORS
import pymysql
import bcrypt

app = Flask(__name__)
CORS(app)

@app.route('/login', methods=['POST'])
def verify_login():

    data = request.get_json()
    input_name = data['user']
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

        # Verificar si el usuario existe <3
        if len(response) == 0:
            return jsonify({'login': False, 'message': 'El usuario no existe'}), 200    
        
        # Converir la contraseña de la db a bytes
        password = response[0][0].encode('utf-8')
        
        # Convertir la contraseña introducida por el usuario a bytes 
        encode_input_password = input_password.encode('utf-8')

        # Verificar si la contraseña es correcta comparandolas
        if bcrypt.checkpw(encode_input_password, password):
            return jsonify({'login': True, 'message': ''}), 200
        else:
            return jsonify({'login': False,'message': 'Contraseña incorrecta'}), 200

    except Exception as error: # Captar algun error de conexion
        print(f'Error de conexion con la base de datos: {error}')
        return jsonify({'login': False}), 200

    finally: # Cerrar conexion
        connection.commit()
        cursor.close()
        connection.close()
        
if __name__ == '__main__':
    app.run(debug=True)