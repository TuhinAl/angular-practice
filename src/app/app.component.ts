import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.formData.value);
  }
  formData = new FormGroup({
    firstName : new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });

}

// new java.math.BigDecimal( ($V{totalExpense}.doubleValue() *100) / $V{totalBudget}.doubleValue() )
