from flask import Flask
from flask_cors import CORS

# Importar endpoints
from services.login import login
from services.cart import cart
from services.buy import buy

from routes.crono import crono

app = Flask(__name__)
CORS(app)

# Registar blueprints
app.register_blueprint(login)
app.register_blueprint(crono)
app.register_blueprint(cart)
app.register_blueprint(buy)

if __name__ == '__main__':
    app.run(debug=True)