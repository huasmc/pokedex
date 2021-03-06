import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { PokemonAppComponent } from '../pokemon-app/pokemon-app.component';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent extends PokemonAppComponent implements OnInit {

  @Output() pokemonClicked = new EventEmitter<Event>();
  offset: number = 0;

  ngOnInit(): void {
    this.getPokemons(this.offset);
  }

  onPokemonClick(event: Event): void {
    this.pokemonClicked.emit(event);
  }

  onForwardClick(): void {
    this.offset = this.offset + 10;
    this.getPokemons(this.offset);
  }

  onPreviousClick(): void {
    if (this.offset !== 0) {
      this.offset = this.offset - 10;
      this.getPokemons(this.offset);
    }
  }
}




