import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() childMessage: any;
  // rome = false;
  // athens = false;
  // berlin = false;

  cities = [{
    name: 'Rom',
    info: 'Rom bjuder på mer än Colosseum och Vatikanen. Den senaste tiden har många nya barer och restauranger öppnat och romarna är fulla av energi och visar att den antika staden inte bara består av gamla klassiker.\n' +
      '\n' +
      'Här finns också mycket att se för den som är intresserad av mode och arkitektur, långt ifrån de mest uppenbara attraktionerna. Ett exempel är modehuset Fendis nya högkvarter i det kvadratformade Colosseum. Eller den för detta el- och gascentralen Montemartini som har en av stadens största samlingar av romerska statyer. Eller ät på Il Mazzo, en av Italiens mest innovativa restauranger.'
  }, {
    name: 'Aten',
    info: 'Aten är Greklands huvudstad och ligger på halvön Attika nära Eginabukten vid Egiska havet. Staden omges av bergen Pateras, Parnes, Penetelikon och Hymettos. Idag täcker staden hela slätten mellan bergen vilket gör att staden har fortsatt växa i förorterna på andra sidan bergen. Från Aten kan du ta dig till de flesta ställena i Grekland antingen med flyg, båt, tåg eller buss.I Aten bor mer än fyra miljoner människor och staden har en befolkningstäthet på 18 487 inv/km². Valutan som används i Aten och resten av landet är Euro. Grekland ' +
      'och Aten är sedan en tid tillbaka ett väldigt populärt resmål i Europa för turister. \n'
  }, {
    name: 'Berlin',
    info: ' Idag är det en grön och lummig stad med gator kantade av lummiga träd och därunder charmanta kaféer, exotiska restauranger och underbart dekadenta barer. Ibland överlappar de varandra och det händer att någon äter frukost sidan om nattsuddare som poppar ännu en flaska champagne.\n' +
      'Att priserna i Berlin är behagligt låga gör att man inte behöver tänka en gång extra om man verkligen har råd, det är bara att skämma bort sig själv. Dessutom är ju staden så otroligt nära – 45 minuters flygtid från Köpenhamn, lite längre från Stockholm. Packa lätt, shoppingen ' +
      'är outstanding med massor med rolig lokal design och mycket bra loppisar.'
  }, {
    name: 'Mexico-City',
    info: 'Mexiko har på bara några år blivit ett av de mest populära resmålen för svenskar som vill fly vintern. Här finns mytomspunna mayaruiner, artrika barriärrev, paradisöar, spännande städer och vita stränder. Mexiko bockar av flera kriterier för en riktig drömsemester.\n' +
      'Reser man på chartersemester till Mexiko kommer man till Mayarivieran, ett område på Yucatanhalvön längs den karibiska kusten med en rad turistorter. Playa del Carmen är perfekt om man söker vardagsliv. För stillsamt hotell- och strandliv bör man hellre välja Tulum, Puerto Aventuras eller Akumal. Lite av båda hittar man i Puerto Morelos eller på öarna Isla Holbox och Isla Mujeres.'
  }];

  @Output() citiesEvent = new EventEmitter<any>();

  constructor() {
    console.log(this.childMessage);
  }

// <button (click)="showAthens()">Athens</button>
// <button (click)="showBerlin()">Berlin</button>
// <button (click)="showMexicoCity()">Mexico City</button>


  showRome(event: Event) {
    console.log(event);

    this.citiesEvent.emit(this.cities[0]);
  }

  showAthens(event: Event) {
    this.citiesEvent.emit(this.cities[1]);
  }

  showBerlin(event: Event) {
    this.citiesEvent.emit(this.cities[2]);
  }

  showMexicoCity(event: Event) {
    this.citiesEvent.emit(this.cities[3]);
  }

  ngOnInit() {
  }

}
