from flask import Flask, render_template, redirect, url_for

app = Flask(__name__)

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
    return render_template("menu.html")

if __name__ == "__main__":
    app.run(debug=True)