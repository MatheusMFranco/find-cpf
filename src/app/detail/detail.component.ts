import { Component, OnInit } from '@angular/core';
import { Cartao } from '../cartao.model';
import { Observable, tap } from 'rxjs';
import { CardsService } from '../cards.service';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  public items$!: Observable<Cartao[]>;

  public items: Cartao[] = [
    {
      numero: '11111',
      codigo: '4',
      tipo: 'ambos',
      bandeira: 'visa',
      limite: 1,
    },
    {
      numero: '11111',
      codigo: '4',
      tipo: 'ambos',
      bandeira: 'visa',
      limite: 1,
    },
    {
      numero: '11111',
      codigo: '4',
      tipo: 'ambos',
      bandeira: 'visa',
      limite: 1,
    },
  ]

  constructor(
    private cardService: CardsService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.data
      .pipe(
        tap((data: any) => {
          console.log(data);
          this.items$ = this.cardService.findCards(data?.cpf);
        }),
      ).subscribe();
    //this.items$ = this.cardService.findCards();
  }

}
