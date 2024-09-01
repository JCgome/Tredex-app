import { SidebarItem } from '../interfaces/sidebar-item.interface';

export const sidebarItems: SidebarItem[] = [
  {
    label: 'Inicio',
    icon: 'home',
    route: 'launch',
  },
  {
    label: 'Catálogo',
    icon: 'sell',
    route: 'catalog',
  },
  {
    label: 'Productos',
    icon: 'inventory',
    route: 'products',
  },
  {
    label: 'Ventas',
    icon: 'attach_money',
    route: 'sales',
  },
  {
    label: 'Clientes',
    icon: 'group',
    route: 'client',
  },
  {
    label: 'Opciones',
    icon: 'settings',
    route: 'options',
  },
];
