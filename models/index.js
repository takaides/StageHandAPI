const User = require('./user')
const StagerData = require('./stager_data')

StagerData.belongsTo(User)

module.exports = {User, StagerData}