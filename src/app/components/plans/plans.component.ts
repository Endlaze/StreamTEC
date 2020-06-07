import { Component, OnInit } from '@angular/core';
import { PLANS_INFO } from '../../const/plans.constants'

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})

export class PlansComponent implements OnInit {
  plansCards = []

  constructor() {
    this.plansCards = PLANS_INFO
  }

  ngOnInit(): void {
  }

  selectPlan(idPlan) {
    console.log(idPlan)
  }

}
