declare interface ISuperheroReducer {
  response: ISuperHero[] | null;
}

declare interface ISuperHero {
  id: string;
  name: string;
  powerstats: IPowerstats;
  appearance: IAppearance;
  work: IWork;
  image: { url: string };
}
