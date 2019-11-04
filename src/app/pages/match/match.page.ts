import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-match',
  templateUrl: './match.page.html',
  styleUrls: ['./match.page.scss'],
})
export class MatchPage implements OnInit {

  matchs: any[] = [];

  constructor(private matchService: MatchService,) { }

  ngOnInit() {
  
    this.matchService.misMatchs()
      .subscribe(
        (data) => { // Success
          this.matchs = data['match'];
          console.log(data);
        },
        (error) => {
          console.error(error);
        }
      )
  }
 
  
  }

