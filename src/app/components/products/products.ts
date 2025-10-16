import { Component } from '@angular/core';
import { Theme } from '../../theme';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.html',
  styleUrl: './products.scss'
})
export class Products {
  isDarkTheme = false;

  constructor(private theme: Theme) {
    this.theme.currentTheme$.subscribe(theme => {
      this.isDarkTheme = theme === 'dark';
    });
  }
}
