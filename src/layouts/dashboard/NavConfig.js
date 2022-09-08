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
        title: 'Proveedores',
        path: '/dashboard/provider',
        icon: getIcon('fa:qq'),
    },
    {
        title: 'Profesionales',
        path: '/dashboard/professional',
        icon: getIcon('fa:gg'),
    },
    {
        title: 'Gustos',
        path: '/dashboard/expenses',
        icon: getIcon('fa:bandcamp'),
    },
    {
        title: 'Equipos',
        path: '/dashboard/equipment',
        icon: getIcon('fa:gg-circle'),
    },
    {
        title: 'Cotizaciones',
        path: '/dashboard/quotes',
        icon: getIcon('fa:scribd'),
    },
    {
        title: 'Contratos',
        path: '/dashboard/contract',
        icon: getIcon('fa:book'),
    },
    {
        title: 'Documentos',
        path: '/dashboard/document',
        icon: getIcon('fa:file'),
    },
    {
        title: 'Blog',
        path: '/dashboard/blog',
        icon: getIcon('eva:file-text-fill'),
    },
    {
        title: 'Personal',
        path: '/dashboard/personal',
        icon: getIcon('eva:file-text-fill'),
    },
    {
        title: 'Ispre',
        path: '/dashboard/ispre',
        icon: getIcon('eva:file-text-fill'),
    },
    {
        title: 'AFP',
        path: '/dashboard/afp',
        icon: getIcon('eva:file-text-fill'),
    },
    {
        title: 'Haber',
        path: '/dashboard/haber',
        icon: getIcon('eva:file-text-fill'),
    },
    {
        title: 'Clasulas Anxe',
        path: '/dashboard/clasulasanxe',
        icon: getIcon('eva:file-text-fill'),
    },
    {
        title: 'Tipo de Contrato',
        path: '/dashboard/tipodecontrato',
        icon: getIcon('eva:file-text-fill'),
    },
    {
        title: 'Clasulas',
        path: '/dashboard/clasulas',
        icon: getIcon('eva:file-text-fill'),
    }
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