import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {
  user: any;

  ngOnInit(): void {
    // Échantillon de données utilisateur
    this.user = {
      name: 'John Doe',
      email: 'johndoe@example.com',
      joined: '2022-01-01'
    };
  }
}