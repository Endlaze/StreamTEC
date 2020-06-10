import { Component, OnInit, Inject } from '@angular/core';
import { PLANS_INFO } from '../../const/plans.constants'
import { StorageService, SESSION_STORAGE } from 'ngx-webstorage-service';
import { MembershipService } from '../../services/membership/membership.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})

export class PlansComponent implements OnInit {
  plansCards = []


  constructor(
    private membershipService: MembershipService,
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private route: ActivatedRoute,
    private router: Router,
  ) {

    this.plansCards = PLANS_INFO
  }

  ngOnInit(): void {

  }

  selectPlan = (idPlan) => {
    let currentUser = this.storage.get('current-user');
    let membershipInfo = { userEmail: currentUser.email, memType: parseInt(idPlan) }

    this.membershipService.createMembership(membershipInfo)
      .subscribe(res => this.membershipSuccess(res, currentUser),
        err => this.membershipError(err));
  }


  updatePlan = (idPlan) => {
    let currentUser = this.storage.get('current-user');

    let membershipInfo = { userEmail: currentUser.email, memType: parseInt(idPlan) }

    this.membershipService.updateMembership(membershipInfo)
      .subscribe(res => this.membershipSuccess(res, currentUser),
        err => this.membershipError(err));
  }

  membershipSuccess = (res, currentUser) => {
    currentUser.membership = res.membership;
    this.storage.set('current-user', currentUser);
    this.router.navigate(['/store']);
  }

  membershipError = (err) => {
    console.log(err);
  }

  isButtonDisabled = (memType) => {
    let currentUser = this.storage.get('current-user');

    let disabled = (this.userHasMembership() && currentUser.membership.memType === parseInt(memType))

    return disabled
  }

  userHasMembership = () => {
    let currentUser = this.storage.get('current-user');

    return (currentUser.membership !== null);
  }
}
