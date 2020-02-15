import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';
import { MatchFunctionsService } from 'src/app/services/match-functions.service'

@Component({
  selector: 'app-match',
  templateUrl: './match.page.html',
  styleUrls: ['./match.page.scss'],
})
export class MatchPage implements OnInit {

  matches: any[] = [];
  pendientes: any[] = [];

  constructor(private matchService: MatchService,
              private matchServiceFunctions: MatchFunctionsService,) { }

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
        
    this.matchServiceFunctions.aceptar(match);  //aceptar el match
    
  }

  rechazar(match){
        
    this.matchServiceFunctions.rechazar(match);  //rechaza el match
  
  }
  
  doRefresh(event) {
    console.log('Begin async operation');

    this.ngOnInit()
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

}

