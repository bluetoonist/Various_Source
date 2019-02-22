from time import time
import hashlib
import json

from uuid import uuid4

class BlockChain(object):
	def __init__(self):
		self.chain = []
		self.current_transactions = []

		# genesis block
		self.new_block(previous_hash=1,proof=100)

	def new_block(self,proof,previous_hash=None):
		block = {
		'index':len(self.chain)+1,
		'timestamp':time(),
		'transactions':self.current_transactions,
		'proof':proof,
		'previous_hash':previous_hash or self.hash(self.chain[-1])
		}

		self.current_transactions = []
		self.chain.append(block)

		return block


	def new_transactions(self,sender,recipdent,amount):

		# Create New transactions
		# sender : sender 의 주소값 (보내는 사람)
		# recipdent : recipdent의 주소 (받는 사람)
		# amount : amount ( 합계 )

		self.current_transactions.append(
			{'sender':sender,
			 'recipdent':recipdent,
			 'amount':amount}
		)

		return self.last_block['index']+1

	def proof_of_work(self,last_proof):
		proof = 0
		while self.valid_prrof(last_proof,proof) is False:
			proof += 1
		return proof

	@staticmethod
	def valid_proof(last_proof,proof):
		guess = f'{last_proof}{proof}'.encode()
		guess_hash = hashlib.sha256(guess).hexdigest()
		return guess_hash[:4] == "0000"

	@staticmethod
	def hash(block):
		#Create SHA256 hash of a Block
		block_string = json.dumps(block,sort_keys=True).encode()
		return hashlib.sha256(block_string).hexdigest()
	@property
	def last_block(self):
		return self.chain[-1]