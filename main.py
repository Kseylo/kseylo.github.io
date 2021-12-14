from flask import Flask, render_template, redirect, url_for
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://kseylo:190498@localhost/cherry'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

class Menu(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=True, nullable=False)
    type = db.Column(db.String(20), nullable=False)
    size_small = db.Column(db.Integer)
    price_small = db.Column(db.Integer)
    size_big = db.Column(db.Integer)
    price_big = db.Column(db.Integer)

# db.create_all()

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/locations")
def locations():
    return render_template("locations.html")

@app.route("/menu")
def menu():
    menu = Menu.query.all()
    return render_template("menu.html", menu=menu)

if __name__ == "__main__":
    app.run(debug=True)