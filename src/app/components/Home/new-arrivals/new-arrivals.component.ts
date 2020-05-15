import { Component, OnInit } from '@angular/core';
import { ProductsInterface } from 'src/app/Interfaces/ecomerce.interfaces';
import { from } from 'rxjs';
import { take, tap, map } from 'rxjs/operators';
import { products } from '../../Data/data';

@Component({
  selector: 'app-new-arrivals',
  templateUrl: './new-arrivals.component.html',
  styleUrls: ['./new-arrivals.component.css'],
})
export class NewArrivalsComponent implements OnInit {
  public NewProducts: Array<ProductsInterface> = [];

  constructor() {
    this.GiveNewArriva()
  }

  ngOnInit(): void {}

  GiveNewArriva() {
    from(products).pipe(
      map((producto) => {
        let NewDirectionImg = 
        `./../../${producto.img}`;

        return{
          ...producto, img:NewDirectionImg
        }
      }),
      take(4),
      tap((value)=>this.NewProducts.push(value))
    ).subscribe((value)=> console.log( this.NewProducts))
  }
}
