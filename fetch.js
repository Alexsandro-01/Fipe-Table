const baseUrl = async (veicleType) => {
  const url = `https://parallelum.com.br/fipe/api/v1/${veicleType}/marcas`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    addElement(data, veicleType);
    print(data, 'marcas')
  } catch (error) {
    print(error); 
  }
}

const modelVeicle = async (codigoVeicle, veicle) => {
  const url = `https://parallelum.com.br/fipe/api/v1/${veicle}/marcas/${codigoVeicle}/modelos`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    print(data.modelos, 'modelos');
    addElement(data.modelos, `model-${veicle}`, codigoVeicle);
  } catch (error) {
    print(error);
  }
  // print(url);
}

const yearVeicle = async (codeVeicle, veicle, marcaVeicle) => {
  const url = `https://parallelum.com.br/fipe/api/v1/${veicle}/marcas/${marcaVeicle}/modelos/${codeVeicle}/anos`
  try {
    const response = await fetch(url);
    const data = await response.json();
    addElement(data, `year-${veicle}`, codeVeicle);
  } catch (error) {
    print(error);    
  }
}

const tablePrice = async (event) => {
  const url = `https://parallelum.com.br/fipe/api/v1/${VEICLE.veicleType}/marcas/${VEICLE.codeVeicle}/modelos/${VEICLE.modelVeicle}/anos/${VEICLE.yearVeicle}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    resultTable(data, event.target);
  } catch (error) {
    print(error);    
  }
}
