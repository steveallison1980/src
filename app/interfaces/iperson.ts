export interface ISpeciality {
    text: string;
}
export interface IEducation {
    text: string;
}
export interface ICareer {
    text: string;
}
export interface IMemberships {
    text: string;
}
export interface IPublications {
    text: string;
}
export interface IPerson {
    title: string;
    name: string;
    img: string;
    imglarge: string;
    avatar: string;
    bio: string;
    specialties: Array<ISpeciality>;
    education: Array<IEducation>;
    career: Array<ICareer>;
    memberships: Array<IMemberships>;
    publications: Array<IPublications>;

    // Japanese version
    titleJP: string;
    nameJP: string;
    bioJP: string;
    specialtiesJP: Array<ISpeciality>;
    educationJP: Array<IEducation>;
    careerJP: Array<ICareer>;
    membershipsJP: Array<IMemberships>;
    publicationsJP: Array<IPublications>;

    groups: Array<string>;
  }