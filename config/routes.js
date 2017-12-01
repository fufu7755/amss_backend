const Msg = require('../app/controllers/msg')

module.exports = function(app) {
  // Msg Save
  app.post('/subscribe', Msg.save)

}
