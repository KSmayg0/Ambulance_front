import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/request', title: 'Список заявок', icon:'nc-tile-56', class: ''},
    // { path: '/dashboard',     title: 'Dashboard',         icon:'nc-bank',       class: '' },
    // { path: '/icons',         title: 'Icons',             icon:'nc-diamond',    class: '' },
    // { path: '/maps',          title: 'Maps',              icon:'nc-pin-3',      class: '' },
    // { path: '/notifications', title: 'Notifications',     icon:'nc-bell-55',    class: '' },
    { path: '/table',         title: 'Сотрудники',        icon:'nc-badge',    class: '' },
    { path: '/brigade',    title: 'Бригады',        icon:'nc-user-run', class: '' },
    { path: '/adress',    title: 'Рабочие машины',        icon:'nc-ambulance', class: '' },
        { path: '/adress',    title: 'Адреса',        icon:'nc-bullet-list-67', class: '' },
    // { path: '/upgrade',       title: 'Upgrade to PRO',    icon:'nc-spaceship',  class: 'active-pro' },
    { path: '/user',          title: 'Профиль',      icon:'nc-single-02',  class: '' },
    { path: '/upgrade',    title: 'Выход',        icon:'nc-button-power', class: 'active-pro' },

];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
