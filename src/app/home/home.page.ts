import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import { PeliService } from '../services/peli.service';
import { IPelis } from '../model/IPelis.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  result: Observable<IPelis>;
  term: string="";
  type: string="";

  constructor(private authSvc: AuthService, 
    private router: Router, 
    private afAuth: AngularFireAuth,
    private peliService: PeliService) {}

  onLogout(){
    console.log('Logout');
    this.afAuth.auth.signOut();
    this.router.navigateByUrl('/login');
  }

  searchChanged(): void {
    this.result = this.peliService.searchMovies(this.term, this.type);
  }

}

