import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params}from '@angular/router';
import { HeaderService } from 'src/app/servicestest/header.service';
import { GalleryItems } from 'src/app/appModals/gallery'

@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.css']
})
export class GalleryItemComponent implements OnInit,OnDestroy {
  id;
  galleryImages:[];
  selectedItem;

  constructor(
    private _activatedRoute:ActivatedRoute,
    private gallery: GalleryItems,
    private _header: HeaderService
  ) { }

  ngOnInit() {
    this._header.headerNav.next(false);
    this._header.goBackLink.next({text:'Back to Gallery',url:'/gallery'});
    this.id = this._activatedRoute.snapshot.params['id'];

    this.galleryImages = this.gallery.galleryImages;
    console.log(this.galleryImages)

    this.selectedItem = this.gallery.galleryImages[4 -1]

    this._activatedRoute.params.subscribe(
      (params: Params)=>{
        this.id = params['id'];
        this.gallery = this.gallery.galleryImages
        console.log(this.gallery.galleryImages[this.id])
        this.selectedItem = this.gallery.galleryImages[this.id - 1];
        console.log(this.selectedItem)
      }
    );
  }

  ngOnDestroy(){
    this._header.headerNav.next.next(true);
    this._header.goBackLink.next(true);
  }

}
