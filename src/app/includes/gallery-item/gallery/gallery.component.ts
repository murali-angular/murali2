import { Component, OnInit } from '@angular/core';
import { GalleryItems } from 'src/app/appModals/gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor(private gallery: GalleryItems) { }

  galleryImages:[];

  ngOnInit() {
    this.galleryImages = this.gallery.galleryImages
    console.log(this.galleryImages)
  }

}
