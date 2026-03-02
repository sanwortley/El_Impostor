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
            'Pizza': 'Parténope', 'Hamburguesa': 'Tartaria', 'Sushi': 'Shari', 'Tacos': 'Nixtamal', 'Pasta': 'Semolina',
            'Asado': 'Quebracho', 'Paella': 'Socarrat', 'Empanadas': 'Salteña', 'Lasagna': 'Béchamel', 'Ceviche': 'Tiradito',
            'Ravioles': 'Sorrento', 'Milanesa': 'Cotoletta', 'Hot Dog': 'Dachshund', 'Locro': 'Pulsada', 'Gnocchi': 'Patata',
            'Alfajor': 'Fécula', 'Medialunas': 'Creciente', 'Tiramisú': 'Treviso', 'Churros': 'Porras', 'Provoleta': 'Hilado',
            'Tarta': 'Quiche', 'Sándwich': 'Montagu', 'Quesadilla': 'Comal', 'Ramen': 'Umami', 'Burritos': 'Misión',
            'Cheesecake': 'Graham', 'Flan': 'María', 'Dulce de leche': 'Maillard', 'Humita': 'Chala', 'Polenta': 'Maíz',
            'Shawarma': 'Espiedo', 'Wrap': 'Enrollado', 'Wok': 'Salteado', 'Bondiola': 'Cerdo', 'Choripán': 'Costanera',
            'Tortilla': 'Papa', 'Risotto': 'Arborio'
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
            'Médico': 'Caduceo', 'Bombero': 'Ignífugo', 'Policía': 'Placa', 'Arquitecto': 'Vitrurio', 'Cocinero': 'Gorro',
            'Programador': 'Algoritmo', 'Dentista': 'Odontos', 'Abogado': 'Juris', 'Astronauta': 'Cosmos', 'Veterinario': 'Zoon',
            'Maestro': 'Tiza', 'Carpintero': 'Ebanista', 'Electricista': 'Amperio', 'Enfermero': 'Florencia', 'Piloto': 'Aeronave',
            'Taxista': 'Licencia', 'Mecánico': 'Taller', 'Plomero': 'Plomo', 'Jardinero': 'Clorofila', 'Panadero': 'Gluten',
            'Periodista': 'Cuarta', 'Actor': 'Tespis', 'Músico': 'Octava', 'Bartender': 'Mixología', 'Influencer': 'Likes',
            'Árbitro': 'Silbato', 'Entrenador': 'Estratega', 'Psicólogo': 'Diván', 'Científico': 'Ensayo', 'Fotógrafo': 'Foco',
            'Diseñador': 'Boceto', 'Escultor': 'Cincel', 'Peluquero': 'Navaja', 'Cartero': 'Sobre', 'Carnicero': 'Faena',
            'Soldador': 'Arco', 'Economista': 'Grado'
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
        hint: 'Entidad',
        itemHints: {
            'Nike': 'Niké', 'Apple': 'Cupertino', 'Coca Cola': 'Pemberton', 'Samsung': 'Seúl', 'Adidas': 'Dassler',
            'McDonalds': 'Kroc', 'Google': 'Googol', 'Netflix': 'Reed', 'Disney': 'Burbank', 'Toyota': 'Aichi',
            'Starbucks': 'Schultz', 'Amazon': 'Bezos', 'Sony': 'Minato', 'Lego': 'Billund', 'Microsoft': 'Redmond',
            'Pepsi': 'Bradham', 'Ferrari': 'Maranello', 'Ford': 'Detroit', 'Spotify': 'Estocolmo', 'Uber': 'Kalanick',
            'Mercado Libre': 'Galin', 'Tesla': 'Musk', 'Instagram': 'Systrom', 'BMW': 'Múnich', 'Visa': 'Hock',
            'Mastercard': 'Purdue', 'Rolex': 'Ginebra', 'IKEA': 'Kamprad', 'Huawei': 'Shenzhen', 'Zara': 'Ortega',
            'Puma': 'Dassler', 'Honda': 'Tokio', 'Dell': 'Austin', 'Canon': 'Ota', 'Nintendo': 'Kioto', 'Vans': 'Van-Doren',
            'Red Bull': 'Mateschitz'
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
        hint: 'Topografía',
        itemHints: {
            'La Cañada': 'Calicanto', 'Catedral': 'San-Martín', 'Villa Carlos Paz': 'San-Roque', 'Cosquín': 'Punilla', 'Río Cuarto': 'Imperio',
            'Alta Gracia': 'Paravachasca', 'La Falda': 'Edén', 'Mina Clavero': 'Traslasierra', 'Patio Olmos': 'Prisioneros', 'Nueva Córdoba': 'Diagonal',
            'Barrio Güemes': 'Bohemia', 'Estadio Kempes': 'Chateau', 'Parque Sarmiento': 'Thays', 'Buen Pastor': 'Capilla', 'Capilla del Monte': 'Uritorco',
            'Jesús María': 'Doma', 'Villa María': 'Anfiteatro', 'Los Reartes': 'Abuelo', 'Calamuchita': 'Valle', 'Villa Belgrano': 'Oktoberfest',
            'Cerro Colorado': 'Yupanqui', 'San Marcos Sierras': 'Miel', 'Nono': 'Laberinto', 'Yacanto': 'Champaquí', 'La Cumbrecita': 'Peatonal',
            'Villa General Belgrano': 'Tirol', 'Miramar': 'Ansenuza', 'Los Terrones': 'Conglomerado', 'Ongamira': 'Grutas'
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
        hint: 'Metraje',
        itemHints: {
            'Titanic': 'Cameron', 'Batman': 'Bruce', 'El Padrino': 'Coppola', 'Shrek': 'Ogro', 'Harry Potter': 'Hogwarts',
            'Avatar': 'Pandora', 'Star Wars': 'Lucas', 'Joker': 'Gotham', 'Toy Story': 'Pixar', 'El Rey León': 'Simba',
            'Gladiador': 'Máximo', 'Matrix': 'Neo', 'Rocky': 'Balboa', 'Jurassic Park': 'ADN', 'John Wick': 'Baba-Yaga',
            'Frozen': 'Arendelle', 'Buscando a Nemo': 'Sidney', 'Coco': 'Xibalbá', 'Iron Man': 'Stark', 'Terminator': 'Skynet',
            'Pulp Fiction': 'Tarantino', 'Inception': 'Nolan', 'Spider-Man': 'Parker', 'Moana': 'Pacífico', 'Rápido y Furioso': 'Diesel',
            'El Exorcista': 'Karras', 'Batman Begins': 'Nolan', 'Interstellar': 'Gargantúa', 'The Avengers': 'Marvel', 'Dune': 'Arrakis',
            'Parasite': 'Seúl', 'Fight Club': 'Durden', 'Forrest Gump': 'Zemeckis', 'Braveheart': 'Gibson', 'Indiana Jones': 'Spielberg',
            'Top Gun': 'Cruise'
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
        hint: 'Reino',
        itemHints: {
            'León': 'Melena', 'Elefante': 'Marfil', 'Perro': 'Fiel', 'Pingüino': 'Antártico', 'Tiburón': 'Branquia',
            'Águila': 'Garra', 'Mono': 'Primate', 'Canguro': 'Bolsa', 'Jirafa': 'Cuello', 'Cebra': 'Rayas',
            'Oso Panda': 'Bambú', 'Gato': 'Maullido', 'Caballo': 'Crín', 'Delfín': 'Sonar', 'Serpiente': 'Escama',
            'Cocodrilo': 'Reptil', 'Lobo': 'Manada', 'Oso': 'Garras', 'Vaca': 'Ubre', 'Gallina': 'Plumas',
            'Abeja': 'Panal', 'Ballena': 'Soplido', 'Murciélago': 'Radar', 'Zorro': 'Astuto', 'Águila Real': 'Rapaz',
            'Rinoceronte': 'Cuerno', 'Hipopótamo': 'Ribereño', 'Búho': 'Nocturno', 'Koala': 'Eucalipto', 'Flamenco': 'Rosado',
            'Ardilla': 'Nuez', 'Camello': 'Joroba', 'Tortuga': 'Caparazón', 'Pulpo': 'Tentáculo', 'Medusa': 'Tentáculo',
            'Tigre': 'Rayado', 'Hormiga': 'Colonia'
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
        hint: 'Certamen',
        itemHints: {
            'Fútbol': 'Cancha', 'Tenis': 'Raqueta', 'Básquet': 'Aro', 'Rugby': 'Tackle', 'Natación': 'Pileta',
            'Boxeo': 'Guantes', 'Golf': 'Swing', 'Hockey': 'Palo', 'Vóley': 'Red', 'Automovilismo': 'Pista',
            'Ciclismo': 'Pedal', 'Surf': 'Ola', 'Padel': 'Pared', 'Béisbol': 'Bate', 'Gimnasia': 'Salto',
            'Esquí': 'Nieve', 'Atletismo': 'Carrera', 'Handball': 'Salto', 'Esgrima': 'Florete', 'Karate': 'Dojo',
            'Judo': 'Tatami', 'Remo': 'Bote', 'Vela': 'Viento', 'Waterpolo': 'Gorro', 'Patinaje': 'Hielo',
            'Motociclismo': 'Casco', 'Polo': 'Taco', 'Ping Pong': 'Paleta', 'Ciclismo de montaña': 'Trocha'
        },
    },
    {
        id: '8',
        name: 'Famosos',
        description: 'Personajes muy conocidos',
        items: [
            'Messi', 'Maradona', 'Shakira', 'Will Smith', 'Elon Musk', 'Beyoncé', 'Ricky Martin', 'Angelina Jolie', 'Cristiano Ronaldo', 'Taylor Swift',
            'Steve Jobs', 'Barack Obama', 'Papa Francisco', 'Michael Jackson', 'Justin Bieber', 'Bad Bunny', 'Mirtha Legrand', 'Susana Giménez', 'Brad Pitt',
            'Leonardo DiCaprio', 'Lady Gaga', 'Bill Gates', 'Oprah Winfrey', 'Robert Downey Jr.', 'Johnny Depp', 'Jennifer Aniston', 'Marilyn Monroe', 'Elvis Presley', 'Nelson Mandela'
        ],
        hint: 'Personaje',
        itemHints: {
            'Messi': 'Rosario', 'Maradona': 'Lanús', 'Shakira': 'Waka', 'Will Smith': 'Philadelphia', 'Elon Musk': 'Pretoria',
            'Beyoncé': 'Houston', 'Ricky Martin': 'San-Juan', 'Angelina Jolie': 'Lara-Croft', 'Cristiano Ronaldo': 'Madeira', 'Taylor Swift': 'Pennsylvania',
            'Steve Jobs': 'California', 'Barack Obama': 'Honolulu', 'Papa Francisco': 'Flores', 'Michael Jackson': 'Indiana', 'Justin Bieber': 'Ontario',
            'Bad Bunny': 'Puerto-Rico', 'Mirtha Legrand': 'Villa-Cañás', 'Susana Giménez': 'Buenos-Aires', 'Brad Pitt': 'Oklahoma', 'Leonardo DiCaprio': 'Los-Angeles',
            'Lady Gaga': 'New-York', 'Bill Gates': 'Seattle', 'Oprah Winfrey': 'Mississippi', 'Robert Downey Jr.': 'Manhattan', 'Johnny Depp': 'Kentucky',
            'Jennifer Aniston': 'California', 'Marilyn Monroe': 'Norma', 'Elvis Presley': 'Memphis', 'Nelson Mandela': 'Mvezo'
        },
    },
    {
        id: '9',
        name: 'Objetos',
        description: 'Cosas de todos los días',
        items: [
            'Celular', 'Llaves', 'Reloj', 'Lentes', 'Mochila', 'Billetera', 'Silla', 'Mesa', 'Cama', 'Televisor',
            'Control remoto', 'Espejo', 'Ventilador', 'Paraguas', 'Sombrero', 'Tijeras', 'Cuchillo', 'Tenedor', 'Cuchara', 'Plato',
            'Taza', 'Botella', 'Termo', 'Mate', 'Escoba', 'Martillo', 'Almohada', 'Lámpara', 'Cargador', 'Auriculares', 'Maleta',
            'Guitarras', 'Cuadernos', 'Pinceles', 'Secador de pelo', 'Plancha', 'Abridor', 'Sacacorchos', 'Libro', 'Mapa', 'Perchero'
        ],
        hint: 'Útil',
        itemHints: {
            'Celular': 'Chip', 'Llaves': 'Cerradura', 'Reloj': 'Manecilla', 'Lentes': 'Cristal', 'Mochila': 'Espaldera',
            'Billetera': 'Billetes', 'Silla': 'Respaldo', 'Mesa': 'Pata', 'Cama': 'Colchón', 'Televisor': 'Pantalla',
            'Control remoto': 'Pila', 'Espejo': 'Reflejo', 'Ventilador': 'Aspa', 'Paraguas': 'Tela', 'Sombrero': 'Copa',
            'Tijeras': 'Filo', 'Cuchillo': 'Hoja', 'Tenedor': 'Pincho', 'Cuchara': 'Mango', 'Plato': 'Base',
            'Taza': 'Asa', 'Botella': 'Tapa', 'Termo': 'Tapa', 'Mate': 'Bombilla', 'Escoba': 'Cerda',
            'Martillo': 'Mango', 'Almohada': 'Relleno', 'Lámpara': 'Soporte', 'Cargador': 'Enchufe', 'Auriculares': 'Almohadilla',
            'Maleta': 'Asa', 'Guitarras': 'Cuerda', 'Cuadernos': 'Hoja', 'Pinceles': 'Cerdas', 'Secador de pelo': 'Aire',
            'Plancha': 'Calor', 'Abridor': 'Chapa', 'Sacacorchos': 'Corcho', 'Libro': 'Página', 'Mapa': 'Plano', 'Perchero': 'Gancho'
        },
    },
    {
        id: '10',
        name: 'Apps',
        description: 'Apps famosas',
        items: [
            'WhatsApp', 'Instagram', 'TikTok', 'Spotify', 'YouTube', 'Facebook', 'Twitter', 'Tinder', 'Uber', 'Airbnb',
            'Telegram', 'Google Maps', 'Pinterest', 'Netflix', 'Pedidos Ya', 'Mercado Pago', 'Snapchat', 'Reddit', 'LinkedIn', 'Twitch',
            'Duolingo', 'Slack', 'Discord', 'Chrome', 'Gmail', 'Zoom', 'Canva', 'Shazam', 'CapCut'
        ],
        hint: 'Programación',
        itemHints: {
            'WhatsApp': 'Chat', 'Instagram': 'Foto', 'TikTok': 'Video', 'Spotify': 'Podcast', 'YouTube': 'Stream',
            'Facebook': 'Perfil', 'Twitter': 'Elon', 'Tinder': 'Cita', 'Uber': 'Auto', 'Airbnb': 'Casa',
            'Telegram': 'Mensaje', 'Google Maps': 'Ruta', 'Pinterest': 'Pin', 'Netflix': 'Serie', 'Pedidos Ya': 'Comida',
            'Mercado Pago': 'Dinero', 'Snapchat': 'Fuego', 'Reddit': 'Hilo', 'LinkedIn': 'Trabajo', 'Twitch': 'Vivo',
            'Duolingo': 'Idioma', 'Slack': 'Equipo', 'Discord': 'Comunidad', 'Chrome': 'Navegador', 'Gmail': 'Correo',
            'Zoom': 'Reunión', 'Canva': 'Diseño', 'Shazam': 'Música', 'CapCut': 'Edición'
        },
    },
    {
        id: '11',
        name: 'Países',
        description: 'Naciones del mundo',
        items: [
            'Argentina', 'Brasil', 'España', 'Japón', 'Italia', 'Francia', 'México', 'Estados Unidos', 'China', 'Alemania',
            'Canadá', 'Australia', 'Egipto', 'Uruguay', 'Chile', 'Rusia', 'India', 'Portugal', 'Grecia', 'Turquía',
            'Suiza', 'Holanda', 'Bélgica', 'Corea del Sur', 'Colombia', 'Perú', 'Islandia', 'Noruega', 'Suecia'
        ],
        hint: 'Territorio',
        itemHints: {
            'Argentina': 'Buenos-Aires', 'Brasil': 'Río-de-Janeiro', 'España': 'Madrid', 'Japón': 'Tokio', 'Italia': 'Roma',
            'Francia': 'París', 'México': 'D.F.', 'Estados Unidos': 'New-York', 'China': 'Pekín', 'Alemania': 'Berlín',
            'Canadá': 'Toronto', 'Australia': 'Sídney', 'Egipto': 'El-Cairo', 'Uruguay': 'Montevideo', 'Chile': 'Santiago',
            'Rusia': 'Moscú', 'India': 'Mumbai', 'Portugal': 'Lisboa', 'Grecia': 'Atenas', 'Turquía': 'Estambul',
            'Suiza': 'Berna', 'Holanda': 'Ámsterdam', 'Bélgica': 'Bruselas', 'Corea del Sur': 'Seúl', 'Colombia': 'Bogotá',
            'Perú': 'Lima', 'Islandia': 'Reikiavik', 'Noruega': 'Oslo', 'Suecia': 'Estocolmo'
        },
    },
    {
        id: '12',
        name: 'Música',
        description: 'Géneros y estilos',
        items: [
            'Rock', 'Pop', 'Reggaeton', 'Jazz', 'Cuarteto', 'Trap', 'Clásica', 'Blues', 'Salsa', 'Tango',
            'Cumbia', 'Reggae', 'Heavy Metal', 'Hip Hop', 'Folklore', 'Bachata', 'Soul', 'Funk', 'Disco', 'Techno',
            'Indie', 'Punk', 'Flamenco', 'Bossa Nova', 'Samba', 'K-pop', 'Electro-pop', 'House', 'Country'
        ],
        hint: 'Estilo',
        itemHints: {
            'Rock': 'Guitarra', 'Pop': 'Estrella', 'Reggaeton': 'Dembow', 'Jazz': 'Saxofón', 'Cuarteto': 'Tunga',
            'Trap': '808', 'Clásica': 'Bach', 'Blues': 'Harmónica', 'Salsa': 'Clave', 'Tango': 'Bandoneón',
            'Cumbia': 'Güiro', 'Reggae': 'Marley', 'Heavy Metal': 'Distorsión', 'Hip Hop': 'Breakdance', 'Folklore': 'Bombo',
            'Bachata': 'Romeo', 'Soul': 'Voz', 'Funk': 'Bajo', 'Disco': 'Bola', 'Techno': 'Sinte',
            'Indie': 'Alternativo', 'Punk': 'Rebelión', 'Flamenco': 'Cante', 'Bossa Nova': 'Jobim', 'Samba': 'Carnaval',
            'K-pop': 'BTS', 'Electro-pop': 'Sinte', 'House': 'Club', 'Country': 'Banjo'
        },
    },
    {
        id: '13',
        name: 'Superhéroes',
        description: 'Personajes con poderes',
        items: [
            'Spider-Man', 'Iron Man', 'Wonder Woman', 'Superman', 'Hulk', 'Flash', 'Thor', 'Batman', 'Capitán América', 'Aquaman',
            'Wolverine', 'Deadpool', 'Pantera Negra', 'Ant-Man', 'Doctor Strange', 'Bruja Escarlata', 'Green Lantern', 'Shazam', 'Daredevil', 'Robin',
            'Catwoman', 'Joker', 'Lex Luthor', 'Venom', 'Storm', 'Groot', 'Star-Lord'
        ],
        hint: 'Personaje',
        itemHints: {
            'Spider-Man': 'Tela', 'Iron Man': 'Traje', 'Wonder Woman': 'Lazo', 'Superman': 'Capa', 'Hulk': 'Furia',
            'Flash': 'Velocidad', 'Thor': 'Martillo', 'Batman': 'Batmovil', 'Capitán América': 'Escudo', 'Aquaman': 'Tridente',
            'Wolverine': 'Garras', 'Deadpool': 'Espadas', 'Pantera Negra': 'Garra', 'Ant-Man': 'Hormiga', 'Doctor Strange': 'Capa',
            'Bruja Escarlata': 'Magia', 'Green Lantern': 'Anillo', 'Shazam': 'Rayo', 'Daredevil': 'Bastón', 'Robin': 'Ayudante',
            'Catwoman': 'Látigo', 'Joker': 'Risa', 'Lex Luthor': 'Genio', 'Venom': 'Simbionte', 'Storm': 'Clima', 'Groot': 'Rama',
            'Star-Lord': 'Mix'
        },
    },
    {
        id: '14',
        name: 'Videojuegos',
        description: 'Títulos conocidos',
        items: [
            'Mario Bros', 'Minecraft', 'FIFA', 'GTA', 'Fortnite', 'Zelda', 'Pac-Man', 'Tetris', 'Counter-Strike', 'Among Us',
            'Candy Crush', 'Sonic', 'Pokémon', 'Roblox', 'Mortal Kombat', 'Call of Duty', 'LoL', 'Valorant', 'God of War', 'The Last of Us',
            'Street Fighter', 'Final Fantasy', 'The Sims', 'Clash Royale', 'Free Fire', 'Subway Surfers', 'Doom'
        ],
        hint: 'Juego',
        itemHints: {
            'Mario Bros': 'Hongo', 'Minecraft': 'Cubo', 'FIFA', 'GTA': 'Ciudad', 'Fortnite': 'Baile',
            'Zelda': 'Link', 'Pac-Man': 'Fantasma', 'Tetris': 'Línea', 'Counter-Strike': 'Bomba', 'Among Us': 'Impostor',
            'Candy Crush': 'Nivel', 'Sonic': 'Anillo', 'Pokémon': 'Bola', 'Roblox': 'Avatar', 'Mortal Kombat': 'Fatality',
            'Call of Duty': 'Fusil', 'LoL': 'Nexo', 'Valorant': 'Agente', 'God of War': 'Kratos', 'The Last of Us': 'Joel',
            'Street Fighter': 'Hadouken', 'Final Fantasy': 'Cloud', 'The Sims': 'Casa', 'Clash Royale': 'Cofre', 'Free Fire',
            'Subway Surfers': 'Tren', 'Doom': 'Infierno'
        },
    },
    {
        id: '15',
        name: 'Series de TV',
        description: 'Programas famosos',
        items: [
            'Friends', 'The Office', 'Stranger Things', 'Breaking Bad', 'The Simpsons', 'Game of Thrones', 'Grey\'s Anatomy', 'Casados con Hijos', 'La Casa de Papel', 'El Encargado',
            'Okupas', 'Los Simuladores', 'South Park', 'Narcos', 'El marginal', 'Black Mirror', 'Euphoria', 'Succession', 'The Bear', 'Lost',
            'How I Met Your Mother', 'The Big Bang Theory', 'Modern Family', 'The Crown', 'Dark', 'Chernobyl'
        ],
        hint: 'Programa',
        itemHints: {
            'Friends': 'Central-Perk', 'The Office': 'Dunder-Mifflin', 'Stranger Things': 'Upside-Down', 'Breaking Bad': 'Heisenberg', 'The Simpsons': 'Springfield',
            'Game of Thrones': 'Westeros', 'Grey\'s Anatomy': 'Seattle-Grace', 'Casados con Hijos': 'Argento', 'La Casa de Papel': 'Dalí', 'El Encargado': 'Eliseo',
            'Okupas': 'Ricardo', 'Los Simuladores': 'Santos', 'South Park': 'Cartman', 'Narcos': 'Escobar', 'El marginal': 'Diosito', 'Black Mirror': 'Tecnología',
            'Euphoria': 'Rue', 'Succession': 'Roy', 'The Bear': 'Cocinero', 'Lost': 'Isla', 'How I Met Your Mother': 'Ted',
            'The Big Bang Theory': 'Sheldon', 'Modern Family': 'Dunphy', 'The Crown': 'Reina', 'Dark': 'Winden', 'Chernobyl': 'Planta'
        },
    },
];
