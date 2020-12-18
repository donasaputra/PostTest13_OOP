var validitynik = require('../person/persontype')

class validnik extends validitynik{
  constructor(...args) {
    super(...args)
  }

  stack() {
    if (super.getnik().length === 16) {
      return "SUDAH BENAR"
    } else if(super.getnik().length !== 16){
      return "BELUM BENAR"
    }
  }
}

module.exports = validnik;