import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkThemeSubject = new BehaviorSubject<boolean>(
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );
  
  isDarkTheme$ = this.isDarkThemeSubject.asObservable();

  constructor() {
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', e => {
        this.isDarkThemeSubject.next(e.matches);
      });
  }

  toggleTheme() {
    this.isDarkThemeSubject.next(!this.isDarkThemeSubject.value);
  }

  getCurrentTheme(): boolean {
    return this.isDarkThemeSubject.value;
  }
}