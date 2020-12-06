import { Component, OnInit } from '@angular/core';
import {Student} from '../Models/students';
import { StudentServiceService } from '../Services/student-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
studentRecord:any;

  constructor(private apiService:StudentServiceService) { }

  ngOnInit(): void {
  }

  getStudent(){
    this.apiService.get('http://localhost:3000/api/student').subscribe((data) => {
      this.studentRecord = data;
      console.log(data);
    });
  }
  addStudent(data:Student){
    this.apiService.create('http://localhost:3000/api/student/send',data).subscribe((data)=> {
      console.log(data);
    });
  }
  delStudent(id:any){
    this.apiService.delete('http://localhost:3000/api/student/'+id).subscribe((data)=> {
      console.log(data);
    });
  }
}
