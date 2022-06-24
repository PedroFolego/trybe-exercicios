// ./CepService.ts

interface FooCepApi {
  getAddressByCEP(cep: string, number: number): Promise<string>,
  getCepByAddress(address: string, number: number): Promise<string>
}

class CepService {
  private readonly cepApi: FooCepApi;

  constructor(cepApi: FooCepApi) {
    this.cepApi = cepApi;
  }

  addressByCep(cep: string, num: number) {
    return this.cepApi.getAddressByCEP(cep, num);
  }

  cepByAddress(address: string, num: number) {
    return this.cepApi.getCepByAddress(address, num);
  }
}

export default CepService;