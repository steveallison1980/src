export interface ContactItem {
    title: string;
    details: string;
    link: string;
  }

export const CONTACTTITLE = "Contact Information/Map"
export const CONTACTTITLEJP = "お問い合わせ・アクセス"

export const MAILINGADDRESS = "7TH FL., KIOICHO PARK BLDG., 3-6, KIOICHO, CHIYODA-KU, TOKYO 102-0094, JAPAN";

export const CONTACT_DATA: ContactItem[] = [
{ title: 'Name',
  details: 'Ohtsuka Patent Office, P.C.',
  link: ''},
{ title: 'Telephone',
  details: '+81-03-5276-3241',
  link: 'tel:81-3-5276-3241'},
{ title: 'Fax',
  details: '+81-03-5276-3242',
  link: ''},
{ title: 'E-mail',
  details: 'opt@patest.co.jp',
  link: 'mailto:opt@patest.co.jp?subject=お問い合わせ&body=以下の項目にお問い合わせ内容を入力のうえ、メール送信してください。%0D%0A(Please fill out the following fields.)%0D%0A%0D%0A【貴社名 / Company name】%0D%0A%0D%0A【ご担当者名 / Name】%0D%0A%0D%0A【部署名 / Division】%0D%0A%0D%0A【ご住所 / Address】%0D%0A%0D%0A【お電話番号 / Phone number】%0D%0A%0D%0A【メールアドレス / E-mail】%0D%0A%0D%0A【お問い合わせ内容 / Content of your inquiry】%0D%0A%0D%0A'},
{ title: 'Mailing Address',
  details: MAILINGADDRESS,
  link: ''}];

export const CONTACT_DATAJP: ContactItem[] = [
{ title: '名称',
  details: '大塚国際特許事務所',
  link: ''},
{ title: '電話',
  details: '03-5276-3241',
  link: 'tel:3-5276-3241'},
{ title: 'Fax',
  details: '03-5276-3242',
  link: ''},
{ title: 'E-mail',
  details: 'opt@patest.co.jp',
  link: 'mailto:opt@patest.co.jp?subject=お問い合わせ&body=以下の項目にお問い合わせ内容を入力のうえ、メール送信してください。%0D%0A(Please fill out the following fields.)%0D%0A%0D%0A【貴社名 / Company name】%0D%0A%0D%0A【ご担当者名 / Name】%0D%0A%0D%0A【部署名 / Division】%0D%0A%0D%0A【ご住所 / Address】%0D%0A%0D%0A【お電話番号 / Phone number】%0D%0A%0D%0A【メールアドレス / E-mail】%0D%0A%0D%0A【お問い合わせ内容 / Content of your inquiry】%0D%0A%0D%0A'},
{ title: '住所',
  details: '〒102-0094 東京都千代田区紀尾井町3-6紀尾井町パークビル7F',
  link: ''}];

export const GOOGLEMAPSURL: string = "https://www.google.com/maps/place/%E5%A4%A7%E5%A1%9A%E5%9B%BD%E9%9A%9B%E7%89%B9%E8%A8%B1%E4%BA%8B%E5%8B%99%E6%89%80/@35.6822126,139.7360413,15z/data=!4m5!3m4!1s0x0:0x367d2e718fa46ffc!8m2!3d35.6822126!4d139.7360413";