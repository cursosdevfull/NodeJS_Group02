/*
class ExternalStorage {
  saveFile() {}
}

class Invoice {
  externalStorage

  constructor(externalStorage) {
    this.externalStorage = externalStorage
  }

  saveInvoiceToFile() {
    this.externalStorage.saveFile()
  }
}
*/

interface IExternalStorage {
  saveFile: () => void;
}

class ExternalStorage implements IExternalStorage {
  saveFile() {}
}

class Invoice {
  externalStorage: IExternalStorage;

  constructor(externalStorage: IExternalStorage) {
    this.externalStorage = externalStorage;
  }

  saveInvoiceToFile() {
    this.externalStorage.saveFile();
  }
}
