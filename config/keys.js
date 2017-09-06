if(process.env.NODE_ENV === 'production') {
  // we are on prod return the prod keys
  module.exports = require('./prod');
} else {
  // we are on dev return the dev keys
  module.exports = require('./dev');
}