import { Routes } from '@angular/router';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';
import { HeaderComponent } from './header/header.component';
<<<<<<< HEAD
import { DetailsComponent } from './details/details.component';
=======
>>>>>>> 2b38d1b910e9cb5a29ef12c5338337fc86b40182

export const routes: Routes = [

    { path: '', redirectTo: '/page-accueil', pathMatch: 'full' },
    { path: 'page-accueil', component: PageAccueilComponent },
    { path: 'header', component: HeaderComponent},
<<<<<<< HEAD
    { path: 'product/:id', component: DetailsComponent},
    
=======
>>>>>>> 2b38d1b910e9cb5a29ef12c5338337fc86b40182
    // { path: 'pokemon-list', component: PokemonListComponent},
    // { path: 'favorites', component: FavoriteListComponent },
    // { path: 'login', component: LoginComponent },
    // { path: 'add-pokemon', component: AddPokemonComponent }
];
