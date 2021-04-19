export interface IAuthor {
    name: string;
    title: string;
    affiliation: string;
}
export interface IPublisher {
    name: string;
    address: string;
}

export interface IPublication {
    img: string;

    title: string;
    publishdate: string;
    authors: Array<IAuthor>;
    publisher: IPublisher;
    synopsis: Array<string>;

    // Japanese version
    titleJP: string;
    publishdateJP: string;
    authorsJP: Array<IAuthor>;
    publisherJP: IPublisher;
    synopsisJP: Array<string>;
  }