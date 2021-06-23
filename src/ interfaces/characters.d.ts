declare interface ISearchResponseAPI {
  ok: boolean;
  data?: ISearchName;
  error?: string;
}

declare interface ISearchName {
  id: string;
  name: string;
  powerstats: IPowerstats;
  biography: IBiography;
  appearance: IAppearance;
  work: IWork;
  connections: IConnections;
  image: { url: string };
}

declare interface IPowerstats {
  intelligence: string;
  strength: string;
  speed: string;
  durability: string;
  power: string;
  combat: string;
}

declare interface IBiography {
  'full-name': string;
  'alter-egos': string;
  aliases: string[];
  'place-of-birth': string;
  'first-appearance': string;
  publisher: string;
  alignment: string;
}

declare interface IAppearance {
  gender: string;
  race: string;
  height: string[];
  weight: string[];
  'eye-color': string;
  'hair-color': string;
}

declare interface IWork {
  occupation: string;
  base: string;
}

declare interface IConnections {
  'group-affiliation': string;
  relatives: string;
}

declare interface IPowerstatsResponse extends IPowerstats {
  response: string;
  id: string;
  name: string;
}

declare interface IAppearanceResponse extends IAppearance {
  response: string;
  id: string;
  name: string;
}
