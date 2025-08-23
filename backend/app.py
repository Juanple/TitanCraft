from flask import Flask
from flask_cors import CORS

# Importar endpoints
from services.login import login

app = Flask(__name__)
CORS(app)

# Registar blueprints
app.register_blueprint(login)

if __name__ == '__main__':
    app.run(debug=True)