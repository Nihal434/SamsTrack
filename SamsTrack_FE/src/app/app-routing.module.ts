import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { AllUserComponent } from './components/all-user/all-user.component';
import { AllStudentComponent } from './components/all-student/all-student.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { AllSubjectComponent } from './components/all-subject/all-subject.component';
import { AddSubjectComponent } from './components/add-subject/add-subject.component';
import { TakeAttendanceComponent } from './components/take-attendance/take-attendance.component';
import { AllAttendanceComponent } from './components/all-attendance/all-attendance.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full',

  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'add-user',component:AddUserComponent
  },
  {
    path:'all-user',component:AllUserComponent
  },
  {
    path:'all-student',component:AllStudentComponent
  },
  {
    path:'add-student',component:AddStudentComponent
  },
  {
    path:'all-subject',component:AllSubjectComponent
  },
  {
    path:'add-subject',component:AddSubjectComponent
  },
  {
    path:'add-attendance',component:TakeAttendanceComponent
  },
  {
    path:'all-attendance',component:AllAttendanceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
