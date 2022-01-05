const AdminJS = require('adminjs')
const AdminJSExpress = require('@adminjs/express')
const AdminJSSequelize = require('@adminjs/sequelize')

const db = require ('../models')

AdminJS.registerAdapter(AdminJSSequelize)

const adminJs = new AdminJS({
  databases: [db],
  rootPath: '/admin',
})

const router = AdminJSExpress.buildRouter(adminJs)

module.exports = router