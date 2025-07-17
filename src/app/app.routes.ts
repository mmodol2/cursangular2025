import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { PageNotFound } from './pages/page-not-found/page-not-found';
import { AddImage } from './pages/add-image/add-image';
import { ImagesInformation } from './pages/images-information/images-information';
import { ImagesList } from './elements/images-list/images-list';


export const routes: Routes = [
    { path: 'images', component: ImagesList },
    { path: 'home', component: Home },
    { path: 'info', component: ImagesInformation },
    { path: 'add', component: AddImage },
    { path: '', redirectTo: 'images', pathMatch: 'full' },
    { path: '**', component: PageNotFound }
];
