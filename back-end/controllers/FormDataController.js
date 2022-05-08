/* eslint-disable consistent-return */
const FormDataService = require('../services/FormDataService');

class formDataController {
  constructor() {
    this.dataService = new FormDataService();
  }

  async addData(req, res) {
    const formData = req.body;
    try {
      const createdData = await this.dataService.addData(formData);
      return res.status(201).json(createdData);
    } catch (err) {
      console.error(`Erro ao processar os dados do formulário. Erro ${err}`);
    }
  }

  async getData(_req, res) {
    try {
      const receivedData = await this.dataService.getData();
      return res.status(201).json(receivedData);
    } catch (err) {
      console.error(`Erro ao ler dados do arquivo. Erro ${err}`);
    }
  }
}

module.exports = formDataController;
