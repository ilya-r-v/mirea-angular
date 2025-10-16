import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Theme {
  private currentThemeSubject = new BehaviorSubject<'light' | 'dark'>('light');
  public currentTheme$: Observable<'light' | 'dark'> = this.currentThemeSubject.asObservable();

  constructor(@Inject(DOCUMENT) private document: Document) {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
    this.currentThemeSubject.next(initialTheme);
    this.applyTheme(initialTheme);
  }

  toggleTheme(): void {
    const newTheme = this.currentThemeSubject.value === 'light' ? 'dark' : 'light';
    this.currentThemeSubject.next(newTheme);
    this.applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  }

  getCurrentTheme(): string {
    return this.currentThemeSubject.value;
  }

  private applyTheme(theme: 'light' | 'dark'): void {
    const body = this.document.body;
    if (theme === 'dark') {
      body.classList.add('dark-theme');
      body.classList.remove('light-theme');
    } else {
      body.classList.add('light-theme');
      body.classList.remove('dark-theme');
    }
  }
}