from flask import Blueprint, request, jsonify
from connection import getConnection

ticket = Blueprint('ticket', __name__)

@ticket.route('/ticket', methods=['POST'])
def create_ticket():
    data = request.get_json()

    connection = getConnection()
    cursor = connection.cursor()

    cursor.execute('INSERT INTO tickets(username, title, report, email, fecha, category)' \
    'VALUES(%s, %s, %s, %s, %s, %s)', (data['username'], data['title'], data['report'], data['email'], data['fecha'], data['category']))

    connection.commit()
    cursor.close()
    connection.close()
    return jsonify({'':''}), 200