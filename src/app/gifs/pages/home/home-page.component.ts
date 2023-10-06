import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs..service';
import { Gifs } from '../../interfaces/gifs.interface';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {

  constructor(private gifService: GifsService) { }

  get gifs(): Gifs[] {
    return this.gifService.gifsList;
  }
}
