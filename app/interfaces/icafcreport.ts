export interface IReport {
    text: string;
}

export interface IPoint {
    text: string;
}

export interface IAuthor {
    name: string;
}


export interface ICAFCAuthor {
    img: string;
    name: string;
    description: Array<string>;
}

export interface ICAFCReport{
    casetitle: string;
    caseno: string;
    opttitle: string;
    reportyear: string;
    reportmonth: string; 
    reportdate: string;
    reportpreview: string;
    report: Array<IReport>;
    point: Array<IPoint>;
    authors: Array<IAuthor>;
}