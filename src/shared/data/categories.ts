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
            'Cheesecake': 'Graham', 'Flan': 'María', 'Dulce de leche': 'Maillard', 'Humita': 'Chala', 'Polenta': 'Grano',
            'Shawarma': 'Espiedo', 'Wrap': 'Enrollado', 'Wok': 'Salteado', 'Bondiola': 'Cerdo', 'Choripán': 'Costanera',
            'Tortilla': 'Huevo', 'Risotto': 'Arborio'
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
            'Messi': 'Ankara', 'Maradona': 'Fiorito', 'Cristiano Ronaldo': 'Madeira', 'Pelé': 'Tres-Coracoes', 'Neymar': 'Santos',
            'Mbappé': 'Bondy', 'Ronaldinho': 'Querétaro', 'Zidane': 'Cabezazo', 'Ronaldo Nazario': 'Fenómeno', 'Cruyff': 'Naranja',
            'Di Stefano': 'Saeta', 'Puskas': 'Cañoncito', 'Lev Yashin': 'Araña', 'Beckenbauer': 'Kaiser', 'Platini': 'General',
            'Zico': 'Galinho', 'Henry': 'Titi', 'Eto\'o': 'Indomable', 'Iniesta': 'Fuentealbilla', 'Xavi': 'Terrassa',
            'Modric': 'Zadar', 'Benzema': 'Valbuena', 'Haaland': 'Androide', 'Lewandowski': 'Varsovia', 'Dibu Martínez': 'Emi',
            'Julián Álvarez': 'Calchín', 'Di María': 'Rosarino', 'Hulk': 'Paraíba', 'Vinícius Jr': 'Bailá', 'Lautaro Martínez': 'Toro'
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
            'Boca Juniors': 'Brandzen', 'River Plate': 'Udaondo', 'Real Madrid': 'Chamartín', 'Barcelona': 'Masía', 'Manchester City': 'Etihad',
            'Manchester United': 'Munich', 'Liverpool': 'Hillsborough', 'Bayern Múnich': 'Bávaro', 'Juventus': 'Agnelli', 'Milan': 'Berlusconi',
            'Inter': 'Moratti', 'PSG': 'Al-Khelaifi', 'Atlético Madrid': 'Manzanares', 'Arsenal': 'Highbury', 'Chelsea': 'Abramovich',
            'Flamengo': 'Gávea', 'Palmeiras': 'Leila', 'Independiente': 'Bocha', 'Racing': 'Academia', 'San Lorenzo': 'Boedo',
            'Talleres': 'Fassi', 'Belgrano': 'Gigante', 'Ajax': 'Cruyff', 'Borussia Dortmund': 'Westfalen', 'Napoli': 'Diego',
            'Roma': 'Totti', 'Benfica': 'Eusebio', 'Porto': 'Dragones', 'Peñarol': 'Carbonero', 'Nacional': 'Bolso'
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
            'Los Angeles Lakers': 'Showtime', 'Golden State Warriors': 'Bahía', 'Chicago Bulls': 'Dinastía', 'Boston Celtics': 'Parquet', 'Miami Heat': 'Riley',
            'San Antonio Spurs': 'Popovich', 'Dallas Mavericks': 'Cuban', 'Brooklyn Nets': 'Barclays', 'Milwaukee Bucks': 'Giannis', 'Phoenix Suns': 'Desierto',
            'New York Knicks': 'Ewing', 'Philadelphia 76ers': 'Iverson', 'Houston Rockets': 'Hakeem', 'Cleveland Cavaliers': 'LeBron', 'Denver Nuggets': 'Jokic',
            'Toronto Raptors': 'Kawhi', 'Utah Jazz': 'Malone', 'Atlanta Hawks': 'Wilkins', 'Detroit Pistons': 'Bad-Boys', 'Portland Trail Blazers': 'Lillard',
            'Real Madrid Básquet': 'Llull', 'Barcelona Básquet': 'Navarro', 'Atenas de Córdoba': 'Milanesio', 'Instituto de Córdoba': 'Gloria', 'Quimsa': 'Santiago',
            'San Lorenzo Básquet': 'Casla', 'Olimpia Milano': 'Armani', 'Maccabi Tel Aviv': 'Wilbekin', 'Panathinaikos': 'Obradovic', 'Fenerbahçe': 'Estambul'
        },
    },
    {
        id: '19',
        name: 'Rugbiers',
        description: 'Jugadores mundiales de elite',
        items: [
            'Agustín Pichot', 'Hugo Porta', 'Pablo Matera', 'Agustín Creevy', 'Jonah Lomu', 'Dan Carter', 'Richie McCaw', 'Jonny Wilkinson', 'Siya Kolisi', 'Santi Cordero',
            'Emiliano Boffelli', 'Juan Martín Hernández', 'Felipe Contepomi', 'Marcos Kremer', 'Julian Montoya', 'Antonne Dupont', 'Beauden Barrett', 'Ardie Savea', 'Cheslin Kolbe', 'Owen Farrell',
            'Maro Itoje', 'Alun Wyn Jones', 'Bryan Habana', 'Sergio Parisse', 'Gonzalo Quesada', 'Sebastian Bertranou', 'Juan Imhoff', 'Facundo Isa', 'Bautista Delguy', 'Santiago Carreras',
            'Finn Russell', 'Bundee Aki', 'Charles Ollivon', 'Josh van der Flier', 'Lukhanyo Am', 'Eben Etzebeth', 'Gregory Alldritt', 'Damian Penaud', 'Romain Ntamack', 'Marcus Smith',
            'Sacha Feinberg-Mngomezulu', 'Tomas Lavanini', 'Matias Alemanno', 'Joaquin Oviedo', 'Thomas Gallo', 'Francisco Gomez Kodela'
        ],
        hint: 'Huevo',
        itemHints: {
            'Agustín Pichot': 'Bristol', 'Hugo Porta': 'Banco', 'Pablo Matera': 'Leicester', 'Agustín Creevy': 'Montpellier', 'Jonah Lomu': 'Genética',
            'Dan Carter': 'Racing', 'Richie McCaw': 'Siete', 'Jonny Wilkinson': 'Toulon', 'Siya Kolisi': 'Sharks', 'Santi Cordero': 'Exeter',
            'Emiliano Boffelli': 'Edinburgh', 'Juan Martín Hernández': 'Mago', 'Felipe Contepomi': 'Leinster', 'Marcos Kremer': 'Clermont', 'Julian Montoya': 'Tigers',
            'Antonne Dupont': 'Toulouse', 'Beauden Barrett': 'Suntory', 'Ardie Savea': 'Hurricanes', 'Cheslin Kolbe': 'Stormers', 'Owen Farrell': 'Saracens',
            'Maro Itoje': 'London', 'Alun Wyn Jones': 'Ospreys', 'Bryan Habana': 'Toulon', 'Sergio Parisse': 'Stade', 'Gonzalo Quesada': 'Paris',
            'Sebastian Bertranou': 'Gloucester', 'Juan Imhoff': 'Racing', 'Facundo Isa': 'Toulon', 'Bautista Delguy': 'Perpignan', 'Santiago Carreras': 'Gloucester',
            'Finn Russell': 'Racing', 'Bundee Aki': 'Connacht', 'Charles Ollivon': 'Toulon', 'Josh van der Flier': 'Leinster', 'Lukhanyo Am': 'Sharks',
            'Eben Etzebeth': 'Fisico', 'Gregory Alldritt': 'Rochelle', 'Damian Penaud': 'Bordeaux', 'Romain Ntamack': 'Toulouse', 'Marcus Smith': 'Harlequins',
            'Sacha Feinberg-Mngomezulu': 'Stormers', 'Tomas Lavanini': 'Segunda', 'Matias Alemanno': 'Cordobes', 'Joaquin Oviedo': 'Perpignan', 'Thomas Gallo': 'Treviso',
            'Francisco Gomez Kodela': 'Lyon'
        },
    },
    {
        id: '20',
        name: 'Equipos de Rugby',
        description: 'Franquicias y selecciones top',
        items: [
            'All Blacks', 'Springboks', 'Los Pumas', 'Wallabies', 'Tala RC', 'La Tablada', 'Urú Curé', 'Jockey Club Córdoba', 'Córdoba Athletic', 'Palermo Bajo',
            'Saracens', 'Leinster', 'Crusaders', 'Toulouse', 'Jaguares', 'Dogos XV', 'Pampas', 'England Rugby', 'France Rugby', 'Ireland Rugby',
            'Wales Rugby', 'Scotland Rugby', 'Fiji Rugby', 'Japan Rugby', 'Leicester Tigers', 'Harlequins', 'Munster', 'Stormers', 'Brumbies', 'Blues',
            'Peñarol Rugby', 'Selknam', 'American Raptors', 'Highlanders', 'Hurricanes', 'Chiefs', 'La Rochelle', 'Bordeaux Begles', 'Racing 92', 'Sale Sharks',
            'Northampton Saints', 'Bath Rugby', 'London Irish', 'Stade Francais', 'Toulon'
        ],
        hint: 'Ovalada',
        itemHints: {
            'All Blacks': 'Helecho', 'Springboks': 'Gacela', 'Los Pumas': 'Yaguareté', 'Wallabies': 'Marsupial', 'Tala RC': 'Warcalde',
            'La Tablada': 'Urca', 'Urú Curé': 'Lechuza', 'Jockey Club Córdoba': 'Hípico', 'Córdoba Athletic': 'Ingleses', 'Palermo Bajo': 'Escarabajo',
            'Saracens': 'Londres', 'Leinster': 'Dublín', 'Crusaders': 'Christchurch', 'Toulouse': 'Francia', 'Jaguares': 'Súper',
            'Dogos XV': 'Cachorro', 'Pampas': 'Buenos-Aires', 'England Rugby': 'Rosa', 'France Rugby': 'Gallo', 'Ireland Rugby': 'Trébol',
            'Wales Rugby': 'Dragón', 'Scotland Rugby': 'Cardo', 'Fiji Rugby': 'Palmera', 'Japan Rugby': 'Cerezo', 'Leicester Tigers': 'Tigres',
            'Harlequins': 'Arlequín', 'Munster': 'Limerick', 'Stormers': 'Ciudad-del-Cabo', 'Brumbies': 'Caballo-Salvaje', 'Blues': 'Auckland',
            'Peñarol Rugby': 'Uruguay', 'Selknam': 'Chile', 'American Raptors': 'Colorado', 'Highlanders': 'Dunedin', 'Hurricanes': 'Wellington',
            'Chiefs': 'Hamilton', 'La Rochelle': 'Amarillo', 'Bordeaux Begles': 'Burdeos', 'Racing 92': 'Paris', 'Sale Sharks': 'Tiburones',
            'Northampton Saints': 'Santos', 'Bath Rugby': 'Termas', 'London Irish': 'Exiliados', 'Stade Francais': 'Rayos', 'Toulon': 'Rojo'
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
            'Friends': 'Manhattan', 'The Office': 'Scranton', 'Stranger Things': 'Hawkins', 'Breaking Bad': 'Albuquerque', 'The Simpsons': 'Matt',
            'Game of Thrones': 'Westeros', 'Grey\'s Anatomy': 'Shonda', 'Casados con Hijos': 'Argento', 'La Casa de Papel': 'Dalí', 'El Encargado': 'Eliseo',
            'Okupas': 'Dock-Sud', 'Los Simuladores': 'Lampone', 'South Park': 'Colorado', 'Narcos': 'Patrón', 'El marginal': 'San-Onofre', 'Black Mirror': 'Pantalla',
            'Euphoria': 'Zendaya', 'Succession': 'Roy', 'The Bear': 'Yes-Chef', 'Lost': 'Dharma', 'How I Met Your Mother': 'MacLaren',
            'The Big Bang Theory': 'Bazinga', 'Modern Family': 'Mockumentary', 'The Crown': 'Windsor', 'Dark': 'Winden', 'Chernobyl': 'Pripyat'
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
            'Nike': 'Olimpo', 'Apple': 'Wozniak', 'Coca Cola': 'Atlanta', 'Samsung': 'Corea', 'Adidas': 'Dassler',
            'McDonalds': 'Ray-Kroc', 'Google': 'Alphabet', 'Netflix': 'Reed', 'Disney': 'Burbank', 'Toyota': 'Nagoya',
            'Starbucks': 'Seattle', 'Amazon': 'Bezos', 'Sony': 'Minato', 'Lego': 'Billund', 'Microsoft': 'Redmond',
            'Pepsi': 'Bradham', 'Ferrari': 'Maranello', 'Ford': 'Detroit', 'Spotify': 'Estocolmo', 'Uber': 'Kalanick',
            'Mercado Libre': 'Galperin', 'Tesla': 'Musk', 'Instagram': 'Systrom', 'BMW': 'Múnich', 'Visa': 'Foster-City',
            'Mastercard': 'Purchase', 'Rolex': 'Ginebra', 'IKEA': 'Almhult', 'Huawei': 'Shenzhen', 'Zara': 'Arteixo',
            'Puma': 'Herzogenaurach', 'Honda': 'Hamamatsu', 'Dell': 'Round-Rock', 'Canon': 'Ota', 'Nintendo': 'Kioto', 'Vans': 'Skate',
            'Red Bull': 'Fuschl'
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
            'Titanic': 'Calpathia', 'Batman': 'Wayne', 'El Padrino': 'Corleone', 'Shrek': 'Farquaad', 'Harry Potter': 'Hogwarts',
            'Avatar': 'Pandora', 'Star Wars': 'Skywalker', 'Joker': 'Gotham', 'Toy Story': 'Andy', 'El Rey León': 'Mufasa',
            'Gladiador': 'Máximo', 'Matrix': 'Zion', 'Rocky': 'Balboa', 'Jurassic Park': 'Nublar', 'John Wick': 'Continental',
            'Frozen': 'Arendelle', 'Buscando a Nemo': 'Sydney', 'Coco': 'Mictlán', 'Iron Man': 'Stark', 'Terminator': 'Skynet',
            'Pulp Fiction': 'Tarantino', 'Inception': 'Nolan', 'Spider-Man': 'Parker', 'Moana': 'Motunui', 'Rápido y Furioso': 'Toretto',
            'El Exorcista': 'Regan', 'Batman Begins': 'Ra\'s', 'Interstellar': 'Gargantúa', 'The Avengers': 'Stark-Tower', 'Dune': 'Arrakis',
            'Parasite': 'Kiwis', 'Fight Club': 'Durden', 'Forrest Gump': 'Gump', 'Braveheart': 'Wallace', 'Indiana Jones': 'Jones',
            'Top Gun': 'Maverick'
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
        hint: 'Taxonomía',
        itemHints: {
            'León': 'Panthera', 'Elefante': 'Proboscídeo', 'Perro': 'Canis', 'Pingüino': 'Spheniscidae', 'Tiburón': 'Selachimorpha',
            'Águila': 'Accipitridae', 'Mono': 'Primate', 'Canguro': 'Macropodidae', 'Jirafa': 'Giraffa', 'Cebra': 'Hippotigris',
            'Oso Panda': 'Ailuropoda', 'Gato': 'Felis', 'Caballo': 'Equus', 'Delfín': 'Delphinidae', 'Serpiente': 'Serpentes',
            'Cocodrilo': 'Crocodilia', 'Lobo': 'Lupus', 'Oso': 'Ursidae', 'Vaca': 'Bos', 'Gallina': 'Gallus',
            'Abeja': 'Apis', 'Ballena': 'Cetacea', 'Murciélago': 'Chiroptera', 'Zorro': 'Vulpes', 'Águila Real': 'Aquila',
            'Rinoceronte': 'Rhinocerotidae', 'Hipopótamo': 'Hippopotamus', 'Búho': 'Strigiformes', 'Koala': 'Phascolarctos', 'Flamenco': 'Phoenicopterus',
            'Ardilla': 'Sciuridae', 'Camello': 'Camelus', 'Tortuga': 'Testudines', 'Pulpo': 'Octopoda', 'Medusa': 'Medusozoa',
            'Tigre': 'Tigris', 'Hormiga': 'Formicidae'
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
        hint: 'Binary',
        itemHints: {
            'WhatsApp': 'Koum', 'Instagram': 'Krieger', 'TikTok': 'Bytedance', 'Spotify': 'Ek', 'YouTube': 'Susan',
            'Facebook': 'Zuck', 'Twitter': 'Dorsey', 'Tinder': 'Rad', 'Uber': 'Camp', 'Airbnb': 'Chesky',
            'Telegram': 'Durov', 'Google Maps': 'Page', 'Pinterest': 'Silbermann', 'Netflix': 'Randolph', 'Pedidos Ya': 'Ariel',
            'Mercado Pago': 'Galperin', 'Snapchat': 'Spiegel', 'Reddit': 'Huffman', 'LinkedIn': 'Reid', 'Twitch': 'Shear',
            'Duolingo': 'Von-Ahn', 'Slack': 'Butterfield', 'Discord': 'Citron', 'Chrome': 'Pichai', 'Gmail': 'Buchheit',
            'Zoom': 'Yuan', 'Canva': 'Melanie', 'Shazam': 'Barton', 'CapCut': 'Edición'
        },
    }
];
