import { ISitemap } from './../../app/interfaces/isitemap';

export const SITEMAP_DATA: ISitemap =
{
    pages: [
        {
            mainpage: 'home',
            routerlink: '/',
            text: "Home",
            textJP: "ホーム",
            defaultsubpage: 'welcomepage',
            links: [
                { text: 'Welcome Message', textJP: 'ご挨拶', icon: 'local_florist', subPage: 'welcomepage', curPage: 'home', routerlink: '/welcomepage' },
                { text: 'What\'s New', textJP: '最新情報', icon: 'announcement', subPage: 'newspage', curPage: 'home', routerlink: '/newspage' },
                { text: 'Contact Information/Map', textJP: 'お問い合わせ・アクセス', icon: 'call', subPage: 'contactpage', curPage: 'home', routerlink: '/contactpage' },
                { text: 'Publications', textJP: '書籍', icon: 'local_library', subPage: 'publicationspage', curPage: 'home', routerlink: '/publicationspage' }],
            displayMode: "",
        },
        {
            mainpage: 'aboutus',
            routerlink: '/aboutus',
            text: "About Us",
            textJP: "当事務所について",
            defaultsubpage: 'about',
            links: [
                { text: 'About the Firm', textJP: '当事務所について', icon: 'people', subPage: 'aboutpage', curPage: 'aboutus', routerlink: '/aboutpage' },
                { text: 'An Overview', textJP: '事務所概要', icon: 'menu_book', subPage: 'overviewpage', curPage: 'aboutus', routerlink: '/overviewpage' },
                { text: 'Key Features', textJP: '特色', icon: 'format_list_bulleted', subPage: 'keyfeaturespage', curPage: 'aboutus', routerlink: '/keyfeaturespage' },
                { text: 'Contact Information/Map', textJP: 'お問い合わせ・アクセス', icon: 'call', subPage: 'aboutcontactpage', curPage: 'aboutus', routerlink: '/aboutcontactpage' }],
            displayMode: ""
        },
        {
            mainpage: 'ourservices',
            routerlink: '/ourservices',
            text: "Our Services",
            textJP: "実務案内",
            defaultsubpage: 'about',
            links: [
                { text: 'Patents & Utility Models', textJP: '特許・実用新案取得', icon: 'lightbulb', subPage: 'patent', curPage: 'ourservices', routerlink: '/patent' },
                { text: 'Designs & Trademarks', textJP: '意匠・商標登録', icon: 'category', subPage: 'design', curPage: 'ourservices', routerlink: '/design' },
                { text: 'Litigation & Strategy', textJP: '訴訟・特許戦略・特許調査', icon: 'gavel', subPage: 'litigation', curPage: 'ourservices', routerlink: '/litigation' },
                { text: 'Case Studies', textJP: '判例紹介', icon: 'menu_book', subPage: 'court', curPage: 'ourservices', routerlink: '/court' }],
            displayMode: ""
        },
        {
            mainpage: 'professionals',
            routerlink: '/professionals',
            text: "Professionals",
            textJP: "メンバー",
            defaultsubpage: 'practiceareas',
            links: [
                { text: 'Practice Areas', textJP: '専門分野別', icon: 'manage_search', subPage: 'practiceareas', curPage: 'professionals', routerlink: '/practiceareas' },
                { text: 'Information Processing', textJP: '情報処理系', icon: 'computer', subPage: 'infoproc_people', curPage: 'professionals', routerlink: '/infoproc_people' },
                { text: 'Communications', textJP: '通信技術系', icon: 'settings_input_antenna', subPage: 'comm_people', curPage: 'professionals', routerlink: '/comm_people' },
                { text: 'Electronics', textJP: '半導体・電気回路系', icon: 'cable', subPage: 'semicon_people', curPage: 'professionals', routerlink: '/semicon_people' },
                { text: 'Mechanical', textJP: '機械系', icon: 'miscellaneous_services', subPage: 'mech_people', curPage: 'professionals', routerlink: '/mech_people' },
                { text: 'Designs', textJP: '意匠', icon: 'category', subPage: 'design_people', curPage: 'professionals', routerlink: '/design_people' },
                { text: 'Medical Devices', textJP: '医療機器', icon: 'biotech', subPage: 'meddev_people', curPage: 'professionals', routerlink: '/meddev_people' },
                { text: 'Chem, Pharma & Biotech', textJP: '化学・医薬・バイオ', icon: 'science', subPage: 'science_people', curPage: 'professionals', routerlink: '/science_people' },
                { text: 'Toys and Games', textJP: 'アミューズメント・ゲーム', icon: 'videogame_asset', subPage: 'games_people', curPage: 'professionals', routerlink: '/games_people' },
                { text: 'Litigation', textJP: '訴訟・訴訟支援', icon: 'gavel', subPage: 'litigation_people', curPage: 'professionals', routerlink: '/litigation_people' },
                { text: 'Patent Attorneys', textJP: '弁理士', icon: 'person', subPage: 'patentattorneys', curPage: 'professionals', routerlink: '/patentattorneys' },
                { text: 'Legal/Technical Advisors', textJP: '法律顧問・技術顧問', icon: 'person_outline', subPage: 'advisors', curPage: 'professionals', routerlink: '/advisors' },
                { text: 'Patent Engineers', textJP: '特許技術スタッフ', icon: 'person', subPage: 'patentengineers', curPage: 'professionals', routerlink: '/patentengineers' },
                { text: 'International Support', textJP: '技術・海外支援', icon: 'person_outline', subPage: 'internationalsupport', curPage: 'professionals', routerlink: '/internationalsupport' }],
            displayMode: ""
        },
        {
            mainpage: 'cafcreports',
            routerlink: '/cafcreports',
            text: "",
            textJP: "米国連邦控訴裁判所（CAFC）判決",
            defaultsubpage: 'cafcreports',
            links: [
                { text: '', textJP: 'CAFC判決', icon: 'menu_book', subPage: 'all', curPage: 'cafcreports', routerlink: '/cafcreports/all' },
                { text: '', textJP: '2019年', icon: 'menu_book', subPage: '2019', curPage: 'cafcreports', routerlink: '/cafcreports/2019' },
                { text: '', textJP: '2018年', icon: 'menu_book', subPage: '2018', curPage: 'cafcreports', routerlink: '/cafcreports/2018' },
                { text: '', textJP: '2017年', icon: 'menu_book', subPage: '2017', curPage: 'cafcreports', routerlink: '/cafcreports/2017' },
                { text: '', textJP: '2016年', icon: 'menu_book', subPage: '2016', curPage: 'cafcreports', routerlink: '/cafcreports/2016' },
                { text: '', textJP: '2015年', icon: 'menu_book', subPage: '2015', curPage: 'cafcreports', routerlink: '/cafcreports/2015' },
                { text: '', textJP: '2014年', icon: 'menu_book', subPage: '2014', curPage: 'cafcreports', routerlink: '/cafcreports/2014' },
                { text: '', textJP: '2013年', icon: 'menu_book', subPage: '2013', curPage: 'cafcreports', routerlink: '/cafcreports/2013' },
                { text: '', textJP: '2012年', icon: 'menu_book', subPage: '2012', curPage: 'cafcreports', routerlink: '/cafcreports/2012' },
                { text: '', textJP: '2011年', icon: 'menu_book', subPage: '2011', curPage: 'cafcreports', routerlink: '/cafcreports/2011' },
                { text: '', textJP: '2010年', icon: 'menu_book', subPage: '2010', curPage: 'cafcreports', routerlink: '/cafcreports/2010' },
                { text: '', textJP: '2009年', icon: 'menu_book', subPage: '2009', curPage: 'cafcreports', routerlink: '/cafcreports/2009' },
                { text: '', textJP: '2008年', icon: 'menu_book', subPage: '2008', curPage: 'cafcreports', routerlink: '/cafcreports/2008' },
                { text: '', textJP: '2007年', icon: 'menu_book', subPage: '2007', curPage: 'cafcreports', routerlink: '/cafcreports/2007' },
                { text: '', textJP: '2006年', icon: 'menu_book', subPage: '2006', curPage: 'cafcreports', routerlink: '/cafcreports/2006' },
                { text: '', textJP: '2005年', icon: 'menu_book', subPage: '2005', curPage: 'cafcreports', routerlink: '/cafcreports/2005' },
            ], 
            displayMode: "JPonly",
        },
        {
            mainpage: 'careers',
            routerlink: '/careers',
            text: "Careers",
            textJP: "採用情報",
            defaultsubpage: 'careers',
            links: [{ text: 'Careers', textJP: 'キャリア', icon: 'person_add', subPage: 'careers', curPage: 'careers', routerlink: '/careers/careers' }],
            displayMode: ""
        }]
};