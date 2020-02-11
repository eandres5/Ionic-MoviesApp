import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PeliService } from '../../services/peli.service';
import { IPelis } from '../../model/IPelis.interface'; 
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-pelis',
  templateUrl: './pelis.page.html',
  styleUrls: ['./pelis.page.scss'],
})
export class PelisPage implements OnInit {

  results: Observable<IPelis> ;
  term: string="";
  type: string="";

  constructor(private peliService: PeliService,
    private authSvc: AuthService, 
    private router: Router, 
    private afAuth: AngularFireAuth ) { }

  ngOnInit() {
  }

  onLogout(){
    console.log('Logout');
    this.afAuth.auth.signOut();
    this.router.navigateByUrl('/login');
  }

  searchChanged(): void {
    this.results = this.peliService.searchMovies(this.term,this.type);
  }

}
