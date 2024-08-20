import { SidebarItem } from '../interfaces/sidebar-item.interface';

export const sidebarItems: SidebarItem[] = [
  { label: 'Inicio', icon: 'home', route: '/inicio' },
  {
    label: 'Catálogo',
    icon: 'sell',
    route: '/catalogo',
  },
  {
    label: 'Productos',
    icon: 'inventory',
    route: '/products',
  },
  { label: 'Ventas', icon: 'attach_money', route: '/ventas' },
  { label: 'Clientes', icon: 'group', route: '/clientes' },
  { label: 'Opciones', icon: 'settings', route: '/opciones' },
];
