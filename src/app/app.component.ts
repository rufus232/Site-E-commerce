import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
<<<<<<< HEAD
import { CommonModule } from '@angular/common';
=======
>>>>>>> 2b38d1b910e9cb5a29ef12c5338337fc86b40182
import { HeaderComponent } from "./header/header.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
<<<<<<< HEAD
    imports: [RouterOutlet, HeaderComponent, CommonModule]
=======
    imports: [RouterOutlet, HeaderComponent]
>>>>>>> 2b38d1b910e9cb5a29ef12c5338337fc86b40182
})
export class AppComponent {
  title = 'E-commerce';
}
