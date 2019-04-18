const grpc = require('grpc');
const uuidv1 = require('uuid/v1');
const protoLoader = require('@grpc/proto-loader');

const server = new grpc.Server();

const proto = grpc.loadPackageDefinition(
  protoLoader.loadSync('protos/notes.proto', {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
    objects: true
  })
);

const notes = [
  { id: '1', title: 'Note 1', content: 'Content 1'},
  { id: '2', title: 'Note 2', content: 'Content 2'}
];

server.addService(proto.NoteService.service, {
  list: (_, callback) => {
      callback(null, notes)
  },
  insert: (call, callback) => {
    let note = call.request
    note.id = uuidv1()
    notes.push(note)
    callback(null, note)
  }
});

console.log(server);

server.bind('127.0.0.1:50051', grpc.ServerCredentials.createInsecure())

console.log('Server running at http://127.0.0.1:50051');
server.start(); 