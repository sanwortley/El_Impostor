import type { Category } from '../types/game';

export const CATEGORIES: Category[] = [
    {
        id: '1',
        name: 'Comidas',
        description: 'Platos populares',
        items: [
            'Pizza', 'Hamburguesa', 'Sushi', 'Tacos', 'Pasta', 'Asado', 'Paella', 'Empanadas', 'Lasagna', 'Ceviche',
            'Ravioles', 'Milanesa', 'Hot Dog', 'Locro', 'Gnocchi', 'Alfajor', 'Medialunas', 'Tiramisú', 'Churros', 'Provoleta',
            'Tarta', 'Sándwich', 'Quesadilla', 'Ramen', 'Burritos', 'Cheesecake', 'Flan', 'Dulce de leche', 'Humita', 'Polenta',
            'Shawarma', 'Wrap', 'Wok', 'Bondiola', 'Choripán', 'Tortilla', 'Risotto'
        ],
        hint: 'Ingesta',
        itemHints: {
            'Pizza': 'Nápoles', 'Hamburguesa': 'Sésamo', 'Sushi': 'Nori', 'Tacos': 'Tortilla', 'Pasta': 'Al-dente',
            'Asado': 'Achurra', 'Paella': 'Azafrán', 'Empanadas': 'Repulgue', 'Lasagna': 'Capas', 'Ceviche': 'Leche-de-tigre',
            'Ravioles': 'Relleno', 'Milanesa': 'Pan-rallado', 'Hot Dog': 'Mostaza', 'Locro', 'Gnocchi': 'Ñoquis',
            'Alfajor': 'Maicena', 'Medialunas': 'Manteca', 'Tiramisú': 'Mascarpone', 'Churros', 'Provoleta': 'Parrilla',
            'Tarta', 'Sándwich': 'Migas', 'Quesadilla': 'Fundido', 'Ramen', 'Burritos',
            'Cheesecake': 'Queso-crema', 'Flan': 'Caramelo', 'Dulce de leche': 'Conaprole', 'Humita': 'Maíz', 'Polenta',
            'Shawarma': 'Vertical', 'Wrap': 'Frio', 'Wok', 'Bondiola', 'Choripán',
            'Tortilla', 'Risotto'
        },
    },
    {
        id: '1.2',
        name: 'Más Comidas',
        description: 'Platos populares II',
        items: [
            'Pizza', 'Hamburguesa', 'Sushi', 'Tacos', 'Pasta', 'Asado', 'Paella', 'Empanadas', 'Lasagna', 'Ceviche',
            'Ravioles', 'Milanesa', 'Hot Dog', 'Locro', 'Gnocchi', 'Alfajor', 'Medialunas', 'Tiramisú', 'Churros', 'Provoleta',
            'Tarta', 'Sándwich', 'Quesadilla', 'Ramen', 'Burritos', 'Cheesecake', 'Flan', 'Dulce de leche', 'Humita', 'Polenta',
            'Shawarma', 'Wrap', 'Wok', 'Bondiola', 'Choripán', 'Tortilla', 'Risotto'
        ],
        hint: 'Ingesta',
        itemHints: {
            'Pizza': 'Parténope', 'Hamburguesa': 'Tartaria', 'Sushi': 'Shari', 'Tacos': 'Nixtamal', 'Pasta': 'Semolina',
            'Asado': 'Quebracho', 'Paella': 'Socarrat', 'Empanadas': 'Salteña', 'Lasagna': 'Béchamel', 'Ceviche': 'Tiradito',
            'Ravioles': 'Sorrento', 'Milanesa': 'Cotoletta', 'Hot Dog': 'Dachshund', 'Locro': 'Pulsada', 'Gnocchi': 'Patata',
            'Alfajor': 'Fécula', 'Medialunas': 'Creciente', 'Tiramisú': 'Treviso', 'Churros': 'Porras', 'Provoleta': 'Hilado',
            'Tarta': 'Quiche', 'Sándwich': 'Montagu', 'Quesadilla': 'Comal', 'Ramen': 'Umami', 'Burritos': 'Misión',
            'Cheesecake': 'Graham', 'Flan': 'María', 'Dulce de leche': 'Maillard', 'Humita': 'Chala', 'Polenta': 'Grano',
            'Shawarma': 'Espiedo', 'Wrap': 'Enrollado', 'Wok': 'Salteado', 'Bondiola': 'Cerdo', 'Choripán': 'Costanera',
            'Tortilla': 'Huevo', 'Risotto': 'Arborio'
        },
    },
    {
        id: '2',
        name: 'Profesiones',
        description: 'Trabajos y oficios',
        items: [
            'Médico', 'Bombero', 'Policía', 'Arquitecto', 'Cocinero', 'Programador', 'Dentista', 'Abogado', 'Astronauta', 'Veterinario',
            'Maestro', 'Carpintero', 'Electricista', 'Enfermero', 'Piloto', 'Taxista', 'Mecánico', 'Plomero', 'Jardinero', 'Panadero',
            'Periodista', 'Actor', 'Músico', 'Bartender', 'Influencer', 'Árbitro', 'Entrenador', 'Psicólogo', 'Científico', 'Fotógrafo',
            'Diseñador', 'Escultor', 'Peluquero', 'Cartero', 'Carnicero', 'Soldador', 'Economista'
        ],
        hint: 'Expertise',
        itemHints: {
            'Médico': 'Caduceo', 'Bombero': 'Ignífugo', 'Policía': 'Insignia', 'Arquitecto': 'Fachada', 'Cocinero': 'Batch',
            'Programador': 'Binario', 'Dentista': 'Esmalte', 'Abogado': 'Litigio', 'Astronauta': 'Gravedad', 'Veterinario': 'Pelaje',
            'Maestro': 'Pizarrón', 'Carpintero': 'Viruta', 'Electricista': 'Voltaje', 'Enfermero': 'Suero', 'Piloto': 'Cabina',
            'Taxista': 'Bajada', 'Mecánico': 'Engranaje', 'Plomero': 'Sifón', 'Jardinero': 'Poda', 'Panadero': 'Levadura',
            'Periodista': 'Primicia', 'Actor': 'Guion', 'Músico': 'Pentagrama', 'Bartender': 'Coctelera', 'Influencer': 'Scroll',
            'Árbitro': 'Silbato', 'Entrenador': 'Táctica', 'Psicólogo': 'Diván', 'Científico': 'Hipótesis', 'Fotógrafo': 'Obturador',
            'Diseñador': 'Vector', 'Escultor': 'Cincel', 'Peluquero': 'Tijera', 'Cartero': 'Buzón', 'Carnicero': 'Cuchilla',
            'Soldador': 'Chispa', 'Economista': 'Índice'
        },
    },
    {
        id: '3',
        name: 'Marcas',
        description: 'Empresas famosas',
        items: [
            'Nike', 'Apple', 'Coca Cola', 'Samsung', 'Adidas', 'McDonalds', 'Google', 'Netflix', 'Disney', 'Toyota',
            'Starbucks', 'Amazon', 'Sony', 'Lego', 'Microsoft', 'Pepsi', 'Ferrari', 'Ford', 'Spotify', 'Uber',
            'Mercado Libre', 'Tesla', 'Instagram', 'BMW', 'Visa', 'Mastercard', 'Rolex', 'IKEA', 'Huawei', 'Zara',
            'Puma', 'Honda', 'Dell', 'Canon', 'Nintendo', 'Vans', 'Red Bull'
        ],
        hint: 'Corporación',
        itemHints: {
            'Nike': 'Olimpo', 'Apple': 'Mordida', 'Coca Cola': 'Burbuja', 'Samsung': 'Corea', 'Adidas': 'Franjas',
            'McDonalds': 'Arcos', 'Google': 'Buscador', 'Netflix': 'Sillón', 'Disney': 'Ratón', 'Toyota': 'Híbrido',
            'Starbucks': 'Grano', 'Amazon': 'Selva', 'Sony': 'Consola', 'Lego': 'Ladrillo', 'Microsoft': 'Ventana',
            'Pepsi': 'Azul', 'Ferrari': 'Caballo', 'Ford': 'Cadena', 'Spotify': 'Lista', 'Uber': 'Chofer',
            'Mercado Libre': 'Cajas', 'Tesla': 'Voltaje', 'Instagram': 'Filtro', 'BMW': 'Hélice', 'Visa': 'Plástico',
            'Mastercard': 'Círculos', 'Rolex': 'Corona', 'IKEA': 'Mueble', 'Huawei', 'Zara': 'Moda',
            'Puma': 'Gato', 'Honda', 'Dell', 'Canon', 'Nintendo', 'Vans': 'Skate',
            'Red Bull': 'Alas'
        },
    },
    {
        id: '4',
        name: 'Lugares de Córdoba',
        description: 'Sitios emblemáticos de la provincia',
        items: [
            'La Cañada', 'Catedral', 'Villa Carlos Paz', 'Cosquín', 'Río Cuarto', 'Alta Gracia', 'La Falda', 'Mina Clavero', 'Patio Olmos', 'Nueva Córdoba',
            'Barrio Güemes', 'Estadio Kempes', 'Parque Sarmiento', 'Buen Pastor', 'Capilla del Monte', 'Jesús María', 'Villa María', 'Los Reartes', 'Calamuchita',
            'Villa Belgrano', 'Cerro Colorado', 'San Marcos Sierras', 'Nono', 'Yacanto', 'La Cumbrecita', 'Villa General Belgrano', 'Miramar', 'Los Terrones', 'Ongamira'
        ],
        hint: 'Serranía',
        itemHints: {
            'La Cañada': 'Encauce', 'Catedral': 'Cúpula', 'Villa Carlos Paz': 'Reloj', 'Cosquín': 'Folklor', 'Río Cuarto': 'Imperio',
            'Alta Gracia': 'Virrey', 'La Falda': 'Eden', 'Mina Clavero': 'Río-frío', 'Patio Olmos': 'Prisión', 'Nueva Córdoba': 'Estudiante',
            'Barrio Güemes': 'Anticuario', 'Estadio Kempes': 'Mundial', 'Parque Sarmiento': 'Rosedal', 'Buen Pastor': 'Agua-danzante', 'Capilla del Monte',
            'Jesús María': 'Jineteada', 'Villa María', 'Los Reartes', 'Calamuchita', 'Villa Belgrano': 'Cerveza',
            'Cerro Colorado': 'Pintura', 'San Marcos Sierras': 'Hippy', 'Nono': 'Río', 'Yacanto', 'La Cumbrecita': 'Peatonal',
            'Villa General Belgrano': 'Alemán', 'Miramar': 'Salada', 'Los Terrones': 'Rojizo', 'Ongamira': 'Indio'
        },
    },
    {
        id: '5',
        name: 'Películas',
        description: 'Cine clásico y moderno',
        items: [
            'Titanic', 'Batman', 'El Padrino', 'Shrek', 'Harry Potter', 'Avatar', 'Star Wars', 'Joker', 'Toy Story', 'El Rey León',
            'Gladiador', 'Matrix', 'Rocky', 'Jurassic Park', 'John Wick', 'Frozen', 'Buscando a Nemo', 'Coco', 'Iron Man', 'Terminator',
            'Pulp Fiction', 'Inception', 'Spider-Man', 'Moana', 'Rápido y Furioso', 'El Exorcista', 'Batman Begins', 'Interstellar', 'The Avengers',
            'Dune', 'Parasite', 'Fight Club', 'Forrest Gump', 'Braveheart', 'Indiana Jones', 'Top Gun'
        ],
        hint: 'Guion',
        itemHints: {
            'Titanic': 'Iceberg', 'Batman': 'Capa', 'El Padrino': 'Oferta', 'Shrek': 'Pantano', 'Harry Potter': 'Varita',
            'Avatar': 'Azul', 'Star Wars': 'Sable', 'Joker': 'Maquillaje', 'Toy Story': 'Vaquero', 'El Rey León': 'Rey',
            'Gladiador': 'Arena', 'Matrix': 'Píldora', 'Rocky': 'Ring', 'Jurassic Park': 'Isla', 'John Wick': 'Perro',
            'Frozen': 'Hielo', 'Buscando a Nemo': 'Pez', 'Coco': 'Guitarra', 'Iron Man': 'Armadura', 'Terminator': 'Futuro',
            'Pulp Fiction': 'Maletín', 'Inception': 'Trompo', 'Spider-Man': 'Araña', 'Moana': 'Hawaiano', 'Rápido y Furioso': 'Nitro',
            'El Exorcista': 'Cama', 'Batman Begins': 'Murciélago', 'Interstellar': 'Relatividad', 'The Avengers': 'Escudo', 'Dune': 'Arena',
            'Parasite': 'Sótano', 'Fight Club': 'Jabón', 'Forrest Gump': 'Banco', 'Braveheart': 'Kilt', 'Indiana Jones': 'Látigo',
            'Top Gun': 'Avión'
        },
    },
    {
        id: '6',
        name: 'Animales',
        description: 'Fauna de todo tipo',
        items: [
            'León', 'Elefante', 'Perro', 'Pingüino', 'Tiburón', 'Águila', 'Mono', 'Canguro', 'Jirafa', 'Cebra',
            'Oso Panda', 'Gato', 'Caballo', 'Delfín', 'Serpiente', 'Cocodrilo', 'Lobo', 'Oso', 'Vaca', 'Gallina',
            'Abeja', 'Ballena', 'Murciélago', 'Zorro', 'Águila Real', 'Rinoceronte', 'Hipopótamo', 'Búho', 'Koala', 'Flamenco',
            'Ardilla', 'Camello', 'Tortuga', 'Pulpo', 'Medusa', 'Tigre', 'Hormiga'
        ],
        hint: 'Naturaleza',
        itemHints: {
            'León': 'Sabana', 'Elefante': 'Trompa', 'Perro': 'Ladrido', 'Pingüino': 'Frío', 'Tiburón': 'Aleta',
            'Águila': 'Vuelo', 'Mono': 'Banana', 'Canguro': 'Salto', 'Jirafa': 'Manchas', 'Cebra': 'Rayas',
            'Oso Panda': 'Bambú', 'Gato': 'Ronroneo', 'Caballo': 'Galope', 'Delfín': 'Inteligente', 'Serpiente': 'Veneno',
            'Cocodrilo': 'Dientes', 'Lobo': 'Luna', 'Oso': 'Miel', 'Vaca': 'Leche', 'Gallina': 'Huevo',
            'Abeja': 'Polen', 'Ballena': 'Océano', 'Murciélago': 'Cueva', 'Zorro': 'Cola', 'Águila Real': 'Caza',
            'Rinoceronte': 'Cuerno', 'Hipopótamo': 'Agua', 'Búho': 'Ojos', 'Koala': 'Árbol', 'Flamenco': 'Rosa',
            'Ardilla': 'Cola', 'Camello': 'Desierto', 'Tortuga': 'Lento', 'Pulpo': 'Tinta', 'Medusa': 'Picadura',
            'Tigre': 'Selva', 'Hormiga': 'Fila'
        },
    },
    {
        id: '7',
        name: 'Deportes',
        description: 'Disciplinas populares',
        items: [
            'Fútbol', 'Tenis', 'Básquet', 'Rugby', 'Natación', 'Boxeo', 'Golf', 'Hockey', 'Vóley', 'Automovilismo',
            'Ciclismo', 'Surf', 'Padel', 'Béisbol', 'Gimnasia', 'Esquí', 'Atletismo', 'Handball', 'Esgrima', 'Karate',
            'Judo', 'Remo', 'Vela', 'Waterpolo', 'Patinaje', 'Motociclismo', 'Polo', 'Ping Pong', 'Ciclismo de montaña'
        ],
        hint: 'Disciplina',
        itemHints: {
            'Fútbol': 'Goles', 'Tenis': 'Sets', 'Básquet': 'Dobles', 'Rugby': 'Try', 'Natación': 'Largo',
            'Boxeo': 'K.O.', 'Golf': 'Hoyo', 'Hockey': 'Córner', 'Vóley': 'Punto', 'Automovilismo': 'Pole',
            'Ciclismo': 'Tour', 'Surf': 'Tubo', 'Padel': 'Pared', 'Béisbol': 'Home', 'Gimnasia': 'Suelo',
            'Esquí': 'Nieve', 'Atletismo': 'Pista', 'Handball', 'Esgrima': 'Toque', 'Karate': 'Kiai',
            'Judo': 'Tatami', 'Remo': 'Pala', 'Vela': 'Viento', 'Waterpolo': 'Gorro', 'Patinaje': 'Filo',
            'Motociclismo': 'Curva', 'Polo': 'Chukker', 'Ping Pong': 'Paleta', 'Ciclismo de montaña': 'Trocha'
        },
    },
];
