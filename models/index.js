const dbConfig = require('../config/dbConfig.js');

const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false,

        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle,
        }
    }
)

sequelize.authenticate()
.then(() => {
    console.log('connected..')
})
.catch((err) => {
    console.log('Error' + err)
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.team = require('./team.js')(sequelize, DataTypes),
db.player = require('./player.js')(sequelize, DataTypes)
db.match = require('./match.js')(sequelize, DataTypes)
db.result = require('./result.js')(sequelize, DataTypes)

db.sequelize.sync({force: false})
.then(() => {
    console.log('yes re-sync done!')
})

db.team.hasMany(db.player, {
    foreignKey: 'football',
})

db.player.belongsTo(db.team, {
    foreignKey: 'football',
})

module.exports = db