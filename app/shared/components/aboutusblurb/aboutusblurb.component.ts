import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutusblurb',
  templateUrl: './aboutusblurb.component.html',
  styleUrls: ['./aboutusblurb.component.css']
})
export class AboutusblurbComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  aboutusitems: any = [
    {type:'p',text:'Founded in April 1974, Ohtsuka Patent Office recently celebrated its 45th anniversary. While we are proud of our accomplishments, we owe our growth and success to our clients both in Japan and abroad, who have placed their trust in our services over the years.'},
    {type:'p',text:'Our team comprises patent attorneys and engineers with knowledge in a wide range of technical fields, many of whom have considerable corporate and industry experience or were patent examiners at the JPO. Our practice focuses on acquiring, protecting and exploiting patent and other IP assets. We have, in the last five years alone, obtained around 8,000 patents in Japan and around 5,500 patents abroad in various technical fields, such as computers, data processing, and telecommunications, and in mechanical, medical, as well as chemical fields.'},
    {type:'p',text:'Our skills and experiences honed through extensive patent prosecutions have been proven to be second to none in many patent litigation cases. It is through our contributions to these litigation cases that we have grown into a full-service intellectual property firm with an emphasis on patents.'},
    {type:'p',text:'Furthermore, we recognize that designs and trademarks are also essential for maximizing product value and increasing market shares in increasingly competitive markets. At Ohtsuka Patent Office, we work hard to support our clients in the creation and enforcement of design and trademark rights.'},
    {type:'p',text:'With economic globalization, a robust IP strategy has become paramount for companies wishing to compete in international markets. The growth of our firm is testament to our ambition and dedication to our clients in realizing their goals. We will continually keep pace with the complex world of new technologies and the strategies to provide an excellent and timely service to our clients.'},
    {type:'p',text:'Ohtsuka Patent Office'},
    {type:'br'},
    {type:'p',text:'Yasunori Ohtsuka, Managing Partner'}
  ]
}
