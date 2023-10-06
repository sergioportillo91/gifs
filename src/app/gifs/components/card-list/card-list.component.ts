import { Component, Input } from '@angular/core';
import { GifsService } from '../../services/gifs..service';
import { Gifs } from '../../interfaces/gifs.interface';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent {

  @Input()
  public gifsLista: Gifs[] = [];
}
