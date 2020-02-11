import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IPelis } from '../model/IPelis.interface'
 
@Injectable({
  providedIn: 'root'
})
export class PeliService {

  private url: string='';
  private apikey: string='c38ea7d7e3aebc1d9c169c5a3fb6e3d5';
  private apikeyOMDb: string='b632913e';

  
  
  constructor(private http: HttpClient) { }

  searchMovies(title: string, type:string){
    this.url = `http://www.omdbapi.com/?s=${encodeURI(title)}&type=${type}&apiKey=${this.apikeyOMDb}`;
    console.log(this.url);
    return this.http.get<IPelis>(this.url).pipe(map(results => results['Search']));
  }

  getDetails(id: string){
    return this.http.get<IPelis>(`http://www.omdbapi.com/?i=${id}&plot=full&apiKey=${this.apikeyOMDb}`);
  }
  
}
