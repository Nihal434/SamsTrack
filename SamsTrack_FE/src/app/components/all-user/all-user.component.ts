import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css']
})
export class AllUserComponent implements OnInit {
  userList:any;
  constructor(private userService:UserServiceService){}
  ngOnInit(): void {
    this.allUser();
  }

  allUser(){
    this.userService.allUser().subscribe((response)=>{
      this.userList=response;
    });
  }

}
