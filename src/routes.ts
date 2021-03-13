import { Route } from 'router5';

const routes: Route[] = [
  {
    name: 'course',
    path: '/course',
    children: [
      {
        name: 'add',
        path: '/add?tab',
        defaultParams: {
          tab: 'settings'
        }
      },
      {
        name: 'edit',
        path: '/:id/edit?tab',
        defaultParams: {
          tab: 'settings'
        }
      }
    ]
  }
];

export default routes;