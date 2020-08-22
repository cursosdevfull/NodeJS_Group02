import axios from 'axios';

class ClientHttpWrapper {
  makeRequest(url, callback) {
    axios.get(url).then(callback);
  }
}

class Payments {
  private clientHttp;

  constructor(clientHttp) {
    this.clientHttp = clientHttp;
  }

  makeRequest(url) {
    this.clientHttp.makeRequest(url, (response) => console.log(response));
  }
}

const clientHttp = new ClientHttpWrapper();
const payments = new Payments(clientHttp);
payments.makeRequest('https://visanet.com/api/v2/invoice');
