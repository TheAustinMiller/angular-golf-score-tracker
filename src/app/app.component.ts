import { Component, OnInit } from '@angular/core';
import { Scores } from './models/Scores';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  scorecards: Scores[] = [];

  ngOnInit() {
    const saved = localStorage.getItem('scorecards');
    if (saved) {
      this.scorecards = JSON.parse(saved);
    }
  }

  onScorecardSaved(scorecard: Scores) {
    this.scorecards.push(scorecard);
    localStorage.setItem('scorecards', JSON.stringify(this.scorecards));
  }
}
