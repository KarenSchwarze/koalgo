from flask import Flask, render_template, url_for
app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/couplet")
def couplet():
    return render_template("projects/Couplet_1.html")

@app.route("/metaphor")
def metaphor():
    return render_template("projects/Metaphor_1.html")

@app.route("/simile")
def simile():
    return render_template("projects/Simile_Generator_1.html")

@app.route("/oxymoron")
def oxymoron():
    return render_template("projects/Oxymoron_1.html")

@app.route("/about")
def about():
    return render_template("About.html")
    