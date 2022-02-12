const baseUrl = async (veicleType) => {
  const url = `https://parallelum.com.br/fipe/api/v1/${veicleType}/marcas`;
  const response = await fetch(url);
  const data = await response.json();
  addElement(data, veicleType);
}

const modelVeicle = async (codigoVeicle, veicle) => {
  const url = `https://parallelum.com.br/fipe/api/v1/${veicle}/marcas/${codigoVeicle}/modelos`;
  const response = await fetch(url);
  const data = await response.json();
  print(data);
}