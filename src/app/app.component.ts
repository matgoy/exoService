import { Component } from '@angular/core';
import { CocktailService } from './cocktail.service';
import { Cocktail } from './cocktail';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  public cocktails: Cocktail[]

  constructor(private cocktailService: CocktailService) {
    this.cocktails = this.cocktailService.getCocktails()
  }
}
