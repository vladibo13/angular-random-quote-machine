import { Component, OnInit } from '@angular/core';
import { ColorService } from './services/color/color.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  color: string;

  constructor(private colorService: ColorService) {}

  onChangeColor() {
    this.getRandomColor();
  }

  getRandomColor(): void {
    this.color = this.colorService.getRandomColor();
  }

  ngOnInit(): void {}
}
