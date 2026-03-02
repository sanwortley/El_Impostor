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
            'Pizza': 'Parténope', 'Hamburguesa': 'Sésamo', 'Sushi': 'Nori', 'Tacos': 'Nixtamal', 'Pasta': 'Semolina',
            'Asado': 'Achurra', 'Paella': 'Azafrán', 'Empanadas': 'Repulgue', 'Lasagna': 'Capas', 'Ceviche': 'Tiradito',
            'Ravioles': 'Sorrento', 'Milanesa': 'Cotoletta', 'Hot Dog': 'Dachshund', 'Locro': 'Pulsada', 'Gnocchi': 'Patata',
            'Alfajor': 'Fécula', 'Medialunas': 'Creciente', 'Tiramisú': 'Treviso', 'Churros': 'Porras', 'Provoleta': 'Parrilla',
            'Tarta': 'Quiche', 'Sándwich': 'Montagu', 'Quesadilla': 'Fundido', 'Ramen': 'Umami', 'Burritos': 'Misión',
            'Cheesecake': 'Graham', 'Flan': 'María', 'Dulce de leche': 'Conaprole', 'Humita': 'Chala', 'Polenta': 'Grano',
            'Shawarma': 'Vertical', 'Wrap': 'Enrollado', 'Wok': 'Salteado', 'Bondiola': 'Cerdo', 'Choripán': 'Costanera',
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
            'Mastercard': 'Círculos', 'Rolex': 'Corona', 'IKEA': 'Mueble', 'Huawei': 'Telecom', 'Zara': 'Moda',
            'Puma': 'Gato', 'Honda': 'VTEC', 'Dell': 'Monitor', 'Canon': 'Lente', 'Nintendo': 'Kioto', 'Vans': 'Skate',
            'Red Bull': 'Alas'
        },
    },
    {
        id: '16',
        name: 'Futbolistas',
        description: 'Jugadores históricos y actuales',
        items: [
            'Messi', 'Maradona', 'Cristiano Ronaldo', 'Pelé', 'Neymar', 'Mbappé', 'Ronaldinho', 'Zidane', 'Ronaldo Nazario', 'Cruyff',
            'Di Stefano', 'Puskas', 'Lev Yashin', 'Beckenbauer', 'Platini', 'Zico', 'Henry', 'Eto\'o', 'Iniesta', 'Xavi',
            'Modric', 'Benzema', 'Haaland', 'Lewandowski', 'Dibu Martínez', 'Julián Álvarez', 'Di María', 'Hulk', 'Vinícius Jr', 'Lautaro Martínez'
        ],
        hint: 'Balompié',
        itemHints: {
            'Messi': 'La-Pulga', 'Maradona': 'Pelusa', 'Cristiano Ronaldo': 'Bicho', 'Pelé': 'O-Rei', 'Neymar': 'Santos',
            'Mbappé': 'Bondy', 'Ronaldinho': 'Sonrisa', 'Zidane': 'Marsella', 'Ronaldo Nazario': 'Fenómeno', 'Cruyff',
            'Di Stefano', 'Puskas', 'Lev Yashin': 'Araña', 'Beckenbauer': 'Kaiser', 'Platini', 'Zico', 'Henry',
            'Eto\'o', 'Iniesta': 'Fuentealbilla', 'Xavi': 'Terrassa', 'Modric': 'Zadar', 'Benzema': 'Lyon',
            'Haaland': 'Androide', 'Lewandowski': 'Varsovia', 'Dibu Martínez': 'Mar-del-Plata', 'Julián Álvarez': 'Calchín', 'Di María': 'Fideo',
            'Hulk': 'Paraíba', 'Vinícius Jr': 'Bailá', 'Lautaro Martínez': 'Toro'
        },
    },
    {
        id: '17',
        name: 'Equipos de Fútbol',
        description: 'Clubes grandes del mundo',
        items: [
            'Boca Juniors', 'River Plate', 'Real Madrid', 'Barcelona', 'Manchester City', 'Manchester United', 'Liverpool', 'Bayern Múnich', 'Juventus', 'Milan',
            'Inter', 'PSG', 'Atlético Madrid', 'Arsenal', 'Chelsea', 'Flamengo', 'Palmeiras', 'Independiente', 'Racing', 'San Lorenzo',
            'Talleres', 'Belgrano', 'Ajax', 'Borussia Dortmund', 'Napoli', 'Roma', 'Benfica', 'Porto', 'Peñarol', 'Nacional'
        ],
        hint: 'Institución',
        itemHints: {
            'Boca Juniors': 'Xeneize', 'River Plate': 'Millonario', 'Real Madrid': 'Merengue', 'Barcelona': 'Culé', 'Manchester City': 'Citizen',
            'Manchester United': 'Red-Devil', 'Liverpool': 'Anfield', 'Bayern Múnich': 'Bávaro', 'Juventus': 'Vecchia-Signora', 'Milan': 'Rossonero',
            'Inter': 'Nerazzurro', 'PSG': 'Príncipes', 'Atlético Madrid': 'Colchonero', 'Arsenal': 'Gunner', 'Chelsea': 'Blue',
            'Flamengo': 'Mengao', 'Palmeiras': 'Verdao', 'Independiente': 'Diablo', 'Racing': 'Academia', 'San Lorenzo': 'Cuervo',
            'Talleres': 'Matador', 'Belgrano': 'Pirata', 'Ajax': 'Ámsterdam', 'Borussia Dortmund': 'Muro-Amarillo', 'Napoli': 'Partenopeo',
            'Roma': 'Loba', 'Benfica': 'Águilas', 'Porto': 'Dragones', 'Peñarol': 'Carbonero', 'Nacional': 'Bolso'
        },
    },
    {
        id: '18',
        name: 'Equipos de Básquet',
        description: 'Franquicias de la NBA y más',
        items: [
            'Los Angeles Lakers', 'Golden State Warriors', 'Chicago Bulls', 'Boston Celtics', 'Miami Heat', 'San Antonio Spurs', 'Dallas Mavericks', 'Brooklyn Nets', 'Milwaukee Bucks', 'Phoenix Suns',
            'New York Knicks', 'Philadelphia 76ers', 'Houston Rockets', 'Cleveland Cavaliers', 'Denver Nuggets', 'Toronto Raptors', 'Utah Jazz', 'Atlanta Hawks', 'Detroit Pistons', 'Portland Trail Blazers',
            'Real Madrid Básquet', 'Barcelona Básquet', 'Atenas de Córdoba', 'Instituto de Córdoba', 'Quimsa', 'San Lorenzo Básquet', 'Olimpia Milano', 'Maccabi Tel Aviv', 'Panathinaikos', 'Fenerbahçe'
        ],
        hint: 'Parquet',
        itemHints: {
            'Los Angeles Lakers': 'Púrpura', 'Golden State Warriors': 'Bahía', 'Chicago Bulls': 'Dinastía', 'Boston Celtics': 'Trébol', 'Miami Heat': 'South-Beach',
            'San Antonio Spurs': 'Espuela', 'Dallas Mavericks': 'Cowboy', 'Brooklyn Nets': 'Puente', 'Milwaukee Bucks': 'Ciervo', 'Phoenix Suns': 'Desierto',
            'New York Knicks': 'Madison', 'Philadelphia 76ers': 'Campana', 'Houston Rockets': 'Despegue', 'Cleveland Cavaliers': 'Ohio', 'Denver Nuggets': 'Milla',
            'Toronto Raptors': 'Garra', 'Utah Jazz': 'Notas', 'Atlanta Hawks': 'Halcón', 'Detroit Pistons': 'Motores', 'Portland Trail Blazers': 'Oregón',
            'Real Madrid Básquet': 'Palacio', 'Barcelona Básquet': 'Palau', 'Atenas de Córdoba': 'Griego', 'Instituto de Córdoba': 'Gloria', 'Quimsa': 'Santiago',
            'San Lorenzo Básquet': 'Boedo', 'Olimpia Milano': 'Moda', 'Maccabi Tel Aviv': 'Amarillos', 'Panathinaikos': 'Trébol-Verde', 'Fenerbahçe': 'Estambul'
        },
    },
    {
        id: '19',
        name: 'Rugbiers',
        description: 'Jugadores icónicos de la ovalada',
        items: [
            'Agustín Pichot', 'Hugo Porta', 'Pablo Matera', 'Agustín Creevy', 'Jonah Lomu', 'Dan Carter', 'Richie McCaw', 'Jonny Wilkinson', 'Siya Kolisi', 'Santi Cordero',
            'Emiliano Boffelli', 'Juan Martín Hernández', 'Felipe Contepomi', 'Marcos Kremer', 'Julian Montoya', 'Antonne Dupont', 'Beauden Barrett', 'Ardie Savea', 'Cheslin Kolbe', 'Owen Farrell',
            'Maro Itoje', 'Alun Wyn Jones', 'Bryan Habana', 'Sergio Parisse', 'Gonzalo Quesada', 'Sebastian Bertranou', 'Juan Imhoff', 'Facundo Isa', 'Bautista Delguy', 'Santiago Carreras'
        ],
        hint: 'Ovalada',
        itemHints: {
            'Agustín Pichot': 'Fichaje', 'Hugo Porta': 'Diez', 'Pablo Matera': 'Tercera', 'Agustín Creevy': 'Hooker', 'Jonah Lomu': 'Potencia',
            'Dan Carter': 'Precisión', 'Richie McCaw': 'Capitán', 'Jonny Wilkinson': 'Drop', 'Siya Kolisi': 'Unidad', 'Santi Cordero': 'Veloz',
            'Emiliano Boffelli': 'Patada', 'Juan Martín Hernández': 'Mago', 'Felipe Contepomi': 'Mellizo', 'Marcos Kremer': 'Fuerza', 'Julian Montoya': 'Líder',
            'Antonne Dupont': 'Medio', 'Beauden Barrett': 'Apertura', 'Ardie Savea': 'Energía', 'Cheslin Kolbe': 'Eléctrico', 'Owen Farrell': 'Firme',
            'Maro Itoje': 'Salto', 'Alun Wyn Jones': 'Récord', 'Bryan Habana': 'Guepardo', 'Sergio Parisse': 'Etno', 'Gonzalo Quesada': 'Coach',
            'Sebastian Bertranou': 'Pase', 'Juan Imhoff': 'Try', 'Facundo Isa': 'Empuje', 'Bautista Delguy': 'Quiebre', 'Santiago Carreras': 'Creativo'
        },
    },
    {
        id: '20',
        name: 'Equipos de Rugby',
        description: 'Seleccionados y clubes de rugby',
        items: [
            'All Blacks', 'Springboks', 'Los Pumas', 'Wallabies', 'Tala RC', 'La Tablada', 'Urú Curé', 'Jockey Club Córdoba', 'Córdoba Athletic', 'Palermo Bajo',
            'Saracens', 'Leinster', 'Crusaders', 'Toulouse', 'Jaguares', 'Dogos XV', 'Pampas', 'England Rugby', 'France Rugby', 'Ireland Rugby',
            'Wales Rugby', 'Scotland Rugby', 'Fiji Rugby', 'Japan Rugby', 'Leicester Tigers', 'Harlequins', 'Munster', 'Stormers', 'Brumbies', 'Blues'
        ],
        hint: 'Haka',
        itemHints: {
            'All Blacks': 'Helecho', 'Springboks': 'Gacela', 'Los Pumas': 'Yaguareté', 'Wallabies': 'Marsupial', 'Tala RC': 'Warcalde',
            'La Tablada': 'Urca', 'Urú Curé': 'Lechuza', 'Jockey Club Córdoba': 'Hípico', 'Córdoba Athletic': 'Ingleses', 'Palermo Bajo': 'Escarabajo',
            'Saracens': 'Londres', 'Leinster': 'Dublín', 'Crusaders': 'Christchurch', 'Toulouse': 'Francia', 'Jaguares': 'Súper',
            'Dogos XV': 'Cachorro', 'Pampas': 'Buenos-Aires', 'England Rugby': 'Rosa', 'France Rugby': 'Gallo', 'Ireland Rugby': 'Trébol',
            'Wales Rugby': 'Dragón', 'Scotland Rugby': 'Cardo', 'Fiji Rugby': 'Palmera', 'Japan Rugby': 'Cerezo', 'Leicester Tigers': 'Tigres',
            'Harlequins': 'Arlequín', 'Munster': 'Limerick', 'Stormers': 'Ciudad-del-Cabo', 'Brumbies': 'Caballo-Salvaje', 'Blues': 'Auckland'
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
            'Barrio Güemes': 'Anticuario', 'Estadio Kempes': 'Mundial', 'Parque Sarmiento': 'Rosedal', 'Buen Pastor': 'Agua-danzante',
            'Capilla del Monte': 'Uritorco', 'Jesús María': 'Doma', 'Villa María': 'Anfiteatro', 'Los Reartes': 'Abuelo', 'Calamuchita': 'Valle',
            'Villa Belgrano': 'Oktoberfest', 'Cerro Colorado': 'Pintura', 'San Marcos Sierras': 'Hippy', 'Nono': 'Río', 'Yacanto': 'Champaquí',
            'La Cumbrecita': 'Peatonal', 'Villa General Belgrano': 'Tirol', 'Miramar': 'Salada', 'Los Terrones': 'Rojizo', 'Ongamira': 'Indio'
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
            'Pulp Fiction': 'Maletín', 'Inception': 'Trompo', 'Spider-Man': 'Araña', 'Moana': 'Ancla', 'Rápido y Furioso': 'Nitro',
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
    {
        id: '8',
        name: 'Famosos',
        description: 'Personajes muy conocidos',
        items: [
            'Messi', 'Maradona', 'Shakira', 'Will Smith', 'Elon Musk', 'Beyoncé', 'Ricky Martin', 'Angelina Jolie', 'Cristiano Ronaldo', 'Taylor Swift',
            'Steve Jobs', 'Barack Obama', 'Papa Francis', 'Michael Jackson', 'Justin Bieber', 'Bad Bunny', 'Mirtha Legrand', 'Susana Giménez', 'Brad Pitt',
            'Leonardo DiCaprio', 'Lady Gaga', 'Bill Gates', 'Oprah Winfrey', 'Robert Downey Jr.', 'Johnny Depp', 'Jennifer Aniston', 'Marilyn Monroe', 'Elvis Presley', 'Nelson Mandela'
        ],
        hint: 'Personaje',
        itemHints: {
            'Messi': 'Rosario', 'Maradona': 'Lanús', 'Shakira': 'Waka', 'Will Smith': 'Philadelphia', 'Elon Musk': 'Pretoria',
            'Beyoncé': 'Houston', 'Ricky Martin': 'San-Juan', 'Angelina Jolie': 'Lara-Croft', 'Cristiano Ronaldo': 'Madeira', 'Taylor Swift': 'Pennsylvania',
            'Steve Jobs': 'California', 'Barack Obama': 'Honolulu', 'Papa Francis': 'Flores', 'Michael Jackson': 'Indiana', 'Justin Bieber': 'Ontario',
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
        hint: 'Código',
        itemHints: {
            'WhatsApp': 'Chat', 'Instagram': 'Foto', 'TikTok': 'Video', 'Spotify': 'Podcast', 'YouTube': 'Stream',
            'Facebook': 'Perfil', 'Twitter': 'X', 'Tinder': 'Cita', 'Uber': 'Auto', 'Airbnb': 'Casa',
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
        hint: 'Soberanía',
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
        hint: 'Ritmo',
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
        hint: 'Justicia',
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
        hint: 'Software',
        itemHints: {
            'Mario Bros': 'Hongo', 'Minecraft': 'Cubo', 'FIFA': 'Balón', 'GTA': 'Ciudad', 'Fortnite': 'Baile',
            'Zelda': 'Link', 'Pac-Man': 'Fantasma', 'Tetris': 'Línea', 'Counter-Strike': 'Bomba', 'Among Us': 'Impostor',
            'Candy Crush': 'Nivel', 'Sonic': 'Anillo', 'Pokémon': 'Bola', 'Roblox': 'Avatar', 'Mortal Kombat': 'Fatality',
            'Call of Duty': 'Fusil', 'LoL': 'Nexo', 'Valorant': 'Agente', 'God of War': 'Kratos', 'The Last of Us': 'Joel',
            'Street Fighter': 'Hadouken', 'Final Fantasy': 'Cloud', 'The Sims': 'Casa', 'Clash Royale': 'Cofre', 'Free Fire': 'Salto',
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
        hint: 'Episodio',
        itemHints: {
            'Friends': 'Central-Perk', 'The Office': 'Dunder-Mifflin', 'Stranger Things': 'Upside-Down', 'Breaking Bad': 'Heisenberg', 'The Simpsons': 'Springfield',
            'Game of Thrones': 'Westeros', 'Grey\'s Anatomy': 'Seattle-Grace', 'Casados con Hijos': 'Argento', 'La Casa de Papel': 'Dalí', 'El Encargado': 'Eliseo',
            'Okupas': 'Ricardo', 'Los Simuladores': 'Santos', 'South Park': 'Cartman', 'Narcos': 'Escobar', 'El marginal': 'Diosito', 'Black Mirror': 'Tecnología',
            'Euphoria': 'Rue', 'Succession': 'Roy', 'The Bear': 'Cocinero', 'Lost': 'Isla', 'How I Met Your Mother': 'Ted',
            'The Big Bang Theory': 'Sheldon', 'Modern Family': 'Dunphy', 'The Crown': 'Reina', 'Dark': 'Winden', 'Chernobyl': 'Planta'
        },
    },
];
