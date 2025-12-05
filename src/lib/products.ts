export interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
    images: string[];
    condition: 'Como Nuevo' | 'Excelente' | 'Bueno' | 'Regular';
    storage: string;
    category: 'iPhone' | 'Apple Watch' | 'Accesorios';
    model: string;
    specs: {
        display: string;
        processor: string;
        camera: string;
        battery: string;
    };
}

export const PRODUCTS: Product[] = [
    {
        id: '1',
        name: 'iPhone 14 Pro Max',
        price: 1099,
        image: '/placeholder.png',
        images: ['/placeholder.png', '/placeholder.png', '/placeholder.png', '/placeholder.png'],
        condition: 'Como Nuevo',
        storage: '256GB',
        category: 'iPhone',
        model: 'iPhone 14 Pro Max',
        specs: {
            display: '6.7" Super Retina XDR',
            processor: 'A16 Bionic',
            camera: '48MP Main | 12MP Ultra Wide | 12MP Telephoto',
            battery: 'Hasta 29 horas de reproducción de video'
        }
    },
    {
        id: '2',
        name: 'iPhone 13 Pro',
        price: 799,
        image: '/placeholder.png',
        images: ['/placeholder.png', '/placeholder.png', '/placeholder.png', '/placeholder.png'],
        condition: 'Excelente',
        storage: '128GB',
        category: 'iPhone',
        model: 'iPhone 13 Pro',
        specs: {
            display: '6.1" Super Retina XDR',
            processor: 'A15 Bionic',
            camera: '12MP Pro Camera System',
            battery: 'Hasta 22 horas de reproducción de video'
        }
    },
    {
        id: '3',
        name: 'iPhone 12',
        price: 499,
        image: '/placeholder.png',
        images: ['/placeholder.png', '/placeholder.png', '/placeholder.png', '/placeholder.png'],
        condition: 'Bueno',
        storage: '64GB',
        category: 'iPhone',
        model: 'iPhone 12',
        specs: {
            display: '6.1" Super Retina XDR',
            processor: 'A14 Bionic',
            camera: 'Dual 12MP Camera System',
            battery: 'Hasta 17 horas de reproducción de video'
        }
    },
    {
        id: '4',
        name: 'Apple Watch Ultra',
        price: 649,
        image: '/placeholder.png',
        images: ['/placeholder.png', '/placeholder.png', '/placeholder.png', '/placeholder.png'],
        condition: 'Como Nuevo',
        storage: 'GPS + Cellular',
        category: 'Apple Watch',
        model: 'Ultra',
        specs: {
            display: '49mm Retina Display',
            processor: 'S8 SiP',
            camera: 'N/A',
            battery: 'Hasta 36 horas'
        }
    },
    {
        id: '5',
        name: 'iPhone 11',
        price: 349,
        image: '/placeholder.png',
        images: ['/placeholder.png', '/placeholder.png', '/placeholder.png', '/placeholder.png'],
        condition: 'Regular',
        storage: '64GB',
        category: 'iPhone',
        model: 'iPhone 11',
        specs: {
            display: '6.1" Liquid Retina HD',
            processor: 'A13 Bionic',
            camera: 'Dual 12MP Camera System',
            battery: 'Hasta 17 horas de reproducción de video'
        }
    },
    {
        id: '6',
        name: 'iPhone 13 mini',
        price: 599,
        image: '/placeholder.png',
        images: ['/placeholder.png', '/placeholder.png', '/placeholder.png', '/placeholder.png'],
        condition: 'Excelente',
        storage: '128GB',
        category: 'iPhone',
        model: 'iPhone 13 mini',
        specs: {
            display: '5.4" Super Retina XDR',
            processor: 'A15 Bionic',
            camera: 'Dual 12MP Camera System',
            battery: 'Hasta 17 horas de reproducción de video'
        }
    },
    {
        id: '7',
        name: 'AirPods Pro (2nd Gen)',
        price: 199,
        image: '/placeholder.png',
        images: ['/placeholder.png', '/placeholder.png', '/placeholder.png', '/placeholder.png'],
        condition: 'Como Nuevo',
        storage: 'N/A',
        category: 'Accesorios',
        model: 'AirPods Pro',
        specs: {
            display: 'N/A',
            processor: 'H2 Chip',
            camera: 'N/A',
            battery: 'Hasta 6 horas de audio'
        }
    },
    {
        id: '8',
        name: 'iPhone 14',
        price: 749,
        image: '/placeholder.png',
        images: ['/placeholder.png', '/placeholder.png', '/placeholder.png', '/placeholder.png'],
        condition: 'Bueno',
        storage: '128GB',
        category: 'iPhone',
        model: 'iPhone 14',
        specs: {
            display: '6.1" Super Retina XDR',
            processor: 'A15 Bionic',
            camera: 'Dual 12MP Camera System',
            battery: 'Hasta 20 horas de reproducción de video'
        }
    }
];
