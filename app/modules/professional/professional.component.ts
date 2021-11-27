import { Component, OnInit } from '@angular/core';
import { NavigateService } from '../../services/navigate.service';
import { ProfessionalService } from '../../services/professional.service';
import { ActivatedRoute } from '@angular/router';
import { IPerson } from '../../interfaces/iperson';
import { Title } from '@angular/platform-browser';
import { LanguagesettingService } from '../../services/languagesetting.service';

const PERSONDUMMY: IPerson = 
  {
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
      ['pro-designs', 'pro-lit', 'pro-patattorneys']
  };

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.css']
})
export class ProfessionalComponent implements OnInit {

  private pro: IPerson = PERSONDUMMY;

  constructor(
    public nav: NavigateService,
    private route: ActivatedRoute,
    private professionalService: ProfessionalService,
    private titleService: Title,
    private langsvc: LanguagesettingService
  ) {}

  ngOnInit(): void {
    this.getProfessional();
    this.titleService.setTitle(this.getTitle());
  }

  getTitle(){
    if( this.pro != null) {
      if( this.langsvc.lang == "EN"){
        return this.pro.name;
      } else {
        return this.pro.nameJP;
      }
    } else {
      return "";
    }
  }

  getProfessional(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.professionalService.getProfessional(id)
      .subscribe(pro => this.pro = pro);
  }

  getPerson(): IPerson{
    return this.pro;
  }
}
