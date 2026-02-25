import type { Category } from '../types/game';

export const CATEGORIES: Category[] = [
    {
        id: '1',
        name: 'Comidas',
        description: 'Platos populares',
        items: ['Pizza', 'Hamburguesa', 'Sushi', 'Tacos', 'Pasta', 'Asado', 'Paella', 'Empanadas', 'Lasagna', 'Ceviche', 'Ravioles', 'Milanesa', 'Hot Dog', 'Ensalada Cesar', 'Risotto', 'Bife de chorizo', 'Locro', 'Churrasco', 'Gnocchi', 'Sorrentinos', 'Canelones', 'Fainá', 'Tiramisú', 'Crepes', 'Waffles', 'Burritos', 'Falafel', 'Curry', 'Pollo frito', 'Ramen', 'Shawarma', 'Croissant', 'Churros', 'Alfajor', 'Medialunas', 'Tortas fritas', 'Provoleta', 'Morcilla', 'Dulce de leche', 'Brownie', 'Cheesecake', 'Flan', 'Humita', 'Chipa', 'Steak', 'Sándwich', 'Nachos', 'Quesadilla', 'Dim Sum', 'Poke', 'Açaí', 'Pancho', 'Caldo', 'Sopa de cebolla', 'Fondue', 'Baklava', 'Cannoli', 'Crème brûlée', 'Macarons', 'Granola', 'Provolone', 'Pancakes', 'Tarta', 'Budín', 'Mousse'],
        hint: 'Se puede comer en un restaurante o pedir delivery',
        itemHints: {
            'Pizza': 'Nápoles', 'Hamburguesa': 'Pepinillo', 'Sushi': 'Wasabi', 'Tacos': 'Maíz', 'Pasta': 'Al dente', 'Asado': 'Chimichurri', 'Paella': 'Azafrán', 'Empanadas': 'Repulgue', 'Lasagna': 'Béchamel', 'Ceviche': 'Leche de tigre', 'Ravioles': 'Domingo', 'Milanesa': 'Vuelta y vuelta', 'Hot Dog': 'Coney Island', 'Ensalada Cesar': 'Anchoíta', 'Risotto': 'Parmesano',
        },
    },
    {
        id: '2',
        name: 'Profesiones',
        description: 'Trabajos y oficios',
        items: ['Médico', 'Bombero', 'Policía', 'Arquitecto', 'Cocinero', 'Programador', 'Dentista', 'Abogado', 'Astronauta', 'Veterinario', 'Maestro', 'Carpintero', 'Electricista', 'Enfermero', 'Farmacéutico', 'Psicólogo', 'Fisioterapeuta', 'Piloto', 'Taxista', 'Mecánico', 'Plomero', 'Pintor', 'Jardinero', 'Panadero', 'Carnicero', 'Pescador', 'Fotógrafo', 'Periodista', 'Escritor', 'Actor', 'Músico', 'Bailarín', 'Bartender', 'Camarero', 'Guía turístico', 'Contador', 'Ingeniero', 'Biólogo', 'Cirujano', 'Pediatra', 'Dermatólogo', 'Juez', 'Militar', 'Barbero', 'Peluquero', 'Diseñador', 'Sommelier', 'Chef pastelero', 'Traductor', 'Coach', 'DJ', 'Influencer', 'Árbitro', 'Entrenador', 'Mánager', 'Productor musical', 'Astrónomo', 'Oceanógrafo', 'Geólogo', 'Arqueólogo', 'Historiador', 'Sociólogo', 'Economista', 'Filósofo'],
        hint: 'Es una actividad por la que se percibe un salario',
        itemHints: {
            'Médico': 'Guardia', 'Bombero': 'Escalera', 'Policía': 'Comisaría', 'Arquitecto': 'Croquis', 'Cocinero': 'Mise en place', 'Programador': 'Bug', 'Dentista': 'Flúor', 'Abogado': 'Alegato', 'Astronauta': 'Módulo', 'Veterinario': 'Zoonosis', 'Maestro': 'Libreta', 'Carpintero': 'Machimbre', 'Electricista': 'Disyuntor',
        },
    },
    {
        id: '3',
        name: 'Marcas',
        description: 'Empresas famosas',
        items: ['Nike', 'Apple', 'Coca Cola', 'Samsung', 'Adidas', 'McDonalds', 'Google', 'Netflix', 'Disney', 'Toyota', 'Starbucks', 'Amazon', 'Sony', 'Lego', 'Microsoft', 'Pepsi', 'BMW', 'Mercedes-Benz', 'Ferrari', 'Ford', 'Volkswagen', 'Puma', 'Reebok', 'Zara', 'IKEA', 'Gucci', 'Prada', 'Louis Vuitton', 'Chanel', 'Rolex', 'Red Bull', 'Heineken', 'Jack Daniel\'s', 'Nestlé', 'Oreo', 'Nutella', 'Toblerone', 'Ferrero Rocher', 'Lamborghini', 'Porsche', 'Chevrolet', 'Xiaomi', 'Huawei', 'Intel', 'LG', 'Panasonic', 'Canon', 'Dyson', 'Bosch', 'L\'Oréal', 'Colgate', 'Visa', 'Mastercard', 'Philips', 'HP', 'Dell', 'Lenovo', 'Asus', 'Motorola', 'Nokia', 'Spotify', 'PayPal', 'Uber', 'Airbus', 'Ikea'],
        hint: 'Es una empresa reconocida mundialmente',
        itemHints: {
            'Nike': 'Oregon', 'Apple': 'Wozniak', 'Coca Cola': 'Caramelizado', 'Samsung': 'Chaebol', 'Adidas': 'Adi Dassler', 'McDonalds': 'Ronald', 'Google': 'PageRank', 'Netflix': 'Hastings', 'Disney': 'Burbank', 'Toyota': 'Kaizen', 'Starbucks': 'Sirena', 'Amazon': 'Bezos', 'Sony': 'Aibo', 'Lego': 'Billund',
        },
    },
    {
        id: '4',
        name: 'Lugares de Córdoba',
        description: 'Sitios emblemáticos de Córdoba',
        items: ['La Cañada', 'Catedral', 'Sierras Chicas', 'Villa Carlos Paz', 'Cosquín', 'Río Cuarto', 'Alta Gracia', 'La Falda', 'Mina Clavero', 'Cuesta Blanca', 'Patio Olmos', 'Unquillo', 'Río Ceballos', 'Villa Allende', 'La Calera', 'Mendiolaza', 'Nueva Córdoba', 'Barrio Güemes', 'Barrio Alberdi', 'Estadio Kempes', 'Parque Sarmiento', 'Teatro del Libertador', 'Cabildo', 'Paseo del Buen Pastor', 'Los Cocos', 'La Cumbre', 'Capilla del Monte', 'Cerro Uritorco', 'Cruz del Eje', 'Jesús María', 'Colonia Caroya', 'Villa María', 'San Francisco', 'Bell Ville', 'Río Tercero', 'Oncativo', 'Ascochinga', 'Nono', 'Embalse', 'Bialet Massé', 'Icho Cruz', 'Tanti', 'Valle de Punilla', 'Valle de Calamuchita', 'Valle de Traslasierra', 'San Marcos Sierra', 'Deán Funes', 'Laguna Mar Chiquita', 'Villa Giardino', 'San Esteban', 'Anisacate', 'Los Reartes', 'Santa Rosa de Calamuchita', 'Villa del Dique', 'La Punta del Agua', 'Córdoba Centro', 'Alta Córdoba', 'Barrio General Paz', 'Bv. San Juan', 'Parque Las Heras', 'Aeropuerto Córdoba', 'UNC'],
        hint: 'Un punto geográfico o monumento en Córdoba',
        itemHints: {
            'La Cañada': 'Inundación', 'Catedral': 'Manzana Jesuítica', 'Sierras Chicas': 'Quebrada', 'Villa Carlos Paz': 'Temporada', 'Cosquín': 'Chacarera', 'Río Cuarto': 'Pampa húmeda', 'Alta Gracia': 'Ernesto', 'La Falda': 'Milonga', 'Mina Clavero': 'Travertino', 'Cuesta Blanca': 'Pedanía', 'Patio Olmos': 'Bóveda',
        },
    },
    {
        id: '5',
        name: 'Películas',
        description: 'Cine clásico y moderno',
        items: ['Titanic', 'Batman', 'El Padrino', 'Shrek', 'Harry Potter', 'Avatar', 'Star Wars', 'Joker', 'Inception', 'Toy Story', 'Pulp Fiction', 'El Rey León', 'Gladiador', 'El Señor de los Anillos', 'Matrix', 'Interstellar', 'El Silencio de los Inocentes', 'Forrest Gump', 'El Club de la Pelea', 'Avengers', 'Rocky', 'Scarface', 'Goodfellas', 'Casablanca', 'Psicosis', 'Blade Runner', 'Indiana Jones', 'Volver al Futuro', 'Jurassic Park', 'The Dark Knight', 'Mad Max', 'John Wick', 'Bohemian Rhapsody', 'La La Land', 'Parásitos', 'El Viaje de Chihiro', 'Up', 'Los Increíbles', 'Frozen', 'Ratatouille', 'WALL-E', 'Buscando a Nemo', 'Coco', 'Iron Man', 'Thor', 'Deadpool', 'Wolverine', 'Ghost', 'El Código Da Vinci', 'Misión Imposible', 'Rápidos y Furiosos', 'El Renacido', 'Whiplash', '1917', 'Dunkerque', 'Amelie', 'Seven', 'Zodiac', 'Taxi Driver', 'Schindler\'s List', 'El Exorcista', 'Alien', 'Terminator', 'Robocop'],
        hint: 'Es una obra cinematográfica muy conocida',
        itemHints: {
            'Titanic': 'Southampton', 'Batman': 'Manicomio', 'El Padrino': 'Caballo', 'Shrek': 'Cebolla', 'Harry Potter': 'Andén', 'Avatar': 'Unobtanium', 'Star Wars': 'Carbonita', 'Joker': 'Escalera', 'Inception': 'Tótem', 'Toy Story': 'Infinito', 'Pulp Fiction': 'Royale', 'El Rey León': 'Hakuna', 'Gladiador': 'Cómodo',
        },
    },
    {
        id: '6',
        name: 'Animales',
        description: 'Fauna variada',
        items: ['León', 'Elefante', 'Perro', 'Pingüino', 'Tiburón', 'Águila', 'Mono', 'Canguro', 'Jirafa', 'Cebra', 'Oso Panda', 'Gato', 'Caballo', 'Delfín', 'Serpiente', 'Gorila', 'Chimpancé', 'Rinoceronte', 'Hipopótamo', 'Cocodrilo', 'Jaguar', 'Puma', 'Guepardo', 'Lobo', 'Oso', 'Oso polar', 'Ciervo', 'Camello', 'Llama', 'Alpaca', 'Avestruz', 'Flamenco', 'Tucán', 'Loro', 'Cóndor', 'Pelícano', 'Rana', 'Tortuga', 'Iguana', 'Coala', 'Tapir', 'Nutria', 'Ardilla', 'Conejo', 'Cerdo', 'Vaca', 'Gallina', 'Pato', 'Pavo', 'Abeja', 'Pulpo', 'Medusa', 'Cangrejo', 'Langosta', 'Ballena', 'Orca', 'Foca', 'Murciélago', 'Marmota', 'Castor', 'Búho', 'Cisne', 'Colibrí', 'Escarabajo'],
        hint: 'Es un ser vivo del reino animal',
        itemHints: {
            'León': 'Crin', 'Elefante': 'Colmillo', 'Perro': 'Jauría', 'Pingüino': 'Guano', 'Tiburón': 'Branquia', 'Águila': 'Talón', 'Mono': 'Mímico', 'Canguro': 'Joey', 'Jirafa': 'Okapi', 'Cebra': 'Estampida', 'Oso Panda': 'Sichuan', 'Gato': 'Pelaje', 'Caballo': 'Alforja', 'Delfín': 'Espiráculo', 'Serpiente': 'Muda',
        },
    },
    {
        id: '7',
        name: 'Deportes',
        description: 'Disciplinas competitivas',
        items: ['Fútbol', 'Tenis', 'Básquet', 'Rugby', 'Natación', 'Boxeo', 'Golf', 'Hockey', 'Vóley', 'Automovilismo', 'Ciclismo', 'Maratón', 'Esgrima', 'Atletismo', 'Salto en alto', 'Pentatlón', 'Triatlón', 'Skateboard', 'Surf', 'Escalada', 'Remo', 'Kayak', 'Waterpolo', 'Polo', 'Equitación', 'Halterofilia', 'Judo', 'Karate', 'Taekwondo', 'Sumo', 'Curling', 'Esquí alpino', 'Snowboard', 'Patinaje sobre hielo', 'Hockey sobre hielo', 'Gimnasia artística', 'Gimnasia rítmica', 'Handball', 'Béisbol', 'Cricket', 'Squash', 'Ping-pong', 'Badminton', 'Tiro con arco', 'Levantamiento de pesas', 'Jabalina', 'Fórmula 1', 'Rally', 'Windsurf', 'Parapente', 'Lucha libre', 'MMA', 'Krav Magá', 'Motociclismo', 'Balonmano', 'Softbol', 'Lacrosse', 'Natación sincronizada', 'Salto de trampolín', 'Carrera de obstáculos', 'Crossfit', 'Padel'],
        hint: 'Es una actividad física con reglas competitivas',
        itemHints: {
            'Fútbol': 'Offside', 'Tenis': 'Deuce', 'Básquet': 'Pick and roll', 'Rugby': 'Melé', 'Natación': 'Viraje', 'Boxeo': 'Clinch', 'Golf': 'Birdie', 'Hockey': 'Penalty corner', 'Vóley': 'Libero', 'Automovilismo': 'DRS', 'Ciclismo': 'Pelotón', 'Maratón': 'Pared', 'Esgrima': 'Flèche',
        },
    },
    {
        id: '8',
        name: 'Famosos',
        description: 'Personalidades conocidas',
        items: ['Messi', 'Maradona', 'Shakira', 'Will Smith', 'Elon Musk', 'Beyoncé', 'Ricky Martin', 'Brad Pitt', 'Angelina Jolie', 'Cristiano Ronaldo', 'Taylor Swift', 'Mick Jagger', 'Steve Jobs', 'Bill Gates', 'Barack Obama', 'Donald Trump', 'Papa Francisco', 'Nelson Mandela', 'Albert Einstein', 'Leonardo da Vinci', 'Pablo Picasso', 'Frida Kahlo', 'Salvador Dalí', 'Michael Jackson', 'Elvis Presley', 'Madonna', 'Lady Gaga', 'Adele', 'Eminem', 'Justin Bieber', 'Drake', 'Bad Bunny', 'Neymar', 'Pelé', 'Zinedine Zidane', 'Serena Williams', 'Roger Federer', 'Rafael Nadal', 'Novak Djokovic', 'Usain Bolt', 'Michael Jordan', 'LeBron James', 'Kobe Bryant', 'Muhammad Ali', 'Tiger Woods', 'Lewis Hamilton', 'Ayrton Senna', 'Walt Disney', 'Oprah Winfrey', 'Steven Spielberg', 'Marilyn Monroe', 'Audrey Hepburn', 'Princess Diana', 'Abraham Lincoln', 'Napoleon Bonaparte', 'Cleopatra', 'Leonardo DiCaprio', 'Johnny Depp', 'Tom Hanks', 'Meryl Streep', 'Marlon Brando', 'Jim Carrey'],
        hint: 'Es una persona con mucha fama mundial',
        itemHints: {
            'Messi': 'Rosario', 'Maradona': 'Nápoles', 'Shakira': 'Barranquilla', 'Will Smith': 'Bel-Air', 'Elon Musk': 'Pretoria', 'Beyoncé': 'Ivy Park', 'Ricky Martin': 'Menudo', 'Brad Pitt': 'Tyler', 'Angelina Jolie': 'Maddox', 'Cristiano Ronaldo': 'Funchal', 'Taylor Swift': 'Eras', 'Mick Jagger': 'Exile',
        },
    },
    {
        id: '9',
        name: 'Objetos',
        description: 'Cosas cotidianas',
        items: ['Celular', 'Llaves', 'Reloj', 'Lentes', 'Mochila', 'Billetera', 'Silla', 'Mesa', 'Cama', 'Televisor', 'Control remoto', 'Espejo', 'Ventilador', 'Paraguas', 'Sombrero', 'Corbata', 'Bufanda', 'Linterna', 'Vela', 'Tijeras', 'Cuchillo', 'Tenedor', 'Cuchara', 'Plato', 'Taza', 'Botella', 'Termo', 'Balde', 'Escoba', 'Martillo', 'Destornillador', 'Taladro', 'Serrucho', 'Alicate', 'Brújula', 'Telescopio', 'Microscopio', 'Termómetro', 'Calculadora', 'Almohada', 'Manta', 'Cortina', 'Alfombra', 'Lámpara', 'Enchufe', 'Cargador', 'Auriculares', 'Teclado', 'Mouse', 'Impresora', 'Cámara', 'Maleta', 'Botiquín', 'Extintor', 'Agenda', 'Regla', 'Compás', 'Cuaderno', 'Bolígrafo', 'Marcador', 'Tijera de cocina'],
        hint: 'Es algo inanimado que usamos seguido',
        itemHints: {
            'Celular': 'Roaming', 'Llaves': 'Bombín', 'Reloj': 'Tourbillon', 'Lentes': 'Dióptria', 'Mochila': 'Cierre', 'Billetera': 'Cuero', 'Silla': 'Ergonomía', 'Mesa': 'Zócalo', 'Cama': 'Somier', 'Televisor': 'Píxel', 'Control remoto': 'Infrarrojo', 'Espejo': 'Azogue', 'Ventilador': 'Oscilación',
        },
    },
    {
        id: '10',
        name: 'Apps',
        description: 'Software móvil',
        items: ['WhatsApp', 'Instagram', 'TikTok', 'Spotify', 'YouTube', 'Facebook', 'Twitter', 'Tinder', 'Uber', 'Airbnb', 'Telegram', 'Snapchat', 'Pinterest', 'Google Maps', 'Gmail', 'Zoom', 'LinkedIn', 'Reddit', 'Twitch', 'Discord', 'Shazam', 'Waze', 'Google Translate', 'Canva', 'Duolingo', 'Google Drive', 'Notion', 'Trello', 'Microsoft Teams', 'Pokémon Go', 'Bumble', 'BeReal', 'Threads', 'Letterboxd', 'Goodreads', 'Coursera', 'Udemy', 'Strava', 'MyFitnessPal', 'Calm', 'Headspace', 'PayPal', 'Rappi', 'Pedidos Ya', 'Glovo', 'Booking', 'Google Meet', 'Slack', 'Skype', 'Tumblr', 'SoundCloud', 'Apple Music', 'Tidal', 'Kick', 'Clubhouse', 'Flickr', 'Deezer', 'MercadoLibre', 'Mercado Pago', 'Google Photos', 'Dropbox', 'iCloud'],
        hint: 'Es una aplicación que tenés en tu smartphone',
        itemHints: {
            'WhatsApp': 'Jan Koum', 'Instagram': 'Systrom', 'TikTok': 'ByteDance', 'Spotify': 'Ek', 'YouTube': 'Jawed', 'Facebook': 'Poke', 'Twitter': 'Dorsey', 'Tinder': 'Sean Rad', 'Uber': 'Kalanick', 'Airbnb': 'Chesky', 'Telegram': 'Durov', 'Snapchat': 'Snap Inc', 'Pinterest': 'Silbermann',
        },
    },
    {
        id: '11',
        name: 'Países',
        description: 'Naciones del mundo',
        items: ['Argentina', 'Brasil', 'España', 'Japón', 'Italia', 'Francia', 'México', 'Estados Unidos', 'China', 'Alemania', 'Canadá', 'Australia', 'Rusia', 'Egipto', 'Colombia', 'Venezuela', 'Chile', 'Perú', 'Bolivia', 'Paraguay', 'Uruguay', 'Ecuador', 'Panamá', 'Cuba', 'Jamaica', 'Grecia', 'Portugal', 'Suecia', 'Noruega', 'Dinamarca', 'Finlandia', 'Países Bajos', 'Bélgica', 'Suiza', 'Austria', 'Polonia', 'República Checa', 'Hungría', 'Turquía', 'Israel', 'Arabia Saudita', 'India', 'Indonesia', 'Tailandia', 'Vietnam', 'Filipinas', 'Corea del Sur', 'Nigeria', 'Kenia', 'Sudáfrica', 'Marruecos', 'Etiopía', 'Tanzania', 'Ghana', 'Costa Rica', 'Guatemala', 'Irlanda', 'Nueva Zelanda', 'Pakistán', 'Bangladesh', 'Malasia', 'Singapur'],
        hint: 'Es un territorio soberano con bandera propia',
        itemHints: {
            'Argentina': 'Quebracho', 'Brasil': 'Cerrado', 'España': 'Reconquista', 'Japón': 'Okinawa', 'Italia': 'Padania', 'Francia': 'Marsella', 'México': 'Tlaxcala', 'Estados Unidos': 'Appalachian', 'China': 'Loess', 'Alemania': 'Renania', 'Canadá': 'Yukón', 'Australia': 'Outback', 'Rusia': 'Taiga', 'Egipto': 'Luxor',
        },
    },
    {
        id: '12',
        name: 'Música',
        description: 'Géneros y estilos',
        items: ['Rock', 'Pop', 'Reggaeton', 'Jazz', 'Cuarteto', 'Trap', 'Clásica', 'Blues', 'Salsa', 'Tango', 'Electronic', 'Heavy Metal', 'Hip Hop', 'Cumbia', 'Merengue', 'Bachata', 'Vallenato', 'Reggae', 'Funk', 'Soul', 'R&B', 'Punk', 'Grunge', 'Metal', 'Indie', 'Country', 'Folk', 'Bossa Nova', 'Samba', 'Flamenco', 'Fado', 'K-pop', 'Opera', 'Gospel', 'Swing', 'Dubstep', 'House', 'Techno', 'Drum and Bass', 'Trance', 'Ambient', 'Lo-fi', 'New Wave', 'Post-punk', 'Shoegaze', 'Prog Rock', 'Disco', 'Afrobeat', 'Ska', 'Bolero', 'Ranchera', 'Corrido', 'Psychedelia', 'Emo', 'Hardstyle', 'Minimal', 'Industrial', 'Gothic', 'J-pop', 'Axé', 'Forró', 'Zydeco'],
        hint: 'Es un estilo o género musical definido',
        itemHints: {
            'Rock': 'Pentatónica', 'Pop': 'Charts', 'Reggaeton': 'Dancehall', 'Jazz': 'Bebop', 'Cuarteto': 'Tropitango', 'Trap': '808', 'Clásica': 'Contrapunto', 'Blues': 'Muddy Waters', 'Salsa': 'Montuno', 'Tango': 'Lunfardo', 'Electronic': 'Rave', 'Heavy Metal': 'Pentagrama', 'Hip Hop': 'Breakdance',
        },
    },
    {
        id: '13',
        name: 'Superhéroes',
        description: 'Personajes con poderes',
        items: ['Spider-Man', 'Iron Man', 'Wonder Woman', 'Superman', 'Hulk', 'Flash', 'Thor', 'Black Widow', 'Batman', 'Capitán América', 'Aquaman', 'Wolverine', 'Cíclope', 'Jean Grey', 'Magneto', 'Profesor X', 'Mystique', 'Gambit', 'Rogue', 'Nightcrawler', 'Daredevil', 'Ant-Man', 'La Avispa', 'Doctor Strange', 'Visión', 'Scarlet Witch', 'Ojo de Halcón', 'Falcon', 'War Machine', 'Soldado de Invierno', 'Nick Fury', 'She-Hulk', 'Ms. Marvel', 'Moon Knight', 'Luke Cage', 'Ghost Rider', 'Silver Surfer', 'Pantera Negra', 'Green Lantern', 'Green Arrow', 'Cyborg', 'Shazam', 'Nightwing', 'Robin', 'Batgirl', 'Supergirl', 'Harley Quinn', 'Catwoman', 'Lex Luthor', 'Loki', 'Thanos', 'Venom', 'Carnage', 'Deadpool', 'Spider-Gwen', 'Psylocke', 'Jubilee', 'X-23', 'Mera', 'Zatanna', 'Martian Manhunter'],
        hint: 'Es un personaje de ficción con habilidades sobrehumanas',
        itemHints: {
            'Spider-Man': 'Queens', 'Iron Man': 'Yinsen', 'Wonder Woman': 'Temiscira', 'Superman': 'Kryptonita', 'Hulk': 'Gamma', 'Flash': 'Central City', 'Thor': 'Mjolnir', 'Black Widow': 'Vedova', 'Batman': 'Arkham', 'Capitán América': 'Suero', 'Aquaman': 'Poseidón',
        },
    },
    {
        id: '14',
        name: 'Videojuegos',
        description: 'Títulos de consola y PC',
        items: ['Mario Bros', 'Minecraft', 'FIFA', 'GTA', 'Fortnite', 'Zelda', 'Pac-Man', 'Tetris', 'League of Legends', 'Counter-Strike', 'Among Us', 'Candy Crush', 'Sonic', 'Donkey Kong', 'Kirby', 'Pokémon', 'The Sims', 'Halo', 'Call of Duty', 'Battlefield', 'Resident Evil', 'Silent Hill', 'Mega Man', 'StarCraft', 'Warcraft', 'Diablo', 'World of Warcraft', 'Skyrim', 'Fallout', 'Red Dead Redemption', 'Cyberpunk 2077', 'Dark Souls', 'Elden Ring', 'Hollow Knight', 'Celeste', 'Stardew Valley', 'Animal Crossing', 'Overwatch', 'Valorant', 'Apex Legends', 'Rocket League', 'Clash of Clans', 'Clash Royale', 'Brawl Stars', 'PUBG', 'Free Fire', 'Roblox', 'Dota 2', 'Mortal Kombat', 'Street Fighter', 'Tekken', 'Smash Bros', 'Crash Bandicoot', 'Spyro', 'God of War', 'The Last of Us', 'Uncharted', 'Horizon', 'Ghost of Tsushima', 'Batman Arkham', 'Spider-Man PS4'],
        hint: 'Es un software interactivo de entretenimiento',
        itemHints: {
            'Mario Bros': 'Miyamoto', 'Minecraft': 'Notch', 'FIFA': 'Ultimate Team', 'GTA': 'Rockstar', 'Fortnite': 'Loot', 'Zelda': 'Hyrule', 'Pac-Man': 'Namco', 'Tetris': 'Pajitnov', 'League of Legends': 'Riot', 'Counter-Strike': 'Valve', 'Among Us': 'Polus', 'Candy Crush': 'King',
        },
    },
    {
        id: '15',
        name: 'Series de TV',
        description: 'Programas y streaming',
        items: ['Friends', 'The Office', 'Stranger Things', 'Breaking Bad', 'The Simpsons', 'Lost', 'Game of Thrones', "Grey's Anatomy", 'Black Mirror', 'Better Call Saul', 'Los Soprano', 'The Wire', 'Dexter', 'Prison Break', 'House MD', 'CSI', 'The Walking Dead', 'American Horror Story', 'True Detective', 'Narcos', 'Ozark', 'Dark', 'Peaky Blinders', 'The Crown', 'Bridgerton', 'Sex and the City', 'Desperate Housewives', 'Gossip Girl', 'How I Met Your Mother', 'Big Bang Theory', 'Modern Family', 'Brooklyn Nine-Nine', 'Parks and Recreation', 'Community', 'Scrubs', 'House of Cards', 'Succession', 'Euphoria', 'Squid Game', 'La Casa de Papel', 'Élite', 'Westworld', 'The Mandalorian', 'The Boys', 'Cobra Kai', 'Emily in Paris', 'You', 'Vikingos', 'Doctor Who', 'Sherlock', 'Downton Abbey', 'Mindhunter', 'Chernobyl', 'El Cuento de la Criada', 'Yellowstone', 'Loki', 'WandaVision', 'Andor', 'Wednesday'],
        hint: 'Es una producción con múltiples episodios y temporadas',
        itemHints: {
            'Friends': 'Central Perk', 'The Office': 'Dundie', 'Stranger Things': 'Hawkins', 'Breaking Bad': 'Heisenberg', 'The Simpsons': 'Springfield', 'Lost': 'Dharma', 'Game of Thrones': 'Invierno', "Grey's Anatomy": 'Meredith', 'Black Mirror': 'Bandersnatch',
        },
    },
    {
        id: '16',
        name: 'Instrumentos',
        description: 'Para crear sonidos',
        items: ['Guitarra', 'Piano', 'Batería', 'Violín', 'Flauta', 'Trompeta', 'Saxofón', 'Bajo', 'Arpa', 'Acordeón', 'Ukelele', 'Órgano', 'Clavicémbalo', 'Laúd', 'Mandolina', 'Banjo', 'Sitar', 'Bongós', 'Congas', 'Xilófono', 'Marimba', 'Pandereta', 'Castañuelas', 'Tuba', 'Trombón', 'Oboe', 'Clarinete', 'Fagot', 'Gaita', 'Ocarina', 'Charango', 'Theremin', 'Kalimba', 'Cajón peruano', 'Contrabajo', 'Cello', 'Viola', 'Piccolo', 'Armónica', 'Kazoo', 'Güiro', 'Maracas', 'Bandonéon', 'Sintetizador', 'Sampler', 'Piano eléctrico', 'Batería electrónica', 'Loop station', 'Controlador MIDI', 'Drum machine', 'Guitarra eléctrica', 'Guitarra acústica', 'Bajo eléctrico', 'Steel drum', 'Hang drum', 'Tabla', 'Djembé', 'Timbales', 'Vibráfono', 'Glockenspiel', 'Corno francés'],
        hint: 'Es una herramienta diseñada para hacer música',
        itemHints: {
            'Guitarra': 'Traste', 'Piano': 'Martillo', 'Batería': 'Caja', 'Violín': 'Puente', 'Flauta': 'Embocadura', 'Trompeta': 'Campana', 'Saxofón': 'Adolphe', 'Bajo': 'Fretless', 'Arpa': 'Pedal', 'Acordeón': 'Bordón', 'Ukelele': 'Nylon', 'Órgano': 'Tubería',
        },
    },
    {
        id: '17',
        name: 'Bebidas',
        description: 'Líquidos de consumo',
        items: ['Fernet', 'Cerveza', 'Vino', 'Agua', 'Mate', 'Café', 'Té', 'Gaseosa', 'Champagne', 'Vodka', 'Jugo de Naranja', 'Licuado', 'Gin', 'Ron', 'Tequila', 'Mezcal', 'Whisky', 'Bourbon', 'Cognac', 'Brandy', 'Aperol', 'Campari', 'Baileys', 'Amaretto', 'Pisco', 'Sidra', 'Sake', 'Soju', 'Kombucha', 'Matcha', 'Chai', 'Limonada', 'Jugo de manzana', 'Jugo de maracuyá', 'Agua con gas', 'Agua tónica', 'Red Bull', 'Gatorade', 'Leche', 'Leche de almendras', 'Leche de coco', 'Leche de avena', 'Chocolate caliente', 'Submarino', 'Capuccino', 'Cortado', 'Latte', 'Espresso', 'Cold brew', 'Kéfir', 'Lassi', 'Horchata', 'Chicha', 'Mojito', 'Margarita', 'Piña colada', 'Daiquiri', 'Negroni', 'Spritz', 'Cuba libre', 'Fernet con Coca'],
        hint: 'Es algo que se toma para hidratarse o brindar',
        itemHints: {
            'Fernet': 'Milán', 'Cerveza': 'Lúpulo', 'Vino': 'Tanino', 'Agua': 'Manantial', 'Mate': 'Cebado', 'Café': 'Arábica', 'Té': 'Ceylon', 'Gaseosa': 'Dióxido', 'Champagne': 'Épernay', 'Vodka': 'Destilado', 'Jugo de Naranja': 'Pulpa', 'Licuado': 'Cuchilla',
        },
    },
    {
        id: '18',
        name: 'Ciudades',
        description: 'Grandes urbes',
        items: ['Buenos Aires', 'Córdoba', 'Nueva York', 'París', 'Londres', 'Tokio', 'Roma', 'Madrid', 'Río de Janeiro', 'Berlín', 'Miami', 'Barcelona', 'Amsterdam', 'Bruselas', 'Viena', 'Praga', 'Budapest', 'Varsovia', 'Estocolmo', 'Oslo', 'Copenhague', 'Helsinki', 'Dublín', 'Lisboa', 'Atenas', 'Estambul', 'Moscú', 'San Petersburgo', 'Seúl', 'Singapur', 'Shanghái', 'Pekín', 'Hong Kong', 'Bangkok', 'Dubái', 'Tel Aviv', 'El Cairo', 'Lagos', 'Nairobi', 'Johannesburgo', 'Ciudad de México', 'Lima', 'Bogotá', 'Santiago de Chile', 'Caracas', 'Montevideo', 'Rosario', 'Mendoza', 'Mar del Plata', 'Salta', 'Los Ángeles', 'Chicago', 'Toronto', 'Sydney', 'Melbourne', 'Vancouver', 'Auckland', 'Bangalore', 'Mumbai', 'Kuala Lumpur', 'Jakarta'],
        hint: 'Es una concentración urbana importante',
        itemHints: {
            'Buenos Aires': 'Porteño', 'Córdoba': 'Mediterránea', 'Nueva York': 'Manhattan', 'París': 'Montmartre', 'Londres': 'Niebla', 'Tokio': 'Shibuya', 'Roma': 'Capitolino', 'Madrid': 'Chueca', 'Río de Janeiro': 'Carioca', 'Berlín': 'Checkpoint', 'Miami': 'Art Déco', 'Barcelona': 'Ramblas',
        },
    },
    {
        id: '19',
        name: 'Frutas',
        description: 'Vegetales dulces',
        items: ['Manzana', 'Banana', 'Naranja', 'Frutilla', 'Uva', 'Sandía', 'Ananá', 'Pera', 'Durazno', 'Kiwi', 'Limón', 'Cereza', 'Ciruela', 'Mango', 'Papaya', 'Guayaba', 'Maracuyá', 'Lichi', 'Tamarindo', 'Pomelo', 'Mandarina', 'Lima', 'Guanábana', 'Chirimoya', 'Pitahaya', 'Caqui', 'Higo', 'Dátil', 'Coco', 'Palta', 'Nectarina', 'Frambuesa', 'Mora', 'Arándano', 'Grosella', 'Nuez', 'Almendra', 'Castaña', 'Avellana', 'Pistacho', 'Granada', 'Physalis', 'Membrillo', 'Albaricoque', 'Jackfruit', 'Rambután', 'Dragonfruit', 'Carambola', 'Kumquat', 'Lúcuma', 'Tomate cherry', 'Pepino dulce', 'Melón', 'Cantalupo', 'Aceituna', 'Bergamota', 'Boysenberry', 'Cupuaçu', 'Noni', 'Zapote', 'Bacuri'],
        hint: 'Es el producto comestible de ciertas plantas',
        itemHints: {
            'Manzana': 'Pecado', 'Banana': 'Potasio', 'Naranja': 'Zest', 'Frutilla': 'Aquenio', 'Uva': 'Parra', 'Sandía': 'Pepita', 'Ananá': 'Bromelina', 'Pera': 'Williams', 'Durazno': 'Melocotón', 'Kiwi': 'Actinidia', 'Limón': 'Limoneno', 'Cereza': 'Kirsch', 'Ciruela': 'Drupácea',
        },
    },
    {
        id: '20',
        name: 'Transportes',
        description: 'Medios de locomoción',
        items: ['Auto', 'Avión', 'Tren', 'Colectivo', 'Bicicleta', 'Barco', 'Moto', 'Subte', 'Helicóptero', 'Camión', 'Crucero', 'Tractor', 'Monopatín', 'Tranvía', 'Teleférico', 'Funicular', 'Rickshaw', 'Triciclo', 'Patineta eléctrica', 'Scooter eléctrico', 'Patines', 'Segway', 'Hoverboard', 'Bici eléctrica', 'Moto eléctrica', 'Auto eléctrico', 'Camioneta', 'Pick-up', 'SUV', 'Furgoneta', 'Ambulancia', 'Coche de bomberos', 'Grúa', 'Retroexcavadora', 'Bulldozer', 'Tanque militar', 'Jeep', 'Quad', 'Go-kart', 'Lancha', 'Yate', 'Velero', 'Catamarán', 'Submarino', 'Portaaviones', 'Globo aerostático', 'Dirigible', 'Dron', 'Avioneta', 'Hidroavión', 'Cohete', 'Nave espacial', 'Monorraíl', 'Limusina', 'Remis', 'Carruaje', 'Trineo', 'Calesa', 'Kayak', 'Canoa', 'Moto acuática'],
        hint: 'Es un medio para desplazarse distancias',
        itemHints: {
            'Auto': 'Embrague', 'Avión': 'Turbina', 'Tren': 'Traviesa', 'Colectivo': 'Cospel', 'Bicicleta': 'Piñón', 'Barco': 'Quilla', 'Moto': 'Carburador', 'Subte': 'Andén', 'Helicóptero': 'Rotor', 'Camión': 'Semirremolque', 'Crucero': 'Camarote', 'Tractor': 'Labranza', 'Monopatín': 'Rodamiento',
        },
    },
];
