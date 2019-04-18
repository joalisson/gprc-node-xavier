const client = require('./client');
const protoLoader = require('@grpc/proto-loader');

client.list({}, (error, notes) => {
    if (!error) {
    	console.log('successfully fetch List notes')
      console.log(notes)
    } else {
			console.log(error);
		}
	}
);