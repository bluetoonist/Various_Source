from os import sys,path
sys.path.append('/Users/owler/Source/JIanPython/Block_Chain_')

# Pycharm에서 Error가 발생하나
# Terminal에서는 Error가 발생하지 않음
from BlockChain_EX import BlockChain

from textwrap import dedent
from flask import Flask,jsonify,request
from uuid import uuid4
import optparse

app = Flask(__name__)
node_identifier = str(uuid4()).replace("-"," ")
blockchain = BlockChain()

@app.route("/mine",methods=["GET"])
def mine():
	last_block = blockchain.last_block
	last_proof = last_block['prrof']
	proof = blockchain.proof_of_work(last_block)

	blockchain.new_transactions(
		sender="0",
		recipdent=node_identifier,
		amount=1
	)
	previous_hash = blockchain.hash(last_block)
	block = blockchain.new_block(proof,previous_hash)

	response = {
		'message':"new Block Forged",
		"index":block["index"],
		"trasnactions":block["transactions"],
		"proof":block["proof"],
		"previous_hash":block["previous_hash"],
	}
	return jsonify(response),200

@app.route("/transactions/new",methods=["POST"])
def new_transactions():
	values = request.get_json()
	requird = ["sender","recipdent","amount"]
	if not all(k in values for k in requird):
		return 'Missing Values',400

	index  = blockchain.new_transactions(values['sender'],values['recipdent'],values['amount'])
	response = {'message':f'Transactions will be added to Block{index}'}
	return jsonify(response),201

@app.route('/chain',methods=["GET"])
def full_chain():
	response = {
		'chain':blockchain.chain,
		'length':len(blockchain.chain)
	}
	return jsonify(response)

if __name__ == '__main__':
	parser = optparse.OptionParser()
	parser.add_option("-p",dest="port",type="string",help=None)

	options,args = parser.parse_args()
	PortNumber = int(options.port)

	app.run(host="0.0.0.0",port=PortNumber)
