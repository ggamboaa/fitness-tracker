import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrainingService } from './training.service';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss'],
})
export class TrainingComponent implements OnInit, OnDestroy {
  ongoingTraining = false;
  exerciseSubscription: Subscription;

  constructor(private trainingService: TrainingService) {}

  ngOnInit(): void {
    this.exerciseSubscription = this.trainingService.exerciseChanged.subscribe(
      (exercise) => {
        this.ongoingTraining = exercise ? true : false;
      }
    );
  }

  ngOnDestroy(): void {
    this.exerciseSubscription.unsubscribe();
  }
}
