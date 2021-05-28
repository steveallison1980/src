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
            defaultsubpage: 'aboutpage',
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
            defaultsubpage: 'patentspage',
            links: [
                { text: 'Patents & Utility Models', textJP: '特許・実用新案取得', icon: 'lightbulb', subPage: 'patentspage', curPage: 'ourservices', routerlink: '/patentspage' },
                { text: 'Designs & Trademarks', textJP: '意匠・商標登録', icon: 'category', subPage: 'designstmpage', curPage: 'ourservices', routerlink: '/designstmpage' },
                { text: 'Litigation & Strategy', textJP: '訴訟・特許戦略・特許調査', icon: 'gavel', subPage: 'litigationpage', curPage: 'ourservices', routerlink: '/litigationpage' },
                { text: 'Case Studies', textJP: '判例紹介', icon: 'menu_book', subPage: 'casestudiespage', curPage: 'ourservices', routerlink: '/casestudiespage' }],
            displayMode: ""
        },
        {
            mainpage: 'professionals',
            routerlink: '/professionals',
            text: "Professionals",
            textJP: "メンバー",
            defaultsubpage: 'pro-practiceareas',
            links: [
                { text: 'Practice Areas', textJP: '専門分野別', icon: 'manage_search', subPage: 'pro-practiceareas', curPage: 'professionals', routerlink: '/pro-practiceareas' },
                { text: 'Information Processing', textJP: '情報処理系', icon: 'computer', subPage: 'pro-infoproc', curPage: 'professionals', routerlink: '/pro-infoproc' },
                { text: 'Communications', textJP: '通信技術系', icon: 'settings_input_antenna', subPage: 'pro-comm', curPage: 'professionals', routerlink: '/pro-comm' },
                { text: 'Electronics', textJP: '半導体・電気回路系', icon: 'cable', subPage: 'pro-elec', curPage: 'professionals', routerlink: '/pro-elec' },
                { text: 'Mechanical', textJP: '機械系', icon: 'miscellaneous_services', subPage: 'pro-mech', curPage: 'professionals', routerlink: '/pro-mech' },
                { text: 'Designs', textJP: '意匠', icon: 'category', subPage: 'pro-designs', curPage: 'professionals', routerlink: '/pro-designs' },
                { text: 'Medical Devices', textJP: '医療機器', icon: 'biotech', subPage: 'pro-meddevices', curPage: 'professionals', routerlink: '/pro-meddevices' },
                { text: 'Chem, Pharma & Biotech', textJP: '化学・医薬・バイオ', icon: 'science', subPage: 'pro-chempharmabio', curPage: 'professionals', routerlink: '/pro-chempharmabio' },
                { text: 'Toys and Games', textJP: 'アミューズメント・ゲーム', icon: 'videogame_asset', subPage: 'pro-toysgames', curPage: 'professionals', routerlink: '/pro-toysgames' },
                { text: 'Litigation', textJP: '訴訟・訴訟支援', icon: 'gavel', subPage: 'pro-lit', curPage: 'professionals', routerlink: '/pro-lit' },
                { text: 'Patent Attorneys', textJP: '弁理士', icon: 'person', subPage: 'pro-patattorneys', curPage: 'professionals', routerlink: '/pro-patattorneys' },
                { text: 'Legal/Technical Advisors', textJP: '法律顧問・技術顧問', icon: 'person_outline', subPage: 'pro-advisors', curPage: 'professionals', routerlink: '/pro-advisors' },
                { text: 'Patent Engineers', textJP: '特許技術スタッフ', icon: 'person', subPage: 'pro-patengineers', curPage: 'professionals', routerlink: '/pro-patengineers' },
                { text: 'International Support', textJP: '技術・海外支援', icon: 'person_outline', subPage: 'pro-international', curPage: 'professionals', routerlink: '/pro-international' }],
            displayMode: ""
        },
        {
            mainpage: 'cafcreports',
            routerlink: '/cafcreports',
            text: "",
            textJP: "米国連邦控訴裁判所（CAFC）判決",
            defaultsubpage: 'cafcall',
            links: [
                { text: '', textJP: 'CAFC判決(全件）', icon: 'menu_book', subPage: 'cafcall', curPage: 'cafcreports', routerlink: '/cafcall' },
                { text: '', textJP: '2019年', icon: 'menu_book', subPage: 'cafc2019', curPage: 'cafcreports', routerlink: '/cafc2019' },
                { text: '', textJP: '2018年', icon: 'menu_book', subPage: 'cafc2018', curPage: 'cafcreports', routerlink: '/cafc2018' },
                { text: '', textJP: '2017年', icon: 'menu_book', subPage: 'cafc2017', curPage: 'cafcreports', routerlink: '/cafc2017' },
                { text: '', textJP: '2016年', icon: 'menu_book', subPage: 'cafc2016', curPage: 'cafcreports', routerlink: '/cafc2016' },
                { text: '', textJP: '2015年', icon: 'menu_book', subPage: 'cafc2015', curPage: 'cafcreports', routerlink: '/cafc2015' },
                { text: '', textJP: '2014年', icon: 'menu_book', subPage: 'cafc2014', curPage: 'cafcreports', routerlink: '/cafc2014' },
                { text: '', textJP: '2013年', icon: 'menu_book', subPage: 'cafc2013', curPage: 'cafcreports', routerlink: '/cafc2013' },
                { text: '', textJP: '2012年', icon: 'menu_book', subPage: 'cafc2012', curPage: 'cafcreports', routerlink: '/cafc2012' },
                { text: '', textJP: '2011年', icon: 'menu_book', subPage: 'cafc2011', curPage: 'cafcreports', routerlink: '/cafc2011' },
                { text: '', textJP: '2010年', icon: 'menu_book', subPage: 'cafc2010', curPage: 'cafcreports', routerlink: '/cafc2010' },
                { text: '', textJP: '2009年', icon: 'menu_book', subPage: 'cafc2009', curPage: 'cafcreports', routerlink: '/cafc2009' },
                { text: '', textJP: '2008年', icon: 'menu_book', subPage: 'cafc2008', curPage: 'cafcreports', routerlink: '/cafc2008' },
                { text: '', textJP: '2007年', icon: 'menu_book', subPage: 'cafc2007', curPage: 'cafcreports', routerlink: '/cafc2007' },
                { text: '', textJP: '2006年', icon: 'menu_book', subPage: 'cafc2006', curPage: 'cafcreports', routerlink: '/cafc2006' },
                { text: '', textJP: '2005年', icon: 'menu_book', subPage: 'cafc2005', curPage: 'cafcreports', routerlink: '/cafc2005' },
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