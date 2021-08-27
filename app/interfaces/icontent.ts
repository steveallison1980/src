export interface IHeader {
    text: string;
    type: string;
    classes: Array<string>;
}
export interface IImage {
    folder: string;
    filename: string;
    classes: Array<string>;
}
export interface ISpan {
    text: string;
    url: string;
    routerlink: string;
    tooltip: string;
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
export interface IExpansionPanel {
    title: string;
    description: string;
    content: IContent;
}
export interface IAccordion {
    panels: Array <IExpansionPanel>
}
export interface IElement {
    type: string;
    objs: Array <Object>;
}
export interface IElementGrid {
    gap: string;
    percent: string;//percentage of row for 1 element
    elements: Array <IElement>;
}
export interface IContent {
    elements: Array<IElement>;
}
export interface ITitledImage {
    title: string;
    img: IImage;
}
export interface IDesignExample{
    regno: string;
    title: string;
    applicant: string;
    shortdesc: string;
    description: IContent;
    images: IElementGrid;
}

export interface IRow{
    column1: IContent;
    column2: IContent;
    column3: IContent;
    column4: IContent;
    column5: IContent;
    column6: IContent;
    column7: IContent;
    column8: IContent;
    column9: IContent;
    column10: IContent;
}
export interface ITable{
    rows: Array<IRow>;
    cols: Array<string>;
}

export interface ICard{
    size: string;
    border: boolean;
}

export interface ITitle{
    class: string;
    text: string;
    bDarken: boolean;
}