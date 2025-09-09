from flask import Flask
from flask_cors import CORS

# Importar endpoints
from services.login import login
from services.cart import cart
from services.buy import buy
from services.ticket import ticket
from services.get_product_card import get_product_card
from services.gift import gift

app = Flask(__name__)
CORS(app)

# Registar blueprints
app.register_blueprint(login)
app.register_blueprint(get_product_card)
app.register_blueprint(cart)
app.register_blueprint(buy)
app.register_blueprint(ticket)
app.register_blueprint(gift)

if __name__ == '__main__':
    app.run(debug=True)