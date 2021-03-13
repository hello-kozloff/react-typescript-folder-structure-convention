import { Route } from 'router5';

const routes: Route[] = [
  {
    name: 'course',
    path: '/course',
    children: [
      {
        name: 'add',
        path: '/add'
      },
      {
        name: 'edit',
        path: '/:id/edit'
      }
    ]
  }
];

export default routes;