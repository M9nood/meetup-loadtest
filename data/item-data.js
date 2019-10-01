const ItemModel = require('./models/item-model')
const { connect } = require('../connections/mongo')

function getItemByCode (code) {
  return ItemModel.findOne({ code: code }).lean()
}

async function addItem (item) {
  await connect()
  return ItemModel.create(item).then(c => c ? c.toObject() : null)
}

function _testClear () {
  return ItemModel.deleteMany({})
}

module.exports = {
  getItemByCode,
  addItem,
  _testClear
}
