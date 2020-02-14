import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipetext',
  templateUrl: './pipetext.component.html',
  styleUrls: ['./pipetext.component.css']
})
export class PipetextComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }
  value= "This is test value";
  date = new Date();
  nameSearch:string = 
  productArr:any[] =[

   /*  'Murali Manohar',
    'Manohar Murali',
    'Manohar Joshi',
    'Manohar Vaddepally',
    'Manohar Joshi',
 */
     {
        sno:1,
        name:'Mobile',
        price:'7000Rs',
        availability:'Available'

     },
     {
      sno:2,
      name:'TV',
      price:'10000Rs',
      availability:'Available'

   },
   {
    sno:3,
    name:'laptop',
    price:'14000Rs',
    availability:'Available'

 },
 {
  sno:4,
  name:'WashingMachine',
  price:'17000Rs',
  availability:'Available'

},
{
  sno:5,
  name:'Mobile(samsung)',
  price:'7000Rs',
  availability:'NotAvailable'

},
{
  sno:6,
  name:'Television(lg)',
  price:'14000Rs',
  availability:'Available'

}

  ]

}
