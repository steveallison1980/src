import { ISitemap } from './../../app/interfaces/isitemap';

export const HOMEPAGEKEY: string = "home";
export const WELCOMEPAGEKEY: string = "welcomepage";
export const CONTACTPAGEKEY: string = "contactpage";
export const ABOUTUSPAGEKEY: string = "aboutus";
export const ABOUTPAGEKEY: string = "aboutpage";
export const KEYFEATURESPAGEKEY: string = "keyfeaturespage";
export const ABOUTCONTACTPAGEKEY: string = "aboutcontactpage";
export const OURSERVICESPAGEKEY: string = "ourservices";
export const PATENTSPAGEKEY: string = "patentspage";
export const DESIGNSTMPAGEKEY: string = "designstmpage";
export const LITIGATIONPAGEKEY: string = "litigationpage";
export const CASESTUDIESPAGEKEY: string = "casestudiespage";
export const PUBLICATIONSPAGEKEY: string = "publicationspage";
export const PROFESSIONALSPAGEKEY: string = "professionals";
export const PRACTICEAREASPAGEKEY: string = "pro-practiceareas";
export const CAREERSPAGEKEY: string = "careerspage";
export const CAFCALLPAGEKEY: string = "cafcall";
export const CAFC2005PAGEKEY: string = "cafc2005";
export const CAFC2006PAGEKEY: string = "cafc2006";
export const CAFC2007PAGEKEY: string = "cafc2007";
export const CAFC2008PAGEKEY: string = "cafc2008";
export const CAFC2009PAGEKEY: string = "cafc2009";
export const CAFC2010PAGEKEY: string = "cafc2010";
export const CAFC2011PAGEKEY: string = "cafc2011";
export const CAFC2012PAGEKEY: string = "cafc2012";
export const CAFC2013PAGEKEY: string = "cafc2013";
export const CAFC2014PAGEKEY: string = "cafc2014";
export const CAFC2015PAGEKEY: string = "cafc2015";
export const CAFC2016PAGEKEY: string = "cafc2016";
export const CAFC2017PAGEKEY: string = "cafc2017";
export const CAFC2018PAGEKEY: string = "cafc2018";
export const CAFC2019PAGEKEY: string = "cafc2019";
export const CAFC2020PAGEKEY: string = "cafc2020";
export const CAFC2021PAGEKEY: string = "cafc2021";
export const CAFC2022PAGEKEY: string = "cafc2022";
export const CAFC2023PAGEKEY: string = "cafc2023";
export const CAFC2024PAGEKEY: string = "cafc2024";
export const GUIDANCEPAGEKEY: string = "guidance";
export const PATENTGUIDANCEPAGEKEY: string = "patent";
export const DESIGNGUIDANCEPAGEKEY: string = "design";
export const TMGUIDANCEPAGEKEY: string = "trademark";
export const TOCGUIDANCEPAGEKEY: string = "toc";

export const SITEMAP_DATA: ISitemap =
{
    pages: [
        {
            mainpage: HOMEPAGEKEY,
            routerlink: '/home',
            text: "Home",
            textJP: "?????????",
            defaultsubpage: HOMEPAGEKEY,
            links: [
                { text: 'Welcome Message', textJP: '?????????', icon: 'local_florist', subPage: WELCOMEPAGEKEY, curPage: 'home', routerlink: '/welcomepage', displayMode: 'both', bShowInMenu: true },
                /*{ text: 'What\'s New', textJP: '????????????', icon: 'announcement', subPage: 'newspage', curPage: 'home', routerlink: '/newspage', displayMode: 'both', bShowInMenu: true },*/
                { text: 'Contact', textJP: '?????????????????????????????????', icon: 'call', subPage: CONTACTPAGEKEY, curPage: 'home', routerlink: '/contactpage', displayMode: 'both', bShowInMenu: true }],
            displayMode: "",
        },
        {
            mainpage: ABOUTUSPAGEKEY,
            routerlink: '/aboutpage',
            text: "About Us",
            textJP: "????????????????????????",
            defaultsubpage: ABOUTPAGEKEY,
            links: [
                { text: 'About the Firm', textJP: '????????????????????????', icon: 'people', subPage: ABOUTPAGEKEY, curPage: 'aboutus', routerlink: '/aboutpage', displayMode: 'both', bShowInMenu: true },
                /*{ text: 'An Overview', textJP: '???????????????', icon: 'menu_book', subPage: 'overviewpage', curPage: 'aboutus', routerlink: '/overviewpage', displayMode: 'both', bShowInMenu: true },*/
                { text: 'Key Features', textJP: '??????', icon: 'format_list_bulleted', subPage: KEYFEATURESPAGEKEY, curPage: 'aboutus', routerlink: '/keyfeaturespage', displayMode: 'both', bShowInMenu: true },
                { text: 'Contact', textJP: '?????????????????????????????????', icon: 'call', subPage: ABOUTCONTACTPAGEKEY, curPage: 'aboutus', routerlink: '/aboutcontactpage', displayMode: 'both', bShowInMenu: true }],
            displayMode: ""
        },
        {
            mainpage: OURSERVICESPAGEKEY,
            routerlink: '/patentspage',
            text: "Our Services",
            textJP: "????????????",
            defaultsubpage: PATENTSPAGEKEY,
            links: [
                { text: 'Patents & Utility Models', textJP: '???????????????????????????', icon: 'lightbulb', subPage: PATENTSPAGEKEY, curPage: OURSERVICESPAGEKEY, routerlink: '/patentspage', displayMode: 'both', bShowInMenu: true },
                { text: 'Designs & Trademarks', textJP: '?????????????????????', icon: 'category', subPage: DESIGNSTMPAGEKEY, curPage: OURSERVICESPAGEKEY, routerlink: '/designstmpage', displayMode: 'both', bShowInMenu: true },
                { text: 'Litigation & Strategy', textJP: '????????????????????????????????????', icon: 'gavel', subPage: LITIGATIONPAGEKEY, curPage: OURSERVICESPAGEKEY, routerlink: '/litigationpage', displayMode: 'both', bShowInMenu: true },
                { text: 'Case Studies', textJP: '????????????', icon: 'menu_book', subPage: CASESTUDIESPAGEKEY, curPage: OURSERVICESPAGEKEY, routerlink: '/casestudiespage', displayMode: 'both', bShowInMenu: true },
                { text: 'Publications', textJP: '??????', icon: 'local_library', subPage: PUBLICATIONSPAGEKEY, curPage: OURSERVICESPAGEKEY, routerlink: '/publicationspage', displayMode: 'both', bShowInMenu: true }
            ],
            displayMode: ""
        },
        {
            mainpage: PROFESSIONALSPAGEKEY,
            routerlink: '/pro-practiceareas',
            text: "Professionals",
            textJP: "????????????",
            defaultsubpage: PRACTICEAREASPAGEKEY,
            links: [
                { text: 'Practice Areas', textJP: '???????????????', icon: 'manage_search', subPage: PRACTICEAREASPAGEKEY, curPage: PROFESSIONALSPAGEKEY, routerlink: '/pro-practiceareas', displayMode: 'both', bShowInMenu: true },
                { text: 'Information Processing', textJP: '???????????????', icon: 'computer', subPage: 'pro-infoproc', curPage: PROFESSIONALSPAGEKEY, routerlink: '/pro-infoproc', displayMode: 'both', bShowInMenu: true },
                { text: 'Communications', textJP: '???????????????', icon: 'settings_input_antenna', subPage: 'pro-comm', curPage: PROFESSIONALSPAGEKEY, routerlink: '/pro-comm', displayMode: 'both', bShowInMenu: true },
                { text: 'Electronics', textJP: '???????????????????????????', icon: 'cable', subPage: 'pro-elec', curPage: PROFESSIONALSPAGEKEY, routerlink: '/pro-elec', displayMode: 'both', bShowInMenu: true },
                { text: 'Mechanical', textJP: '?????????', icon: 'miscellaneous_services', subPage: 'pro-mech', curPage: PROFESSIONALSPAGEKEY, routerlink: '/pro-mech', displayMode: 'both', bShowInMenu: true },
                { text: 'Designs', textJP: '??????', icon: 'category', subPage: 'pro-designs', curPage: PROFESSIONALSPAGEKEY, routerlink: '/pro-designs', displayMode: 'both', bShowInMenu: true },
                { text: 'Medical Devices', textJP: '????????????', icon: 'biotech', subPage: 'pro-meddevices', curPage: PROFESSIONALSPAGEKEY, routerlink: '/pro-meddevices', displayMode: 'both', bShowInMenu: true },
                { text: 'Chem, Pharma & Biotech', textJP: '???????????????????????????', icon: 'science', subPage: 'pro-chempharmabio', curPage: PROFESSIONALSPAGEKEY, routerlink: '/pro-chempharmabio', displayMode: 'both', bShowInMenu: true },
                { text: 'Games etc.', textJP: '????????????????????????????????????', icon: 'videogame_asset', subPage: 'pro-toysgames', curPage: PROFESSIONALSPAGEKEY, routerlink: '/pro-toysgames', displayMode: 'both', bShowInMenu: true },
                { text: 'Litigation', textJP: '?????????????????????', icon: 'gavel', subPage: 'pro-lit', curPage: PROFESSIONALSPAGEKEY, routerlink: '/pro-lit', displayMode: 'both', bShowInMenu: true },
                { text: 'Patent Attorneys', textJP: '?????????', icon: 'person', subPage: 'pro-patattorneys', curPage: PROFESSIONALSPAGEKEY, routerlink: '/pro-patattorneys', displayMode: 'both', bShowInMenu: true },
                { text: 'Legal/Technical Advisors', textJP: '???????????????????????????', icon: 'person_outline', subPage: 'pro-advisors', curPage: PROFESSIONALSPAGEKEY, routerlink: '/pro-advisors', displayMode: 'both', bShowInMenu: true },
                { text: 'Patent Engineers', textJP: '????????????????????????', icon: 'person', subPage: 'pro-patengineers', curPage: PROFESSIONALSPAGEKEY, routerlink: '/pro-patengineers', displayMode: 'both', bShowInMenu: true },
                { text: 'International Support', textJP: '?????????????????????', icon: 'person_outline', subPage: 'pro-international', curPage: PROFESSIONALSPAGEKEY, routerlink: '/pro-international', displayMode: 'both', bShowInMenu: true }],
            displayMode: ""
        },
        {
            mainpage: 'careers',
            routerlink: '/careerspage',
            text: "Careers",
            textJP: "????????????",
            defaultsubpage: CAREERSPAGEKEY,
            links: [
                { text: 'Careers', textJP: '????????????', icon: 'person_add', subPage: CAREERSPAGEKEY, curPage: 'careers', routerlink: CAREERSPAGEKEY, displayMode: 'ENonly', bShowInMenu: true },
                { text: '', textJP: '?????????????????????', icon: 'accessibility_new', subPage: 'setsumeikaipage', curPage: 'careers', routerlink: '/setsumeikaipage', displayMode: 'JPonly', bShowInMenu: true },
                { text: '', textJP: '??????????????????????????????', icon: 'help', subPage: 'setsumeikaiguidepage', curPage: 'careers', routerlink: '/setsumeikaiguidepage', displayMode: 'JPonly', bShowInMenu: true },
                { text: '', textJP: '????????????', icon: 'work_outline', subPage: 'boshuyokopage', curPage: 'careers', routerlink: '/boshuyokopage', displayMode: 'JPonly', bShowInMenu: true },
                { text: '', textJP: '????????????', icon: 'supervised_user_circle', subPage: 'workenvironmentpage', curPage: 'careers', routerlink: '/workenvironmentpage', displayMode: 'JPonly', bShowInMenu: true },
            ],
            displayMode: ""
        },
        {
            mainpage: 'cafcreports',
            routerlink: '/cafcall',
            text: "",
            textJP: "??????????????????????????????CAFC?????????",
            defaultsubpage: CAFCALLPAGEKEY,
            links: [
                { text: 'CAFC Reports (all)', textJP: 'CAFC??????(?????????', icon: 'menu_book', subPage: CAFCALLPAGEKEY, curPage: 'cafcreports', routerlink: '/cafcall', displayMode: 'JPonly', bShowInMenu: true },
                { text: '2021', textJP: '2021???', icon: 'menu_book', subPage: CAFC2021PAGEKEY, curPage: 'cafcreports', routerlink: '/cafc2021', displayMode: 'both', bShowInMenu: false },
                { text: '2020', textJP: '2020???', icon: 'menu_book', subPage: CAFC2020PAGEKEY, curPage: 'cafcreports', routerlink: '/cafc2020', displayMode: 'both', bShowInMenu: false },
                { text: '2019', textJP: '2019???', icon: 'menu_book', subPage: CAFC2019PAGEKEY, curPage: 'cafcreports', routerlink: '/cafc2019', displayMode: 'both', bShowInMenu: false },
                { text: '2018', textJP: '2018???', icon: 'menu_book', subPage: CAFC2018PAGEKEY, curPage: 'cafcreports', routerlink: '/cafc2018', displayMode: 'both', bShowInMenu: false },
                { text: '2017', textJP: '2017???', icon: 'menu_book', subPage: CAFC2017PAGEKEY, curPage: 'cafcreports', routerlink: '/cafc2017', displayMode: 'both', bShowInMenu: false },
                { text: '2016', textJP: '2016???', icon: 'menu_book', subPage: CAFC2016PAGEKEY, curPage: 'cafcreports', routerlink: '/cafc2016', displayMode: 'both', bShowInMenu: false },
                { text: '2015', textJP: '2015???', icon: 'menu_book', subPage: CAFC2015PAGEKEY, curPage: 'cafcreports', routerlink: '/cafc2015', displayMode: 'both', bShowInMenu: false },
                { text: '2014', textJP: '2014???', icon: 'menu_book', subPage: CAFC2014PAGEKEY, curPage: 'cafcreports', routerlink: '/cafc2014', displayMode: 'both', bShowInMenu: false },
                { text: '2013', textJP: '2013???', icon: 'menu_book', subPage: CAFC2013PAGEKEY, curPage: 'cafcreports', routerlink: '/cafc2013', displayMode: 'both', bShowInMenu: false },
                { text: '2012', textJP: '2012???', icon: 'menu_book', subPage: CAFC2012PAGEKEY, curPage: 'cafcreports', routerlink: '/cafc2012', displayMode: 'both', bShowInMenu: false },
                { text: '2011', textJP: '2011???', icon: 'menu_book', subPage: CAFC2011PAGEKEY, curPage: 'cafcreports', routerlink: '/cafc2011', displayMode: 'both', bShowInMenu: false },
                { text: '2010', textJP: '2010???', icon: 'menu_book', subPage: CAFC2010PAGEKEY, curPage: 'cafcreports', routerlink: '/cafc2010', displayMode: 'both', bShowInMenu: false },
                { text: '2009', textJP: '2009???', icon: 'menu_book', subPage: CAFC2009PAGEKEY, curPage: 'cafcreports', routerlink: '/cafc2009', displayMode: 'both', bShowInMenu: false },
                { text: '2008', textJP: '2008???', icon: 'menu_book', subPage: CAFC2008PAGEKEY, curPage: 'cafcreports', routerlink: '/cafc2008', displayMode: 'both', bShowInMenu: false },
                { text: '2007', textJP: '2007???', icon: 'menu_book', subPage: CAFC2007PAGEKEY, curPage: 'cafcreports', routerlink: '/cafc2007', displayMode: 'both', bShowInMenu: false },
                { text: '2006', textJP: '2006???', icon: 'menu_book', subPage: CAFC2006PAGEKEY, curPage: 'cafcreports', routerlink: '/cafc2006', displayMode: 'both', bShowInMenu: false },
                { text: '2005', textJP: '2005???', icon: 'menu_book', subPage: CAFC2005PAGEKEY, curPage: 'cafcreports', routerlink: '/cafc2005', displayMode: 'both', bShowInMenu: false },
            ], 
            displayMode: "JPonly",
        },
        {
            mainpage: GUIDANCEPAGEKEY,
            routerlink: '/guidance',
            text: "Guidance",
            textJP: "???????????????",
            defaultsubpage: PATENTGUIDANCEPAGEKEY,
            links: [
                { text: 'Patents', textJP: '??????', icon: 'lightbulb', subPage: PATENTGUIDANCEPAGEKEY, curPage: GUIDANCEPAGEKEY, routerlink: '/guidance/patent', displayMode: 'both', bShowInMenu: true },
                { text: 'Trademarks', textJP: '??????', icon: 'beach_access', subPage: TMGUIDANCEPAGEKEY, curPage: GUIDANCEPAGEKEY, routerlink: '/guidance/trademark', displayMode: 'both', bShowInMenu: true },
                { text: 'Designs', textJP: '??????', icon: 'category', subPage: DESIGNGUIDANCEPAGEKEY, curPage: GUIDANCEPAGEKEY, routerlink: '/guidance/design', displayMode: 'both', bShowInMenu: true },
                { text: 'Table of Contents', textJP: '??????', icon: 'view_list', subPage: TOCGUIDANCEPAGEKEY, curPage: GUIDANCEPAGEKEY, routerlink: '/guidancetoc', displayMode: 'both', bShowInMenu: false }
            ],
            displayMode: "ENonly",
        }
    ]
};