interface IModel {
  get(): Promise<[]>
}

export default class Service {
  constructor(private model: IModel) {
    this.model = model;
  }

  async get(): Promise<[]> {
    const plants = await this.model.get();
    return plants;
  }
}