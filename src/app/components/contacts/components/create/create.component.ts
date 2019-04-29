import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { SalesForceService } from 'src/app/libs/services/SalesForce.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass'],
  providers: [
    SalesForceService,
    ReactiveFormsModule
  ]
})
export class CreateComponent implements OnInit {

  form: FormGroup;

  constructor(
    private salesForceSvc: SalesForceService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      Name: new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.salesForceSvc.createContact({
        Name: this.form.controls.Name.value
      }).then(data => {
        if (data && data.success) {
          this.router.navigate(['contacts']);
        }
      });
    }
  }

}
