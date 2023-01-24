export class CatModel {
  constructor(
    public name: string,
    public race: string,
    public image: string,
    public date: Date,
    public survol: boolean,
  ) {}
}