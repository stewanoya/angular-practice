import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/models/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  currentlySelectedRecipe: Recipe;
  constructor() {}

  ngOnInit(): void {}
  selectedRecipe(e) {
    this.currentlySelectedRecipe = e;
  }
}
