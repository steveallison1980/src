import { ISitemap } from './../../app/interfaces/isitemap';

export const SITEMAP_DATA: ISitemap =
{
    pages: [
        {
            mainpage: 'home',
            routerlink: '/home',
            text: "Home",
            textJP: "ホーム",
            defaultsubpage: 'home',
            links: [
                { text: 'Welcome Message', textJP: 'ご挨拶', icon: 'local_florist', subPage: 'welcomepage', curPage: 'home', routerlink: '/welcomepage', displayMode: 'both', bShowInMenu: true },
                /*{ text: 'What\'s New', textJP: '最新情報', icon: 'announcement', subPage: 'newspage', curPage: 'home', routerlink: '/newspage', displayMode: 'both', bShowInMenu: true },*/
                { text: 'Contact', textJP: 'お問い合わせ・アクセス', icon: 'call', subPage: 'contactpage', curPage: 'home', routerlink: '/contactpage', displayMode: 'both', bShowInMenu: true }],
            displayMode: "",
        },
        {
            mainpage: 'aboutus',
            routerlink: '/aboutpage',
            text: "About Us",
            textJP: "当事務所について",
            defaultsubpage: 'aboutpage',
            links: [
                { text: 'About the Firm', textJP: '当事務所について', icon: 'people', subPage: 'aboutpage', curPage: 'aboutus', routerlink: '/aboutpage', displayMode: 'both', bShowInMenu: true },
                /*{ text: 'An Overview', textJP: '事務所概要', icon: 'menu_book', subPage: 'overviewpage', curPage: 'aboutus', routerlink: '/overviewpage', displayMode: 'both', bShowInMenu: true },*/
                { text: 'Key Features', textJP: '特色', icon: 'format_list_bulleted', subPage: 'keyfeaturespage', curPage: 'aboutus', routerlink: '/keyfeaturespage', displayMode: 'both', bShowInMenu: true },
                { text: 'Contact', textJP: 'お問い合わせ・アクセス', icon: 'call', subPage: 'aboutcontactpage', curPage: 'aboutus', routerlink: '/aboutcontactpage', displayMode: 'both', bShowInMenu: true }],
            displayMode: ""
        },
        {
            mainpage: 'ourservices',
            routerlink: '/patentspage',
            text: "Our Services",
            textJP: "実務案内",
            defaultsubpage: 'patentspage',
            links: [
                { text: 'Patents & Utility Models', textJP: '特許・実用新案取得', icon: 'lightbulb', subPage: 'patentspage', curPage: 'ourservices', routerlink: '/patentspage', displayMode: 'both', bShowInMenu: true },
                { text: 'Designs & Trademarks', textJP: '意匠・商標登録', icon: 'category', subPage: 'designstmpage', curPage: 'ourservices', routerlink: '/designstmpage', displayMode: 'both', bShowInMenu: true },
                { text: 'Litigation & Strategy', textJP: '訴訟・特許戦略・特許調査', icon: 'gavel', subPage: 'litigationpage', curPage: 'ourservices', routerlink: '/litigationpage', displayMode: 'both', bShowInMenu: true },
                { text: 'Case Studies', textJP: '判例紹介', icon: 'menu_book', subPage: 'casestudiespage', curPage: 'ourservices', routerlink: '/casestudiespage', displayMode: 'both', bShowInMenu: true },
                { text: 'Publications', textJP: '書籍', icon: 'local_library', subPage: 'publicationspage', curPage: 'home', routerlink: '/publicationspage', displayMode: 'both', bShowInMenu: true }
            ],
            displayMode: ""
        },
        {
            mainpage: 'professionals',
            routerlink: '/pro-practiceareas',
            text: "Professionals",
            textJP: "メンバー",
            defaultsubpage: 'pro-practiceareas',
            links: [
                { text: 'Practice Areas', textJP: '専門分野別', icon: 'manage_search', subPage: 'pro-practiceareas', curPage: 'professionals', routerlink: '/pro-practiceareas', displayMode: 'both', bShowInMenu: true },
                { text: 'Information Processing', textJP: '情報処理系', icon: 'computer', subPage: 'pro-infoproc', curPage: 'professionals', routerlink: '/pro-infoproc', displayMode: 'both', bShowInMenu: true },
                { text: 'Communications', textJP: '通信技術系', icon: 'settings_input_antenna', subPage: 'pro-comm', curPage: 'professionals', routerlink: '/pro-comm', displayMode: 'both', bShowInMenu: true },
                { text: 'Electronics', textJP: '半導体・電気回路系', icon: 'cable', subPage: 'pro-elec', curPage: 'professionals', routerlink: '/pro-elec', displayMode: 'both', bShowInMenu: true },
                { text: 'Mechanical', textJP: '機械系', icon: 'miscellaneous_services', subPage: 'pro-mech', curPage: 'professionals', routerlink: '/pro-mech', displayMode: 'both', bShowInMenu: true },
                { text: 'Designs', textJP: '意匠', icon: 'category', subPage: 'pro-designs', curPage: 'professionals', routerlink: '/pro-designs', displayMode: 'both', bShowInMenu: true },
                { text: 'Medical Devices', textJP: '医療機器', icon: 'biotech', subPage: 'pro-meddevices', curPage: 'professionals', routerlink: '/pro-meddevices', displayMode: 'both', bShowInMenu: true },
                { text: 'Chem, Pharma & Biotech', textJP: '化学・医薬・バイオ', icon: 'science', subPage: 'pro-chempharmabio', curPage: 'professionals', routerlink: '/pro-chempharmabio', displayMode: 'both', bShowInMenu: true },
                { text: 'Games etc.', textJP: 'アミューズメント・ゲーム', icon: 'videogame_asset', subPage: 'pro-toysgames', curPage: 'professionals', routerlink: '/pro-toysgames', displayMode: 'both', bShowInMenu: true },
                { text: 'Litigation', textJP: '訴訟・訴訟支援', icon: 'gavel', subPage: 'pro-lit', curPage: 'professionals', routerlink: '/pro-lit', displayMode: 'both', bShowInMenu: true },
                { text: 'Patent Attorneys', textJP: '弁理士', icon: 'person', subPage: 'pro-patattorneys', curPage: 'professionals', routerlink: '/pro-patattorneys', displayMode: 'both', bShowInMenu: true },
                { text: 'Legal/Technical Advisors', textJP: '法律顧問・技術顧問', icon: 'person_outline', subPage: 'pro-advisors', curPage: 'professionals', routerlink: '/pro-advisors', displayMode: 'both', bShowInMenu: true },
                { text: 'Patent Engineers', textJP: '特許技術スタッフ', icon: 'person', subPage: 'pro-patengineers', curPage: 'professionals', routerlink: '/pro-patengineers', displayMode: 'both', bShowInMenu: true },
                { text: 'International Support', textJP: '技術・海外支援', icon: 'person_outline', subPage: 'pro-international', curPage: 'professionals', routerlink: '/pro-international', displayMode: 'both', bShowInMenu: true }],
            displayMode: ""
        },
        {
            mainpage: 'careers',
            routerlink: '/careerspage',
            text: "Careers",
            textJP: "採用情報",
            defaultsubpage: 'careerspage',
            links: [
                { text: 'Careers', textJP: 'キャリア', icon: 'person_add', subPage: 'careerspage', curPage: 'careers', routerlink: '/careerspage', displayMode: 'ENonly', bShowInMenu: true },
                { text: '', textJP: '事務所説明会', icon: 'accessibility_new', subPage: 'setsumeikaipage', curPage: 'careers', routerlink: '/setsumeikaipage', displayMode: 'JPonly', bShowInMenu: true },
                { text: '', textJP: 'ご案内', icon: 'help', subPage: 'setsumeikaiguidepage', curPage: 'careers', routerlink: '/setsumeikaiguidepage', displayMode: 'JPonly', bShowInMenu: true },
                { text: '', textJP: '募集要項', icon: 'work_outline', subPage: 'boshuyokopage', curPage: 'careers', routerlink: '/boshuyokopage', displayMode: 'JPonly', bShowInMenu: true },
                { text: '', textJP: '仕事環境', icon: 'supervised_user_circle', subPage: 'workenvironmentpage', curPage: 'careers', routerlink: '/workenvironmentpage', displayMode: 'JPonly', bShowInMenu: true },
            ],
            displayMode: ""
        },
        {
            mainpage: 'cafcreports',
            routerlink: '/cafcall',
            text: "",
            textJP: "米国連邦控訴裁判所（CAFC）判決",
            defaultsubpage: 'cafcall',
            links: [
                { text: 'CAFC Reports (all)', textJP: 'CAFC判決(全件）', icon: 'menu_book', subPage: 'cafcall', curPage: 'cafcreports', routerlink: '/cafcall', displayMode: 'JPonly', bShowInMenu: true },
                { text: '2019', textJP: '2019年', icon: 'menu_book', subPage: 'cafc2019', curPage: 'cafcreports', routerlink: '/cafc2019', displayMode: 'both', bShowInMenu: false },
                { text: '2018', textJP: '2018年', icon: 'menu_book', subPage: 'cafc2018', curPage: 'cafcreports', routerlink: '/cafc2018', displayMode: 'both', bShowInMenu: false },
                { text: '2017', textJP: '2017年', icon: 'menu_book', subPage: 'cafc2017', curPage: 'cafcreports', routerlink: '/cafc2017', displayMode: 'both', bShowInMenu: false },
                { text: '2016', textJP: '2016年', icon: 'menu_book', subPage: 'cafc2016', curPage: 'cafcreports', routerlink: '/cafc2016', displayMode: 'both', bShowInMenu: false },
                { text: '2015', textJP: '2015年', icon: 'menu_book', subPage: 'cafc2015', curPage: 'cafcreports', routerlink: '/cafc2015', displayMode: 'both', bShowInMenu: false },
                { text: '2014', textJP: '2014年', icon: 'menu_book', subPage: 'cafc2014', curPage: 'cafcreports', routerlink: '/cafc2014', displayMode: 'both', bShowInMenu: false },
                { text: '2013', textJP: '2013年', icon: 'menu_book', subPage: 'cafc2013', curPage: 'cafcreports', routerlink: '/cafc2013', displayMode: 'both', bShowInMenu: false },
                { text: '2012', textJP: '2012年', icon: 'menu_book', subPage: 'cafc2012', curPage: 'cafcreports', routerlink: '/cafc2012', displayMode: 'both', bShowInMenu: false },
                { text: '2011', textJP: '2011年', icon: 'menu_book', subPage: 'cafc2011', curPage: 'cafcreports', routerlink: '/cafc2011', displayMode: 'both', bShowInMenu: false },
                { text: '2010', textJP: '2010年', icon: 'menu_book', subPage: 'cafc2010', curPage: 'cafcreports', routerlink: '/cafc2010', displayMode: 'both', bShowInMenu: false },
                { text: '2009', textJP: '2009年', icon: 'menu_book', subPage: 'cafc2009', curPage: 'cafcreports', routerlink: '/cafc2009', displayMode: 'both', bShowInMenu: false },
                { text: '2008', textJP: '2008年', icon: 'menu_book', subPage: 'cafc2008', curPage: 'cafcreports', routerlink: '/cafc2008', displayMode: 'both', bShowInMenu: false },
                { text: '2007', textJP: '2007年', icon: 'menu_book', subPage: 'cafc2007', curPage: 'cafcreports', routerlink: '/cafc2007', displayMode: 'both', bShowInMenu: false },
                { text: '2006', textJP: '2006年', icon: 'menu_book', subPage: 'cafc2006', curPage: 'cafcreports', routerlink: '/cafc2006', displayMode: 'both', bShowInMenu: false },
                { text: '2005', textJP: '2005年', icon: 'menu_book', subPage: 'cafc2005', curPage: 'cafcreports', routerlink: '/cafc2005', displayMode: 'both', bShowInMenu: false },
            ], 
            displayMode: "JPonly",
        },
        {
            mainpage: 'guidance',
            routerlink: '/guidance',
            text: "Guidance",
            textJP: "ガイダンス",
            defaultsubpage: 'patentguidance',
            links: [
                { text: 'Patents', textJP: '特許', icon: 'lightbulb', subPage: 'patent', curPage: 'guidance', routerlink: '/guidance/patent', displayMode: 'both', bShowInMenu: true },
                { text: 'Trademarks', textJP: '商標', icon: 'beach_access', subPage: 'trademark', curPage: 'guidance', routerlink: '/guidance/trademark', displayMode: 'both', bShowInMenu: true },
                { text: 'Designs', textJP: '意匠', icon: 'category', subPage: 'design', curPage: 'guidance', routerlink: '/guidance/design', displayMode: 'both', bShowInMenu: true }
            ],
            displayMode: "ENonly",
        }
    ]
};