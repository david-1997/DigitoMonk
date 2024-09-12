import { Component, OnInit } from '@angular/core';
import lgZoom from 'lightgallery/plugins/zoom';
import { BeforeSlideDetail } from 'lightgallery/lg-events';
@Component({
  selector: 'app-web-design',
  templateUrl: './web-design.component.html',
  styleUrls: ['./web-design.component.css']
})
export class WebDesignComponent implements OnInit {
  
  settings = {
    counter: false,
    download: false,

    plugins: [lgZoom]
  };
  onBeforeSlide = (detail: BeforeSlideDetail): void => {
    const { index, prevIndex } = detail;
    console.log(index, prevIndex);
  };

  constructor() { }

  ngOnInit(): void {
    
  }

  

  // ngAfterViewInit(): void {
  //   const lg = (window as any).lightGallery;
  //   lg(document.getElementById('lightgallery'), {
  //     selector: '.item',
  //     thumbnail: true,

  //   });
  // }

}
