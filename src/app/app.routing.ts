import { Routes, RouterModule } from '@angular/router';

import { HomeRoutes } from './home/index';
import { TodolistRoutes } from './todolist/index';
import { BandlistRoutes } from './bandlist/index';

const appRoutes: Routes = [
    ...HomeRoutes,
    ...TodolistRoutes,
    ...BandlistRoutes
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
