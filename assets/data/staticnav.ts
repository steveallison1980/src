import { ISitemap } from './../../app/interfaces/isitemap';

export const SITEMAP_DATA: ISitemap = 
{ pages: [
    {
        mainpage: 'home',
        routerlink: '/',
        text: "Home",
        textJP: "ホーム",
        defaultsubpage: 'welcomemessage',
        links: [
        {text:'Welcome Message',textJP:'ご挨拶',icon:'local_florist',subPage:'welcomemessage', curPage: 'home'},
        {text:'What\'s New',textJP:'最新情報',icon:'announcement',subPage:'news', curPage: 'home'},
        {text:'Contact Information/Map',textJP:'お問い合わせ・アクセス',icon:'call',subPage:'contact', curPage: 'home'},
        {text:'Publications',textJP:'書籍',icon:'location_on',subPage:'publications', curPage: 'home'}],
    },
    {
        mainpage: 'aboutus',
        routerlink: '/aboutus',
        text: "About Us",
        textJP: "当事務所について",
        defaultsubpage: 'about',
        links: [
        {text:'About the Firm',textJP:'当事務所について',icon:'people',subPage:'about', curPage: 'aboutus'},
        {text:'An Overview',textJP:'事務所概要',icon:'menu_book',subPage:'overview', curPage: 'aboutus'},
        {text:'Key Features',textJP:'特色',icon:'format_list_bulleted',subPage:'keyfeatures', curPage: 'aboutus'}],
    },
    {
        mainpage: 'ourservices',
        routerlink: '/ourservices',
        text: "Our Services",
        textJP: "実務案内",
        defaultsubpage: 'about',
        links: [
        {text:'Patents & Utility Models',textJP:'特許・実用新案取得',icon:'lightbulb',subPage:'patent', curPage: 'ourservices'},
        {text:'Designs & Trademarks',textJP:'意匠・商標登録',icon:'category',subPage:'design', curPage: 'ourservices'},
        {text:'Litigation & Strategy',textJP:'訴訟・特許戦略・特許調査',icon:'gavel',subPage:'litigation', curPage: 'ourservices'},
        {text:'Case Studies',textJP:'判例紹介',icon:'menu_book',subPage:'court', curPage: 'ourservices'}],
    },
    {
        mainpage: 'professionals',
        routerlink: '/professionals',
        text: "Professionals",
        textJP: "メンバー",
        defaultsubpage: 'practiceareas',
        links: [
        {text:'Practice Areas',textJP:'専門分野別',icon:'manage_search',subPage:'practiceareas',curPage: 'professionals'},
        {text:'Information Processing',textJP:'情報処理系',icon:'computer',subPage:'infoproc_people',curPage: 'professionals'},
        {text:'Communications',textJP:'通信技術系',icon:'settings_input_antenna',subPage:'comm_people',curPage: 'professionals'},
        {text:'Electronics',textJP:'半導体・電気回路系',icon:'cable',subPage:'semicon_people',curPage: 'professionals'},
        {text:'Mechanical',textJP:'機械系',icon:'miscellaneous_services',subPage:'mech_people',curPage: 'professionals'},
        {text:'Designs',textJP:'意匠',icon:'category',subPage:'design_people',curPage: 'professionals'},
        {text:'Medical Devices',textJP:'医療機器',icon:'biotech',subPage:'meddev_people',curPage: 'professionals'},
        {text:'Chem, Pharma & Biotech',textJP:'化学・医薬・バイオ',icon:'science',subPage:'science_people',curPage: 'professionals'},
        {text:'Toys and Games',textJP:'アミューズメント・ゲーム',icon:'videogame_asset',subPage:'games_people',curPage: 'professionals'},
        {text:'Litigation',textJP:'訴訟・訴訟支援',icon:'gavel',subPage:'litigation_people',curPage: 'professionals'},
        {text:'Patent Attorneys',textJP:'弁理士',icon:'person',subPage:'patentattorneys',curPage: 'professionals'},
        {text:'Legal/Technical Advisors',textJP:'法律顧問・技術顧問',icon:'person_outline',subPage:'advisors',curPage: 'professionals'},
        {text:'Patent Engineers',textJP:'特許技術スタッフ',icon:'person',subPage:'patentengineers',curPage: 'professionals'},
        {text:'International Support',textJP:'技術・海外支援',icon:'person_outline',subPage:'internationalsupport',curPage: 'professionals'}],
    },
    {
        mainpage: 'careers',
        routerlink: '/careers',
        text: "Careers",
        textJP: "採用情報",
        defaultsubpage: 'careers',
        links:[{text:'Careers',textJP:'キャリア',icon:'person_add',subPage:'careers', curPage:'careers'}]
    }]
};