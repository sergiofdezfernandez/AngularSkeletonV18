import { SvgIcons } from '@ngneat/svg-icon';

export interface SidebarItem {
  id: string;
  title: string;
  expandable: boolean;
  icon: SvgIcons;
  path: string;
}

export const SIDEBAR_MENU: SidebarItem[] = [
  {
    id: 'users',
    title: 'Users',
    expandable: true,
    icon: 'user',
    path: '/users',
  },
  {
    id: 'products',
    title: 'Mantenimiento y supervisión',
    expandable: true,
    icon: 'product',
    path: '/products',
  },
];
