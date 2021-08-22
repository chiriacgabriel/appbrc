import {Component} from '@angular/core';
import {TokenStorageService} from '../services/token-storage.service';
import {Router} from '@angular/router';


//Metadata
export interface RouteInfo {
    path: string;
    title: string;
    type: string;
    collapse?: string;
    icontype: string;
    // icon: string;
    children?: ChildrenItems[];
}

export interface ChildrenItems {
    path: string;
    title: string;
    ab?: any;
    type?: string;
    collapse?: string;
    iconComponent?: string;
    children?: SubChildrenItems[];
}

export interface SubChildrenItems {
    path: string;
    title: string;
    type?: string;
    collapse?: string;
    iconComponent?: string;
    children?: SubSubChildrenItems[];
}

export interface SubSubChildrenItems {
    path: string;
    title: string;
    type?: string;
    iconComponent?: string;
}

//Menu Items
export const ROUTES: RouteInfo[] = [{
    path: '/dashboard',
    title: 'Panou de control',
    type: 'link',
    icontype: 'nc-icon nc-bank'
},
{
    path: '/computer',
    type: 'link',
    title: 'PC/Server',
    icontype: 'fas fa-server'
},
{
    path: '/components',
    title: 'Componente',
    type: 'sub',
    collapse: 'components',
    icontype: 'nc-icon nc-layout-11',
    children: [
        {
            path: '/components',
            title: 'PC/SERVER',
            collapse: 'pc-server',
            type: 'sub-children',
            iconComponent: 'fas fa-server',
            children: [
                {path: 'case', title: 'Carcase', iconComponent: 'fas fa-suitcase'},
                {path: 'cpu-cooler', title: 'Coolere CPU', iconComponent: 'fas fa-fan'},
                {path: 'fan-case', title: 'Coolere Carcasa', iconComponent: 'fas fa-fan'},
                {path: 'memory-ram', title: 'Memorii RAM', iconComponent: 'fas fa-memory'},
                {path: 'motherboard', title: 'Placi de baza', iconComponent: 'fas fa-microchip'},
                {path: 'optical-unit', title: 'Unitati optice', iconComponent: 'fas fa-compact-disc'},
                {path: 'power-source', title: 'Surse de alimentare', iconComponent: 'fas fa-plug'},
                {path: 'processor', title: 'Procesoare', iconComponent: 'fas fa-microchip'},
                {path: 'sound-card', title: 'Placi de sunet', iconComponent: 'fas fa-volume-down'},
                {path: 'storage', title: 'Unitati de stocare', iconComponent: 'fas fa-hdd'},
                {path: 'video-card', title: 'Placi video', iconComponent: 'fas fa-microchip'},
            ]
        }
    ]
},
{
        path: '/components',
        title: 'Administrare',
        type: 'sub',
        collapse: 'administrare',
        icontype: 'fa fa-cogs',
        children: [
            {
                // tslint:disable-next-line:max-line-length
                path: '/components',
                title: 'Cod produs',
                type: 'sub-children',
                collapse: 'product-code',
                iconComponent: 'fa fa-qrcode',
                children: [
                    {
                        path: '/components',
                        title: 'Componente',
                        type: 'sub-sub-children',
                        collapse: 'component',
                        iconComponent: 'nc-icon nc-layout-11',
                        children: [
                            {path: 'product-code-case', title: 'Carcase', iconComponent: 'fas fa-suitcase'},
                            {path: 'product-code-cpu-cooler', title: 'Coolere CPU', iconComponent: 'fas fa-fan'},
                            {path: 'product-code-fan-case', title: 'Coolere Carcasa', iconComponent: 'fas fa-fan'},
                            {path: 'product-code-memory-ram', title: 'Memorii RAM', iconComponent: 'fas fa-memory'},
                            {path: 'product-code-motherboard', title: 'Placi de baza', iconComponent: 'fas fa-microchip'},
                            {path: 'product-code-optical-unit', title: 'Unitati optice', iconComponent: 'fas fa-compact-disc'},
                            {path: 'product-code-power-source', title: 'Surse de alimentare', iconComponent: 'fas fa-plug'},
                            {path: 'product-code-processor', title: 'Procesoare', iconComponent: 'fas fa-microchip'},
                            {path: 'product-code-sound-card', title: 'Placi de sunet', iconComponent: 'fas fa-volume-down'},
                            {path: 'product-code-storage', title: 'Unitati de stocare', iconComponent: 'fas fa-hdd'},
                            {path: 'product-code-video-card', title: 'Placi video', iconComponent: 'fas fa-microchip'}]
                    },
                    {
                        path: '/components/product-code-computer',
                        title: 'PC/Server',
                        type: 'link',
                        iconComponent: 'fas fa-server'
                    }
                ]
            }]
},
{
    path: '',
    title: 'Contabilitate',
    type: 'sub',
    collapse: 'contabilitate',
    icontype: 'fab fa-contao',
    children: [
        {
            path: 'company-data',
            title: 'Configurare date firma',
            type: 'link',
            iconComponent: 'far fa-building'
        },
        {
            path: 'providers',
            title: 'Furnizori',
            type: 'link',
            iconComponent: 'fas fa-truck-loading'
        }
    ]
},
{
    path: '/components/broken',
    title: 'Defecte',
    type: 'link',
    collapse: 'broken',
    icontype: 'fas fa-unlink',
},
{
    path: '/unreceived',
    type: 'link',
    title: 'Nereceptionate',
    icontype: 'far fa-file-alt'
},
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent {
    public menuItems: any[];
    firstName: string;
    lastName: string;

    isNotMobileMenu() {
        if (window.outerWidth > 991) {
            return false;
        }
        return true;
    }

    constructor(private tokenStorage: TokenStorageService,
                private router: Router) {
        this.firstName = this.tokenStorage.getUser().firstName;
        this.lastName = this.tokenStorage.getUser().lastName;
    }


    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }

    ngAfterViewInit() {
    }

    logout(): void {
        this.tokenStorage.signOut();
    }
}
