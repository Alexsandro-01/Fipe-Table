const baseUrl = async (veicleType) => {
  const url = `https://parallelum.com.br/fipe/api/v1/${veicleType}/marcas`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    addElement(data, veicleType);
  } catch (error) {
    print(error)   ; 
  }
}

const modelVeicle = async (codigoVeicle, veicle) => {
  const url = `https://parallelum.com.br/fipe/api/v1/${veicle}/marcas/${codigoVeicle}/modelos`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    print(data.modelos);
    addElement(data.modelos, `model-${veicle}`, codigoVeicle);
  } catch (error) {
    print(error);
  }
  // print(url);
}

const yearVeicle = async (codeVeicle, veicle, marcaVeicle) => {
  const url = `https://parallelum.com.br/fipe/api/v1/${veicle}/marcas/${marcaVeicle}/modelos/${codeVeicle}/anos`
  const response = await fetch(url);
  const data = await response.json();
  addElement(data, `year-${veicle}`, codeVeicle);
}

const tablePrice = async () => {
  const url = `https://parallelum.com.br/fipe/api/v1/${VEICLE.veicleType}/marcas/${VEICLE.codeVeicle}/modelos/${VEICLE.modelVeicle}/anos/${VEICLE.yearVeicle}`;
  const response = await fetch(url);
  const data = await response.json();
  resultTable(data);
}

// module.exports = tablePrice;