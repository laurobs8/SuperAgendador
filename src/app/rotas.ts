import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { StarComponent } from './star/star.component';

const rotas: Routes = [

    {path: '', component: InfoComponent},
    {path: 'repos', component: InfoComponent},
    {path: 'stared', component: StarComponent}

];
export const route: ModuleWithProviders = RouterModule.forRoot(rotas);
