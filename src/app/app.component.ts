import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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

  profileForm  = new FormGroup({
    firstName : new FormControl('', [Validators.required, 
      Validators.minLength(3)]),
    lastName: new FormControl('', Validators.required),
    email: new FormControl(''),
    hobbies: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  });


  

  get first(){
    return this.profileForm.get('firstName');
  }

  // using form control
  // profileForm = this.formbuilder.group({
  //   firstName: ['', Validators.required, Validators.maxLength],
  //   lastName: [''],
  //   email: [''],
  //   hobbies: [''],
  //   address: this.formbuilder.group({
  //     street: [''],
  //     city: [''],
  //     state: [''],
  //     zip: ['']
  //   }),

  // });

}

// new java.math.BigDecimal( ($V{totalExpense}.doubleValue() *100) / $V{totalBudget}.doubleValue() )
