export interface IHeader {
    text: string;
    type: string;
    classes: Array<string>;
}
export interface IImage {
    folder: string;
    filename: string;
}
export interface ISpan {
    text: string;
    url: string;
    routerlink: string;
    classes: Array<string>;
}
export interface IParagraph {
    spans: Array<ISpan>;
    classes: Array<string>;
}
export interface IList {
    type: string;
    elements: Array<IElement>;
    classes: Array<string>;
}
export interface IElement {
    type: string;
    obj: Object;
}
export interface IContent {
    elements: Array<IElement>;
}