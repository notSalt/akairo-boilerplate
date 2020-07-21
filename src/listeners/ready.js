const { Listener } = require('discord-akairo')

class Ready extends Listener {
  constructor () {
    super('ready', {
      emitter: 'client',
      event: 'ready'
    })
  }

  exec () {
    this.client.logger.info('Bot is ready!')
  }
}

module.exports = Ready