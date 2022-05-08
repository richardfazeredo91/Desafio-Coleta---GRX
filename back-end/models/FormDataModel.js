const fs = require('fs').promises;
const IFormData = require('../interfaces/IFormData');
const IFormStatistics = require('../interfaces/IFormStatistics');

class FormDataModel {
  constructor() {
    this.formData = IFormData;
    this.formStatistics = IFormStatistics;
  }

  addData() {
    fs.writeFile(
      '../formData.txt',
      JSON.stringify({ ...this.formData, ...this.formStatistics }),
    )
      .then((data) => data)
      .catch((err) => {
        console.error(`Problema ao tentar escrever o arquivo. Erro ${err}`);
      });
  }

  // eslint-disable-next-line class-methods-use-this
  getData() {
    fs.readFile('../formData.txt', 'utf-8')
      .then((data) => data)
      .catch((err) => {
        console.error(`Não foi possível ler o arquivo. Erro: ${err}`);
        process.exit(1);
      });
  }
}

module.exports = FormDataModel;
