import { Component, OnInit } from '@angular/core';
import { User } from '../../models/usuario';
import { UserService } from '../../services/user.service';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-user-edit-dashboard',
  templateUrl: './user-edit-dashboard.component.html',
  styleUrls: ['./user-edit-dashboard.component.css'],
  providers: [UserService]
})
export class UserEditDashboardComponent implements OnInit {

  public user: User;
  public status: string;
  public token;
  public identity;

  constructor(private _userService: UserService, private _router: Router, private _route: ActivatedRoute) {
    this.loadUser();
    this.user = new User('', '', '', '', '', '', '', '', '', '', this.identity.userId);
    if (!this.identity) {
      this._router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.loadUser();
    this.getData();
  }

  ngDoCheck() {
    this.loadUser();
  }

  loadUser() {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }

  getData() {
    this._route.params.subscribe(
      params => {
        let id = params['id'];
        this._userService.unicUser(id).subscribe(
          response => {
            if(response.status == 'success') {
              this.user = response.user;
            }else{
              this._router.navigate(['/dashboard/users'])
            }
          },
          error => {
            console.log(<any>error);
            this._router.navigate(['/dashboard/users'])
          }
        );
      }
    );
  }

  onSubmit(form: any) {
    this._userService.update(this.token, this.user, this.user.userId).subscribe(
      response => {
        if(response.status == 'Success') {
          this.status = 'Success';
          this._router.navigate(['/dashboard/users']);
        }
      },
      error => {
        console.log(<any>error);
      }
    )
  }


}