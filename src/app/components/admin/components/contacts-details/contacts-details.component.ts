import { Component, OnInit } from '@angular/core';
import {User} from "../../User";
import {map, Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {AdminService} from "../../services/admin.service";

@Component({
  selector: 'app-contacts-details',
  templateUrl: './contacts-details.component.html',
  styleUrls: ['./contacts-details.component.scss']
})
export class ContactsDetailsComponent implements OnInit {
  id!: number
  user!: Observable<User>
  constructor(private activateRoute: ActivatedRoute, private adminService: AdminService) { }

  ngOnInit(): void {
    // this.activateRoute.params.subscribe((params) => this.id = params?.['id'])
    // this.user = this.adminService.getPerson(this.id);

    this.user = this.activateRoute.data.pipe(map((data) => data?.['user']))
  }

}
