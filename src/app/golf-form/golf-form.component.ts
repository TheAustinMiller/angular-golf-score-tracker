import { Component, EventEmitter, Output } from '@angular/core';
import { Scores } from '../models/Scores';

@Component({
  selector: 'app-golf-form',
  templateUrl: './golf-form.component.html',
  styleUrls: ['./golf-form.component.css']
})
export class GolfFormComponent {
  scorecard: Scores = new Scores();
  
  @Output() scorecardSaved = new EventEmitter<Scores>();

  constructor() {
    // Initialize with 18 holes
    this.scorecard.par = Array(18).fill(0);
    this.scorecard.score = Array(18).fill(0);
  }

  trackByIndex(index: number, item: any): number {
  return index;
  }


  saveScorecard() {
    // Emit the whole scorecard object
    this.scorecardSaved.emit(this.scorecard);

    // Reset after save (optional)
    this.scorecard = new Scores();
    this.scorecard.par = Array(18).fill(0);
    this.scorecard.score = Array(18).fill(0);
  }
}
