import { Routes } from '@angular/router';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';
import { HeaderComponent } from './header/header.component';
import { DetailsComponent } from './details/details.component';
import { ContactComponent } from './contact/contact.component';
import { PanierComponent } from './panier/panier.component';

export const routes: Routes = [

    { path: '', redirectTo: '/page-accueil', pathMatch: 'full' },
    { path: 'page-accueil', component: PageAccueilComponent },
    { path: 'header', component: HeaderComponent},
    { path: 'product/:id', component: DetailsComponent},
    { path: 'contact', component: ContactComponent},
    { path: 'panier', component: PanierComponent},

    // { path: 'favorites', component: FavoriteListComponent },
    // { path: 'login', component: LoginComponent },
    // { path: 'add-pokemon', component: AddPokemonComponent }
];
