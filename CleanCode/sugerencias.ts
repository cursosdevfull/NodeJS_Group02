// Nombres pronunciables
const yyyymmddstr = moment().format("YYYY/MM/DD")
const currentDate = moment().format("YYYY/MM/DD")
const dateInvoice = moment().format("YYYY/MM/DD")

// Usen más let y const, sobre var
if (true) {
  const name = "Alfonso"
}
console.log(name)

const lastName = "Grados"
lastName = 2000
lastName = "Quispe"
const dataUser = { name: "Alfonso", lastName: "Grados" }
dataUser.name = "Pedro"
dataUser = { name: "Javier", lastName: "Luque" }

let userAccessToken = "aaakkdkdkd"
userAccessToken = "bbbbbb"
userAccessToken = 50

class AbstractUser { }
class User { }

getUserInfo()
getDateUser()
getClient()
getCustomerRecord()

getUser()

// Tipos de datos
// Arrays
const fruit = ["Apple", "Pineapple", "Papaya"]
const fruitLis = ["Apple", "Pineapple", "Papaya"]
const fruits = ["Apple", "Pineapple", "Papaya"]
const fruitNames = ["Apple", "Pineapple", "Papaya"]

// Boolean
const open = true
const write = true
const fruit = false

const isOpenConnection = true
const canWriteLog = true
const hasFruitStorage = false

// Number
const fruits = 3

const maxFruits = 5
const minFruits = 1
const totalFruits = 3

// Clases

class User { }
class UserInfo { }
class UserAccount { }

class Info { }
class Processor { }
class Data { }

// Funciones
// - No más de 20 líneas
// - No más de 3 argumentos en una función. 
function(name, lastName, age, status) { }
function({ name, lastName, age, status }) { }

const productsList = [
  { name: "Product01", available: true, price: 4 },
  { name: "Product01", available: false, price: 6 },
  { name: "Product01", available: true, price: 10 }
]

let totalPrice = 0

for (let index = 0; index < productsList.length; index++) {
  if (productsList[index].available) {
    totalPrice + = productsList[index].price
  }
}

totalPrice = productsList.filter(el => el.available).reduce((accum, value) => { accum += value; return accum }, 0)


const reductor = (accum, value) => { accum += value; return accum }
totalPrice = productsList.filter(el => el.available).reduce(reductor, 0)


class UserProfile {
  getName() {
    if (this.verifyUserLogged()) {
      return "Pedro"
    }
  }

  verifyUserLogged() {

  }
}

////////////////////////////////////////////////////
class Auth {
  verifyUserLogged() {
    return true
  }
}

class UserProfile {
  private auth

  constructor(auth: Auth) {
    this.auth = auth
  }

  getName() {
    if (this.verifyUserLogged()) {
      return "Pedro"
    }
  }

  verifyUserLogged() {
    return this.auth.verifyUserLogged()
  }
}

// Orden en una Clases
class UserProfile {
  // Propiedades
  static currentTime
  private fullNameUser
  public roles

  // Métodos
  static getFullName() {}
  private setName() {}
  public setRoles() {}
}
