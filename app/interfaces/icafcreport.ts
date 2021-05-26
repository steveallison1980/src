export interface IElement {
    texttype: string; // text format
    link: string;
    text: string; // plain text 
}

// types: (sub)title, (para)graph, (num)bered list, (unnum)bered list, hanketsu (point), (auth)ors, (link), (horiz)ontal bar, (prev)iew, (after)note
export interface IContent {
    type: string;
    elements: Array<IElement>;
}

export interface IPoint {
    text: string;
}

export interface ICAFCReport{
    casetitle: string;
    caseno: string;
    reportyear: string;
    reportmonth: string; 
    reportdate: string;
    reportpreview: Array<string>;

    content: Array<IContent>;
    authorIDs: Array<string>;
}

// previous version
// export interface ICAFCReport{
//     casetitle: string;
//     caseno: string;
//     opttitle: string;
//     reportyear: string;
//     reportmonth: string; 
//     reportdate: string;
//     reportpreview: string;
//     report: Array<IReport>;
//     point: Array<IPoint>;
//     authors: Array<IAuthor>;
// }

// may delete as it overlaps with IAuthor
// export interface ICAFCAuthor {
//     img: string;
//     name: string;
//     description: Array<string>;
// }