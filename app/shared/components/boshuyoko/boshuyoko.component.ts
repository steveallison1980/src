import { Component, OnInit } from '@angular/core';
import { ITitle } from './../../../interfaces/icontent';

@Component({
  selector: 'app-boshuyoko',
  templateUrl: './boshuyoko.component.html',
  styleUrls: ['./boshuyoko.component.css']
})
export class BoshuyokoComponent implements OnInit {

  FUKURIKOSEIJP: Array<string> = [
    "各種社会保険完備",
    "退職金",
    "401K企業年金",
    "赴任転居費補助",
    "自己啓発援助制度",
    "永年勤続表彰",
    "慶弔金",
    "総合福祉保険",
    "レクリエーション費補助",
    "互助会",
    "健診・ドック年1回無料受診",
    "保養所（軽井沢）",
    "財形貯蓄、弁理士登録料・研修費用の全額支給、その他（クラブ活動、レクリエ－ションなど"
  ];

  constructor() { }

  ngOnInit(): void {
  }

  getFukurikousei(){
    return(this.FUKURIKOSEIJP);
  }
  getTitle(){
    var ret: ITitle = {
      class: "largetext",
      text: "募集要項"
    }
    return ret;
  }
}
