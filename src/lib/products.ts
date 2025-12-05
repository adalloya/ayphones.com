export interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
    images: string[];
    condition: 'Como Nuevo' | 'Excelente' | 'Bueno' | 'Regular';
    storage: string;
    category: 'iPhone' | 'iPad' | 'Apple Watch' | 'Samsung' | 'Accesorios';
    model: string;
    color?: string;
    shipping?: string;
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
        name: 'iPhone 17 Air',
        price: 17670,
        image: '/placeholder.png',
        images: ['/placeholder.png'],
        condition: 'Excelente',
        storage: '256GB',
        color: 'Blue',
        category: 'iPhone',
        model: 'iPhone 17 Air',
        shipping: 'Sobre pedido - Entrega en 7 días',
        specs: { display: '6.6"', processor: 'A19', camera: '48MP', battery: 'Standard' }
    },
    {
        id: '2',
        name: 'iPhone 17 Air',
        price: 18620,
        image: '/placeholder.png',
        images: ['/placeholder.png'],
        condition: 'Como Nuevo',
        storage: '256GB',
        color: 'Black',
        category: 'iPhone',
        model: 'iPhone 17 Air',
        shipping: 'Sobre pedido - Entrega en 7 días',
        specs: { display: '6.6"', processor: 'A19', camera: '48MP', battery: 'Standard' }
    },
    {
        id: '3',
        name: 'iPhone 16 Pro Max',
        price: 18620,
        image: '/placeholder.png',
        images: ['/placeholder.png'],
        condition: 'Bueno',
        storage: '256GB',
        color: 'Gray',
        category: 'iPhone',
        model: 'iPhone 16 Pro Max',
        shipping: 'Sobre pedido - Entrega en 7 días',
        specs: { display: '6.9"', processor: 'A18 Pro', camera: '48MP', battery: 'Max' }
    },
    {
        id: '4',
        name: 'iPhone 16 Pro',
        price: 16720,
        image: '/placeholder.png',
        images: ['/placeholder.png'],
        condition: 'Bueno',
        storage: '256GB',
        color: 'Desert',
        category: 'iPhone',
        model: 'iPhone 16 Pro',
        shipping: 'Sobre pedido - Entrega en 7 días',
        specs: { display: '6.3"', processor: 'A18 Pro', camera: '48MP', battery: 'Pro' }
    },
    {
        id: '5',
        name: 'iPhone 16 Plus',
        price: 17195,
        image: '/placeholder.png',
        images: ['/placeholder.png'],
        condition: 'Como Nuevo',
        storage: '256GB',
        color: 'Pink',
        category: 'iPhone',
        model: 'iPhone 16 Plus',
        shipping: 'Sobre pedido - Entrega en 7 días',
        specs: { display: '6.7"', processor: 'A18', camera: '48MP', battery: 'Plus' }
    },
    {
        id: '6',
        name: 'iPhone 16',
        price: 14250,
        image: '/placeholder.png',
        images: ['/placeholder.png'],
        condition: 'Excelente',
        storage: '256GB',
        color: 'Black',
        category: 'iPhone',
        model: 'iPhone 16',
        shipping: 'Sobre pedido - Entrega en 7 días',
        specs: { display: '6.1"', processor: 'A18', camera: '48MP', battery: 'Standard' }
    },
    {
        id: '7',
        name: 'iPhone 15 Pro Max',
        price: 15770,
        image: '/placeholder.png',
        images: ['/placeholder.png'],
        condition: 'Bueno',
        storage: '256GB',
        color: 'Blue',
        category: 'iPhone',
        model: 'iPhone 15 Pro Max',
        shipping: 'Sobre pedido - Entrega en 7 días',
        specs: { display: '6.7"', processor: 'A17 Pro', camera: '48MP', battery: 'Max' }
    },
    {
        id: '8',
        name: 'iPhone 15',
        price: 11020,
        image: '/placeholder.png',
        images: ['/placeholder.png'],
        condition: 'Bueno',
        storage: '128GB',
        color: 'Pink',
        category: 'iPhone',
        model: 'iPhone 15',
        shipping: 'Sobre pedido - Entrega en 7 días',
        specs: { display: '6.1"', processor: 'A16', camera: '48MP', battery: 'Standard' }
    },
    {
        id: '9',
        name: 'iPhone 14 Pro Max',
        price: 11780,
        image: '/placeholder.png',
        images: ['/placeholder.png'],
        condition: 'Regular',
        storage: '128GB',
        color: 'Purple',
        category: 'iPhone',
        model: 'iPhone 14 Pro Max',
        shipping: 'Sobre pedido - Entrega en 7 días',
        specs: { display: '6.7"', processor: 'A16', camera: '48MP', battery: 'Max' }
    },
    {
        id: '10',
        name: 'Samsung S25 Ultra',
        price: 15390,
        image: '/placeholder.png',
        images: ['/placeholder.png'],
        condition: 'Excelente',
        storage: '256GB',
        color: 'Black',
        category: 'Samsung',
        model: 'S25 Ultra',
        shipping: 'Sobre pedido - Entrega en 7 días',
        specs: { display: '6.8"', processor: 'Snapdragon 8 Gen 4', camera: '200MP', battery: '5000mAh' }
    },
    {
        id: '11',
        name: 'iPad Air 11in M2',
        price: 10260,
        image: '/placeholder.png',
        images: ['/placeholder.png'],
        condition: 'Bueno',
        storage: '128GB',
        color: 'Blue',
        category: 'iPad',
        model: 'iPad Air M2',
        shipping: 'Sobre pedido - Entrega en 7 días',
        specs: { display: '11"', processor: 'M2', camera: '12MP', battery: '10h' }
    },
    {
        id: '12',
        name: 'Apple Watch Ultra',
        price: 8930,
        image: '/placeholder.png',
        images: ['/placeholder.png'],
        condition: 'Bueno',
        storage: '49mm',
        color: 'Black',
        category: 'Apple Watch',
        model: 'Ultra',
        shipping: 'Sobre pedido - Entrega en 7 días',
        specs: { display: '49mm', processor: 'S8', camera: 'N/A', battery: '36h' }
    },
    {
        id: '13',
        name: 'AirPods Pro 3',
        price: 7030,
        image: '/placeholder.png',
        images: ['/placeholder.png'],
        condition: 'Como Nuevo',
        storage: 'N/A',
        color: 'White',
        category: 'Accesorios',
        model: 'AirPods Pro 3',
        shipping: 'Sobre pedido - Entrega en 7 días',
        specs: { display: 'N/A', processor: 'H3', camera: 'N/A', battery: '30h' }
    }
];
