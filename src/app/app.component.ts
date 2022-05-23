import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private formbuilder: FormBuilder) { }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

  // profileForm  = new FormGroup({
  //   firstName : new FormControl(''),
  //   lastName: new FormControl(''),
  //   email: new FormControl(''),
  //   hobbies: new FormControl(''),
  //   address: new FormGroup({
  //     street: new FormControl(''),
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     zip: new FormControl('')
  //   })
  // });

  // using form control
  profileForm = this.formbuilder.group({
    firstName: [''],
    lastName: [''],
    email: [''],
    hobbies: [''],
    address: this.formbuilder.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),

  });

}

// new java.math.BigDecimal( ($V{totalExpense}.doubleValue() *100) / $V{totalBudget}.doubleValue() )
