import { initFederation } from '@angular-architects/native-federation';

initFederation({
  'mfe1': 'http://localhost:4201/remoteEntry.json',
  'mfe2WithRouting': 'http://localhost:4202/remoteEntry.json',
  'mfe3': 'http://localhost:4203/remoteEntry.json'
})
  .catch(err => console.error(err))
  .then(_ => import('./bootstrap'))
  .catch(err => console.error(err));
