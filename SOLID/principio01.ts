/*class AccountingTaxes {
  calculateTaxes() {
    console.log("Calcula impuestos")
  }

  saveToDatabase(){
    console.log("Guarda en base de datos")
  }

  sendEmail(){
    console.log("Envía correo")
  }
}

const accoutingTaxes = new AccountingTaxes()*/

class RepositoryDB {
  saveToDatabase() {}
}

class Notifier {
  sendEmail() {}
}

class AccountingTaxes {
  private repositoryDB;
  private notifier;

  constructor(repositoryDB, notifier) {
    this.repositoryDB = repositoryDB;
    this.notifier = notifier;
  }

  calculateTaxes() {
    console.log('Calcula impuestos');
  }

  saveToDatabase() {
    this.repositoryDB.saveToDatabase();
  }

  sendEmail() {
    this.notifier.sendEmail();
  }
}

const repositoryDB = new RepositoryDB();
const notifier = new Notifier();
const accoutingTaxes = new AccountingTaxes(repositoryDB, notifier);
// const accoutingTaxes = new AccountingTaxes()
