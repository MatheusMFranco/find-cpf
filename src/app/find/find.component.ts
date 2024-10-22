import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Paths } from '../paths.enum';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.scss']
})
export class FindComponent {

  public form = new FormGroup({
    cpf: new FormControl('', Validators.required),
  });

  constructor(private router: Router){}

  public send(): void {
    this.router.navigate([Paths.DETAIL, { cpf: this.form.value.cpf }]);
  }

}
