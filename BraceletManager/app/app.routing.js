import { RouterModule } from '@angular/router';
import { Dashboard } from './dashboard/dashboard.component';
var appRoutes = [
    {
        path: '',
        component: Dashboard
    },
    {
        path: '**',
        component: Dashboard
    }
];
export var routing = RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map