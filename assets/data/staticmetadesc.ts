import { IMetaDesc } from './../../app/interfaces/imetadesc';
import {
    HOMEPAGEKEY,
    CONTACTPAGEKEY,
    ABOUTPAGEKEY,KEYFEATURESPAGEKEY,
    PATENTSPAGEKEY,DESIGNSTMPAGEKEY,LITIGATIONPAGEKEY,CASESTUDIESPAGEKEY,PUBLICATIONSPAGEKEY,
    PRACTICEAREASPAGEKEY,
    CAREERSPAGEKEY,
    CAFCALLPAGEKEY,
    PATENTGUIDANCEPAGEKEY,DESIGNGUIDANCEPAGEKEY,TMGUIDANCEPAGEKEY} from './staticnav';

const HOMEMETADESC = "Ohtsuka Patent Office";
const HOMEMETADESCJP = "大塚国際特許事務所";
const CONTACTMETADESC = "Contact Information/Map";
const CONTACTMETADESCJP = "お問い合わせ・アクセス";
const ABOUTMETADESC = "Main services (patent prosecution, portfolio management, consulting, litigation support, opinion, search, FTO, licensing and contracts, trademark, design, clearance search)";
const ABOUTMETADESCJP = "事務所の主な業務の業務一覧（特許出願、追行、管理、ポートフォリオマネージメント、コンサルテーション、訴訟支援、鑑定、調査、FTO調査、ライセンスと契約、商標・意匠）";
const KEYFEATURESMETADESC = "The Right Experts, Thinking Globally, Litigation Skill and Experience, Developing Personnel, Support and Management";
const KEYFEATURESMETADESCJP = "特色、豊富な専門家集団、優れた国際性と知財感覚、充実した訴訟対応能力とその活用、人材育成、サポートと管理体制";
const PATENTMETADESC = "Patents and Utility Models";
const PATENTMETADESCJP = "特許・実用新案取得";
const PRACTICEAREASMETADESC = "Patent Attorneys, Legal/Technical Advisors, Patent Engineers, International Support, Information Processing, Communications, Electronics, Mechanical, Designs, Medical Devices, Chemicals, Pharma & Bio, Games, Litigation";
const PRACTICEAREASMETADESCJP = "メンバー（弁理士、法律顧問・技術顧問、特許技術スタッフ、技術・海外支援、情報処理、通信、半導体・電気回路、機械、意匠、医療機器、化学・医薬・バイオ、アミューズメント・ゲーム、訴訟・訴訟支援）";
const CAREERSMETADESC = "Patent Attorneys and Engineers, Translation/Communication Staff";
const CAREERSMETADESCJP = "弁理士・特許技術者、事務管理部門、図面トレーサー";
const CAFCALLMETADESC = "米国CAFC（米国連邦控訴裁判所）の判例紹";
const CAFCALLMETADESCJP = "米国CAFC（米国連邦控訴裁判所）の判例紹介";
const GUIDANCEMETADESC = "Japanese Patent Practice, Japanese Trademark Practice, Japanese Design Practice";
const GUIDANCEMETADESCJP = "Japanese Patent Practice, Japanese Trademark Practice, Japanese Design Practice";
const GUIDANCEPATENTMETADESC = "Japanese Patent Practice";
const GUIDANCEPATENTMETADESCJP = "Japanese Patent Practice";
const GUIDANCEDESIGNMETADESC = "Japanese Design Practice";
const GUIDANCEDESIGNMETADESCJP = "Japanese Design Practice";
const GUIDANCETMMETADESC = "Japanese Trademark Practice";
const GUIDANCETMMETADESCJP = "Japanese Trademark Practice";
const DESIGNTMMETADESC = "Designs, Trademark Registrations";
const DESIGNTMMETADESCJP = "意匠、商標登録";
const LITMETADESC = "Litigation, Patent Strategies, Patent Searches";
const LITMETADESCJP = "訴訟、特許戦略、特許調査";
const CASESTUDIESMETADESC = "Case Studies from CAFC Decisions, Reports of Japanese Court Decisions";
const CASESTUDIESMETADESCJP = "アメリカのCAFC（米国連邦控訴裁判所）の判例の紹介、日本の判例の紹介";
const PUBSMETADESC = "Publications";
const PUBSMETADESCJP = "書籍";

export const METADESC_LIST: Array<IMetaDesc> =
[
    {
        key: HOMEPAGEKEY,
        metaDescEN: HOMEMETADESC,
        metaDescJP: HOMEMETADESCJP,
    },
    {
        key: CONTACTPAGEKEY,
        metaDescEN: CONTACTMETADESC,
        metaDescJP: CONTACTMETADESCJP,
    },
    {
        key: ABOUTPAGEKEY,
        metaDescEN: ABOUTMETADESC,
        metaDescJP: ABOUTMETADESCJP,
    },
    {
        key: KEYFEATURESPAGEKEY,
        metaDescEN: KEYFEATURESMETADESC,
        metaDescJP: KEYFEATURESMETADESCJP,
    },
    {
        key: PATENTSPAGEKEY,
        metaDescEN: PATENTMETADESC,
        metaDescJP: PATENTMETADESCJP,
    },
    {
        key: PRACTICEAREASPAGEKEY,
        metaDescEN: PRACTICEAREASMETADESC,
        metaDescJP: PRACTICEAREASMETADESCJP,
    },
    {
        key: CAREERSPAGEKEY,
        metaDescEN: CAREERSMETADESC,
        metaDescJP: CAREERSMETADESCJP,
    },
    {
        key: CAFCALLPAGEKEY,
        metaDescEN: CAFCALLMETADESC,
        metaDescJP: CAFCALLMETADESCJP,
    },
    {
        key: "guidance",
        metaDescEN: GUIDANCEMETADESC,
        metaDescJP: GUIDANCEMETADESCJP,
    },
    {
        key: PATENTGUIDANCEPAGEKEY,
        metaDescEN: GUIDANCEPATENTMETADESC,
        metaDescJP: GUIDANCEPATENTMETADESCJP,
    },
    {
        key: DESIGNGUIDANCEPAGEKEY,
        metaDescEN: GUIDANCEDESIGNMETADESC,
        metaDescJP: GUIDANCEDESIGNMETADESCJP,
    },
    {
        key: TMGUIDANCEPAGEKEY,
        metaDescEN: GUIDANCETMMETADESC,
        metaDescJP: GUIDANCETMMETADESCJP,
    },
    {
        key: DESIGNSTMPAGEKEY,
        metaDescEN: DESIGNTMMETADESC,
        metaDescJP: DESIGNTMMETADESCJP,
    },
    {
        key: LITIGATIONPAGEKEY,
        metaDescEN: LITMETADESC,
        metaDescJP: LITMETADESCJP,
    },
    {
        key: CASESTUDIESPAGEKEY,
        metaDescEN: CASESTUDIESMETADESC,
        metaDescJP: CASESTUDIESMETADESCJP,
    },
    {
        key: PUBLICATIONSPAGEKEY,
        metaDescEN: PUBSMETADESC,
        metaDescJP: PUBSMETADESCJP,
    }
];
