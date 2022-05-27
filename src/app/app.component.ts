import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  

  images = [
    {
      title: "at the beach",
      url: "https://images.unsplash.com/photo-1468413253725-0d5181091126?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJlYWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600",

    },
    {
      title: "at the bar",
      url: "https://www.istockphoto.com/photo/blurred-bokeh-light-on-sunset-with-yellow-string-lights-decor-in-beach-restaurant-gm1314451401-402665300",

    },
    {
      title: "house",
      url: "https://unsplash.com/photos/2gDwlIim3Uw",

    },
    {
      title: "car",
      url: "https://unsplash.com/photos/8xyki0bqvgw",

    },

  ];
}
