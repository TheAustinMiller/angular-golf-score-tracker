import { Component, Input } from '@angular/core';
import { Scores } from '../models/Scores';

@Component({
  selector: 'app-golf-list',
  templateUrl: './golf-list.component.html',
  styleUrls: ['./golf-list.component.css']
})
export class GolfListComponent {
  @Input() scorecards: Scores[] = [];

  getTotal(scores: number[]): number {
    return scores.reduce((sum, n) => sum + n, 0);
  }

  getParTotal(pars: number[]): number {
    return pars.reduce((sum, n) => sum + n, 0);
  }

  getDifference(scorecard: Scores): number {
    return this.getTotal(scorecard.score) - this.getParTotal(scorecard.par);
  }
}
