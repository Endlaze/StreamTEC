import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class MembershipService {

  membershipUrl = environment.apiUrl + '/membership';

  constructor(private http: HttpClient) { }

  public createMembership(membershipInfo) {
    return this.http.post(this.membershipUrl + '/create', membershipInfo, {});
  }

  public updateMembership(membershipInfo) {
    return this.http.post(this.membershipUrl + '/update', membershipInfo, {});
  }
}
