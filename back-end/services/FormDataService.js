const FormDataModel = require('../models/FormDataModel');
const IFormData = require('../interfaces/IFormData');

class FormDataService {
  constructor() {
    this.dataModel = new FormDataModel();
  }

  async addData() {
    const serializedData = {
      ...IFormData,
      QuantidadePositiva: 0,
      QuantidadeNegativa: 0,
      QuantidadeNaoAvaliada: 0,
    };

    await this.dataModel.create(serializedData);
  }

  async getData() {
    const receivedData = await this.dataModel.getData();
    return receivedData;
  }
}

module.exports = FormDataService;
