import json
import requests
import flask
from flask import Flask, send_from_directory
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS

app = Flask(__name__, static_url_path='', static_folder='frontend')
CORS(app)
api = Api(app)

@app.route("/", defaults={'path':''})
def serve(path):
    return send_from_directory(app.static_folder, 'index.html')

@app.route("/search", methods = ["GET"])
def get():
    search_term = flask.request.args["search_term"]

    def search_query(apikey, search_term="cats"):
        url = f"https://partners.every.org/v0.2/search/{search_term}?apiKey={apikey}"

        r = requests.request("GET", url=url)

        nonprofits = json.loads(r.text)["nonprofits"]

        response = []

        for nonprofit in nonprofits:
            name = nonprofit.get("name", None)
            url = nonprofit.get("profileUrl", None)
            logoUrl = nonprofit.get("logoUrl", None)
            description = nonprofit.get("description", None)
            response.append({"name": name, "url": url, "logoUrl": logoUrl, "description": description})

        resp = flask.jsonify(response)

        return resp
    
    return search_query("giveBackHacks20d9c9me", search_term)
#api.add_resource(ApiHandler, '/search')

