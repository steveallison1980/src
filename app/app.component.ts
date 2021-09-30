import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'; 
import { Observable } from 'rxjs';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ohtsuka Patent Office';
  items: Observable<any[]>;
  constructor(
    firestore: AngularFirestore,
    private titleService: Title,
    private metaService: Meta) {
     this.items = firestore.collection('items').valueChanges();
  }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.metaService.addTags([
      {name: 'keywords', content: '大塚, 特許, 意匠, 商標, 調査, 訴訟, 弁理士, Ohtsuka, patent, trademark, design, litigation, search, patent attorney, japan'},
      {name: 'description', content: 'Ohtsuka Patent Office is an international law firm specializing in intellectual property. Click to find out more.'},
      {name: 'robots', content: 'index, follow'}
    ]);
  }
}
