import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gifs, GifsResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _tagsHistory: string[] = [];

  public gifsList: Gifs[] = [];

  private _apiKey: string = '1SMQVQuqzvc6Gns6ZmI5W8KAdbdjZwx0';

  private _serviceUrl = 'https://api.giphy.com/v1/gifs';

  constructor(private http: HttpClient) { }

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  private organizeTagsHistory(tag: string): void {

    tag = tag.toLowerCase();
    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((item) => item != tag);
    }

    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.splice(0, 10);
  }

  public searchTag(tag: string): void {
    if (tag.length === 0) return;
    this.organizeTagsHistory(tag);

    const params = new HttpParams()
      .set('api_key', this._apiKey)
      .set('limit', 10)
      .set('q', tag)

    this.http.get<GifsResponse>(`${this._serviceUrl}/search`, { params }).subscribe(response => {
      this.gifsList = response.data;
    })
  }
}
