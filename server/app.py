from flask import Flask, json
from flask_cors import CORS, cross_origin
from flaskext.mysql import MySQL

app = Flask(__name__)
mysql = MySQL()
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
app.config["MYSQL_DATABASE_USER"] = "root"
app.config["MYSQL_DATABASE_PASSWORD"] = "root"
app.config["MYSQL_DATABASE_DB"] = "store"
app.config["MYSQL_DATABASE_HOST"] = "localhost"
mysql.init_app(app)

def makeQuery(query):
    conn = mysql.connect()
    cursor = conn.cursor()
    cursor.execute(query)
    return cursor.fetchall()

def makeJSON(data):
    jsonData = []
    for idobj, obj in enumerate(data):
        currentObj = {}
        for idx, x in enumerate(obj):
            if(idx == 0):
                currentObj["id"] = x
            elif(idx == 1):
                currentObj["product_name"] = x
            elif(idx == 2):
                currentObj["product_image"] = x
            elif(idx == 3):
                currentObj["order_amount"] = x
            elif(idx == 4):
                currentObj["order_price"] = x
        jsonData.append(currentObj)
    return jsonData


@app.route("/products")
@cross_origin()
def products():
    data = makeJSON(makeQuery("SELECT * FROM products"))
    response = app.response_class(
        response=json.dumps(data),
        status=200,
        mimetype="application/json"
    )
    return response

@app.route("/api/order/<id>")
@cross_origin()
def order(id):
    query = "UPDATE products SET order_amount = order_amount + 1 WHERE id = %s"
    cursor = mysql.get_db().cursor()
    cursor.execute(query, (id,))
    mysql.get_db().commit()
    
    data = makeJSON(makeQuery("SELECT * FROM products WHERE id = " + str(id)))
    response = app.response_class(
        response=json.dumps(data),
        status=200,
        mimetype="Content-Type application/json"
    )
    return response

@app.route("/api/product/<id>")
@cross_origin()
def product(id):
    data = makeJSON(makeQuery("SELECT * FROM products WHERE id = " + str(id)))
    response = app.response_class(
        response=json.dumps(data),
        status=200,
        mimetype="Content-Type application/json"
    )
    return response

if __name__ == "__main__":
    app.run(debug=True)