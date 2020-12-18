var person = require('../person/persontype.js')

class Age extends person{
    constructor(...args) {
        super(...args)
    }

  personByAge() {
    if(this.getAge() < 20) {
        return "Generasi Z"
      } else if (this.getAge() >= 20 && this.getAge() < 30) {
        return "Milenial Muda"
      } else if (this.getAge() >= 30 && this.getAge() < 40) {
        return "Milenial Tua"
      } else {
        return "Baby Boomer"
      }
}
}
module.exports = Age;