export interface ILink {
  text: string;
  textJP: string;
  icon: string;
  curPage: string;
  subPage: string;
  }
export interface IPage {
  links: Array<ILink>;
  mainpage: string;
  routerlink: string;
  defaultsubpage: string;
  text: string;
  textJP: string;
}
export interface ISitemap {
    pages: Array<IPage>;
}