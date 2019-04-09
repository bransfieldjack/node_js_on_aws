const AWS = require('aws-sdk')

AWS.config.update({ region: 'us-east-1' })

const kinesis = new AWS.Kinesis()

function send (streamName, partition, msg) {
  const params = {
    Data: JSON.stringify(msg),
    PartitionKey: partition,
    StreamName: streamName
  }

  kinesis.putRecord(params, (err) => {
    if (err) console.error(err)
  })
}

module.exports = { send }
