export interface INewsitem {
    date: string;
    details: string;
    router: string;
    link: string;
  }
export interface INewsdata {
    dataEN: Array<INewsitem>;
    dataJP: Array<INewsitem>;
}