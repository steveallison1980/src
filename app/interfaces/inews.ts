export interface INewsitem {
    date: string;
    details: string;
    curPage: string;
    subPage: string;
    link: string;
  }
export interface INewsdata {
    dataEN: Array<INewsitem>;
    dataJP: Array<INewsitem>;
}