import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-match',
  templateUrl: './match.page.html',
  styleUrls: ['./match.page.scss'],
})
export class MatchPage implements OnInit {

  matches: any[] = [];
  pendientes: any[] = [];

  constructor(private matchService: MatchService,) { }

  ngOnInit() {
  
    this.matchService.misMatches()  //los aceptados
      .subscribe(
        (data) => { // Success
          this.matches = data['match'];
          console.log(data);
        },
        (error) => {
          console.error(error);
        }
      )

      this.matchService.pendientes()  //los pendientes
      .subscribe(
        (data) => { // Success
          this.pendientes = data['match'];
          console.log(data);
        },
        (error) => {
          console.error(error);
        }
      )
  }
 
  aceptar(match){
        
    this.matchService.aceptar(match)  //aceptar el match
    .subscribe(
      (data) => { // Success
        console.log(data);
      },
      (error) => {
        console.error(error);
      }
    )
  
  }

  rechazar(match){
        
    this.matchService.rechazar(match)  //rechaza el match
    .subscribe(
      (data) => { // Success
        console.log(data);
      },
      (error) => {
        console.error(error);
      }
    )
  
  }
  
}

