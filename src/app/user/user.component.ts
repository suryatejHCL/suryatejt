import { Component, OnInit } from '@angular/core';
import { UserRegFormServiceService } from "../user-reg-form-service.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  receivedFormData: any;
  constructor( private formDataService: UserRegFormServiceService ) { }

  ngOnInit() {
    this.formDataService.formData$.subscribe(formData => {
      this.receivedFormData = formData;
    });
  }
}
