from flask import Flask
from flask import jsonify
from flask import request
from flask_cors import CORS
import json
from flask_pymongo import PyMongo

app = Flask(__name__)
CORS(app)

app.config['MONGO_DBNAME'] = 'feedbacks'
app.config['MONGO_URI'] = 'mongodb://localhost:27017/feedbacks'

mongo = PyMongo(app)

@app.route('/', methods=['GET'])
def get_all_datas():
  data = mongo.db.feedbacks
  output = []
  for s in data.find():
    output.append({'name' : s['name'], 'opinion' : s['opinion']})
  return jsonify({'result' : output})

@app.route('/feedbacks/add', methods=['POST'])
def add_feedback():
   data = mongo.db.feedbacks
   data.insert(request.json)

if __name__ == '__main__':
    app.run(debug=True,port=4000)
