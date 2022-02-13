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
    addElement(data.modelos, `model-${veicle}`);
  } catch (error) {
    print(error);
  }
  // print(url);
}