import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'produktion',
    children: [
      {
        path: '',
        loadChildren: () => loadRemoteModule('mfe1', './routes').then(m => m.routes),
        outlet: 'mfe1',
        pathMatch: 'full'
      },
      {
        path: '',
        loadChildren: () => loadRemoteModule('mfe2WithRouting', './routes').then(m => m.routes),
        outlet: 'mfe2WithRouting',
        pathMatch: 'full'
      },
      {
        path: '',
        loadChildren: () => loadRemoteModule('mfe3', './routes').then(m => m.routes),
        outlet: 'mfe3',
        pathMatch: 'full'
      }
    ],
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'produktion',
    pathMatch: 'full'
  }
];

