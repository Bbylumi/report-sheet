import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-report',
  standalone: true,
  imports: [CommonModule ], 
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
})


export class ReportComponent{

  
  parish: string = 'Emmanuel Parish';
  month: string = 'December';
  year: number = 2024;
  area: string = 'Faith-Mega Area';
  

  // table data
  first_sunday: string = '2024-11-03';
  men: number = 10;
  women: number = 15;
  children: number = 20;
  total: number = 45;
  preacher: string = ' Pastor Bankole';
  new: number = 5;
  guest: number = 2;

  // first tuesday data
  tuesday_men: number = 4;
  tuesday_women: number = 5;
  tuesday_children: number = 2;
  tuesday_total: number = 11;
  tuesday_date: string = '2024-11-05';

  //tursday data
  thursday_date: string = '2024-11-07';
  thursday_men: number = 4;
  thursday_women: number = 5;
  thursday_children: number = 2;
  thursday_total: number = 11;
  thursday_preacher: string = 'sis victoria';

  //second sunday
  seconds = [
    {
      date: "2024-11-10",
      serviceType: 'Sunday Morning',
      men: "20",
      women: "10",
      children: '5',
      total: '35',
      new: '2',
      guest: '1'
    },
    {
      date: '2024-11-12',
      serviceType: 'Tue. / Wed.',
      men: "4",
      women: "5",
      children: "2",
      total: "11",
      preacher: "Pastor Bankole"
    },
    {
      date: '2024-11-14',
      serviceType: 'Thursday',
      men: '2',
      women: "3",
      children: "5",
      total: "10",
      preacher: ''
    }
  ];
  // second_sunday: string = '2024-10-10';
  // second_men: number = 10;
  // second_women: number = 15;
  // second_children: number = 20;
  // second_total: number = 45;
  // second_new: number = 5;
  // second_guest: number = 2; 

  thirds = [
    {
      date: "2024-11-17",
      serviceType: 'Sunday Morning',
      men: "20",
      women: "10",
      children: '5',
      total: '35',
      preacher: 'Pastor Bankole',
      new: '2',
      guest: '1'
    },

  
    {
      date: '2024-11-19',
      serviceType: 'Tue. / Wed',
      men: "4",
      women: "5",
      children: "2",
      total: "11",
      preacher: "Pastor Bankole"
    },

    
    {
      date: '2024-11-21',
      serviceType: 'Thursday',
      men: "4",
      women: "5",
      children: "2",
      total: "11",
      preacher: "Pastor Bankole"
    }
  ]


  ///Fourth sunday
  fourths = [
    {
      date: "2024-11-24",
      serviceType: 'Sunday Morning',
      men: "20",
      women: "10",
      children: '5',
      total: '35',
      preacher: 'Pastor Bankole',
      new: '2',
      guest: '1'
    },

  
    {
      date: '2024-11-26',
      serviceType: 'Tue. / Wed',
      men: "4",
      women: "5",
      children: "2",
      total: "11",
      preacher: "Pastor Bankole"
    },

    
    {
      date: '2024-11-28',
      serviceType: 'Thursday',
      men: "4",
      women: "5",
      children: "2",
      total: "11",
      preacher: "Pastor Bankole"
    }
  ]


  //fifth sunday
  fifths = [
    {
      date: "",
      serviceType: 'Sunday Morning',
      men: "",
      women: "",
      children: '',
      total: '',
      preacher: '',
      new: '',
      guest: ''
    },
    {
      date: '',
      serviceType: 'Tue. / Wed',
      men: "",
      women: "",
      children: "",
      total: "",
      preacher: ""
    },
    {
      date: '',
      serviceType: 'Thursday',
      men: "",
      women: "",
      children: "",
      total: "",
      preacher: ""
    }
  ]
  averages = [
    {
      date: "",
      serviceType: 'Tuesday',
      men: "",
      women: "",
      children: '',
    },
    {
      date: '',
      serviceType: 'Thursday',
      men: "",
      women: "",
      children: "",
      total: "",
      preacher: ""
    },
    {
      date: '',
      serviceType: 'Sunday',
      men: "",
      women: "",
      children: "",
      total: "",
      preacher: ""
    }
  ]
}