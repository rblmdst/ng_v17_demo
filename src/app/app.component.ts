import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

type Level = 'J' | 'M' | 'S';
interface UserInfos {
  name: string;
  level: Level;
}

const initialValue: UserInfos[] = [
  {
    name: 'Toto',
    level: 'M',
  },
  {
    name: 'Ali',
    level: 'S',
  },
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  level: Level | null = null;
  users: UserInfos[] = [];

  ngOnInit(): void {
    this.initList();
  }

  clearList() {
    this.users = [];
  }

  initList() {
    this.users = initialValue;
  }
}
