// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').config()

// Require keystone
var keystone = require('keystone')

// Initialise Keystone with your project's configuration.
// See http://keystonejs.com/guide/config for available options
// and documentation.

// var mongourl = process.env.MONGO_URI || process.env.MONGOLAB_URI || 'mongodb://localhost/cms'
var mongourl = process.env.MLAB_MONGO_URI || 'mongodb://localhost/cms'
console.log(`mongourl : ${mongourl}`)
// console.debug

keystone.init({
  'name': 'cms',
  'brand': 'cms',
  // 'signin logo': ['../logo.png', 200, 100],

  'stylus': 'public',
  'static': 'public',
  'favicon': 'public/favicon.ico',
  'views': 'templates/views',
  'view engine': 'pug',

  'emails': 'templates/emails',
  'mongo': mongourl , // ADD HERE
  'port': process.env.PORT || 3001,

  'auto update': true,
  'session': true,
  'auth': true,
  'user model': 'User',
  // admin ui path, do not change
  // /node_modules/keystone/admin/public is /keystone
  'admin path': 'keystone'

})

// Load your project's Models
keystone.import('models')

// Setup common locals for your templates. The following are required for the
// bundled templates and layouts. Any runtime locals (that should be set uniquely
// for each request) should be added to ./routes/middleware.js
keystone.set('locals', {
  _: require('lodash'),
  env: keystone.get('env'),
  utils: keystone.utils,
  editable: keystone.content.editable,
  ga: {
    property: process.env.GA_SITE_PROPERTY,
    domain: process.env.GA_SITE_DOMAIN
  }
})

// Load your project's Routes
keystone.set('routes', require('./routes'))

// Configure the navigation bar in Keystone's Admin UI
keystone.set('nav', {
  posts: ['posts', 'post-categories'],
  galleries: 'galleries',
  enquiries: 'enquiries',
  users: 'users'
})

// custom logo
// keystone.set('signin logo', '../logo.png')

// Start Keystone to connect to your database and initialise the web server

if (!process.env.MAILGUN_API_KEY || !process.env.MAILGUN_DOMAIN) {
  console.log('----------------------------------------' +
  '\nWARNING: MISSING MAILGUN CREDENTIALS' +
  '\n----------------------------------------' +
  '\nYou have opted into email sending but have not provided' +
  '\nmailgun credentials. Attempts to send will fail.' +
  '\n\nCreate a mailgun account and add the credentials to the .env file to' +
  '\nset up your mailgun integration')
}

// mytools
const tool = require('./myTools')
// console.log(tool.nowDateTime())
var yearDateTime = tool.nowDateTime()
console.log('yearDateTime:' + yearDateTime)
var ipArray = tool.localIP()
console.info(' http://localhost:3000')
console.info(' http://' + ipArray[0] + ':3000 rylogin/exp : this node server \n http://' + ipArray[0] + ':3000/test/ test folder')
console.info(' http://' + ipArray[0] + ':8888 your xamp or mamp server')
console.info(' http://' + ipArray[0] + ':3001 keystoneJS : use local with gcloud mongodb')
console.log(`[Debug]: ${ipArray}`)
// mytools

keystone.start()
