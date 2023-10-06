import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs..service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {

  @ViewChild('txtTagInput')
  tagInput!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) {

  }

  public searchTag() {
    const tag = this.tagInput.nativeElement.value;
    this.gifsService.searchTag(tag);
    this.tagInput.nativeElement.value = '';
  }
}
