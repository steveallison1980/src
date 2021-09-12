import { IPracticeareas } from './../../app/interfaces/ipracticeareas';
import { IPerson } from './../../app/interfaces/iperson';

export const PROFESSIONALS_DATA: IPracticeareas[] = [
  {text:'Practice Areas',textJP:'専門分野別',icon:'manage_search',index:0,component:'pro-practiceareas',type:'main-group'},
  {text:'Information Processing',textJP:'情報処理系',icon:'computer',index:1,component:'pro-infoproc',type:'sub-group'},
  {text:'Communications',textJP:'通信技術系',icon:'settings_input_antenna',index:2,component:'pro-comm',type:'sub-group'},
  {text:'Electronics',textJP:'半導体・電気回路系',icon:'cable',index:3,component:'pro-elec',type:'sub-group'},
  {text:'Mechanical',textJP:'機械系',icon:'miscellaneous_services',index:4,component:'pro-mech',type:'sub-group'},
  {text:'Designs',textJP:'意匠',icon:'category',index:5,component:'pro-designs',type:'sub-group'},
  {text:'Medical Devices',textJP:'医療機器',icon:'biotech',index:6,component:'pro-meddevices',type:'sub-group'},
  {text:'Chemicals, Pharma & Bio',textJP:'化学・医薬・バイオ',icon:'science',index:7,component:'pro-chempharmabio',type:'sub-group'},
  {text:'Games etc.',textJP:'アミューズメント・ゲーム',icon:'videogame_asset',index:8,component:'pro-toysgames',type:'sub-group'},
  {text:'Litigation',textJP:'訴訟・訴訟支援',icon:'gavel',index:9,component:'pro-lit',type:'last-in-group'},
  {text:'Patent Attorneys',textJP:'弁理士',icon:'person',index:10,component:'pro-patattorneys',type:'sub-group'},
  {text:'Legal/Technical Advisors',textJP:'法律顧問・技術顧問',icon:'person_outline',index:11,component:'pro-advisors',type:'sub-group'},
  {text:'Patent Engineers',textJP:'特許技術スタッフ',icon:'person',index:12,component:'pro-patengineers',type:'sub-group'},
  {text:'International Support',textJP:'技術・海外支援',icon:'person_outline',index:13,component:'pro-international',type:'sub-group'}
];

export const PEOPLE_DATA: IPerson[] = [
    {
      // Patent Attorneys
      id: 1,
      title: 'Managing Partner',
      qualifications: "",
      name: 'Yasunori Ohtsuka',
      img: 'yasunoriohtsuka.jpg',
      imglarge: 'yasunoriohtsuka_large.jpg',
      avatar: 'yasunoriohtsuka_avatar.jpg',
      bio: 'For over 40 years, Yasunori Ohtsuka has been a leader in the IP World in Japan as the founder and managing partner of Ohtsuka Patent Office.',
      specialties:
        [{ text: 'Patent, design and trademark practice before the Japan Patent Office and Intellectual Property High Court; litigation and preliminary injunction proceedings before courts and Customs (seizure of IP-infringing products at the customs offices);' },
        { text: 'Legal opinions on infringement and validity;' },
        { text: 'particular experience in the area of business equipment, telecommunications and medical equipment.' }],
      education:
        [{ text: 'B.A., Chuo University, Law Diploma' },
        { text: 'Tokyo Electric University, School of Electronics' }],
      career:
        [{ text: 'Admitted to practice as a Japanese Patent Attorney in 1972.' },
        { text: 'Worked as a Patent Attorney for Burroughs Japan prior to founding the Ohtsuka Patent Office. Brought the Office into the top twenty Patent Law Firms in Japan, and, in particular, into the top ten Patent Law Firms in the fields of electronics and physics.' }],
      memberships:
        [{ text: 'Member of Japan Patent Attorneys Association and other professional associations such as AIPPI , APAA and Institute of Intellectual Property' },
        { text: 'Chairman of the Japan/US Study Group at JPAA/AIPLA, Vice-President of LES' }],
      publications:
        [{ text: 'Practical Advice on Patents (co-author; published by Ohm)' },
        { text: 'The Basics of Patents (published by Ohm)' },
        { text: 'Protecting Intellectual Property in Japan (AIPPI Japan);' },
        { text: 'Trial/Appeal Procedure in the U.S. and in European Countries (Gyosei)' },
        { text: 'Editor of Review of the CAFC’s Decisions (published by ILS)' }],
  
      titleJP: '所長 弁理士',
      nameJP: '大塚　康徳',
      bioJP: '昭和47年弁理士登録',
      specialtiesJP:
        [{ text: 'IT分野の特許出願、審判、訴訟、特許侵害裁判、クロスボーダー事件の支援、' },
        { text: '意匠・商標・著作権分野のコンサルティング' }],
      educationJP:
        [{ text: '中央大学法学部　法律科卒業' },
        { text: '東京電機大学　電子専門学校　電子工学科卒業' }],
      careerJP:
        [{ text: '旧バロース株式会社（現日本ユニシス）に弁理士として勤務' },
        { text: '情報処理・ソフトウエア関連特許、特許ライセンス、大手国際企業間の特許・知財交渉に携わる' }],
      membershipsJP:
        [{ text: '日本弁理士会' },
        { text: '弁理士会日米実務委員会委員長（平成8年）' },
        { text: '弁理士会常議員（平成9年）' },
        { text: '日本国際知的財産保護協会（AIPPI）' },
        { text: '日本ライセンス協会（LES）' },
        { text: '日本商標協会' },
        { text: '法とコンピュータ学会' },
        { text: '日本画像学会' },
        { text: '電子情報通信学会' },
        { text: '日本電子写真学会' }],
      publicationsJP:
        [{ text: 'CAFC（アメリカ連邦高等裁判所）判決速報のレポーター（月刊　Lawyers）' },
        { text: '日本における知的所有権の保護（AIPPI）' },
        { text: 'アメリカにおける特許関連の審判、訴訟手続（ぎょうせい）' },
        { text: '特許の実践知識（オーム社）' },
        { text: '特許がわかる本（オーム社）' },
        { text: 'CAFC判例研究（I）（II）（ILS出版）' },
        { text: '特許がわかるQ&A（オーム社）' }],
  
      groups:
        [, 'pro-designs', 'pro-lit', 'pro-patattorneys']
    },
    {
      id: 2,
      title: 'Patent Attorney (Partner)',
      qualifications: "Ph.D.",
      name: 'Yasuhiro Ohtsuka',
      img: 'yasuhiroohtsuka.jpg',
      imglarge: 'yasuhiroohtsuka_large.jpg',
      avatar: 'yasuhiroohtsuka_avatar.jpg',
      bio: 'For over 20 years, Yasuhiro Ohtsuka has been a leader in the IP World in Japan.',
      specialties:
        [{ text: 'Patent, design and trademark practice before the Japan Patent Office and Intellectual Property High Court;' },
        { text: 'litigation and preliminary injunction proceedings before courts and Customs;' },
        { text: 'legal opinions on infringement and validity;' },
        { text: 'particular experience in image processing, mobile communications and Internet, information technologies (both hardware and software), semiconductors and electronic devices.' }],
      education:
        [{ text: 'M.S., The University of Tokyo, Electronic and Information Engineering' },
        { text: 'Ph.D., The University of Tokyo, Electronic Engineering (with emphasis on CMOS image sensors and image processing)' }],
      career:
        [{ text: 'Co-researcher in telecommunication systems at the Hattori Research Laboratory;' },
        { text: 'Postdoctoral Fellowship from the Japan Society for the Promotion of Science (JSPS) in the field of Mathematical, Physical and Engineering Science.' },
        { text: 'Japanese Patent Attorney since 1999.' }],
      memberships:
        [{ text: 'Japan Patent Attorneys Association (JPAA)' },
        { text: 'The Imaging Society of Japan' },
        { text: 'Information and Communication Engineers' }],
      publications:
        [{ text: 'Numerous academic papers published through academic associations, such as the IEEE;' },
        { text: 'The Basics of Patents (published by Ohm)' },
        { text: 'contributes CAFC reports to The Lawyers (monthly journal)' }],
  
      titleJP: '弁理士（パートナー）',
      nameJP: '大塚　康弘',
      bioJP: '平成11年弁理士登録',
      specialtiesJP:
        [{ text: '情報処理、移動体通信・半導体分野の特許出願、審判、訴訟、特許侵害裁判、クロスボーダー事件の支援、' },
        { text: '意匠・商標の実務、コンサルティング' }],
      educationJP:
        [{ text: '東京大学大学院　修士課程修了（電子情報工学）' },
        { text: '東京大学大学院　博士課程修了（電子情報工学）工学博士' },
        { text: '情報処理、画像処理、CMOSセンサの研究' },
        { text: '上智大学服部研究室（移動体通信）の特別研究員' }],
      careerJP: null,
      membershipsJP:
        [{ text: '日本弁理士会' },
        { text: '日本学術振興会　平成12年度特別研究員（数・物）' },
        { text: '日本画像学会、電子情報通信学会' }],
      publicationsJP:
        [{ text: '空間可変サンプリング制御を行うイメージセンサ（映像情報メディア学会）、ICIP（IEEE）、他' }, // unsure if this needs to be here 論文
        { text: 'CAFC（アメリカ連邦高等裁判所）判決速報のレポーター（月刊　Lawyers）' },
        { text: 'CAFC（アメリカ連邦高等裁判所）判例集　CDROM版　（ILS出版）' },
        { text: '特許の実践知識（オーム社）' },
        { text: '特許がわかる本（オーム社）' },
        { text: '特許がわかるQ&A（オーム社）' }],
  
      groups:
        ['pro-infoproc', 'pro-comm', 'pro-elec', 'pro-meddevices', 'pro-toysgames', 'pro-lit', 'pro-patattorneys'] 
    },
    {
      id: 3,
      title: 'Patent Attorney (Partner)',
      qualifications: "",
      name: 'Jiro Takayanagi',
      img: 'jirotakayanagi.jpg',
      imglarge: 'jirotakayanagi_large.jpg',
      avatar: 'jirotakayanagi_avatar.jpg',
      bio: 'Add bio.', // update
      specialties:
        [{ text: 'Patent, design and trademark practice before the Japan Patent Office and Intellectual Property High Court;' },
        { text: 'litigation and preliminary injunction proceedings before courts and Customs;' },
        { text: 'legal opinions on infringement and validity; particular experience in the area of mobile communications, ATM switches, Internet-related communications, information processing technology and optical communications.' }],
      education:
        [{ text: 'B.S., Keio University, Electrical Engineering' },
        { text: 'M.S., Keio University, Electrical Engineering (with emphasis on telecommunications)' }],
      career:
        [{ text: 'Japanese Patent Attorney since 1998.' },
        { text: 'Patent Attorney, Hitachi, Information Systems Group and Intellectual Property Group.' },
        { text: 'Lecturer in Intellectual Property at Keio University.' }],
      memberships:
        [{ text: 'Japan Patent Attorneys Association (JPAA)' },
        { text: 'AIPPI' }],
      publications:
        [{ text: 'The Basics of Patents (co-author; published by Ohm);' },
        { text: 'contributes CAFC reports to The Lawyers (monthly journal)' }],
  
      titleJP: '弁理士（パートナー）',
      nameJP: '高柳　司郎',
      bioJP: '平成10年弁理士登録',
      specialtiesJP:
        [{ text: '移動体通信分野、デジタル回路、電子写真分野の特許出願、審判、訴訟、特許侵害裁判、クロスボーダー事件の支援、' },
        { text: '意匠・商標実務、コンサルティング' }],
      educationJP:
        [{ text: '慶應義塾大学理工学部　電気工学科卒業' },
        { text: '慶應義塾大学大学院　前期博士課程修了（電気工学専攻）' }],
      careerJP:
        [{ text: '株式会社日立製作所 知的所有権本部' },
        { text: '移動体通信分野、ATM交換装置、インターネット関連技術の特許を担当' }],
      membershipsJP: null,
      publicationsJP:
        [{ text: 'CAFC（アメリカ連邦高等裁判所）判決速報のレポーター（月刊　Lawyers）' },
        { text: 'CAFC（アメリカ連邦高等裁判所）判例集　CDROM版　（ILS出版）' },
        { text: '特許がわかる本（オーム社）' },
        { text: '特許がわかるQ&A（オーム社）' }],
  
      groups:
        ['pro-infoproc', 'pro-comm', 'pro-mech', 'pro-meddevices', 'pro-toysgames', 'pro-lit', 'pro-patattorneys' ] 
    },
    {
      id: 4,
      title: 'Patent Attorney (Partner)',
      qualifications: "",
      name: 'Shuji Kimura',
      img: 'logo.jpg',
      imglarge: 'logo_large.jpg',
      avatar: 'shujikimura_avatar.jpg',
      bio: 'Add bio.', // update
      specialties:
        [{ text: 'Patent, design and trademark practice before the Japan Patent Office and Intellectual Property High Court;' },
        { text: 'litigation and preliminary injunction proceedings before courts and Customs;' },
        { text: 'legal opinions on infringement and validity; particular experience in Customs proceedings and also in the fields of automobile, industrial machinery, semiconductor production equipment, and amusement software fields.' }],
      education:
        [{ text: 'B.S., Mechanical Engineering, Waseda University' }],
      career:
        [{ text: 'Japanese Patent Attorney since 2000.' },
        { text: 'Engineer, Tokyo R&D Corporation, specializing in electric power assisted steering systems.' },
        { text: 'Actively handling Boards of Appeal and IP High Court cases.' }],
      memberships:
        [{ text: 'Japan Patent Attorneys Association (JPAA)' },
        { text: 'the Customs Intellectual Property Information Center (CIPIC)' }],
      publications:
        [{ text: 'The Basics of Patents（co-author; published by Ohm);' },
        { text: 'contributes CAFC reports to The Lawyers (monthly journal)' }],
  
      titleJP: '弁理士（パートナー）',
      nameJP: '木村　秀二',
      bioJP: '平成12年弁理士登録',
      specialtiesJP:
        [{ text: 'メカトロニクス、自動車、事務機器分野の特許出願、審判、訴訟、特許侵害訴訟、' },
        { text: '意匠・商標の実務、コンサルティング' }],
      educationJP:
        [{ text: '早稲田大学理工学部　機械工学科卒業' }],
      careerJP:
        [{ text: '株式会社アールアンドデー　電動パワーステアリングの開発に従事し、技術の基礎を学ぶ' }],
      membershipsJP: null,
      publicationsJP:
        [{ text: 'CAFC（アメリカ連邦高等裁判所）判決速報のレポーター（月刊　Lawyers）' },
        { text: 'CAFC（アメリカ連邦高等裁判所）判例集　CDROM版　（ILS出版）' },
        { text: '特許の実践知識（オーム社）' },
        { text: '特許がわかる本（オーム社）' },
        { text: '特許がわかるQ&A（オーム社）' }],
  
      groups:
        ['pro-elec', 'pro-mech', 'pro-designs', 'pro-toysgames', 'pro-lit', 'pro-patattorneys'] 
    },
    {
      id: 5,
      title: 'Patent Attorney (Partner)',
      qualifications: "",
      name: 'Osamu Shimoyama',
      img: 'osamushimoyama.jpg',
      imglarge: 'osamushimoyama_large.jpg',
      avatar: 'osamushimoyama_avatar.jpg',
      bio: 'Add bio.', // update
      specialties:
        [{ text: 'Patent and design practice before the Japan Patent Office and Intellectual Property High Court;' },
        { text: 'litigation and preliminary injunction proceedings before courts and Customs;' },
        { text: 'legal opinions on infringement and validity; particular experience in computer software and hardware-related inventions and telecommunications.' }],
      education:
        [{ text: 'B.S., University of Electro-Communications, Computer Science' }],
      career:
        [{ text: 'Japanese Patent Attorney since 2003.' },
        { text: 'Active in the patent field since 1990.' },
        { text: 'Worked for NCR Japan as a software and firmware engineer.' }],
      memberships:
        [{ text: 'Japan Patent Attorneys Association (JPAA)' },
        { text: 'The Institute of Electronics' },
        { text: 'Information and Communication Engineers' }],
      publications: null,
  
      titleJP: '弁理士（パートナー）',
      nameJP: '下山　治',
      bioJP: '平成15年弁理士登録',
      specialtiesJP:
        [{ text: 'コンピュータ、画像処理・文書処理、通信分野の特許出願、審判、訴訟、特許侵害訴訟、' },
        { text: '鑑定、コンサルティング' }],
      educationJP:
        [{ text: '電気通信大学電気通信学部　計算機科卒業' }],
      careerJP:
        [{ text: '日本NCR株式会社　POSターミナルのシステム、アプリケーションソフトの開発に従事' }],
      membershipsJP: null,
      publicationsJP: null,
  
      groups:
        ['pro-infoproc', 'pro-comm', 'pro-patattorneys'] 
    },
    {
      id: 6,
      title: 'Patent Attorney (Partner)',
      qualifications: "",
      name: 'Yukimitsu Eikawa',
      img: 'yukimitsueikawa.jpg',
      imglarge: 'yukimitsueikawa_large.jpg',
      avatar: 'yukimitsueikawa_avatar.jpg',
      bio: 'Add bio.', // update
      specialties:
        [{ text: 'Patent and design practice before the Japan Patent Office and Intellectual Property High Court;' },
        { text: 'litigation and preliminary injunction proceedings before courts;' },
        { text: 'legal opinions on infringement and validity;' },
        { text: 'Particular experience in the area of semiconductor technology, semiconductor production equipment and computer hardware and software.' }],
      education:
        [{ text: 'B.S., Tokyo Agriculture and Technology University, Electrical Engineering' }],
      career:
        [{ text: 'Japanese Patent Attorney since 2004.' },
        { text: 'Active in the patent field since 1995.' },
        { text: 'Worked in the LSI Division of JFK Steel Corporation, designing microprocessors.' },
        { text: 'Special expertise in semiconductor technology.' }],
      memberships:
        [{ text: 'Japan Patent Attorneys Association (JPAA)' },
        { text: 'Institute of Intellectual Property' }],
      publications:
        [{ text: 'The Basics of Patents (co-author; published by Ohm)' }],
  
      titleJP: '弁理士（パートナー）',
      nameJP: '永川　行光',
      bioJP: '平成16年弁理士登録',
      specialtiesJP:
        [{ text: '半導体、半導体製造装置、光学機器、コンピュータハードウエア、デジタル回路分野の特許出願、' },
        { text: '審判、訴訟、特許侵害訴訟、鑑定、意匠実務、コンサルティング' }],
      educationJP:
        [{ text: '東京農工大学工学部　電子工学科卒業' }],
      careerJP:
        [{ text: '川崎製鉄株式会社　LSI事業部開発・設計部' },
        { text: 'マイクロプロセッサー及びメモリの設計に従事' }],
      membershipsJP: null,
      publicationsJP:
        [{ text: '特許がわかる本（オーム社）' },
        { text: '特許がわかるQ&A（オーム社）' }],
  
      groups:
        ['pro-infoproc', 'pro-elec', 'pro-meddevices', 'pro-lit', 'pro-patattorneys'] 
    },
    {
      id: 7,
      title: 'Patent Attorney (Principal)',
      qualifications: "",
      name: 'Yoshio Nishikawa',
      img: 'yoshionishikawa.jpg',
      imglarge: 'yoshionishikawa_large.jpg',
      avatar: 'yoshionishikawa_avatar.jpg',
      bio: 'Add bio.', // update
      specialties:
        [{ text: 'Patent practice before the Japan Patent Office and Intellectual Property High Court;' },
        { text: 'litigation and preliminary injunction proceedings before courts;' },
        { text: 'legal opinions on infringement and validity in chemical, pharmaceutical and medical fields;' },
        { text: 'particular experience in appeals before the Board of Appeal and IP High Court.' }],
      education:
        [{ text: 'B.S., Kyoto University, Polymer Chemistry' },
        { text: 'M.S., Kyoto University, Polymer Chemistry' }],
      career:
        [{ text: 'Qualified as a Japanese Patent Attorney in 1983.' },
        { text: 'Worked for the Japan Patent Office as a Patent Examiner in the fields of Polymers, Textiles and Paper Manufacturing Machinery, and also worked as a Board of Appeal Chief Examiner in various technical fields.' }],
      memberships:
        [{ text: 'Japan Patent Attorneys Association (JPAA)' },
        { text: 'Society of Polymer Science, Japan' }],
      publications:
        [{ text: 'Technical Revolution and Patent System (published by JPO)' }],
  
      titleJP: '弁理士（プリンシパル）',
      nameJP: '西川　恵雄',
      bioJP: '昭和58年弁理士資格取得',
      specialtiesJP:
        [{ text: '化学、医療技術分野の特許出願、審判、訴訟、特許侵害訴訟、鑑定、コンサルティング' }],
      educationJP:
        [{ text: '京都大学工学部　高分子化学科卒業' },
        { text: '京都大学大学院　工学研究科　高分子化学専攻　修士課程修了' }],
      careerJP:
        [{ text: '特許庁' },
        { text: '審査官（高分子、繊維、製紙機械）' },
        { text: '審判官（複写機、写真）' },
        { text: '審査長（生産機械、繊維包装機械）' },
        { text: '審判部において、幾つかの技術分野の主任審判官、部門長を歴任' },
        { text: '在インド日本国大使館 一等書記官（商務担当）' },
        { text: '特許庁総務課技術審査委員' },
        { text: '特許庁総務部電子計算機業務課機械化企画室長' },
        { text: '財団法人工業所有権協力センター企画部長' }],
      membershipsJP: null,
      publicationsJP: null,
  
      groups:
        ['pro-elec', 'pro-chempharmabio', 'pro-lit', 'pro-patattorneys']
    },
    {
      id: 8,
      title: 'Patent Attorney (Principal)',
      qualifications: "",
      name: 'Kiyohito Ejima',
      img: 'kiyohitoejima.jpg',
      imglarge: 'kiyohitoejima_large.jpg',
      avatar: 'kiyohitoejima_avatar.jpg',
      bio: 'Add bio.', // update
      specialties:
        [{ text: 'Patent practice before the Japan Patent Office and Intellectual Property High Court;' },
        { text: 'litigation and preliminary injunction proceedings before courts;' },
        { text: 'legal opinions on infringement and validity;' },
        { text: 'particular experience in the fields of information and communication technologies.' }],
      education:
        [{ text: 'B.S., Waseda University, Electronics, Information and Telecommunications' }],
      career:
        [{ text: 'Qualified as a Japanese Patent Attorney in 1990.' },
        { text: 'Worked for the Japan Patent Office as:' },
        { text: 'a) Patent Examiner in the fields of Electronic Circuits and Digital Communications,' },
        { text: 'b) Appeal Examiner (Digital communications),' },
        { text: 'c) Director of Examinations in the divisions of Digital communications, Electronic Image Devices and Electronic Commerce, and' },
        { text: 'd) Director of the Board of Appeals (Interface and Transmission Systems).' }],
      memberships:
        [{ text: 'Japan Patent Attorneys Association (JPAA)' },
        { text: 'Executive Director at Japan Intellectual Property Association (JPAA)' }],
      publications: null,
  
      titleJP: '弁理士（プリンシパル）',
      nameJP: '江嶋　清仁',
      bioJP: '平成2年弁理士資格取得',
      specialtiesJP:
        [{ text: '移動体通信、デジタル回路分野の特許出願、審判、訴訟、特許侵害訴訟、鑑定、' },
        { text: 'クロスボーダー事件の支援、コンサルティング' }],
      educationJP:
        [{ text: '早稲田大学理工学部　電子通信学科卒業' }],
      careerJP:
        [{ text: '特許庁' },
        { text: '審査官（電子回路、デジタル通信）' },
        { text: '審判官（通信）' },
        { text: '審査第4部審査長（デジタル通信）' },
        { text: '審査第4部上席審査長（映像機器）' },
        { text: '審査第4部首席審査長（電子商取引）' },
        { text: '審判第27部門長（通信、インターフェース・伝送システム）' }],
      membershipsJP: null,
      publicationsJP: null,
  
      groups:
        ['pro-infoproc', 'pro-comm', 'pro-lit', 'pro-patattorneys'] 
    },
    /**yashiro to bottom */
    {
      id: 10,
      title: 'Patent Attorney',
      qualifications: "",
      name: 'Yasuhiro Sakata',
      img: 'yasuhirosakata.jpg', // update
      imglarge: 'yasuhirosakata_large.jpg', // update
      avatar: 'yasuhirosakata_avatar.jpg', // update
      bio: 'Add bio.', // update
      specialties:
        [{ text: 'Patent practice before the Japan Patent Office and Intellectual Property High Court;' },
        { text: 'litigation and preliminary injunction proceedings before courts;' },
        { text: 'legal opinions on infringement and validity;' },
        { text: 'Particular experience in the areas of Internet technology, telecomunications and mobile communications.' }],
      education:
        [{ text: 'B.S., The University of Tokyo, Electronic and Information Engineering' },
        { text: 'M.S., The University of Tokyo, Electronic Engineering' }],
      career:
        [{ text: 'Japanese Patent Attorney since 2004.' },
        { text: 'Conducted study on information technology with an emphasis on the fields of Internet search engines, web applications and artificial intelligence.' }],
      memberships:
        [{ text: 'Japan Patent Attorneys Association (JPAA)' }],
      publications: null,
  
      titleJP: '弁理士',
      nameJP: '坂田　恭弘',
      bioJP: '平成16年弁理士登録',
      specialtiesJP:
        [{ text: 'インターネット、移動体通信分野の特許出願、審判、審決取消訴訟、特許侵害訴訟、鑑定、' },
        { text: 'クロスボーダー事件の支援、コンサルティング' }],
      educationJP:
        [{ text: '東京大学工学部　電子情報工学科卒業' },
        { text: '東京大学大学院　工学系研究科　電子工学専攻　修士課程修了　WWW空間におけるWebページの構造化及び視覚化に関する研究、遺伝的' },
        { text: 'プログラミングを用いたエージェントの共進化に関する研究、その他、Webアプリケーションに関する研究・開発に従事' }],
      careerJP: null,
      membershipsJP: null,
      publicationsJP:
        [{ text: '特許がわかるQ&A（オーム社）' }],
  
      groups:
        ['pro-infoproc', 'pro-comm', 'pro-lit', 'pro-patattorneys']
    },
    {
      id: 11,
      title: 'Patent Attorney',
      qualifications: "",
      name: 'Takashi Sakamoto',
      img: 'takashisakamoto.jpg', // update
      imglarge: 'takashisakamoto_large.jpg',
      avatar: 'takashisakamoto_avatar.jpg', // update
      bio: 'Add bio.', // update
      specialties:
        [{ text: 'Patent practice before the Japan Patent Office and Intellectual Property High Court;' },
        { text: 'litigation and preliminary injunction proceedings before courts;' },
        { text: 'legal opinions on infringement and validity;' },
        { text: 'particular experience in the fields of telecommunications, image processing and optical recording technologies.' }],
      education:
        [{ text: 'B.S., Electronics, Kobe University' }],
      career:
        [{ text: 'Japanese Patent Attorney since 2004.' },
        { text: 'Worked for International Digital Communications Inc. as a transmission engineer in the field of core network design.' }],
      memberships:
        [{ text: 'Japan Patent Attorneys Association (JPAA)' }],
      publications: null,
  
      titleJP: '弁理士',
      nameJP: '坂本　隆志',
      bioJP: '平成16年弁理士登録',
      specialtiesJP:
        [{ text: '通信（無線及び有線）、画像処理、光記録装置の分野の特許出願、審判、訴訟、' },
        { text: '特許侵害訴訟、特許調査、鑑定、コンサルティング' }],
      educationJP:
        [{ text: '神戸大学工学部　電子工学科卒業' }],
      careerJP:
        [{ text: '国際デジタル通信株式会社' },
        { text: '通信ネットワ－クの設計及び独シーメンス他国内外の通信システム、半導体チップセット技術評価などに従事' }],
      membershipsJP: null,
      publicationsJP: null,
  
      groups:
        ['pro-infoproc', 'pro-comm', 'pro-mech', 'pro-lit', 'pro-patattorneys']
    },
    {
      id: 12,
      title: 'Patent Attorney',
      qualifications: "",
      name: 'Takahiro Ohto',
      img: 'takahiroohto.jpg',
      imglarge: 'takahiroohto_large.jpg',
      avatar: 'takahiroohto_avatar.jpg',
      bio: 'Add bio.', // update
      specialties:
        [{ text: 'Patent, design and trademark practice before the Japan Patent Office and Intellectual Property High Court;' },
        { text: 'litigation and preliminary injunction proceedings before courts;' },
        { text: 'legal opinions on infringement and validity;' },
        { text: 'Particular experience in the fields of image processing, computing and telecommunications.' }],
      education:
        [{ text: 'B.S., University of Tokyo, Mathematical Informatics' },
        { text: 'M.S., University of Tokyo, Mathematical Informatics' }],
      career:
        [{ text: 'Active in the patent field since 2007.' },
        { text: 'Japanese Patent Attorney since 2009.' },
        { text: 'Worked for IBM Japan Ltd. as Technical Sales Support Engineer for Storage Products.' }],
      memberships:
        [{ text: 'Japan Patent Attorneys Association (JPAA)' }],
      publications: null,
  
      titleJP: '弁理士',
      nameJP: '大戸　隆広',
      bioJP: '平成21年弁理士登録',
      specialtiesJP:
        [{ text: '画像処理、ソフトウエア、通信分野の特許出願、審判、訴訟、特許侵害訴訟、' },
        { text: '鑑定、クロスボーダー事件の支援、意匠・商標実務、コンサルティング' }],
      educationJP:
        [{ text: '東京大学工学部　計数工学科卒業' },
        { text: '東京大学大学院　情報理工学系研究科　数理情報学専攻　修士課程修了' }],
      careerJP:
        [{ text: '日本アイ・ビー・エム株式会社' },
        { text: 'システムエンジニアとしてストレージ製品セールスの技術支援に従事' }],
      membershipsJP: null,
      publicationsJP: null,
  
      groups:
        ['pro-infoproc', 'pro-comm', 'pro-elec', 'pro-lit', 'pro-patattorneys'] 
    },
    {
      id: 13,
      title: 'Patent Attorney',
      qualifications: "",
      name: 'Nobuyoshi Yarita',
      img: 'nobuyoshiyarita.jpg',
      imglarge: 'nobuyoshiyarita_large.jpg',
      avatar: 'nobuyoshiyarita_avatar.jpg',
      bio: 'Add bio.', // update
      specialties:
        [{ text: 'Patent and design practice before the Japan Patent Office and Intellectual Property High Court;' },
        { text: 'litigation and preliminary injunction proceedings before courts;' },
        { text: 'legal opinions on infringement and validity;' },
        { text: 'particular experience in the fields of image processing, and input and output devices for computers.' }],
      education:
        [{ text: 'B.S., Sophia University, Mechanics' },
        { text: 'M.S., Sophia University, Mechanics' }],
      career:
        [{ text: 'Active in the patent field since 1997.' },
        { text: 'Japanese Patent Attorney since 2010.' },
        { text: 'Worked for Toshiba Corporation as a computer engineer for Space Robotics Systems.' }],
      memberships:
        [{ text: 'Japan Patent Attorneys Association (JPAA)' },
        { text: 'The Institute of Electronics, Information and Communication Engineers' }],
      publications: null,
  
      titleJP: '弁理士',
      nameJP: '鎗田　伸宜',
      bioJP: '平成22年弁理士登録',
      specialtiesJP:
        [{ text: '画像処理技術、ロボット、メカトロニクス特許出願、審判、訴訟、特許侵害訴訟、' },
        { text: '意匠実務、コンサルティング' }],
      educationJP:
        [{ text: '上智大学理工学部　機械工学科卒業' },
        { text: '上智大学大学院　理工学研究科　博士前期課程修了' }],
      careerJP:
        [{ text: '株式会社東芝　生産技術研究所' },
        { text: '宇宙ロボット等、メカトロニクス機器の研究開発に従事' }],
      membershipsJP: null,
      publicationsJP:
        [{ text: '特許がわかるQ&A（オーム社）' }],
  
      groups:
        ['pro-elec', 'pro-mech', 'pro-meddevices', 'pro-patattorneys'] 
    },
    {
      id: 14,
      title: 'Patent Attorney',
      qualifications: "",
      name: 'Koji Maeda',
      img: 'kojimaeda.jpg',
      imglarge: 'kojimaeda_large.jpg',
      avatar: 'kojimaeda_avatar.jpg',
      bio: 'Add bio.', // update
      specialties:
        [{ text: 'Patent practice before Japan Patent Office and Intellectual Property High Court;' },
        { text: 'litigation and preliminary injunction proceedings before courts;' },
        { text: 'legal opinions on infringement and validity;' },
        { text: 'Particular experience in the areas of wireless communication, signal processing and information theory.' }],
      education:
        [{ text: 'B.Eng., Tokyo Institute of technology, Electrical and Electronic Engineering' },
        { text: 'M.Eng., Tokyo Institute of technology, Electrical and Electronic Engineering' }],
      career:
        [{ text: 'JJapanese Patent Attorney since 2010.' },
        { text: 'Worked for NTT DOCOMO as researcher at R&D.' },
        { text: 'Developed interference canceller for mobile and fixed wireless communication systems, and cognitive radio techniques.' }],
      memberships:
        [{ text: 'Japan Patent Attorneys Association (JPAA)' },
        { text: 'IEEE (Communication Society)' }],
      publications: null,
  
      titleJP: '弁理士',
      nameJP: '前田　浩次',
      bioJP: '平成22年弁理士登録',
      specialtiesJP:
        [{ text: '無線通信技術、信号処理技術、及び情報源符号化技術の特許出願、審判、訴訟、' },
        { text: '特許侵害訴訟、特許調査、鑑定、クロスボーダー事件の支援、コンサルティング' }],
      educationJP:
        [{ text: '東京工業大学工学部　電気電子工学科卒業' },
        { text: '東京工業大学大学院　理工学研究科　電気電子工学専攻　修士課程修了' }],
      careerJP:
        [{ text: '株式会社NTTドコモ' },
        { text: '無線信号処理、特に干渉キャンセラ及び環境認知型無線（コグニティブ無線）における信号識別技術の研究に従事' }],
      membershipsJP: null,
      publicationsJP: null,
  
      groups:
        ['pro-infoproc', 'pro-comm', 'pro-toysgames', 'pro-lit', 'pro-patattorneys'] 
    },
    {
      id: 15,
      title: 'Patent Attorney',
      qualifications: "Ph.D.",
      name: 'Haruhito Yoshida',
      img: 'haruhitoyoshida.jpg',
      imglarge: 'haruhitoyoshida_large.jpg',
      avatar: 'haruhitoyoshida_avatar.jpg',
      bio: 'Add bio.', // update
      specialties:
        [{ text: 'Patent practice before the Japan Patent Office and Intellectual Property High Court;' },
        { text: 'litigation and preliminary injunction proceedings before courts;' },
        { text: 'legal opinions on infringement and validity;' },
        { text: 'particular experience in digital mobile communication systems and related technologies.' }],
      education:
        [{ text: 'M.S., Waseda University, Electronics, Information and Telecommunication Engineering' },
        { text: 'Ph.D., Waseda University, Electronics, Information and Telecommunication Engineering' }],
      career:
        [{ text: 'Japanese Patent Attorney since 2010.' },
        { text: 'Research Associate, Waseda University.' },
        { text: 'Visiting Research Associate, Waseda University.' },
        { text: 'Worked for the Japan Patent Office as a researcher.' }],
      memberships:
        [{ text: 'Japan Patent Attorneys Association (JPAA)' }],
      publications: null,
  
      titleJP: '弁理士',
      nameJP: '吉田　晴人',
      bioJP: '平成22年弁理士登録',
      specialtiesJP:
        [{ text: '通信技術（無線及び有線）、信号処理技術、符号化技術、画像処理技術分野の特許出願、' },
        { text: '審判、訴訟、特許侵害訴訟、特許調査、鑑定、コンサルティング' }],
      educationJP:
        [{ text: '早稲田大学大学院　理工学研究科　電子･情報通信学専攻　修士課程修了' },
        { text: '早稲田大学大学院　理工学研究科　電子･情報通信学専攻　博士課程博士（工学）' },
        { text: 'OFDM方式等のディジタル無線通信技術に関する研究に従事' }],
      careerJP:
        [{ text: '早稲田大学理工学部助手（博士課程在学中）' },
        { text: '早稲田大学理工学術院客員研究助手' },
        { text: '特許庁特許審査調査員（国際･新技術担当）' }],
      membershipsJP: null,
      publicationsJP: null,
  
      groups:
        ['pro-infoproc', 'pro-comm', 'pro-lit', 'pro-patattorneys']
    },
    {
      id: 16,
      title: 'Patent Attorney',
      qualifications: "",
      name: 'Hideo Sugawara',
      img: 'hideosugawara.jpg',
      imglarge: 'hideosugawara_large.jpg',
      avatar: 'hideosugawara_avatar.jpg',
      bio: 'Add bio.', // update
      specialties:
        [{ text: 'Patent, design and trademark practice before the Japan Patent Office and Intellectual Property High Court;' },
        { text: 'litigation and preliminary injunction proceedings before courts;' },
        { text: 'legal opinions on infringement and validity;' },
        { text: 'Particular experience in the areas of control engineering, fluid mechanics, material engineering and related technologies.' }],
      education:
        [{ text: 'B.S., Keio University, Mechanical Engineering' },
        { text: 'M.S., Keio University, School of Integrated Design Engineering' }],
      career:
        [{ text: 'Japanese Patent Attorney since 2010.' }],
      memberships:
        [{ text: 'Japan Patent Attorneys Association (JPAA)' }],
      publications: null,
  
      titleJP: '弁理士',
      nameJP: '菅原　英夫',
      bioJP: '平成22年弁理士登録',
      specialtiesJP:
        [{ text: '制御技術、医療分野、画像処理分野の特許出願、審判、訴訟、意匠並びに商標の実務、' },
        { text: 'コンサルティング' }],
      educationJP:
        [{ text: '慶應義塾大学理工学部　機械工学科卒業' },
        { text: '慶應義塾大学大学院　理工学研究科　総合デザイン工学専攻　前期博士課程修了' },
        { text: '自己組織化現象のモデリングに関する研究に従事' }],
      careerJP: null,
      membershipsJP: null,
      publicationsJP: null,
  
      groups:
        ['pro-mech', 'pro-designs', 'pro-meddevices', 'pro-patattorneys'] 
    },
    {
      id: 17,
      title: 'Patent Attorney',
      qualifications: "",
      name: 'Hajime Tatsukawa',
      img: 'hajimetatsukawa.jpg',
      imglarge: 'hajimetatsukawa_large.jpg',
      avatar: 'hajimetatsukawa_avatar.jpg',
      bio: 'Add bio.', // update
      specialties:
        [{ text: 'Patent practice before the Japan Patent Office;' },
        { text: 'standard essentiality evaluation; start-up supports and consulting;' },
        { text: 'Particular experience in the fields of telecommunications, image processing, security and computing.' }],
      education:
        [{ text: 'B.S., University of Tokyo, Mechano-informatics' },
        { text: 'M.S., University of Tokyo, Mechano-informatics' }],
      career:
        [{ text: 'Active in the patent field since 2007.' },
        { text: 'Japanese patent attorney since 2010.' },
        { text: 'Worked for NTT Communications as system engineer for development of government systems.' },
        { text: 'Worked for Accenture Japan Ltd. as analyst and consultant for mission-critical system integration.' }],
      memberships:
        [{ text: 'Japan Patent Attorneys Association (JPAA)' }],
      publications: null,
  
      titleJP: '弁理士',
      nameJP: '辰川　肇',
      bioJP: '平成22年弁理士登録',
      specialtiesJP:
        [{ text: '移動体通信、画像処理、セキュリティ、ソフトウエア分野の特許出願、審判、' },
        { text: '標準必須判定、ベンチャー支援、コンサルティング' }],
      educationJP:
        [{ text: '東京大学工学部　機械情報工学科卒業' },
        { text: '東京大学大学院　工学系研究科　機械情報工学専攻　修士課程修了' }],
      careerJP:
        [{ text: 'ＮＴＴコミュニケーションズ株式会社　システムエンジニアとして自治体向けの電子申請サイトの開発・導入に従事' },
        { text: 'アクセンチュア株式会社　アナリスト・コンサルタントとして国内企業の基幹システムのシステムインテグレーションに従事' }],
      membershipsJP: null,
      publicationsJP: null,
  
      groups:
        ['pro-infoproc', 'pro-comm', 'pro-patattorneys']
    },
    {
      id: 18,
      title: 'Patent Attorney',
      qualifications: "",
      name: 'Junya Ohde',
      img: 'junyaohde.jpg',
      imglarge: 'junyaohde_large.jpg',
      avatar: 'junyaohde_avatar.jpg',
      bio: 'Add bio.', // update
      specialties:
        [{ text: 'Patent practice before the Japan Patent Office and Intellectual Property High Court;' },
        { text: 'litigation and preliminary injunction proceedings before courts;' },
        { text: 'legal opinions on infringement and validity;' },
        { text: 'Particular experience in the fields of telecommunications and signal processing including Artificial Intelligence (AI).' }],
      education:
        [{ text: 'B.S., University of Tsukuba, System Engineering' },
        { text: 'M.S., University of Tsukuba, System Engineering' }],
      career:
        [{ text: 'Japanese Patent Attorney since 2011.' },
        { text: 'Worked for Ericsson Japan as a software engineer in design and development of a base station for a W-CDMA system.' },
        { text: 'Worked for Sony Corp. as a software engineer in design and development of TV/DVD, later moving to Sony IP center as an in-house patent attorney and engaging in patent licensing and negotiations.' }],
      memberships:
        [{ text: 'Japan Patent Attorneys Association (JPAA)' }],
      publications: null,
  
      titleJP: '弁理士',
      nameJP: '大出　純哉',
      bioJP: '平成23年弁理士登録',
      specialtiesJP:
        [{ text: 'AIを含む信号処理、通信分野の特許出願、審判、訴訟、' },
        { text: '特許侵害訴訟、クロスボーダー事件の支援、ベンチャー支援、コンサルティング' }],
      educationJP:
        [{ text: '筑波大学第３学群　工学システム学類卒業' },
        { text: '筑波大学大学院　修士課程修了（知能機能工学専攻）' }],
      careerJP:
        [{ text: '日本エリクソン株式会社　ソフトウェア技術者として基地局の開発に従事' },
        { text: 'ソニー株式会社　ソフトウェア技術者としてテレビなどの開発、及び、社内弁理士として知的財産センターにおける権利活用業務に従事' }],
      membershipsJP: null,
      publicationsJP: null,
  
      groups:
        ['pro-infoproc', 'pro-comm', 'pro-toysgames', 'pro-lit', 'pro-patattorneys'] 
    },
    {
      id: 19,
      title: 'Patent Attorney (Partner)',
      qualifications: "",
      name: 'Tomofumi Kinoshita',
      img: 'tomofumikinoshita.jpg',
      imglarge: 'tomofumikinoshita_large.jpg',
      avatar: 'tomofumikinoshita_avatar.jpg',
      bio: 'Our go-to guy in pharmaceuticals and chemistry.',
      specialties:
        [{ text: 'Patent practice in chemical enginnering and pharmaceutical fields, particular expertise in organic chemistry, especially in development of the new catalytic asymmetric reactions applicable to the efficient production of anticancer drugs and anti-Influenza drugs;' },
        { text: 'and especially computer-related technology expertise.' }],
      education:
        [{ text: 'B.S., University of Tokyo, Pharmaceutical Sciences' },
        { text: 'M.S., University of Tokyo, Pharmaceutical Sciences' }],
      career:
        [{ text: 'Japanese Patent Attorney since 2013.' }],
      memberships:
        [{ text: 'Japan Patent Attorneys Association (JPAA)' }],
      publications: null,
  
      titleJP: '弁理士',
      nameJP: '木下　智文',
      bioJP: '平成25年弁理士登録',
      specialtiesJP:
        [{ text: '医薬、化学、画像処理系の分野の特許出願、審判、訴訟、コンサルティング' }],
      educationJP:
        [{ text: '東京大学薬学部　薬学科卒業' },
        { text: '東京大学大学院　薬学系研究科　分子薬学専攻　修士課程修了' },
        { text: '抗がん剤、抗インフルエンザ薬等の生産に応用可能な新規触媒的不斉反応の研究、開発に従事' },
        { text: 'また、プログラミング、コンピュータハードウエア技術の研鑚し、応用情報処理技術者の資格を取得' }],
      careerJP: null,
      membershipsJP: null,
      publicationsJP: null,
  
      groups:
        ['pro-infoproc', 'pro-meddevices', 'pro-chempharmabio', 'pro-lit', 'pro-patattorneys'] 
    },
    {
      id: 20,
      title: 'Patent Attorney',
      qualifications: "",
      name: 'Tomotake Ogawa',
      img: 'tomotakeogawa.jpg',
      imglarge: 'tomotakeogawa_large.jpg',
      avatar: 'tomotakeogawa_avatar.jpg',
      bio: 'Add bio.', // update
      specialties:
        [{ text: 'Patent and design practice before the Japan Patent Office and Intellectual Property High Court;' },
        { text: 'litigation and preliminary injunction proceedings before courts;' },
        { text: 'legal opinions on infringement and validity;' },
        { text: 'particular experience in the fields of semiconductors and electronic circuits.' }],
      education:
        [{ text: 'B.S., University of Tohoku, Electronic Engineering' },
        { text: 'M.S., University of Tohoku, Electronic Engineering' }],
      career:
        [{ text: 'Japanese Patent Attorney since 2013.' },
        { text: 'Worked for Renesas Electronics Corporation as a semiconductor engineer, for design and development of semiconductor production platforms.' }],
      memberships:
        [{ text: 'Japan Patent Attorneys Association (JPAA)' }],
      publications: null,
  
      titleJP: '弁理士',
      nameJP: '小川　智丈',
      bioJP: '平成25年弁理士登録',
      specialtiesJP:
        [{ text: 'デジタル・アナログ回路、ＣＭＯＳ関連技術分野の特許出願、審判、訴訟、意匠実務、' },
        { text: 'コンサルティング' }],
      educationJP:
        [{ text: '東北大学工学部　電子工学科卒' },
        { text: '東北大学大学院　工学研究科　電子工学専攻　修士課程修了' }],
      careerJP:
        [{ text: '株式会社ルネサステクノロジ（現ルネサスエレクトロニクス株式会社）' },
        { text: '半導体製品のI/Oインタフェース部の回路設計やレイアウト設計、各種半' },
        { text: '導体製造プロセスの基盤技術開発に従事' }],
      membershipsJP: null,
      publicationsJP: null,
  
      groups:
        ['pro-elec', 'pro-patattorneys'] 
    },
    /*{
      id: 21,
      title: 'Patent Attorney',
      qualifications: "",
      name: 'Mioko Watanabe',
      img: 'miokowatanabe.jpg',
      imglarge: 'miokowatanabe_large.jpg',
      avatar: 'miokowatanabe_avatar.jpg',
      bio: 'Add bio.', // update
      specialties:
        [{ text: 'Patent practice before the Japan Patent Office and Intellectual Property High Court;' },
        { text: 'litigation and preliminary injunction proceedings before courts;' },
        { text: 'legal opinions on infringement and validity;' },
        { text: 'particular experience in digital mobile communication systems and related technologies.' }],
      education:
        [{ text: 'B.S., Keio University, Electrical Engineering' },
        { text: 'M.S., Keio University, Electrical Engineering' }],
      career:
        [{ text: 'Japanese Patent Attorney since 2013.' },
        { text: 'Worked for Ericsson Japan as a researcher and a developer for the 3rd generation mobile communication systems.' },
        { text: 'Worked for the Japan Patent Office as Patent Examiner in the field of Digital Mobile Communication Systems.' }],
      memberships:
        [{ text: 'Japan Patent Attorneys Association (JPAA)' }],
      publications: null,
  
      titleJP: '弁理士',
      nameJP: '渡邉　未央子',
      bioJP: '平成25年弁理士登録',
      specialtiesJP:
        [{ text: '通信（無線及び有線）通信技術、符号化技術、デジタル回路の分野の特許出願、' },
        { text: '審判、訴訟、特許調査、コンサルティング' }],
      educationJP:
        [{ text: '慶應義塾大学理工学部　電気工学科卒業' },
        { text: '慶應義塾大学大学院　理工学研究科　電気工学専攻　修士課程修了' }],
      careerJP:
        [{ text: '日本エリクソン株式会社　W-CDMA通信システムや携帯端末アプリケーションの研究、ASICの開発などに従事' },
        { text: '特許庁　審査4部、審査官（デジタル通信部門）' },
        { text: '無線アクセス（CDMA，OFDM等）方式、並びに符号化（情報源や誤り訂正の符号化）の審査に従事' }],
      membershipsJP: null,
      publicationsJP: null,
  
      groups:
        ['pro-infoproc', 'pro-comm', 'pro-lit', 'pro-patattorneys'] 
    },*/
    {
      id: 22,
      title: 'Patent Attorney (Partner)',
      qualifications: "",
      name: 'Terukazu Ayuzawa',
      img: 'terukazuayuzawa.jpg',
      imglarge: 'terukazuayuzawa_large.jpg',
      avatar: 'terukazuayuzawa_avatar.jpg',
      bio: 'Add bio.', // update
      specialties:
        [{ text: 'Patent practice before the Japan Patent Office and Intellectual Property High Court;' },
        { text: 'litigation and preliminary injunction proceedings before courts;' },
        { text: 'legal opinions on infringement and validity;' },
        { text: 'Particular experience in the fields of inorganic chemistry, organic chemistry, pharmaceuticals and metal material.' }],
      education:
        [{ text: 'B.S., Osaka Prefecture University, Applied Chemistry' },
        { text: 'M.S., Osaka Prefecture University, Applied Chemistry' }],
      career:
        [{ text: 'Japanese Patent Attorney since 2014.' },
        { text: 'Worked for Furukawa as a researcher in the field of inorganic materials.' },
        { text: 'Worked for the Japan Patent Office as Patent Examiner in the field of Chemistry division for 9 years.' }],
      memberships:
        [{ text: 'Japan Patent Attorneys Association (JPAA)' }],
      publications: null,
  
      titleJP: '弁理士',
      nameJP: '鮎沢　輝万',
      bioJP: '平成26年弁理士登録',
      specialtiesJP:
        [{ text: '無機化学、有機化学、医薬、金属材料分野の特許出願、審判、訴訟、特許侵害裁判、' },
        { text: 'コンサルティング' }],
      educationJP:
        [{ text: '大阪府立大学工学部　応用化学科卒業' },
        { text: '大阪府立大学大学院　工学研究科　物質系専攻　修士課程修了' }],
      careerJP:
        [{ text: '古河機械金属株式会社　光触媒、各種半導体材料、シリコン系単結晶の研究、開発に従事' },
        { text: '特許庁　審査第３部、審査官（無機化学）' },
        { text: '無機化合物、無機及び有機物質の単結晶、' },
        { text: 'ＣＶＤ、ＰＶＤ等の審査に従事' }],
      membershipsJP: null,
      publicationsJP: null,
  
      groups:
        ['pro-chempharmabio', 'pro-patattorneys'] 
    },
    {
      id: 23,
      title: 'Patent Attorney',
      qualifications: "",
      name: 'Yasumasa Kusunoki',
      img: 'yasumasakusunoki.jpg',
      imglarge: 'yasumasakusunoki_large.jpg',
      avatar: 'yasumasakusunoki_avatar.jpg',
      bio: 'Add bio.', // update
      specialties:
        [{ text: 'Patent, design and trademark practice before the Japan Patent Office and Intellectual Property High Court;' },
        { text: 'particular experice in the fields of communications, networks, computer hardware and software' }],
      education:
        [{ text: 'B.S., Yamaguchi University, Intelligence Information System Engineering' },
        { text: 'M.S., Yamaguchi University, Intelligence Information System Engineering' }],
      career:
        [{ text: 'Japanese Patent Attorney since 2016.' },
        { text: 'Worked for Panasonic MSE Corporation, engaged in the Linux platform, software development for mobile terminals.' }],
      memberships:
        [{ text: 'Japan Patent Attorneys Association (JPAA)' },
        { text: 'The Institute of Electronics, Information and Communication Engineers' }],
      publications:
        [{ text: 'Digital Watermarking based on Spread Spectrum (IEICE, October 2000)' }],
  
        titleJP: '弁理士',
        nameJP: '楠　康正',
        bioJP: '平成28年弁理士登録',
        specialtiesJP:
          [{ text: 'ソフトウエア、移動体通信、画像処理技術分野の特許出願、審判、訴訟、特許侵害裁判、' },
          { text: '意匠・商標実務、コンサルティング' }],
        educationJP:
          [{ text: '山口大学　知能情報システム工学科卒業' },
          { text: '山口大学大学院　知能情報システム工学　修士課程修了' },
          { text: 'デジタル電子透かしに関する研究' }],
        careerJP:
          [{ text: 'パナソニックMSE株式会社　ソフトウェア開発技術者として、携帯電話におけるLinuxPF、ポインティ' },
          { text: 'ングデバイス、タッチパネルの開発に従事' },
          { text: 'ソフトウエア、移動体通信、画像処理技術分野を得意とする' }],
        membershipsJP: null,
        publicationsJP: null,
  
      groups:
        ['pro-infoproc', 'pro-patattorneys']
    },
    {
      id: 24,
      title: 'Patent Attorney',
      qualifications: "",
      name: 'Wakako Ohtsuka',
      img: 'logo.jpg',
      imglarge: 'logo_large.jpg',
      avatar: 'wakakoohtsuka_avatar.jpg',
      bio: 'Add bio.', // update
      specialties:
        [{ text: 'Patent, design and trademark practice before the Japan Patent Office and Intellectual Property High Court;' },
        { text: 'Biochemistry and biotechnology, consumer products.' }],
      education:
        [{ text: 'B.S., Meiji University, Department of Agriculture' },
        { text: 'M.S., Chiba University, Bioresources Science (Study about apoptosis of plant cell protoplast in culture)' }],
      career:
        [{ text: 'Worked for Cocoroca Corp. in the Medical Device Division, on medical device development' }],
      memberships:
        [{ text: 'Japan Patent Attorneys Association (JPAA)' }],
      publications: null,
  
      titleJP: '弁理士',
      nameJP: '大塚　和佳子',
      bioJP: '平成29年弁理士登録',
      specialtiesJP:
        [{ text: '生物化学、ライフサイエンス分野の特許出願、審判、訴訟、意匠・商標実務、' },
        { text: 'コンサルティング' }],
      educationJP:
        [{ text: '明治大学　農学部農学科卒業' },
        { text: '千葉大学　大学院自然科学研究科生物資源科学専攻修士課程修了' },
        { text: '植物細胞プロトプラストの培養過程におけるアポトーシスに関する研究' }],
      careerJP:
        [{ text: 'ココロカ株式会社　消毒用電解水生成装置、電位治療装置の開発、これらに関連する動物研究および臨床研究に従事' },
        { text: '生物化学、ライフサイエンス分野の技術を得意とする' }],
      membershipsJP: null,
      publicationsJP: null,
  
      groups:
        ['pro-meddevices', 'pro-chempharmabio', 'pro-patattorneys'] 
    },
    {
      id: 25,
      title: 'Patent Attorney',
      qualifications: "",
      name: 'Ryo Okawa',
      img: 'ryookawa.jpg',
      imglarge: 'ryookawa_large.jpg',
      avatar: 'ryookawa_avatar.jpg',
      bio: 'Add bio.', // update
      specialties:
        [{ text: 'Patent and design practice before the Japan Patent Office and Intellectual Property High Court;' },
        { text: 'litigation and preliminary injunction proceedings before courts;' },
        { text: 'legal opinions on infringement and validity;' },
        { text: 'particular experience in the fields of machinery, mechanisms, and control systems.' }],
      education:
        [{ text: 'B.S., Kyoto University, Engineering Science' }],
      career:
        [{ text: 'Japanese Patent Attorney since 2020.' },
        { text: 'Worked for Hitachi Construction Machinery Co., Ltd. as an engineer for developing hydraulic systems of excavators.' }],
      memberships:
        [{ text: 'Japan Patent Attorneys Association (JPAA)' }],
      publications: null,
  
      titleJP: '弁理士',
      nameJP: '大川　亮',
      bioJP: '令和2年弁理士登録',
      specialtiesJP:
        [{ text: '機械・機構・制御技術分野の特許出願、審判、訴訟、特許侵害訴訟、意匠実務、' },
        { text: 'コンサルティング' }],
      educationJP:
        [{ text: '京都大学工学部　物理工学科卒業' }],
      careerJP:
        [{ text: '日立建機株式会社　油圧ショベルの油圧制御システムの開発設計に従事' }],
      membershipsJP: null,
      publicationsJP: null,
  
      groups:
        ['pro-mech', 'pro-patattorneys'] 
    },
    {
      id: 9,
      title: 'Patent Attorney',
      qualifications: "",
      name: 'Junjiro Yashiro',
      img: 'junjiroyashiro.jpg',
      imglarge: 'junjiroyashiro_large.jpg',
      avatar: 'junjiroyashiro_avatar.jpg',
      bio: 'Add bio.', // update
      specialties:
        [{ text: 'Patent practice before the Japan Patent Office and Intellectual Property High Court;' },
        { text: 'litigation and preliminary injunction proceedings before courts;' },
        { text: 'legal opinions on infringement and validity;' },
        { text: 'particular experience in opinion works and patent licensing in the Pharmaceutical and Biotechnology fields.' }],
      education:
        [{ text: 'B.S., Tohoku Pharmaceutical University' }],
      career:
        [{ text: 'Japanese Patent Attorney since 1970.' },
        { text: 'Worked for Eisai Pharmaceutical Company as Patent Attorney and Director of the Intellectual Property Division.' }],
      memberships:
        [{ text: 'Vice-chairman of the Health Care Products Committee of LES International,' },
        { text: 'Vice-President of LES Japan,' },
        { text: 'Member of the Board of Directors (Pharmaceutical and Chemical Industry section) of JIPA' }],
      publications: null,
  
      titleJP: '弁理士',
      nameJP: '屋代　順治郎',
      bioJP: '昭和45年弁理士登録',
      specialtiesJP:
        [{ text: '医薬分野のコンサルティング・ライセンシング、鑑定、審判・審決取消訴訟、' },
        { text: '特許侵害訴訟、クロスボーダー事件の支援、コンサルティング' }],
      educationJP:
        [{ text: '東北薬科大学卒業' }],
      careerJP:
        [{ text: 'エーザイ株式会社　知的財産部長　医薬・バイオ分野の戦略の立案・執行' }],
      membershipsJP:
        [{ text: '日本製薬工業協会　知的財産委員会委員長' },
        { text: '日本ライセンス協会（LES Japan）副会長' },
        { text: 'Licensing Executive Society International' },
        { text: 'Health Care Products Committee: Vice-chairman' },
        { text: '日本知的財産協会　医薬・化学業種担当理事' }],
      publicationsJP: null,
  
      groups:
        ['pro-lit', 'pro-patattorneys'] // update
    },
    {
      id: 52,
      title: 'Patent Attorney',
      qualifications: "",
      name: 'Takashi Koyama',
      img: 'takashikoyama.jpg',
      imglarge: 'takashikoyama_large.jpg',
      avatar: 'takashikoyama_avatar.jpg',
      bio: 'Add bio.', // update
      specialties: [
        { text: 'Tokyo Bar Association'},
        { text: 'New York State Bar Association'},
        { text: 'Intellectual Property transaction, Intellectual Property Dispute Resolution'},
        { text: 'Unfair Competition, License and Franchise'}
      ],
      education:
        [{ text: 'MA in Law Kobe University' },
         { text: 'LL.M., Franklin Pierce Law Center, Intellectual Property' },
         { text: 'M.A., Royal Holloway, University of London' } ],
      career:
        [{ text: 'OH-EBASHI LPC & Partners' },
        { text: 'Ministry of Foreign Affairs' },
        { text: 'Director of the Intellectual Property Affairs Division, Economic Affairs Bureau, Ministry of Foreign Affairs' },
        { text: 'Lead negotiator in the field of Intellectual Property for TPP/TPP11, Japan-EU・EPA, and RCEP negotiations' }],
      memberships: null,
      publications: null,
  
      titleJP: '弁護士・ニューヨーク州弁護士',
      nameJP: '小山　隆史',
      bioJP: '',
      specialtiesJP: 
        [{ text: '知的財産、知財訴訟、不正競争、ライセンス・フランチャイズ'}],
      educationJP:
        [{ text: '神戸大学大学院法学研究科' },
        { text: 'Franklin Pierce Law Center, Intellectual Property' },
        { text: 'Royal Holloway, University of London'}],
      careerJP:
        [{ text: '大江橋法律事務所' },
        { text: '外務省経済局知的財産室，室長' },
        { text: '内閣官房TPP等政府対策本部，交渉官（知的財産分野）' }],
      membershipsJP: null,
      publicationsJP: null,  
      groups:
        ['pro-advisors'] 
    },
    {
      id: 26,
      title: 'Attorney at Law',
      qualifications: "",
      name: 'Yoshiki Abe',
      img: 'logo.jpg',
      imglarge: 'logo_large.jpg',
      avatar: 'yoshikiabe_avatar.jpg',
      bio: 'Add bio.', // update
      specialties: null,
      education:
        [{ text: 'LL.B., Tohoku University' },
        { text: 'LL.M.,The University of Tokyo' },
        { text: 'LL.M., University of Washington School of Law' }],
      career:
        [{ text: 'Worked for Toyota Motor\'s IP Department.' }],
      memberships: null,
      publications: null,
  
      titleJP: '(顧問)弁護士',
      nameJP: '阿部　佳基',
      bioJP: '',
      specialtiesJP: null,
      educationJP:
        [{ text: '東京大学大学院　法学政治学研究科　修士課程修了' },
        { text: 'ワシントン大学大学院　法学修士課程修了' }],
      careerJP:
        [{ text: 'トヨタ自動車特許管理部　アメリカ、イギリスにて数年の実務経験を持ち、コンサルティング、国内事件はもとより、渉外事件にも従事' }],
      membershipsJP: null,
      publicationsJP:
        [{ text: 'ビジネス法律英語辞典(日本経済新聞社)、他多数' }],
  
      groups:
        ['pro-advisors'] 
    },
    {
      id: 27,
      title: 'Patent Attorney',
      qualifications: "",
      name: 'Masau Takayanagi',
      img: 'masautakayanagi.jpg',
      imglarge: 'masautakayanagi_large.jpg',
      avatar: 'masautakayanagi_avatar.jpg',
      bio: 'Add bio.', // update
      specialties:
        [{ text: 'Patent & technologies licensing and business solutions, particular experience in pharmaceuticals and life sciences;' },
        { text: 'IP consultation and strategies in the pharmaceutical and life science fields.' }],
      education:
        [{ text: 'B.A., Chuo University, Law Diploma,' },
        { text: 'Completed course, "Seminar on US Laws and Legal Institution for Foreign Lawyers" at University of Wisconsin Law School,' },
        { text: 'Completed course, "Leadership and Strategy in Pharmaceuticals and Biotech" at Harvard Business School' }],
      career:
        [{ text: 'Admitted to practice as a Japanese Patent Attorney in 1977.' },
        { text: 'Licensing executive at Mitsubishi Chemical General Manager of Intellectual Property Department at Mitsubishi-Pharma Corporation' },
        { text: 'Managing Officer, General Manager of I.P. Department at Kyowa Hakko Kogyo Co., Ltd.' },
        { text: 'Managing Officer, General Manager of I.P. Department at Kyowa Hakko Kirin Co., Ltd.' },
        { text: 'Lecturer of IP at Toyama University, School of Pharmaceutical Science Visiting Professor at Hamamatsu Medical School' }],
      memberships:
        [{ text: 'Deputy Chairman of the IP Committee of The Japan Pharmaceutical Manufacturers Association (JPMA) President of LES, Japan Member of the Professional IP Committee at Japanese Cabinet Secretariat' }],
      publications: null,
  
      titleJP: '(顧問)弁理士',
      nameJP: '高柳　昌生',
      bioJP: '昭和52年弁理士登録',
      specialtiesJP:
        [{ text: 'ライフサイエンス分野の特許並びに技術ライセンス' },
        { text: 'これらの分野での知財コンサルテーションと知財戦略' }],
      educationJP:
        [{ text: '中央大大学法学部卒業' },
        { text: 'ハーバードビジネスクール　製薬とバイオテック分野でのリーダーシップと戦略コースを修了' }],
      careerJP:
        [{ text: '三菱化成工業株式会社　入社（現三菱化学）' },
        { text: '三菱東京製薬株式会社 法務部長' },
        { text: '協和発酵株式会社　執行役員　知的財産部長' },
        { text: '協和発酵キリン株式会社　執行役員　知的財産部長' },
        { text: '富山大学薬学部非常勤講師' },
        { text: '浜松医科大学知財活用推進本部客員教授' }],
      membershipsJP:
        [{ text: '日本製薬工業協会知的財産委員会・副委員長' },
        { text: '(財)知的財産研究所「先使用権制度の円滑な利用に関する研究委員会」委員' },
        { text: '(財)知的財産研究所「知的財産の適切な活用のあり方に関する研究委員会」委員' },
        { text: '内閣府、「ライフサイエンス分野における知的財産の保護・活用等に関する検討プロジェクトチーム」メンバー' },
        { text: '日本ライセンス協会会長' }],
      publicationsJP: null,
  
      groups:
        ['pro-chempharmabio', 'pro-advisors'] 
    },
    {
      id: 28,
      title: 'Patent Attorney',
      qualifications: "",
      name: 'Taro Nagayoshi',
      img: 'taronagayoshi.jpg',
      imglarge: 'taronagayoshi_large.jpg',
      avatar: 'taronagayoshi_avatar.jpg',
      bio: 'Add bio.', // update
      specialties:
        [{ text: 'Design practice before the Japan Patent Office and Intellectual Property High Court;' },
        { text: 'legal opinions on design infringement and validity.' }],
      education:
        [{ text: 'Tokyo University of the Arts, Fine Arts' }],
      career:
        [{ text: 'Worked for the Japan Patent Office as:' },
        { text: 'a) Examiner and Chief Board of Appeal Examiner in the field of Design,' },
        { text: 'b) Design Examination Standards Office and Hague Act sub-committee,' },
        { text: 'c) Director: Design Registration System Planning Office Lecturer at Tokyo Zokei University.' }],
      memberships: null,
      publications: null,
  
      titleJP: '(顧問)弁理士',
      nameJP: '永芳　太郎',
      bioJP: '平成15年弁理士登録',
      specialtiesJP: null,
      educationJP:
        [{ text: '東京芸術大学美術学部工芸科卒業' }],
      careerJP:
        [{ text: '特許庁入庁' },
        { text: '特許庁で、意匠登録出願の審査、審判に従事' },
        { text: '審査基準室、へーグ協定アクト小委員会、意匠制度企画室長を歴任' },
        { text: '特許庁では、審査・審判実務から意匠制度の運営、改革に従事' },
        { text: '東京造形大学非常勤講師' }],
      membershipsJP:
        [{ text: '著作権法学会' },
        { text: '日本弁理士会' }],
      publicationsJP:　null,
  
      groups:
        ['pro-designs', 'pro-advisors'] 
    },
    {
      id: 29,
      title: 'Technical Advisor',
      qualifications: "",
      name: 'Takeshi Hattori',
      img: 'takeshihattori.jpg',
      imglarge: 'takeshihattori_large.jpg',
      avatar: 'takeshihattori_avatar.jpg',
      bio: 'Add bio.', // update
      specialties: null,
      education:
        [{ text: 'Ph.D., The University of Tokyo, 1974' }],
      career:
        [{ text: 'Professor, Department of Electrical and Electronics Engineering, Sophia University.' },
        { text: 'Specialty is in telecommunications.' },
        { text: 'Worked at NTT\'s Electrical Communication Laboratory as a researcher, pursued research and development of 800MHz high capacity mobile/portable telephone systems.' },
        { text: 'As Executive Manager of Personal Communications System Laboratory at NTT Wireless Systems Laboratories, engaged in research and development of Personal Handy-phone System and led the new data transmission protocol based on the S-ARQ packet data transmission scheme.' },
        { text: 'Currently a faculty member of Sophia University, researching advanced multiple access systems, ad-hoc network, location estimation, scheduling algorithms for wireless packet system with multiple QoS and related technologies.' },
        { text: 'Chairman of the committee of improved spectrum usage of mobile communications for the Information and Communications Committee in the Ministry of Human Affairs, Post and Telecommunications.' },
        { text: 'Fellow, Institute of Electronics, Information and Communication Engineers, Japan.' },
        { text: 'Awarded for best paper in IEEE Vehicular Technology Transactions in 1981.' }],
      memberships: null,
      publications: null,
  
      titleJP: '(技術顧問)教授',
      nameJP: '服部　武',
      bioJP: '',
      specialtiesJP: null,
      educationJP:
        [{ text: '東京大学大学院　修士課程終了（電子工学専攻）' },
        { text: '東京大学大学院　博士課程終了（電子工学専攻）　工学博士' }],
      careerJP:
        [{ text: '日本電信電話公社　横須賀電気通信研究所入所' },
        { text: '自動車電話、新コードレス電話方式、パーソナル通信方式、PHSの研究開発推進に従事' },
        { text: '日本電信電話公社　通信網総合研究所' },
        { text: 'ネットワーク企画推進室主席研究員' },
        { text: '現在上智大学理工学部電気・電子工学科客員教授（電気・電子工学）' },
        { text: '専門研究分野は移動通信方式、モバイルコンピューティング、通信ネットワーク' }],
      membershipsJP: null,
      publicationsJP:
        [{ text: '新版　移動通信ハンドブック（オーム社）' },
        { text: 'ワイヤレスブロードバンド教科書（IDG社）' },
        { text: 'Visual　SLAMによる無線システムシミュレーション（共立出版）' }],
  
      groups:
        ['pro-advisors'] 
    },
  
    // Patent Technical Staff
    /* minami/eda/natsuki to bottom */
    {
      id: 37,
      title: 'Patent Engineer',
      qualifications: "",
      name: 'Hiroshi Kurokawa',
      img: 'hiroshikurokawa.jpg',
      imglarge: 'hiroshikurokawa_large.jpg',
      avatar: 'hiroshikurokawa_avatar.jpg',
      bio: 'Add bio.', // update
      specialties:
        [{ text: 'Active in the patent field since 1990, especially in the field of image sensing devices, digital photography, optical equipment and laser devices.' }],
      education:
        [{ text: 'B.S., Tokyo Institute of Technology, Mechanical Engineering' },
        { text: 'M.S., Tokyo Institute of Technology, Mechanics' }],
      career:
        [{ text: 'Worked for Nikon as an engineer in the field of electro-mechanical designs such as video cameras and opto-magnetic disc drive systems.' }],
      memberships: null,
      publications: null,
  
      titleJP: '',
      nameJP: '	黒川　裕 ',
      bioJP: '',
      specialtiesJP: null,
      educationJP:
        [{ text: '東京工業大学理工学部　機械工学科卒業' },
        { text: '東京工業大学大学院　機械工学　修士課程修了' }],
      careerJP:
        [{ text: '株式会社ニコン　ビデオカメラ、光磁気ディスクドライブの開発に従事' },
        { text: '画像処理、光学機器、精密機器分野の技術を得意とする' }],
      membershipsJP: null,
      publicationsJP: null,
  
      groups:
        ['pro-mech', 'pro-patengineers'] 
    },
    {
      id: 38,
      title: 'Patent Engineer',
      qualifications: "",
      name: 'Toshio Sato',
      img: 'toshiosato.jpg',
      imglarge: 'toshiosato_large.jpg',
      avatar: 'toshiosato_avatar.jpg',
      bio: 'Add bio.', // update
      specialties:
        [{ text: 'Active in the patent field since 1991, especially in the fields of image processing, computer software and hardware, computer software and hardware-controlled systems, and medical devices.' }],
      education:
        [{ text: 'B.S., Keio University, Electrical Engineering' }],
      career:
        [{ text: 'Worked for Toshiba as an electrical engineer in factory automation.' }],
      memberships: null,
      publications: null,
  
      titleJP: '',
      nameJP: '佐藤　寿生',
      bioJP: '',
      specialtiesJP: null,
      educationJP:
        [{ text: '慶應義塾大学工学部　電気工学科卒業' }],
      careerJP:
        [{ text: '株式会社東芝　電子生産技術部' },
        { text: 'CRT 製造設備のシステム制御、各種設備のファームウェア設計に従事' },
        { text: 'CDC（Cushman Darby & Cushman）アメリカ特許出願実務コース修了（於：Washington, D.C.）' },
        { text: 'コンピュータハードウエア・ソフトウエア、画像処理、デジタル信号処理分野を得意とする' }],
      membershipsJP: null,
      publicationsJP: null,
  
      groups:
        ['pro-infoproc', 'pro-meddevices', 'pro-patengineers'] 
    },
    {
      id: 39,
      title: 'Patent Engineer',
      qualifications: "",
      name: 'Susumu Takahashi',
      img: 'logo.jpg',
      imglarge: 'logo_large.jpg',
      avatar: 'susumutakahashi_avatar.jpg',
      bio: 'Add bio.', // update
      specialties:
        [{ text: 'Active in the patent field since 1987, especially in the fields of telecommunications, computer hardware and software, encoding/decoding techonology, Internet and medical devices.' }],
      education:
        [{ text: 'B.S., University of Electro-Communications, Engineering Physics' }],
      career:
        [{ text: 'Worked for NEC Corporation and Mitsubishi Chemical Corporation as a patent engineer for the intellectual property department.' },
        { text: 'Experienced in telecommunications, computer systems, image compression, electrographical devices, and magnetic recording medium.' }],
      memberships: null,
      publications: null,
  
      titleJP: '',
      nameJP: '高橋　晋',
      bioJP: '',
      specialtiesJP: null,
      educationJP:
        [{ text: '電気通信大学電気通信学部　物理工学科卒業' }],
      careerJP:
        [{ text: '日本電気株式会社 特許部' },
        { text: '三菱化学株式会社 知的財産部' },
        { text: '情報処理、通信伝送、記録媒体技術分野に関する発明の国内外権利化及び権利の活用業務に従事' },
        { text: '第一種情報処理技術者' },
        { text: '通信、画像処理、ソフトウエア分野を得意とする' }],
      membershipsJP: null,
      publicationsJP: null,
  
      groups:
        ['pro-infoproc', 'pro-comm', 'pro-meddevices', 'pro-patengineers'] 
    },
    {
      id: 40,
      title: 'Patent Engineer',
      qualifications: "",
      name: 'Shunsuke Yamaguchi',
      img: 'shunsukeyamaguchi.jpg',
      imglarge: 'shunsukeyamaguchi_large.jpg',
      avatar: 'shunsukeyamaguchi_avatar.jpg',
      bio: 'Add bio.', // update
      specialties:
        [{ text: 'Active in the patent field since 1993, especially in the field of semiconductor production equipment, digital photography and automobiles and automotive products.' }],
      education:
        [{ text: 'B.S., Musashi Institute of Technology, Mechanical Engineering' }],
      career:
        [{ text: 'Worked for Marubun Corporation in its semiconductor division.' }],
      memberships: null,
      publications: null,
  
      titleJP: '',
      nameJP: '山口　俊典',
      bioJP: '',
      specialtiesJP: null,
      educationJP:
        [{ text: '武蔵工業大学工学部　機械工学科卒業' }],
      careerJP:
        [{ text: '丸文株式会社　半導体の回路設計、半導体プロセス管理に従事' },
        { text: '機械、制御を含む自動車/自動車機器分野、半導体関連機器の分野を得意とする' }],
      membershipsJP: null,
      publicationsJP: null,
  
      groups:
        ['pro-mech', 'pro-patengineers'] 
    },
    {
      id: 41,
      title: 'Patent Engineer',
      qualifications: "",
      name: 'Miharu Hayashi',
      img: 'miharuhayashi.jpg',
      imglarge: 'miharuhayashi_large.jpg',
      avatar: 'miharuhayashi_avatar.jpg',
      bio: 'Add bio.', // update
      specialties:
        [{ text: 'Active in the patent field since 1994, especially in the field of patent translations and digital photography.' }],
      education:
        [{ text: 'B., Physics, University of Minnesota (Twin Cities)' },
        { text: 'B.S., Astrophysics, University of Minnesota (Twin Cities)' }],
      career:
        [{ text: 'Research in atomic energy generation, simulation of satellite orbits;' },
        { text: 'experience in high-energy physics, and technical translation.' }],
      memberships: null,
      publications: null,
  
      titleJP: '',
      nameJP: '林　美晴',
      bioJP: '',
      specialtiesJP: null,
      educationJP:
        [{ text: 'ミネソタ大学　物理学科及び天文物理学科卒業' },
        { text: '原子核のエネルギー計算、衛星の軌道計算（シミュレーション）などに関する研究' },
        { text: '画像処理、光学系技術分野を得意とする' }],
      careerJP: null,
      membershipsJP: null,
      publicationsJP: null,
  
      groups:
        ['pro-infoproc', 'pro-patengineers'] 
    },
    {
      id: 42,
      title: 'Patent Engineer',
      qualifications: "",
      name: 'Keishiro Kotera',
      img: 'keishirokotera.jpg',
      imglarge: 'keishirokotera_large.jpg',
      avatar: 'keishirokotera_avatar.jpg',
      bio: 'Add bio.', // update
      specialties:
        [{ text: 'Active in the patent field since 1999, especially in the fields of three-dimensional image processing, computer science, computer hardware and software, and mathematical applications.' }],
      education:
        [{ text: 'B.S., Chiba Institute of Technology, Electronic and Information Engineering' },
        { text: 'M.S., Chiba Institute of Technology, Computer Science' }],
      career:
        [{ text: 'Worked for SEGA Enterprises in AM R&D, Technical Support for Designers, CG & Simulation.' }],
      memberships: null,
      publications: null,
  
      titleJP: '',
      nameJP: '小寺　慶四郎',
      bioJP: '',
      specialtiesJP: null,
      educationJP:
        [{ text: '千葉工業大学工学部　情報工学科卒業' },
        { text: '千葉工業大学大学院　工学研究科情報工学専攻 博士課程前期修了' }],
      careerJP:
        [{ text: 'セガ エンタープライゼス株式会社　コンピュータグラフィックス技術の基礎研究に従事' },
        { text: '三次元画像処理、コンピュータアーキテクチャー、数学処理分野を得意とする' }],
      membershipsJP: null,
      publicationsJP: null,
  
      groups:
        ['pro-infoproc', 'pro-toysgames', 'pro-patengineers'] 
    },
    {
      id: 43,
      title: 'Patent Engineer',
      qualifications: "",
      name: 'Hidetaka Takahashi',
      img: 'hidetakatakahashi.jpg',
      imglarge: 'hidetakatakahashi_large.jpg',
      avatar: 'hidetakatakahashi_avatar.jpg',
      bio: 'Add bio.', // update
      specialties:
        [{ text: 'Active in the patent field since 1999, especially in the fields of speech processing, speech coding, speech recognition, computer hardware and software, and telecommunications.' }],
      education:
        [{ text: 'B.S., Tokyo Electric University, Electronic and Communication Engineering' }],
      career:
        [{ text: 'Worked for Olympus Optical Co., Ltd. as a system engineer for developing digital voice recorders.' },
        { text: 'Specialties include speech signal processing.' }],
      memberships: null,
      publications: null,
  
      titleJP: '',
      nameJP: '高橋　秀享',
      bioJP: '',
      specialtiesJP: null,
      educationJP:
        [{ text: '東京電機大学工学部　電気通信工学科卒業' }],
      careerJP:
        [{ text: 'オリンパス光学工業株式会社　ポータブルデジタル録音機の要素技術開発に従事' },
        { text: '音声符号化、雑音除去、音声認識等の音声デジタル信号処理、自動車の制御技術の分野を得意とする' }],
      membershipsJP: null,
      publicationsJP: null,
  
      groups:
        ['pro-infoproc', 'pro-meddevices', 'pro-patengineers'] 
    },
    {
      id: 44,
      title: 'Patent Engineer',
      qualifications: "",
      name: 'Hideto Yoshitake',
      img: 'hidetoyoshitake.jpg',
      imglarge: 'hidetoyoshitake_large.jpg',
      avatar: 'hidetoyoshitake_avatar.jpg',
      bio: 'Add bio.', // update
      specialties:
        [{ text: 'Active in the patent field since 2004, in the fields of wireless communications, signal processing, digital broadcasting systems and coding technologies.' }],
      education:
        [{ text: 'B.S., Tohoku University, Physics (1997)' },
        { text: 'M.S., Tohoku University, Geophysics (1999)' }],
      career:
        [{ text: 'Worked for Nippon Telegraph and Telephone Corporation in their Research and Development Center as an engineer for developing satellite communication systems and seamless IP communication systems.' }],
      memberships: null,
      publications: null,
  
      titleJP: '',
      nameJP: '吉武　秀人',
      bioJP: '',
      specialtiesJP: null,
      educationJP:
        [{ text: '東北大学理学部　宇宙地球物理学科卒業' },
        { text: '東北大学大学院　地球物理学専攻　修士課程修了' }],
      careerJP:
        [{ text: '日本電信電話株式会社武蔵野R&Dセンター　衛星通信システムにおける電波利用効率向上に関する研究開発、ヘテロネットワークにおけるシームレス通信方式に関する研究開発に従事' },
        { text: '無線通信、信号処理、デジタル放送、符号化技術を得意とする' }],
      membershipsJP: null,
      publicationsJP: null,
  
      groups:
        ['pro-infoproc', 'pro-comm', 'pro-patengineers'] 
    },
    {
      id: 45,
      title: 'Patent Engineer',
      qualifications: "",
      name: 'Eiji Hokimoto',
      img: 'eijihokimoto.jpg',
      imglarge: 'eijihokimoto_large.jpg',
      avatar: 'eijihokimoto_avatar.jpg',
      bio: 'Add bio.', // update
      specialties:
        [{ text: 'Design of digital circuit substrates.' }],
      education:
        [{ text: 'B.S., Doshisha University, Electronic Engineering (1994)' }],
      career:
        [{ text: 'Worked at OKI Electric Industry Co., Ltd.' }],
      memberships: null,
      publications: null,
  
      titleJP: '',
      nameJP: '甫木元　栄二',
      bioJP: '',
      specialtiesJP: null,
      educationJP:
        [{ text: '同志社大学工学部　 電子工学科卒業' }],
      careerJP:
        [{ text: '沖電気工業株式会社  PSTN用デジタル交換機の開発、IP構内交換機のシステム設計に従事文書処理技術、通信機器関連技術分野を得意とする' }],
      membershipsJP: null,
      publicationsJP: null,
  
      groups:
        ['pro-infoproc', 'pro-patengineers'] 
    },
    {
      id: 46,
      title: 'Patent Engineer',
      qualifications: "",
      name: 'Katsuhiro Suzuki',
      img: 'katsuhirosuzuki.jpg',
      imglarge: 'katsuhirosuzuki_large.jpg',
      avatar: 'katsuhirosuzuki_avatar.jpg',
      bio: 'Add bio.', // update
      specialties:
        [{ text: 'Optical instruments.' }],
      education:
        [{ text: 'B.S., Sophia University, Electrical and Electronic Engineering' }],
      career:
        [{ text: 'Worked at a domestic patent law firm drafting patent applications for domestic and foreign filing.' }],
      memberships: null,
      publications: null,
  
      titleJP: '',
      nameJP: '鈴木　克浩',
      bioJP: '',
      specialtiesJP: null,
      educationJP:
        [{ text: '上智大学理工学部　電気電子工学科卒業' }],
      careerJP:
        [{ text: '国内特許事務所' },
        { text: '光学機器及び光学系関連分野を中心とした知財業務に従事' },
        { text: 'この分野での知識と実務経験を有す' },
        { text: '光学系技術分野、画像処理、情報処理分野を得意とする' }],
      membershipsJP: null,
      publicationsJP: null,
  
      groups:
        ['pro-elec', 'pro-patengineers'] 
    },
    /* kagotani to bottom */
    {
      id: 48,
      title: 'Patent Engineer',
      qualifications: "",
      name: 'Yoshimichi Fukasawa',
      img: 'yoshimichifukasawa.jpg',
      imglarge: 'yoshimichifukasawa_large.jpg',
      avatar: 'yoshimichifukasawa_avatar.jpg',
      bio: 'Add bio.', // update
      specialties:
        [{ text: 'Semiconductor device technology and high-frequency circuit technology' }],
      education:
        [{ text: 'B.S., Hosei University, Electrical and Electronic Engineering' },
        { text: 'M.S., Hosei University, Electrical Engineering' }],
      career:
        [{ text: 'Worked for New Japan Radio Co., Ltd. as an engineer for researching millimeter-wave oscillators using Gunn diode and electronic devices using III-nitride semiconductor' }],
      memberships:
        [{ text: 'The Japan Society of Applied Physics' }],
      publications: null,
  
      titleJP: '',
      nameJP: '深澤　義道',
      bioJP: '',
      specialtiesJP: null,
      educationJP:
        [{ text: '法政大学　工学部　電気電子工学科卒' },
        { text: '法政大学大学院　工学研究科　電気工学専攻　修士課程修了' }],
      careerJP:
        [{ text: '新日本無線株式会社  ガンダイオ－ドを用いたミリ波帯発信器、及びIII族窒化物半導体を用いた電子デバイスの研究などに従事' },
        { text: '半導体デバイス技術、高周波回路技術を得意とする' }],
      membershipsJP:
        [{ text: '応用物理学会会員' }],
      publicationsJP: null,
  
      groups:
        ['pro-elec', 'pro-patengineers'] 
    },
    {
      id: 49,
      title: 'Patent Engineer',
      qualifications: "Ph.D.",
      name: 'Hiroaki Tanaka',
      img: 'hiroakitanaka.jpg',
      imglarge: 'hiroakitanaka_large.jpg',
      avatar: 'hiroakitanaka_avatar.jpg',
      bio: 'Add bio.', // update
      specialties:
        [{ text: 'Semiconductor processes and ultra clean technologies' }],
      education:
        [{ text: 'M.S., Tohoku University, Electronic Engineering' },
        { text: 'Ph.D., Tohoku University, Electronic Engineering' }],
      career:
        [{ text: 'Worked for Tohoku University as an assistant professor.' }],
      memberships:
        [{ text: 'The Electrochemical Society (ECS)' }],
      publications: null,
  
      titleJP: '',
      nameJP: '田中　宏明',
      bioJP: '',
      specialtiesJP: null,
      educationJP:
        [{ text: '慶應義塾大学　理工学部　電気工学科卒業' },
        { text: '東北大学大学院 工学研究科 電子工学専攻 博士課程後期修了 博士（工学）' }],
      careerJP:
        [{ text: '東北大学　未来科学技術共同研究センター　助教' },
        { text: '半導体プロセス及びその周辺技術を得意とする' }],
      membershipsJP:
        [{ text: 'The Electrochemical Society（ECS）会員' }],
      publicationsJP: null,
  
      groups:
        ['pro-elec', 'pro-patengineers'] 
    },
    {
      id: 50,
      title: 'Patent Engineer',
      qualifications: "Ph.D.",
      name: 'Kei Iwamoto',
      img: 'keiiwamoto.jpg',
      imglarge: 'keiiwamoto_large.jpg',
      avatar: 'keiiwamoto_avatar.jpg',
      bio: 'Add bio.', // update
      specialties:
        [{ text: 'Wireless communication in particular antenna and propagation, signal processing and information theory.' }],
      education:
        [{ text: 'M.S., The University of Tokyo, Electronic Engineering' },
        { text: 'Ph.D., The University of Tokyo, Wireless Technology Research' }],
      career:
        [{ text: '' },
        { text: '' },
        { text: '' },
        { text: '' }],
      memberships: null,
      publications: [{ text: '\“Design of an Antenna Decoupling Structure for an Inband Full-Duplex Collinear Dipole Array\”, IEEE Transactions on Antennas and Propagation, July, 2018.' }],
  
      titleJP: '',
      nameJP: '岩元　啓',
      bioJP: '',
      specialtiesJP: null,
      educationJP:
        [{ text: '東京大学工学部　電子情報工学科卒業' },
        { text: '東京大学大学院　工学系研究科　電気系工学専攻　修士課程、博士課程　博士（工学）' }],
      careerJP: null,
      membershipsJP: null,
      publicationsJP:
        [{ text: '\“同一チャネル全二重無線通信向け平面アンテナの寄生共振器に関する一検討，\”電子情報通信学会技術研究報告（アンテナ・伝播），115(79)， 19-24，2015年6月．' }],
      groups:
        ['pro-infoproc', 'pro-comm', 'pro-patengineers'] 
    },
    {
      id: 51,
      title: 'Patent Engineer',
      qualifications: "",
      name: 'Yuki Yamasaki',
      img: 'yukiyamasaki.jpg',
      imglarge: 'yukiyamasaki_large.jpg',
      avatar: 'yukiyamasaki_avatar.jpg',
      bio: 'Add bio.', // update
      specialties:
        [{ text: 'Inorganic materials processes and communication-related technologies' }],
      education:
        [{ text: 'B.S., National Defense Academy, Materials Science and Engineering' },
        { text: 'M.S., National Defense Academy, Materials Engineering' }],
      career:
        [{ text: 'Worked for Ground Self Defense Force Aviation Unit and Air Systems Research Center as an engineer and researcher' }],
      memberships: null,
      publications: null,
  
      titleJP: '',
      nameJP: '山﨑　祐樹',
      bioJP: '',
      specialtiesJP: null,
      educationJP:
        [{ text: '防衛大学校理工学専攻　機能材料工学科卒業' },
        { text: '防衛大学校理工学研究科　物質工学専攻　前期課程修了 修士' }],
      careerJP:
        [{ text: '陸上自衛隊航空科部隊、航空装備研究所に勤務' },
        { text: '観測・ヘリコプターなどの航空機整備、研究開発に従事' },
        { text: '無機材料、通信関連分野の技術を得意とする' }],
      membershipsJP: null,
      publicationsJP: null,
  
      groups:
        ['pro-patengineers'] 
    },
/*    {
      id: 36,
      title: 'Patent Engineer',
      qualifications: "",
      name: 'Shohei Natsuki',
      img: 'logo.jpg',
      imglarge: 'logo_large.jpg',
      avatar: 'shoheinatsuki_avatar.jpg',
      bio: 'Add bio.', // update
      specialties:
        [{ text: 'Active in the patent field since 1990, especially in the field of telecommunications, optical communications, and image processing.' }],
      education:
        [{ text: 'B.S., Hokkaido University, Geophysics' },
        { text: 'M.S., Nagoya University, Science' }],
      career:
        [{ text: 'Worked as Systems Engineer, Fujitsu in the field of aerospace systems and developed telecommunications and image processing technologies.' }],
      memberships: null,
      publications: null,
  
      titleJP: '',
      nameJP: '夏木　尚平',
      bioJP: '',
      specialtiesJP: null,
      educationJP:
        [{ text: '北海道大学理学部　地球物理学科卒業' },
        { text: '名古屋大学大学院　理学研究科　博士前期課程修了' }],
      careerJP:
        [{ text: '富士通株式会社　気象衛星データ処理システム、特に画像処理システムの開発や、人工知能技術を応用した気象予測システムの研究、開発に従事' },
        { text: 'CDC（Cushman Darby & Cushman）アメリカ特許出願実務コース修了（於：Washington, D.C.）' },
        { text: '記録技術、通信技術、ネットワーク分野の技術を得意とする' }],
      membershipsJP: null,
      publicationsJP: null,
  
      groups:
        ['pro-infoproc', 'pro-comm', 'pro-patengineers'] 
    },*/
    {
      id: 47,
      title: 'Patent Engineer',
      qualifications: "",
      name: 'Johji Kagotani',
      img: 'logo.jpg',
      imglarge: 'logo_large.jpg',
      avatar: 'johjikagotani_avatar.jpg',
      bio: 'Add bio.', // update
      specialties:
        [{ text: 'Considerable research experience and knowledge in image processing, virtual/mixed/augmented reality, and user interface.' }],
      education:
        [{ text: 'B.S., University of Electro-Communications, Mechanical Engineering and Intelligent Systems' },
        { text: 'M.S., University of Electro-Communications, Mechanical Engineering and Intelligent Systems' }],
      career:
        [{ text: 'Worked for SEGA in AM R&D as an engineer extensively developing theme park rides and simulators.' }],
      memberships: null,
      publications: null,
  
      titleJP: '',
      nameJP: '加護谷　譲二',
      bioJP: '',
      specialtiesJP: null,
      educationJP:
        [{ text: '電気通信大学電気通信学部　知能機械工学科卒業' },
        { text: '電気通信大学大学院　電気通信学研究科　知能機械工学専攻　博士前期課程修了' }],
      careerJP:
        [{ text: '株式会社セガ　VR・MR技術を応用した体感システム及びシミュレータの研究開発に従事画像処理、VR・MR、ユーザインタフェース分野を得意とする' }],
      membershipsJP: null,
      publicationsJP: null,
  
      groups:
        ['pro-toysgames', 'pro-patengineers'] 
    },
    {
      id: 34,
      title: 'Patent Engineer',
      qualifications: "",
      name: 'Hitoshi Minami',
      img: 'logo.jpg',
      imglarge: 'logo_large.jpg',
      avatar: 'hitoshiminami_avatar.jpg',
      bio: 'Add bio.', // update
      specialties:
        [{ text: 'Active in the patent field since 1985, especially in the field of digital and analog technogies, computer hardware and software technology, image processing and computer printers.' }],
      education:
        [{ text: 'B.S., Tottori University, Electrical Engineering' }],
      career:
        [{ text: 'Electronic Engineer, Burroughs Japan.' },
        { text: 'Worked as a researcher at the Sagamihara Laboratory and Pentel.' },
        { text: 'Worked as principal engineer for developing printer controllers, circuit designs and development of firmware for controllers of storage devices and computer I/O interfaces.' }],
      memberships: null,
      publications: null,
  
      titleJP: '',
      nameJP: '南　仁司',
      bioJP: '',
      specialtiesJP: null,
      educationJP:
        [{ text: '鳥取大学電気工学部卒業' }],
      careerJP:
        [{ text: '旧バロース株式会社（現日本ユニシス）相模原研究所' },
        { text: 'プリンター、記憶装置のコントローラの回路設計、それらの制御プログラム（ファームウェア）、ワードプロセッサ、マイクロコンピュータ応用機器の設計に従事' },
        { text: 'コンピュータ、画像処理分野の技術を得意とする' }],
      membershipsJP: null,
      publicationsJP: null,
  
      groups:
        ['pro-infoproc', 'pro-patengineers'] 
    },
    {
      id: 35,
      title: 'Patent Engineer',
      qualifications: "",
      name: 'Kazuo Eda',
      img: 'logo.jpg',
      imglarge: 'logo_large.jpg',
      avatar: 'kazuoeda_avatar.jpg',
      bio: 'Add bio.', // update
      specialties:
        [{ text: 'Active in the patent field since 1985, especially in computer architecture, computer software and firmware, image processing and image and data compression technologies.' }],
      education:
        [{ text: 'B.S., Aoyama Gakuin University, Physics' }],
      career:
        [{ text: 'Firmware Engineer, Pentel Co. Ltd, a major Japanese manufacturer of business equipment;' },
        { text: 'designed firmware for business computers.' }],
      memberships: null,
      publications: null,
  
      titleJP: '',
      nameJP: '	江田　和夫',
      bioJP: '',
      specialtiesJP: null,
      educationJP:
        [{ text: '青山学院大学理工学部　物理学科卒業' }],
      careerJP:
        [{ text: 'ぺんてる株式会社　中央研究所' },
        { text: '主にプリンター分野のファームウェア及びデイジタイザーのアプリケーションソフト開発に従事' },
        { text: 'コンピュータ・プログラミング技術、符合化処理分野の技術を得意とする' }],
      membershipsJP: null,
      publicationsJP: null,
  
      groups:
        ['pro-infoproc', 'pro-meddevices', 'pro-patengineers'] 
    },

    {
      id: 30,
      title: 'Bridge Patent Engineer',
      qualifications: "",
      name: 'Stephen Allison',
      img: 'stephenallison.jpg',
      imglarge: 'stephenallison_large.jpg',
      avatar: 'stephenallison_avatar.jpg',
      bio: 'Bridge Patent Engineer with years of practical technical experience in embedded systems.',
      specialties:
        [{ text: 'Embedded systems, with specific experience in image processing and digital cameras;' },
        { text: 'web-based, database-driven systems;' },
        { text: 'academic background in Computer Science.' }],
      education:
        [{ text: 'B.S., University of British Columbia, Computer Science' }],
      career:
        [{ text: 'Space Solver (embedded development)' },
        { text: 'eWare (CRM system development)' },
        { text: 'Mindquake Software (web/DB development)' }],
      memberships: null,
      publications: null,
  
      titleJP: '',
      nameJP: 'スティーブン　アリソン',
      bioJP: '',
      specialtiesJP: null,
      educationJP:
        [{ text: 'ブリティッシュコロンビア大学　コンピュータサイエンス学科卒業' }],
      careerJP:
        [{ text: 'eWare (Ireland), スペースソルバ株式会社' },
        { text: 'CRM技術、デジタルカメラ・携帯電話用のミドルウエアとデバイスドライバー、インターネット関連技術の開発に携わる。' },
        { text: 'コンピュータ分野とこれらの関連分野を得意とする。' }],
      membershipsJP: null,
      publicationsJP: null,
  
      groups:
        ['pro-infoproc', 'pro-comm', 'pro-international']
    },
    {
      id: 31,
      title: 'Bridge Patent Engineer',
      qualifications: "",
      name: 'Alexander Harris',
      img: 'alexanderharris.jpg',
      imglarge: 'alexanderharris_large.jpg',
      avatar: 'alexanderharris_avatar.jpg',
      bio: 'Add bio.', // update
      specialties:
        [{ text: 'Biochemistry, with experience in the discovery of specific biomarkers and various proteins related to cancer based pharmaceuticals.' }],
      education:
        [{ text: 'B. S., University of Arizona, Biochemistry' },
        { text: 'B. A., (Japanese), University of Arizona, East Asian Studies' }],
      career:
        [{ text: 'Past positions include research assistant work at the University of Arizona Cancer Center and the University of Arizona Department of Basic Medical Sciences.' }],
      memberships: null,
      publications: null,
  
      titleJP: '',
      nameJP: 'アレクサンダー　ハリス',
      bioJP: '',
      specialtiesJP: null,
      educationJP:
        [{ text: 'アリゾナ大学　生化学科卒業' }],
      careerJP:
        [{ text: 'アリゾナ大学の癌センター, アリゾナ大学の基礎医学科' },
        { text: '抗がん剤に関連するバイオマーカー及びたんぱく質などの検索に従事' }],
      membershipsJP: null,
      publicationsJP: null,
  
      groups:
        ['pro-chempharmabio', 'pro-international'] 
    },
  
    {
      id: 32,
      title: 'Technical Translator',
      qualifications: "",
      name: 'Ferena Kagata',
      img: 'ferenakagata.jpg',
      imglarge: 'ferenakagata_large.jpg',
      avatar: 'ferenakagata_avatar.jpg',
      bio: 'Add bio.', // update
      specialties:
        [{ text: 'Technical translations, Native Speaker of both Japanese and English' }],
      education:
        [{ text: 'B.A., University of Oregon' }],
      career:
      [ {text: 'Past positions include translator & interpreter Internet and Software fields'}],
      memberships: null,
      publications: null,

      titleJP: '技術翻訳者',
      nameJP: '加賀田フェレナ',
      bioJP: '',
      specialtiesJP: 
        [{ text: '技術翻訳、日英両言語のネイティブスピーカー' }],
      educationJP:
        [{ text: 'オレゴン大学　文学士号' }],
      careerJP:
        [{ text: 'インターネット・ソフトウェア分野に関する翻訳・通訳' },
        { text: '' },
        { text: '' }],
      membershipsJP: null,
      publicationsJP: null,

      groups:
        ['pro-international']
    },
  
    {
      id: 33,
      title: 'Bridge Patent Engineer',
      qualifications: "",
      name: 'Arissa J. Sato',
      img: 'arissasato.jpg',
      imglarge: 'arissasato_large.jpg',
      avatar: 'arissasato_avatar.jpg',
      bio: 'Add bio.', // update
      specialties:
        [{ text: 'Human-Computer Interaction, with experience in the development of real-time feedback and visualization interfaces; UI/UX' }],
      education:
        [{ text: 'B.S., University of Wisconsin-Madison, Computer Engineering and Computer Science' },
        { text: 'M.Eng., University of Tokyo, Electrical Engineering and Information Systems' }],
      career:
        [{ text: 'Past positions include intern at Fanuc Thai in the robotics division and research assistant at the Wisconsin HCI Laboratory.' },
        { text: 'Currently, she is a PhD student in the Interactive Intelligent Systems (IIS) Laboratory at the University of Tokyo.' }],
      memberships: null,
      publications: null,
  
      titleJP: '',
      nameJP: '佐藤　安理紗',
      bioJP: '',
      specialtiesJP: null,
      educationJP:
        [{ text: 'ウィスコンシン大学マディソン校　コンピューター工学とコンピューターサイエンス学科卒業' },
        { text: '東京大学大学院　電気系工学　修士課程終了' }],
      careerJP:
        [{ text: '' },
        { text: '' },
        { text: '' }],
      membershipsJP: null,
      publicationsJP: null,
  
      groups:
        ['pro-infoproc', 'pro-designs', 'pro-international']
    },
    // TEMPLATE FOR ADDING NEW PEOPLE
    // {
    //   title: 'JOB',
    //   name: 'NAME',
    //   img: 'AAA', // update
    //   avatar: 'AAA', // update
    //   bio: 'Add bio.', // update
    //   specialties:
    //     [{ text: '' },
    //     { text: '' },
    //     { text: '' },
    //     { text: '' }],
    //   education:
    //     [{ text: '' },
    //     { text: '' }],
    //   career:
    //     [{ text: '' },
    //     { text: '' },
    //     { text: '' },
    //     { text: '' }],
    //   memberships:
    //     [{ text: '' },
    //     { text: '' }],
    //   publications:
    //     [{ text: '' },
    //     { text: '' }],
    // 
    // JAPANESE VERSION
    //   titleJP: '',
    //   nameJP: '',
    //   bioJP: '',
    //   specialtiesJP:
    //     [{ text: '' },
    //      { text: '' },
    //     { text: '' }],
    //   educationJP:
    //      [{ text: '' },
    //      { text: '' },
    //      { text: '' }],
    //   careerJP:
    //      [{ text: '' },
    //      { text: '' },
    //      { text: '' }],
    //   membershipsJP:
    //      [{ text: '' },
    //      { text: '' },
    //      { text: '' }],
    //   publicationsJP:
    //      [{ text: '' },
    //      { text: '' },
    //      { text: '' }],
    // 
    //   groups:
    //     ['pro-infoproc'] // update
    // },
  
  ];