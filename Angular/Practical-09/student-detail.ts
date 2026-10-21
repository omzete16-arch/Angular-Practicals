import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-detail',
  standalone: true,
  template: `
    <h2>Student Details</h2>
    <p>Student ID received from the URL: <b>{{ studentId }}</b></p>
  `
})
export class StudentDetail {
  studentId: string | null = '';

  constructor(private route: ActivatedRoute) {
    this.studentId = this.route.snapshot.paramMap.get('id');
  }
}
