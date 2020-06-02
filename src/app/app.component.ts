import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "DJ while()";
  songs = [
    {id: 1, name:'Missing you' ,image: "https://pixabay.com/get/54e9dc404856ac14f1dc8460da293277143edde6545972_640.jpg"},
    {id: 2, name:'The way', image: "https://pixabay.com/get/55e0d5414c56ab14f1dc8460da293277143edde0525874_640.jpg"},
    {id: 3, name:'Tropical paradise', image: "https://pixabay.com/get/55e0d5414c57ad14f1dc8460da293277143edde0515573_640.jpg"},
    {id: 4, name:"Clap your hand's", image: "https://pixabay.com/get/54e9dc404851ad14f1dc8460da293277143edde0515670_640.jpg"}
];
}
