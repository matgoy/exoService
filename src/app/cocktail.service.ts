import { Injectable } from '@angular/core';
import { Cocktail } from './cocktail';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  private cocktail: Cocktail[] = [
    {
      name: 'ricard',
      price: 2,
      image:'https://thegoodlife.thegoodhub.com/wp-content/thumbnails/uploads/sites/2/2021/06/marques-francaises-culte-pernod-ricard-pastis-apero-2-77-tt-width-1120-height-400-crop-1-bgcolor-ffffff.jpg'

    },
    {
      name: 'mojito',
      price: 8,
      image: 'https://st.depositphotos.com/1364311/1938/i/600/depositphotos_19388911-stock-photo-mojito-cocktail.jpg'

    },
    {
      name: 'cosmopolitan',
      price: 12,
      image: 'https://res.cloudinary.com/hv9ssmzrz/image/fetch/c_fill,f_auto,h_488,q_auto,w_650/https://s3-eu-west-1.amazonaws.com/images-ca-1-0-1-eu/recipe_photos/original/211219/cosmopolitan-cocktail-AdobeStock_126070414.jpg'

    }
  ]

  constructor() { }

  getCocktails(): Cocktail[]{
    return this.cocktail
  }
}
