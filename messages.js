var protobuf = require('protocol-buffers')

module.exports = protobuf(`
  message Open {
    required bytes nonce = 1;
    required bytes id = 2;
  }

  message Handshake {
    optional bytes peer = 1;
    repeated string extensions = 2;
  }

  message Request {
    required uint64 block = 1;
  }

  message Response {
    message Node {
      required uint64 index = 1;
      required uint64 size = 2;
      required bytes hash = 3;
    }

    required uint64 block = 1;
    required bytes data = 2;
    repeated Node proof = 3;
  }

  message Have {
    repeated uint64 blocks = 1;
    optional bytes bitfield = 2;
  }

  message Cancel {
    required uint64 block = 1;
  }
`)
