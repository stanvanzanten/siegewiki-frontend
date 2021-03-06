import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../backend.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  userEditData = {};

  constructor( 
    private _backendService: BackendService
    ) { }

  ngOnInit() {}

  displayEditName() {
    if (this.userEditData === {}) return false;
    else return true;
  }

  editUser() {
    //console.log(this.userEditData)
    this._backendService.editUser(this.userEditData)
    .subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }
}
