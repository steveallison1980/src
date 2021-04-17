export interface ContactItem {
    title: string;
    details: string;
    link: string;
  }

export const CONTACTTITLE = "Contact Information/Map"
export const CONTACTTITLEJP = "お問い合わせ・アクセス"

export const CONTACT_DATA: ContactItem[] = [
{ title: 'Name',
  details: 'Ohtsuka Patent Office, P.C.',
  link: ''},
{ title: 'Telephone',
  details: '+81-3-5276-3241',
  link: 'tel:81-3-5276-3241'},
{ title: 'Fax',
  details: '+81-3-5276-3242',
  link: ''},
{ title: 'E-mail',
  details: 'opt@patest.co.jp',
  link: 'mailto:opt@patest.co.jp'},
{ title: 'Mailing Address',
  details: '7TH FL., KIOICHO PARK BLDG., 3-6, KIOICHO, CHIYODA-KU, TOKYO 102-0094, JAPAN',
  link: ''}];

export const CONTACT_DATAJP: ContactItem[] = [
{ title: '名称',
  details: '大塚国際特許事務所',
  link: ''},
{ title: '電話',
  details: '+81-3-5276-3241',
  link: 'tel:81-3-5276-3241'},
{ title: 'Fax',
  details: '+81-3-5276-3242',
  link: ''},
{ title: 'E-mail',
  details: 'opt@patest.co.jp',
  link: 'mailto:opt@patest.co.jp'},
{ title: '住所',
  details: '〒102-0094 東京都千代田区紀尾井町3-6紀尾井町パークビル7F',
  link: ''}];