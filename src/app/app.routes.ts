import { Routes } from '@angular/router';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';
import { HeaderComponent } from './header/header.component';

export const routes: Routes = [

    { path: '', redirectTo: '/page-accueil', pathMatch: 'full' },
    { path: 'page-accueil', component: PageAccueilComponent },
    { path: 'header', component: HeaderComponent},
    // { path: 'pokemon-list', component: PokemonListComponent},
    // { path: 'favorites', component: FavoriteListComponent },
    // { path: 'login', component: LoginComponent },
    // { path: 'add-pokemon', component: AddPokemonComponent }
];
