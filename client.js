const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

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

const NoteService = proto.NoteService;

const client = new NoteService('localhost:50051', grpc.credentials.createInsecure());

module.exports = client;