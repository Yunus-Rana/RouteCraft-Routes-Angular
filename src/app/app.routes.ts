import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { User } from './pages/user/user';
import { Profile } from './profile/profile';
import { Setting } from './setting/setting';

export const routes: Routes = [
    {path:'', component:Home},
    {path:'admin',
        loadComponent:()=>import("./pages/admin/admin").then((c)=>c.Admin)},
    {path:'user', 
        loadComponent:()=>import("./pages/user/user").then((c)=>c.User),
        children:[
            {path:"", redirectTo:"profile", pathMatch:"full"},
            {path:'profile', component:Profile},
            {path:'setting', loadComponent:()=>import("./setting/setting").then((c)=>c.Setting),}
        ]
    },
];
