const AWS = require('aws-sdk')

const NO_QUEUE_CODE = 'AWS.SimpleQueueService.NonExistentQueue'

AWS.config.update({ region: 'us-east-1' })

const sqs = new AWS.SQS()

function push (queueName, msg) {
  sqs.getQueueUrl({ QueueName: queueName }, (err, data) => {
    if (err) {
      if (err.code === NO_QUEUE_CODE) {
        createQueue(queueName)
          .then(() => push(queueName, msg))
          .catch(console.error)
      }
    } else {
      sqs.sendMessage({
        MessageBody: JSON.stringify(msg),
        QueueUrl: data.QueueUrl
      }, (err) => {
        if (err) console.error(err)
      })
    }
  })
}

function createQueue (queueName) {
  return new Promise((resolve, reject) => {
    sqs.createQueue({
      QueueName: queueName
    }, (err, data) => {
      if (err) reject(err)
      else resolve()
    })
  })
}

module.exports = { push }
