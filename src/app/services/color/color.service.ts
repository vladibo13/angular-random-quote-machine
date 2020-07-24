import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  constructor() {}

  getRandomColor(): string {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `
        rgba(${r},${g},${b})
        `;
  }
}
