class person {
    constructor(name, nik, bod){
      this.name = name;
      this.nik = nik;
      this.birthOfDate = bod;
    }
        getnik() {
            return this.nik
        }
        getWeekType() {
          var day = new Date(this.birthOfDate).getDay()
          if (day > 0 && day < 6) {
            return "Weekday" 
          } else if(day === 0 || day === 6) {
            return "Weekend"      
          } else {
            return "Birth of date not valid"  
          }
        }
        getAge() {
          var birthOfDate = Date.parse(this.birthOfDate)  
          var now = Date.now()
          var diff = now - birthOfDate
          var diffDate = new Date(diff)
          return Math.abs(diffDate.getUTCFullYear() - 1970)
        }

        getbod() {
            
            return this.birthOfDate
        }

    }

    module.exports = person;