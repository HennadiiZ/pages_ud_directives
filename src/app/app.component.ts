import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  currentPage = 0; 
  string!: boolean;
  
  images = [
    {
      title: "At the beach.",
      url: "https://images.unsplash.com/photo-1468413253725-0d5181091126?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJlYWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600",

    },
    {
      title: "At the bar.",
      url: "https://media.istockphoto.com/photos/blurred-bokeh-light-on-sunset-with-yellow-string-lights-decor-in-picture-id1314451401?b=1&k=20&m=1314451401&s=170667a&w=0&h=tVTkeVLM5s87tba4mmsG_gMywEH8Wms6PdCjcbAYOcA=",

    },
    {
      title: "House.",
      url: "https://media.istockphoto.com/photos/new-homes-on-a-quiet-street-in-raleigh-nc-picture-id1319270783?b=1&k=20&m=1319270783&s=170667a&w=0&h=p873ZnnKZXb2p33ykA_F4AGxXk7iCBK394AqP8CuFlE=",

    },
    {
      title: "Car.",
      url: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600",

    },

  ];


  // changeActiveClass(i: number){
  //   this.currentPage = i;
  // }

  Prev(){
    this.currentPage--
    if(this.currentPage < 0){
       this.currentPage = this.images.length - 1
    }
  }

  Next(){
    this.currentPage++
    if(this.currentPage > this.images.length - 1){
      this.currentPage = 0
    }
  }


}
