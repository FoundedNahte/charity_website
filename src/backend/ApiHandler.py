import requests
import json
from flask_restful import Api, Resource, reqparse
from flask import jsonify

class ApiHandler(Resource):

    def get(self):
         
        def search_query(apikey, search_term="cats"):

            url = f"https://partners.every.org/v0.2/search/{search_term}?apiKey={apikey}"

            r = requests.request("GET", url=url)

            nonprofits = json.loads(r.text)["nonprofits"]

            response = {} 

            for nonprofit in nonprofits:
                name = nonprofit["name"]
                url = nonprofit["profileUrl"]
                response[name] = url

            resp = jsonify(response)

            return resp

        return search_query("giveBackHacks20d9c9me")


    def post(self):
        print(self)
        parser = reqparse.RequestParser()
        parser.add_argument('type', type=str)
        parser.add_argument('message', type=str)

        args = parser.parse_args()

        print(args)

        request_type = args['type']
        request_json = args['message']

        ret_status = request_type
        ret_msg = request_json

        if ret_msg:
            message = "Your Message Requested: {}".format(ret_msg)
        else:
            message = 'No Msg'

        final_ret = {"status": "Success", "Message": message}

        return final_ret
            
