const baseUrl = async (veicleType) => {
  const url = `https://parallelum.com.br/fipe/api/v1/${veicleType}/marcas`;
  const objMarcas = await fetch(url);
  console.log(await objMarcas);
}