import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Paths } from './paths.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public form = new FormGroup({
    cpf: new FormControl('', Validators.required),
  });

  constructor(private router: Router){
  }

  public send(): void {
    this.router.navigate([Paths.DETAIL, { cpf: this.form.value.cpf }]);
  }


}
