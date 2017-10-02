const Sequelize = require('sequelize')
const db = new Sequelize('postgres://ben@localhost:5432/stagehand')
module.exports = db
