import type { Category } from '../types/game';

/**
 * CATEGORIES DATA - EXTREME DIFFICULTY
 * Rules:
 * 1. SINGLE WORD HINTS ONLY (no spaces, no hyphens).
 * 2. High obscurity (lateral, technical, historical, or symbolic).
 * 3. No direct descriptors or obvious traits.
 */
export const CATEGORIES: Category[] = [
    {
        id: '1',
        name: 'Comidas',
        description: 'Platos y gastronomía',
        items: [
            'Pizza', 'Hamburguesa', 'Sushi', 'Tacos', 'Pasta', 'Asado', 'Paella', 'Empanadas', 'Lasagna', 'Ceviche',
            'Ravioles', 'Milanesa', 'Hot Dog', 'Locro', 'Gnocchi', 'Alfajor', 'Medialunas', 'Tiramisú', 'Churros', 'Provoleta',
            'Tarta', 'Sándwich', 'Quesadilla', 'Ramen', 'Burritos', 'Cheesecake', 'Flan', 'Dulce de leche', 'Humita', 'Polenta',
            'Shawarma', 'Wrap', 'Wok', 'Bondiola', 'Choripán', 'Tortilla', 'Risotto'
        ],
        hint: 'Ingesta',
        itemHints: {
            'Pizza': 'W300', 'Hamburguesa': 'Maillard', 'Sushi': 'Shari', 'Tacos': 'Nixtamal', 'Pasta': 'Trefilado',
            'Asado': 'Quebracho', 'Paella': 'Socarrat', 'Empanadas': 'Frepue', 'Lasagna': 'Béchamel', 'Ceviche': 'Tigre',
            'Ravioles': 'Sorrento', 'Milanesa': 'Cotoletta', 'Hot Dog': 'Relish', 'Locro': 'Charqui', 'Gnocchi': 'Madera',
            'Alfajor': 'Fécula', 'Medialunas': 'Almíbar', 'Tiramisú': 'Savoiardi', 'Churros': 'Lazo', 'Provoleta': 'Hilado',
            'Tarta': 'Quebrada', 'Sándwich': 'Miga', 'Quesadilla': 'Epazote', 'Ramen': 'Kansui', 'Burritos': 'Misión',
            'Cheesecake': 'Graham', 'Flan': 'Bañomaría', 'Dulce de leche': 'Bicarbonato', 'Humita': 'Chala', 'Polenta': 'Grano',
            'Shawarma': 'Espiedo', 'Wrap': 'Enrollado', 'Wok': 'Salteado', 'Bondiola': 'Red', 'Choripán': 'Mariposa',
            'Tortilla': 'Babé', 'Risotto': 'Arborio'
        },
        itemHintsEasy: {
            'Pizza': 'Horno', 'Hamburguesa': 'Paty', 'Sushi': 'Pescado', 'Tacos': 'Picante', 'Pasta': 'Fideos',
            'Asado': 'Carne', 'Paella': 'Arroz', 'Empanadas': 'Repulgue', 'Lasagna': 'Capas', 'Ceviche': 'Limón',
            'Ravioles': 'Relleno', 'Milanesa': 'Pan', 'Hot Dog': 'Salchicha', 'Locro': 'Maíz', 'Gnocchi': 'Papa',
            'Alfajor': 'Chocolate', 'Medialunas': 'Desayuno', 'Tiramisú': 'Café', 'Churros': 'Azúcar', 'Provoleta': 'Queso',
            'Tarta': 'Masa', 'Sándwich': 'Pan', 'Quesadilla': 'Tortilla', 'Ramen': 'Sopa', 'Burritos': 'Frijoles',
            'Cheesecake': 'Postre', 'Flan': 'Caramelo', 'Dulce de leche': 'Azúcar', 'Humita': 'Choclo', 'Polenta': 'Harina',
            'Shawarma': 'Carne', 'Wrap': 'Rollo', 'Wok': 'Verduras', 'Bondiola': 'Cerdo', 'Choripán': 'Chorizo',
            'Tortilla': 'Huevo', 'Risotto': 'Arroz'
        },
    },
    {
        id: '2',
        name: 'Profesiones',
        description: 'Oficios y trabajos',
        items: [
            'Médico', 'Bombero', 'Policía', 'Arquitecto', 'Cocinero', 'Programador', 'Dentista', 'Abogado', 'Astronauta', 'Veterinario',
            'Maestro', 'Carpintero', 'Electricista', 'Enfermero', 'Piloto', 'Taxista', 'Mecánico', 'Plomero', 'Jardinero', 'Panadero',
            'Periodista', 'Actor', 'Músico', 'Bartender', 'Influencer', 'Árbitro', 'Entrenador', 'Psicólogo', 'Científico', 'Fotógrafo',
            'Diseñador', 'Escultor', 'Peluquero', 'Cartero', 'Carnicero', 'Soldador', 'Economista'
        ],
        hint: 'Expertise',
        itemHints: {
            'Médico': 'Caduceo', 'Bombero': 'Ignífugo', 'Policía': 'Insignia', 'Arquitecto': 'Fachada', 'Cocinero': 'Batch',
            'Programador': 'Binario', 'Dentista': 'Esmalte', 'Abogado': 'Litigio', 'Astronauta': 'Apolo', 'Veterinario': 'Boza',
            'Maestro': 'Tiza', 'Carpintero': 'Viruta', 'Electricista': 'Voltaje', 'Enfermero': 'Suero', 'Piloto': 'Radar',
            'Taxista': 'Bandera', 'Mecánico': 'Engranaje', 'Plomero': 'Sifón', 'Jardinero': 'Injerto', 'Panadero': 'Levadura',
            'Periodista': 'Primicia', 'Actor': 'Telón', 'Músico': 'Atril', 'Bartender': 'Jigger', 'Influencer': 'Tag',
            'Árbitro': 'VAR', 'Entrenador': 'Táctica', 'Psicólogo': 'Diván', 'Científico': 'Probeta', 'Fotógrafo': 'ISO',
            'Diseñador': 'Bezier', 'Escultor': 'Cincel', 'Peluquero': 'Navaja', 'Cartero': 'Sacude', 'Carnicero': 'Balanza',
            'Soldador': 'Chispa', 'Economista': 'PIB'
        },
        itemHintsEasy: {
            'Médico': 'Salud', 'Bombero': 'Fuego', 'Policía': 'Ley', 'Arquitecto': 'Plano', 'Cocinero': 'Comida',
            'Programador': 'Código', 'Dentista': 'Dientes', 'Abogado': 'Juicio', 'Astronauta': 'Espacio', 'Veterinario': 'Animales',
            'Maestro': 'Escuela', 'Carpintero': 'Madera', 'Electricista': 'Luz', 'Enfermero': 'Cura', 'Piloto': 'Avión',
            'Taxista': 'Auto', 'Mecánico': 'Taller', 'Plomero': 'Agua', 'Jardinero': 'Plantas', 'Panadero': 'Pan',
            'Periodista': 'Noticias', 'Actor': 'Cine', 'Músico': 'Notas', 'Bartender': 'Tragos', 'Influencer': 'Redes',
            'Árbitro': 'Fútbol', 'Entrenador': 'Equipo', 'Psicólogo': 'Terapia', 'Científico': 'Ciencia', 'Fotógrafo': 'Cámara',
            'Diseñador': 'Dibujo', 'Escultor': 'Arte', 'Peluquero': 'Pelo', 'Cartero': 'Cartas', 'Carnicero': 'Carne',
            'Soldador': 'Metal', 'Economista': 'Dinero'
        },
    },
    {
        id: '3',
        name: 'Marcas',
        description: 'Corporaciones mundiales',
        items: [
            'Nike', 'Apple', 'Coca Cola', 'Samsung', 'Adidas', 'McDonalds', 'Google', 'Netflix', 'Disney', 'Toyota',
            'Starbucks', 'Amazon', 'Sony', 'Lego', 'Microsoft', 'Pepsi', 'Ferrari', 'Ford', 'Spotify', 'Uber',
            'Mercado Libre', 'Tesla', 'Instagram', 'BMW', 'Visa', 'Mastercard', 'Rolex', 'IKEA', 'Huawei', 'Zara',
            'Puma', 'Honda', 'Dell', 'Canon', 'Nintendo', 'Vans', 'Red Bull'
        ],
        hint: 'Corporación',
        itemHints: {
            'Nike': 'Pipino', 'Apple': 'Woz', 'Coca Cola': 'Jarabe', 'Samsung': 'Chaebol', 'Adidas': 'Adi',
            'McDonalds': 'Kroc', 'Google': 'Garage', 'Netflix': 'Randolph', 'Disney': 'Mickey', 'Toyota': 'Toyoda',
            'Starbucks': 'Schultz', 'Amazon': 'Bezos', 'Sony': 'Ibuka', 'Lego': 'Christiansen', 'Microsoft': 'Gates',
            'Pepsi': 'Bradham', 'Ferrari': 'Enzo', 'Ford': 'Henry', 'Spotify': 'Ek', 'Uber': 'Kalanick',
            'Mercado Libre': 'Galperin', 'Tesla': 'Musk', 'Instagram': 'Kevin', 'BMW': 'Bayerische', 'Visa': 'Hock',
            'Mastercard': 'Purchase', 'Rolex': 'Wilsdorf', 'IKEA': 'Kamprad', 'Huawei': 'Ren', 'Zara': 'Amancio',
            'Puma': 'Rudolf', 'Honda': 'Soichiro', 'Dell': 'Michael', 'Canon': 'Ota', 'Nintendo': 'Yamauchi', 'Vans': 'Van-Doren',
            'Red Bull': 'Mateschitz'
        },
    },
    {
        id: '4',
        name: 'Lugares de Córdoba',
        description: 'Sierras y ciudad',
        items: [
            'La Cañada', 'Catedral', 'Villa Carlos Paz', 'Cosquín', 'Río Cuarto', 'Alta Gracia', 'La Falda', 'Mina Clavero', 'Patio Olmos', 'Nueva Córdoba',
            'Barrio Güemes', 'Estadio Kempes', 'Parque Sarmiento', 'Buen Pastor', 'Capilla del Monte', 'Jesús María', 'Villa María', 'Los Reartes', 'Calamuchita',
            'Villa Belgrano', 'Cerro Colorado', 'San Marcos Sierras', 'Nono', 'Yacanto', 'La Cumbrecita', 'Villa General Belgrano', 'Miramar', 'Los Terrones', 'Ongamira'
        ],
        hint: 'Serranía',
        itemHints: {
            'La Cañada': 'Encauce', 'Catedral': 'Cúpula', 'Villa Carlos Paz': 'Cucú', 'Cosquín': 'Folklor', 'Río Cuarto': 'Imperio',
            'Alta Gracia': 'Virrey', 'La Falda': 'Eden', 'Mina Clavero': 'Río', 'Patio Olmos': 'Prisión', 'Nueva Córdoba': 'Estudiante',
            'Barrio Güemes': 'Anticuario', 'Estadio Kempes': 'Mundial', 'Parque Sarmiento': 'Rosedal', 'Buen Pastor': 'Fuente',
            'Capilla del Monte': 'Uritorco', 'Jesús María': 'Doma', 'Villa María': 'Anfiteatro', 'Los Reartes': 'Abuelo', 'Calamuchita': 'Vientos',
            'Villa Belgrano': 'Oktoberfest', 'Cerro Colorado': 'Pintura', 'San Marcos Sierras': 'Miel', 'Nono': 'Abuela', 'Yacanto': 'Champaquí',
            'La Cumbrecita': 'Peatonal', 'Villa General Belgrano': 'Tirol', 'Miramar': 'Salada', 'Los Terrones': 'Rojizo', 'Ongamira': 'Gruta'
        },
    },
    {
        id: '5',
        name: 'Películas',
        description: 'Cine y celuloide',
        items: [
            'Titanic', 'Batman', 'El Padrino', 'Shrek', 'Harry Potter', 'Avatar', 'Star Wars', 'Joker', 'Toy Story', 'El Rey León',
            'Gladiador', 'Matrix', 'Rocky', 'Jurassic Park', 'John Wick', 'Frozen', 'Buscando a Nemo', 'Coco', 'Iron Man', 'Terminator',
            'Pulp Fiction', 'Inception', 'Spider-Man', 'Moana', 'Rápido y Furioso', 'El Exorcista', 'Batman Begins', 'Interstellar', 'The Avengers',
            'Dune', 'Parasite', 'Fight Club', 'Forrest Gump', 'Braveheart', 'Indiana Jones', 'Top Gun'
        ],
        hint: 'Metraje',
        itemHints: {
            'Titanic': 'Calpathia', 'Batman': 'Perlas', 'El Padrino': 'Cabeza', 'Shrek': 'Cebolla', 'Harry Potter': 'Andén',
            'Avatar': 'Unobtainium', 'Star Wars': 'Planos', 'Joker': 'Escaleras', 'Toy Story': 'Gancho', 'El Rey León': 'Acantilado',
            'Gladiador': 'Trigo', 'Matrix': 'Gato', 'Rocky': 'Philadelphia', 'Jurassic Park': 'Vaso', 'John Wick': 'Continental',
            'Frozen': 'Guantes', 'Buscando a Nemo': 'Sídney', 'Coco': 'Pétalos', 'Iron Man': 'Cueva', 'Terminator': 'Pulgar',
            'Pulp Fiction': 'Maletín', 'Inception': 'Trompo', 'Spider-Man': 'Besos', 'Moana': 'Corazón', 'Rápido y Furioso': 'Corona',
            'El Exorcista': 'Sopa', 'Batman Begins': 'Murciélago', 'Interstellar': 'Estantería', 'The Avengers': 'Shawarma', 'Dune': 'Especia',
            'Parasite': 'Sótano', 'Fight Club': 'Jabón', 'Forrest Gump': 'Bombones', 'Braveheart': 'Azul', 'Indiana Jones': 'Látigo',
            'Top Gun': 'Aviador'
        },
    },
    {
        id: '6',
        name: 'Animales',
        description: 'Biología y fauna',
        items: [
            'León', 'Elefante', 'Perro', 'Pingüino', 'Tiburón', 'Águila', 'Mono', 'Canguro', 'Jirafa', 'Cebra',
            'Oso Panda', 'Gato', 'Caballo', 'Delfín', 'Serpiente', 'Cocodrilo', 'Lobo', 'Oso', 'Vaca', 'Gallina',
            'Abeja', 'Ballena', 'Murciélago', 'Zorro', 'Águila Real', 'Rinoceronte', 'Hipopótamo', 'Búho', 'Koala', 'Flamenco',
            'Ardilla', 'Camello', 'Tortuga', 'Pulpo', 'Medusa', 'Tigre', 'Hormiga'
        ],
        hint: 'Especie',
        itemHints: {
            'León': 'Panthera', 'Elefante': 'Infrasonido', 'Perro': 'Canis', 'Pingüino': 'Spheniscidae', 'Tiburón': 'Lorenzini',
            'Águila': 'Aguda', 'Mono': 'Oponible', 'Canguro': 'Marsupio', 'Jirafa': 'Azul', 'Cebra': 'Rayas',
            'Oso Panda': 'Bambú', 'Gato': 'Vibrisas', 'Caballo': 'Herraduras', 'Delfín': 'Sonar', 'Serpiente': 'Jacobson',
            'Cocodrilo': 'Escamas', 'Lobo': 'Alfa', 'Oso': 'Hibernación', 'Vaca': 'Rumiante', 'Gallina': 'Cloaca',
            'Abeja': 'Feromonas', 'Ballena': 'Barbas', 'Murciélago': 'Radar', 'Zorro': 'Cola', 'Águila Real': 'Caza',
            'Rinoceronte': 'Queratina', 'Hipopótamo': 'Sudor', 'Búho': 'Silencioso', 'Koala': 'Eucalipto', 'Flamenco': 'Curvo',
            'Ardilla': 'Sciuridae', 'Camello': 'Giba', 'Tortuga': 'Caparazón', 'Pulpo': 'Tinta', 'Medusa': 'Tentáculo',
            'Tigre': 'Acecho', 'Hormiga': 'Formicidae'
        },
    },
    {
        id: '7',
        name: 'Deportes',
        description: 'Disciplinas físicas',
        items: [
            'Fútbol', 'Tenis', 'Básquet', 'Rugby', 'Natación', 'Boxeo', 'Golf', 'Hockey', 'Vóley', 'Automovilismo',
            'Ciclismo', 'Surf', 'Padel', 'Béisbol', 'Gimnasia', 'Esquí', 'Atletismo', 'Handball', 'Esgrima', 'Karate',
            'Judo', 'Remo', 'Vela', 'Waterpolo', 'Patinaje', 'Motociclismo', 'Polo', 'Ping Pong', 'Ciclismo de montaña'
        ],
        hint: 'Disciplina',
        itemHints: {
            'Fútbol': 'Offside', 'Tenis': 'Tiebreak', 'Básquet': 'Triple', 'Rugby': 'Scrum', 'Natación': 'Cloro',
            'Boxeo': 'K.O.', 'Golf': 'Birdie', 'Hockey': 'Cárner', 'Vóley': 'Libero', 'Automovilismo': 'Pitstop',
            'Ciclismo': 'Cadencia', 'Surf': 'Wax', 'Padel': 'Vidrio', 'Béisbol': 'Homerun', 'Gimnasia': 'Magnesio',
            'Esquí': 'Canto', 'Atletismo': 'Valla', 'Handball': 'Rosca', 'Esgrima': 'Estocada', 'Karate': 'Kata',
            'Judo': 'Ippon', 'Remo': 'Palada', 'Vela': 'Sotavento', 'Waterpolo': 'Gorro', 'Patinaje': 'Eje',
            'Motociclismo': 'Grip', 'Polo': 'Chukker', 'Ping Pong': 'Efecto', 'Ciclismo de montaña': 'Suspensión'
        },
    },
    {
        id: '8',
        name: 'Famosos',
        description: 'Figuras públicas',
        items: [
            'Messi', 'Maradona', 'Shakira', 'Will Smith', 'Elon Musk', 'Beyoncé', 'Ricky Martin', 'Angelina Jolie', 'Cristiano Ronaldo', 'Taylor Swift',
            'Steve Jobs', 'Barack Obama', 'Papa Francisco', 'Michael Jackson', 'Justin Bieber', 'Bad Bunny', 'Mirtha Legrand', 'Susana Giménez', 'Brad Pitt',
            'Leonardo DiCaprio', 'Lady Gaga', 'Bill Gates', 'Oprah Winfrey', 'Robert Downey Jr.', 'Johnny Depp', 'Jennifer Aniston', 'Marilyn Monroe', 'Elvis Presley', 'Nelson Mandela'
        ],
        hint: 'Personaje',
        itemHints: {
            'Messi': 'Ankara', 'Maradona': 'Fiorito', 'Shakira': 'Barranquilla', 'Will Smith': 'Slap', 'Elon Musk': 'X',
            'Beyoncé': 'Destiny', 'Ricky Martin': 'Menudo', 'Angelina Jolie': 'Maléfica', 'Cristiano Ronaldo': 'Funchal', 'Taylor Swift': 'Eras',
            'Steve Jobs': 'Garage', 'Barack Obama': 'Hope', 'Papa Francisco': 'Flores', 'Michael Jackson': 'Glove', 'Justin Bieber': 'Baby',
            'Bad Bunny': 'Panting', 'Mirtha Legrand': 'Almuerzo', 'Susana Giménez': 'Shock', 'Brad Pitt': 'Oklahoma', 'Leonardo DiCaprio': 'Oscars',
            'Lady Gaga': 'Meat', 'Bill Gates': 'Windows', 'Oprah Winfrey': 'Show', 'Robert Downey Jr.': 'Stark', 'Johnny Depp': 'Pirate',
            'Jennifer Aniston': 'Rachel', 'Marilyn Monroe': 'Norma', 'Elvis Presley': 'Memphis', 'Nelson Mandela': 'Robben'
        },
    },
    {
        id: '9',
        name: 'Objetos',
        description: 'Elementos cotidianos',
        items: [
            'Celular', 'Llaves', 'Reloj', 'Lentes', 'Mochila', 'Billetera', 'Silla', 'Mesa', 'Cama', 'Televisor',
            'Control remoto', 'Espejo', 'Ventilador', 'Paraguas', 'Sombrero', 'Tijeras', 'Cuchillo', 'Tenedor', 'Cuchara', 'Plato',
            'Taza', 'Botella', 'Termo', 'Mate', 'Escoba', 'Martillo', 'Almohada', 'Lámpara', 'Cargador', 'Auriculares', 'Maleta',
            'Guitarras', 'Cuadernos', 'Pinceles', 'Secador de pelo', 'Plancha', 'Abridor', 'Sacacorchos', 'Libro', 'Mapa', 'Perchero'
        ],
        hint: 'Útil',
        itemHints: {
            'Celular': 'Litio', 'Llaves': 'Perno', 'Reloj': 'Escape', 'Lentes': 'Dioptría', 'Mochila': 'Asa',
            'Billetera': 'Cuero', 'Silla': 'Respaldo', 'Mesa': 'Tablero', 'Cama': 'Somier', 'Televisor': 'Píxel',
            'Control remoto': 'Infrarrojo', 'Espejo': 'Reflejo', 'Ventilador': 'Aspa', 'Paraguas': 'Varilla', 'Sombrero': 'Copa',
            'Tijeras': 'Pivote', 'Cuchillo': 'Espiga', 'Tenedor': 'Diente', 'Cuchara': 'Mango', 'Plato': 'Loza',
            'Taza': 'Asa', 'Botella': 'Pico', 'Termo': 'Ampolla', 'Mate': 'Porongo', 'Escoba': 'Sorgo',
            'Martillo': 'Uña', 'Almohada': 'Funda', 'Lámpara': 'Luz', 'Cargador': 'Transformador', 'Auriculares': 'Diafragma',
            'Maleta': 'Telescópica', 'Guitarras': 'Traste', 'Cuadernos': 'Espiral', 'Pinceles': 'Virola', 'Secador de pelo': 'Resistencia',
            'Plancha': 'Vapor', 'Abridor': 'Palanca', 'Sacacorchos': 'Hélice', 'Libro': 'Lomo', 'Mapa': 'Leyenda', 'Perchero': 'Ménsula'
        },
    },
    {
        id: '10',
        name: 'Apps',
        description: 'Software y plataformas',
        items: [
            'WhatsApp', 'Instagram', 'TikTok', 'Spotify', 'YouTube', 'Facebook', 'Twitter', 'Tinder', 'Uber', 'Airbnb',
            'Telegram', 'Google Maps', 'Pinterest', 'Netflix', 'Pedidos Ya', 'Mercado Pago', 'Snapchat', 'Reddit', 'LinkedIn', 'Twitch',
            'Duolingo', 'Slack', 'Discord', 'Chrome', 'Gmail', 'Zoom', 'Canva', 'Shazam', 'CapCut'
        ],
        hint: 'Código',
        itemHints: {
            'WhatsApp': 'Jan', 'Instagram': 'Krieger', 'TikTok': 'Byte', 'Spotify': 'Ek', 'YouTube': 'Intro',
            'Facebook': 'Zuck', 'Twitter': 'X', 'Tinder': 'Swipe', 'Uber': 'Kalanick', 'Airbnb': 'Capa',
            'Telegram': 'Durov', 'Google Maps': 'Pin', 'Pinterest': 'Board', 'Netflix': 'Autoplay', 'Pedidos Ya': 'Mochila',
            'Mercado Pago': 'Galperin', 'Snapchat': 'Ghost', 'Reddit': 'Snoo', 'LinkedIn': 'Red', 'Twitch': 'Bits',
            'Duolingo': 'Búho', 'Slack': 'Canal', 'Discord': 'Bot', 'Chrome': 'Ram', 'Gmail': 'Inbox',
            'Zoom': 'Mute', 'Canva': 'Layout', 'Shazam': 'Sample', 'CapCut': 'Timeline'
        },
    },
    {
        id: '11',
        name: 'Países',
        description: 'Geografía política',
        items: [
            'Argentina', 'Brasil', 'España', 'Japón', 'Italia', 'Francia', 'México', 'Estados Unidos', 'China', 'Alemania',
            'Canadá', 'Australia', 'Egipto', 'Uruguay', 'Chile', 'Rusia', 'India', 'Portugal', 'Grecia', 'Turquía',
            'Suiza', 'Holanda', 'Bélgica', 'Corea del Sur', 'Colombia', 'Perú', 'Islandia', 'Noruega', 'Suecia'
        ],
        hint: 'Geopolítica',
        itemHints: {
            'Argentina': 'Virreinato', 'Brasil': 'Amazonas', 'España': 'Meseta', 'Japón': 'Shogunato', 'Italia': 'Bota',
            'Francia': 'Gallo', 'México': 'Nopal', 'Estados Unidos': 'Barras', 'China': 'Dragón', 'Alemania': 'Berlín',
            'Canadá': 'Arce', 'Australia': 'Emú', 'Egipto': 'Nilo', 'Uruguay': 'Charrúa', 'Chile': 'Andes',
            'Rusia': 'Plaza', 'India': 'Tigre', 'Portugal': 'Barcelos', 'Grecia': 'Columnas', 'Turquía': 'Media-Luna',
            'Suiza': 'Alpes', 'Holanda': 'Molino', 'Bélgica': 'Chocolate', 'Corea del Sur': 'Oriente', 'Colombia': 'Café',
            'Perú': 'Machu', 'Islandia': 'Geiser', 'Noruega': 'Fiordo', 'Suecia': 'Azul'
        },
    },
    {
        id: '12',
        name: 'Música',
        description: 'Síncopa y ritmo',
        items: [
            'Rock', 'Pop', 'Reggaeton', 'Jazz', 'Cuarteto', 'Trap', 'Clásica', 'Blues', 'Salsa', 'Tango',
            'Cumbia', 'Reggae', 'Heavy Metal', 'Hip Hop', 'Folklore', 'Bachata', 'Soul', 'Funk', 'Disco', 'Techno',
            'Indie', 'Punk', 'Flamenco', 'Bossa Nova', 'Samba', 'K-pop', 'Electro-pop', 'House', 'Country'
        ],
        hint: 'Ritmo',
        itemHints: {
            'Rock': 'Distorsión', 'Pop': 'Chart', 'Reggaeton': 'Dembow', 'Jazz': 'Impro', 'Cuarteto': 'Tunga',
            'Trap': '808', 'Clásica': 'Partitura', 'Blues': 'Delta', 'Salsa': 'Clave', 'Tango': 'Bandoneón',
            'Cumbia': 'Güiro', 'Reggae': 'Offbeat', 'Heavy Metal': 'Bombo', 'Hip Hop': 'Graffiti', 'Folklore': 'Peña',
            'Bachata': 'Güira', 'Soul': 'Gospel', 'Funk': 'Slap', 'Disco': 'Fiebre', 'Techno': 'BPM',
            'Indie': 'Alternativa', 'Punk': 'Cresta', 'Flamenco': 'Taconeo', 'Bossa Nova': 'Jobim', 'Samba': 'Rio',
            'K-pop': 'Idol', 'Electro-pop': 'Sinte', 'House': 'Four', 'Country': 'Fiddle'
        },
    },
    {
        id: '13',
        name: 'Superhéroes',
        description: 'Vigilantes y poderes',
        items: [
            'Spider-Man', 'Iron Man', 'Wonder Woman', 'Superman', 'Hulk', 'Flash', 'Thor', 'Batman', 'Capitán América', 'Aquaman',
            'Wolverine', 'Deadpool', 'Pantera Negra', 'Ant-Man', 'Doctor Strange', 'Bruja Escarlata', 'Green Lantern', 'Shazam', 'Daredevil', 'Robin',
            'Catwoman', 'Joker', 'Lex Luthor', 'Venom', 'Storm', 'Groot', 'Star-Lord'
        ],
        hint: 'Capas',
        itemHints: {
            'Spider-Man': 'Parker', 'Iron Man': 'Stark', 'Wonder Woman': 'Diana', 'Superman': 'Kriptonita', 'Hulk': 'Gamma',
            'Flash': 'Allen', 'Thor': 'Mjolnir', 'Batman': 'Wayne', 'Capitán América': 'Rogers', 'Aquaman': 'Arthur',
            'Wolverine': 'Adamantium', 'Deadpool': 'Wade', 'Pantera Negra': 'Vibranium', 'Ant-Man': 'Pym', 'Doctor Strange': 'Agamotto',
            'Bruja Escarlata': 'Wanda', 'Green Lantern': 'Hal', 'Shazam': 'Billy', 'Daredevil': 'Matt', 'Robin': 'Dick',
            'Catwoman': 'Selina', 'Joker': 'Gas', 'Lex Luthor': 'Lex', 'Venom': 'Eddie', 'Storm': 'Ororo', 'Groot': 'Flora',
            'Star-Lord': 'Quill'
        },
    },
    {
        id: '14',
        name: 'Videojuegos',
        description: 'Píxeles y consolas',
        items: [
            'Mario Bros', 'Minecraft', 'FIFA', 'GTA', 'Fortnite', 'Zelda', 'Pac-Man', 'Tetris', 'Counter-Strike', 'Among Us',
            'Candy Crush', 'Sonic', 'Pokémon', 'Roblox', 'Mortal Kombat', 'Call of Duty', 'LoL', 'Valorant', 'God of War', 'The Last of Us',
            'Street Fighter', 'Final Fantasy', 'The Sims', 'Clash Royale', 'Free Fire', 'Subway Surfers', 'Doom'
        ],
        hint: 'Píxel',
        itemHints: {
            'Mario Bros': 'Hongo', 'Minecraft': 'Pico', 'FIFA': 'Ultimate', 'GTA': 'Estrellas', 'Fortnite': 'Construcción',
            'Zelda': 'Trifuerza', 'Pac-Man': 'Fantasmas', 'Tetris': 'Tetramino', 'Counter-Strike': 'Rush', 'Among Us': 'Venteo',
            'Candy Crush': 'Sugar', 'Sonic': 'Anillo', 'Pokémon': 'Atrapa', 'Roblox': 'Avatar', 'Mortal Kombat': 'Fatality',
            'Call of Duty': 'Racha', 'LoL': 'Nexo', 'Valorant': 'Spike', 'God of War': 'Caos', 'The Last of Us': 'Cordyceps',
            'Street Fighter': 'Hadouken', 'Final Fantasy': 'Cristal', 'The Sims': 'Plumbob', 'Clash Royale': 'Cofre', 'Free Fire': 'Booyah',
            'Subway Surfers': 'Jake', 'Doom': 'Slayer'
        },
    },
    {
        id: '15',
        name: 'Series de TV',
        description: 'Trama y episodios',
        items: [
            'Friends', 'The Office', 'Stranger Things', 'Breaking Bad', 'The Simpsons', 'Game of Thrones', 'Grey\'s Anatomy', 'Casados con Hijos', 'La Casa de Papel', 'El Encargado',
            'Okupas', 'Los Simuladores', 'South Park', 'Narcos', 'El marginal', 'Black Mirror', 'Euphoria', 'Succession', 'The Bear', 'Lost',
            'How I Met Your Mother', 'The Big Bang Theory', 'Modern Family', 'The Crown', 'Dark', 'Chernobyl'
        ],
        hint: 'Producción',
        itemHints: {
            'Friends': 'Fuente', 'The Office': 'Dunder', 'Stranger Things': 'Upside', 'Breaking Bad': 'Pollos', 'The Simpsons': 'Duff',
            'Game of Thrones': 'Bran', 'Grey\'s Anatomy': 'Bisturí', 'Casados con Hijos': 'Pepe', 'La Casa de Papel': 'Máscara', 'El Encargado': 'Eliseo',
            'Okupas': 'Pollo', 'Los Simuladores': 'Santos', 'South Park': 'Cartman', 'Narcos': 'Plomo', 'El marginal': 'Patio', 'Black Mirror': 'Cerdo',
            'Euphoria': 'Zendaya', 'Succession': 'Roy', 'The Bear': 'Navaja', 'Lost': 'Escotilla',
            'How I Met Your Mother': 'Barney', 'The Big Bang Theory': 'Sheldon', 'Modern Family': 'Phil', 'The Crown': 'Queen', 'Dark': 'Jonas', 'Chernobyl': 'Grafito'
        },
    },
    {
        id: '16',
        name: 'Futbolistas',
        description: 'Balompié mundial',
        items: [
            'Messi', 'Maradona', 'Cristiano Ronaldo', 'Pelé', 'Neymar', 'Mbappé', 'Ronaldinho', 'Zidane', 'Ronaldo Nazario', 'Cruyff',
            'Di Stefano', 'Puskas', 'Lev Yashin', 'Beckenbauer', 'Platini', 'Zico', 'Henry', 'Eto\'o', 'Iniesta', 'Xavi',
            'Modric', 'Benzema', 'Haaland', 'Lewandowski', 'Dibu Martínez', 'Julián Álvarez', 'Di María', 'Hulk', 'Vinícius Jr', 'Lautaro Martínez'
        ],
        hint: 'Dorsal',
        itemHints: {
            'Messi': 'Ankara', 'Maradona': 'Lanús', 'Cristiano Ronaldo': 'Madeira', 'Pelé': 'Corações', 'Neymar': 'Santos',
            'Mbappé': 'Bondy', 'Ronaldinho': 'Querétaro', 'Zidane': 'Cabezazo', 'Ronaldo Nazario': 'Rodilla', 'Cruyff': 'Naranja',
            'Di Stefano': 'Saeta', 'Puskas': 'Cañoncito', 'Lev Yashin': 'Araña', 'Beckenbauer': 'Kaiser', 'Platini': 'Nancy',
            'Zico': 'Galinho', 'Henry': 'Highbury', 'Eto\'o': 'Indomable', 'Iniesta': 'Fuentealbilla', 'Xavi': 'Terrassa',
            'Modric': 'Zadar', 'Benzema': 'Valbuena', 'Haaland': 'Androide', 'Lewandowski': 'Varsovia', 'Dibu Martínez': 'Baile',
            'Julián Álvarez': 'Calchín', 'Di María': 'Perdriel', 'Hulk': 'Campina', 'Vinícius Jr': 'Bailá', 'Lautaro Martínez': 'Bahía'
        },
    },
    {
        id: '17',
        name: 'Equipos de Fútbol',
        description: 'Clubes y estadios',
        items: [
            'Boca Juniors', 'River Plate', 'Real Madrid', 'Barcelona', 'Manchester City', 'Manchester United', 'Liverpool', 'Bayern Múnich', 'Juventus', 'Milan',
            'Inter', 'PSG', 'Atlético Madrid', 'Arsenal', 'Chelsea', 'Flamengo', 'Palmeiras', 'Independiente', 'Racing', 'San Lorenzo',
            'Talleres', 'Belgrano', 'Ajax', 'Borussia Dortmund', 'Napoli', 'Roma', 'Benfica', 'Porto', 'Peñarol', 'Nacional'
        ],
        hint: 'Institución',
        itemHints: {
            'Boca Juniors': 'Brandzen', 'River Plate': 'Udaondo', 'Real Madrid': 'Chamartín', 'Barcelona': 'San-Jordi', 'Manchester City': 'Maine',
            'Manchester United': 'Munich', 'Liverpool': 'Hillsborough', 'Bayern Múnich': 'Bávaro', 'Juventus': 'Agnelli', 'Milan': 'Invernales',
            'Inter': 'Moratti', 'PSG': 'Príncipes', 'Atlético Madrid': 'Manzanares', 'Arsenal': 'Highbury', 'Chelsea': 'Stamford',
            'Flamengo': 'Gávea', 'Palmeiras': 'Porco', 'Independiente': 'Avellaneda', 'Racing': 'Cilindro', 'San Lorenzo': 'Boedo',
            'Talleres': 'La-Boutique', 'Belgrano': 'Alberdi', 'Ajax': 'Godenzonen', 'Borussia Dortmund': 'Muro', 'Napoli': 'Vesubio',
            'Roma': 'Capitolio', 'Benfica': 'Eusebio', 'Porto': 'Dragones', 'Peñarol': 'Carbonero', 'Nacional': 'Bolso'
        },
    },
    {
        id: '18',
        name: 'Equipos de Básquet',
        description: 'Franquicias y parquet',
        items: [
            'Los Angeles Lakers', 'Golden State Warriors', 'Chicago Bulls', 'Boston Celtics', 'Miami Heat', 'San Antonio Spurs', 'Dallas Mavericks', 'Brooklyn Nets', 'Milwaukee Bucks', 'Phoenix Suns',
            'New York Knicks', 'Philadelphia 76ers', 'Houston Rockets', 'Cleveland Cavaliers', 'Denver Nuggets', 'Toronto Raptors', 'Utah Jazz', 'Atlanta Hawks', 'Detroit Pistons', 'Portland Trail Blazers',
            'Real Madrid Básquet', 'Barcelona Básquet', 'Atenas de Córdoba', 'Instituto de Córdoba', 'Quimsa', 'San Lorenzo Básquet', 'Olimpia Milano', 'Maccabi Tel Aviv', 'Panathinaikos', 'Fenerbahçe'
        ],
        hint: 'Parquet',
        itemHints: {
            'Los Angeles Lakers': 'Showtime', 'Golden State Warriors': 'Puente', 'Chicago Bulls': 'Dinastía', 'Boston Celtics': 'Celta', 'Miami Heat': 'Riley',
            'San Antonio Spurs': 'Popovich', 'Dallas Mavericks': 'Cuban', 'Brooklyn Nets': 'Barclays', 'Milwaukee Bucks': 'Hélade', 'Phoenix Suns': 'Desierto',
            'New York Knicks': 'Ewing', 'Philadelphia 76ers': 'Iverson', 'Houston Rockets': 'NASA', 'Cleveland Cavaliers': 'Ohio', 'Denver Nuggets': 'Milla',
            'Toronto Raptors': 'Garra', 'Utah Jazz': 'Salado', 'Atlanta Hawks': 'Halcón', 'Detroit Pistons': 'Bad-Boys', 'Portland Trail Blazers': 'Oregon',
            'Real Madrid Básquet': 'Llull', 'Barcelona Básquet': 'Navarro', 'Atenas de Córdoba': 'Milanesio', 'Instituto de Córdoba': 'Gloria', 'Quimsa': 'Santiago',
            'San Lorenzo Básquet': 'Boedo', 'Olimpia Milano': 'Armani', 'Maccabi Tel Aviv': 'Menorá', 'Panathinaikos': 'Obradovic', 'Fenerbahçe': 'Estambul'
        },
    },
    {
        id: '19',
        name: 'Rugbiers',
        description: 'Óvalos y tacles',
        items: [
            'Agustín Pichot', 'Hugo Porta', 'Pablo Matera', 'Agustín Creevy', 'Jonah Lomu', 'Dan Carter', 'Richie McCaw', 'Jonny Wilkinson', 'Siya Kolisi', 'Santi Cordero',
            'Emiliano Boffelli', 'Juan Martín Hernández', 'Felipe Contepomi', 'Marcos Kremer', 'Julian Montoya', 'Antonne Dupont', 'Beauden Barrett', 'Ardie Savea', 'Cheslin Kolbe', 'Owen Farrell',
            'Maro Itoje', 'Alun Wyn Jones', 'Bryan Habana', 'Sergio Parisse', 'Gonzalo Quesada', 'Sebastian Bertranou', 'Juan Imhoff', 'Facundo Isa', 'Bautista Delguy', 'Santiago Carreras',
            'Finn Russell', 'Bundee Aki', 'Charles Ollivon', 'Josh van der Flier', 'Lukhanyo Am', 'Eben Etzebeth', 'Gregory Alldritt', 'Damian Penaud', 'Romain Ntamack', 'Marcus Smith',
            'Sacha Feinberg-Mngomezulu', 'Tomas Lavanini', 'Matias Alemanno', 'Joaquin Oviedo', 'Thomas Gallo', 'Francisco Gomez Kodela'
        ],
        hint: 'Huevo',
        itemHints: {
            'Agustín Pichot': 'Bristol', 'Hugo Porta': 'Banco', 'Pablo Matera': 'Tuit', 'Agustín Creevy': 'Hook', 'Jonah Lomu': 'Genética',
            'Dan Carter': 'Racing', 'Richie McCaw': 'Plástico', 'Jonny Wilkinson': 'Drop', 'Siya Kolisi': 'Sharks', 'Santi Cordero': 'Exeter',
            'Emiliano Boffelli': 'Kicks', 'Juan Martín Hernández': 'Mago', 'Felipe Contepomi': 'Twin', 'Marcos Kremer': 'Clermont', 'Julian Montoya': 'Hook',
            'Antonne Dupont': 'Toulouse', 'Beauden Barrett': 'Suntory', 'Ardie Savea': 'Haka', 'Cheslin Kolbe': 'Small', 'Owen Farrell': 'Saracens',
            'Maro Itoje': 'London', 'Alun Wyn Jones': 'Ospreys', 'Bryan Habana': 'Guepardo', 'Sergio Parisse': 'Stade', 'Gonzalo Quesada': 'Paris',
            'Sebastian Bertranou': 'Gloucester', 'Juan Imhoff': 'Racing', 'Facundo Isa': 'Toulon', 'Bautista Delguy': 'Perpignan', 'Santiago Carreras': 'Fly',
            'Finn Russell': 'Racing', 'Bundee Aki': 'Connacht', 'Charles Ollivon': 'Toulon', 'Josh van der Flier': 'Leinster', 'Lukhanyo Am': 'Sharks',
            'Eben Etzebeth': 'Fisico', 'Gregory Alldritt': 'Rochelle', 'Damian Penaud': 'Bordeaux', 'Romain Ntamack': 'Toulouse', 'Marcus Smith': 'Harlequins',
            'Sacha Feinberg-Mngomezulu': 'Next', 'Tomas Lavanini': 'Aggro', 'Matias Alemanno': 'Cordobes', 'Joaquin Oviedo': 'Eight', 'Thomas Gallo': 'Angus',
            'Francisco Gomez Kodela': 'Lyon'
        },
    },
    {
        id: '20',
        name: 'Equipos de Rugby',
        description: 'Franquicias y selecciones',
        items: [
            'All Blacks', 'Springboks', 'Los Pumas', 'Wallabies', 'Tala RC', 'La Tablada', 'Urú Curé', 'Jockey Club Córdoba', 'Córdoba Athletic', 'Palermo Bajo',
            'Saracens', 'Leinster', 'Crusaders', 'Toulouse', 'Jaguares', 'Dogos XV', 'Pampas', 'England Rugby', 'France Rugby', 'Ireland Rugby',
            'Wales Rugby', 'Scotland Rugby', 'Fiji Rugby', 'Japan Rugby', 'Leicester Tigers', 'Harlequins', 'Munster', 'Stormers', 'Brumbies', 'Blues',
            'Peñarol Rugby', 'Selknam', 'American Raptors', 'Highlanders', 'Hurricanes', 'Chiefs', 'La Rochelle', 'Bordeaux Begles', 'Racing 92', 'Sale Sharks'
        ],
        hint: 'Ovalada',
        itemHints: {
            'All Blacks': 'Helecho', 'Springboks': 'Gacela', 'Los Pumas': 'Yaguareté', 'Wallabies': 'Marsupio', 'Tala RC': 'Warcalde',
            'La Tablada': 'Urca', 'Urú Curé': 'Lechuza', 'Jockey Club Córdoba': 'Hípico', 'Córdoba Athletic': 'Ingleses', 'Palermo Bajo': 'Escarabajo',
            'Saracens': 'Londres', 'Leinster': 'Dublín', 'Crusaders': 'Christchurch', 'Toulouse': 'Ciudad-Rosa', 'Jaguares': 'Súper',
            'Dogos XV': 'Cachorro', 'Pampas': 'Buenos-Aires', 'England Rugby': 'Rosa', 'France Rugby': 'Gallo', 'Ireland Rugby': 'Trébol',
            'Wales Rugby': 'Dragón', 'Scotland Rugby': 'Cardo', 'Fiji Rugby': 'Palmera', 'Japan Rugby': 'Cerezo', 'Leicester Tigers': 'Welford',
            'Harlequins': 'Mural', 'Munster': 'Limerick', 'Stormers': 'Ciudad-Cabo', 'Brumbies': 'Salvaje', 'Blues': 'Auckland',
            'Peñarol Rugby': 'Uruguay', 'Selknam': 'Chile', 'American Raptors': 'Colorado', 'Highlanders': 'Dunedin', 'Hurricanes': 'Wellington',
            'Chiefs': 'Hamilton', 'La Rochelle': 'Amarillo', 'Bordeaux Begles': 'Burdeos', 'Racing 92': 'Paris', 'Sale Sharks': 'Tiburones'
        },
    },
];
