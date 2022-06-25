// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => < Iconify icon = { name }
width = { 22 }
height = { 22 }
/>;

const navConfig = [{
        title: 'Panel Principal',
        path: '/dashboard/app',
        icon: getIcon('bi:house-door-fill'),
    },
    {
        title: 'Usuarios',
        path: '/dashboard/usuarios',
        icon: getIcon('eva:people-fill'),
    },
    {
        title: 'Tareas',
        path: '/dashboard/tareas',
        icon: getIcon('fa-solid:map-pin'),
    },
    {
        title: 'Proyectos',
        path: '/dashboard/proyectos',
        icon: getIcon('akar-icons:file'),
    },
    {
        title: 'Comprar',
        path: '/dashboard/buy',
        icon: getIcon('fa:product-hunt'),
    },
    {
        title: 'Providers',
        path: '/dashboard/provider',
        icon: getIcon('fa:qq'),
    },
    {
        title: 'Professionals',
        path: '/dashboard/professional',
        icon: getIcon('fa:gg'),
    },
    {
        title: 'Gustos',
        path: '/dashboard/expenses',
        icon: getIcon('fa:bandcamp'),
    },
    {
        title: 'Equipments',
        path: '/dashboard/equipment',
        icon: getIcon('fa:gg-circle'),
    },
    {
        title: 'Quotes',
        path: '/dashboard/quotes',
        icon: getIcon('fa:scribd'),
    },
    {
        title: 'Contracts',
        path: '/dashboard/contract',
        icon: getIcon('fa:book'),
    },
    {
        title: 'Documents',
        path: '/dashboard/document',
        icon: getIcon('fa:file'),
    },
    {
        title: 'blog',
        path: '/dashboard/blog',
        icon: getIcon('eva:file-text-fill'),
    },
    // {
    //   title: 'new',
    //   path: '/dashboard/new',
    //   icon: getIcon('eva:file-text-fill'),
    // },
    // {
    //     title: 'Iniciar Sesión',
    //     path: '/iniciar',
    //     icon: getIcon('eva:lock-fill'),
    // },
    // {
    //     title: 'register',
    //     path: '/register',
    //     icon: getIcon('eva:person-add-fill'),
    // },
    // {
    //   title: 'Not found',
    //   path: '/404',
    //   icon: getIcon('eva:alert-triangle-fill'),
    // },
];

export default navConfig;