const AWS = require('aws-sdk')

AWS.config.update({ region: 'us-east-1' })

const client = new AWS.DynamoDB.DocumentClient()

function getAll (TableName) {
  return new Promise((resolve, reject) => {
    client.scan({ TableName }, (err, data) => {
      if (err) {
        return reject(err)
      }
      resolve(data.Items)
    })
  })
}

function get (TableName, id) {
  return new Promise((resolve, reject) => {
    const params = {
      TableName,
      KeyConditionExpression: 'id = :hkey',
      ExpressionAttributeValues: {
        ':hkey': +id
      }
    }

    client.query(params, (err, data) => {
      if (err) {
        return reject(err)
      }
      resolve(data.Items[0])
    })
  })
}

function put (TableName, Item) {
  return new Promise((resolve, reject) => {
    client.put({ TableName, Item }, (err, data) => {
      if (err) reject(err)
      else resolve(data)
    })
  })
}

module.exports = {
  get,
  getAll,
  put
}
