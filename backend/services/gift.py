from flask import Blueprint, request, jsonify
from connection import getConnection

gift = Blueprint('gift',__name__)

@gift.route('/gift', methods=['POST'])
def reclamar_gift():
    data = request.get_json()
    username = data['username']
    gift_name = data['giftName']
    command = data['command']

    connection = getConnection()
    cursor = connection.cursor()

    cursor.execute('SELECT gift_name FROM gift WHERE username = %s', (username, ))
    res = cursor.fetchall()

    if res: # Si ya el usuario tiene registrado el gift en la db devolvemos false al frontend
        cursor.close()
        connection.close()
        return jsonify({'reclamado': False}), 200
    
# En caso de que no este reclamado lo hacemos
    cursor.execute('INSERT INTO gift(username, gift_name) VALUES (%s, %s)',(username, gift_name)) # Registramos la info en la db        connection.commit()
    cursor.close()
    connection.close()
    return jsonify({'reclamado': True}), 200