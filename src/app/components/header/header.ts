import { Component } from '@angular/core';
import { Theme } from '../../theme'; // путь к вашему сервису

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  isDarkTheme = false;

  constructor(private theme: Theme) {
    this.isDarkTheme = this.theme.getCurrentTheme() === 'dark';
  }

  toggleTheme(): void {
    this.theme.toggleTheme();
    this.isDarkTheme = !this.isDarkTheme;
  }
}