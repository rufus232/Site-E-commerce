import { Routes } from '@angular/router';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';
import { HeaderComponent } from './header/header.component';
import { DetailsComponent } from './details/details.component';

export const routes: Routes = [

    { path: '', redirectTo: '/page-accueil', pathMatch: 'full' },
    { path: 'page-accueil', component: PageAccueilComponent },
    { path: 'header', component: HeaderComponent},
    { path: 'product/:id', component: DetailsComponent},
    
    // { path: 'pokemon-list', component: PokemonListComponent},
    // { path: 'favorites', component: FavoriteListComponent },
    // { path: 'login', component: LoginComponent },
    // { path: 'add-pokemon', component: AddPokemonComponent }
];
