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
            'Pizza': 'Borde-relleno', 'Hamburguesa': 'Molienda', 'Sushi': 'Gari', 'Tacos': 'Cilantro', 'Pasta': 'Bronce',
            'Asado': 'Salmuera', 'Paella': 'Socarrat', 'Empanadas': 'Frepue', 'Lasagna': 'Gratinado', 'Ceviche': 'Tiradito',
            'Ravioles': 'Sorrento', 'Milanesa': 'Cotoletta', 'Hot Dog': 'Relish', 'Locro': 'Charqui', 'Gnocchi': 'Madera',
            'Alfajor': 'Fécula', 'Medialunas': 'Almíbar', 'Tiramisú': 'Savoiardi', 'Churros': 'Lazo', 'Provoleta': 'Hilado',
            'Tarta': 'Quebrada', 'Sándwich': 'Miga', 'Quesadilla': 'Epazote', 'Ramen': 'Kansui', 'Burritos': 'Misión',
            'Cheesecake': 'Graham', 'Flan': 'Baño-maría', 'Dulce de leche': 'Maillard', 'Humita': 'Chala', 'Polenta': 'Grano',
            'Shawarma': 'Espiedo', 'Wrap': 'Enrollado', 'Wok': 'Salteado', 'Bondiola': 'Red', 'Choripán': 'Mariposa',
            'Tortilla': 'Babé', 'Risotto': 'Arborio'
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
            'Messi': 'Servilleta', 'Maradona': 'Cebollita', 'Cristiano Ronaldo': 'Funchal', 'Pelé': 'Tres-Coracoes', 'Neymar': 'Mogi',
            'Mbappé': 'Bondy', 'Ronaldinho': 'Querétaro', 'Zidane': 'Argelia', 'Ronaldo Nazario': 'Fenómeno', 'Cruyff': 'Naranja',
            'Di Stefano': 'Saeta', 'Puskas': 'Cañoncito', 'Lev Yashin': 'Gorra', 'Beckenbauer': 'Kaiser', 'Platini': 'Nancy',
            'Zico': 'Galinho', 'Henry': 'Les-Ulis', 'Eto\'o': 'Indomable', 'Iniesta': 'Fuentealbilla', 'Xavi': 'Terrassa',
            'Modric': 'Zadar', 'Benzema': 'Lyon', 'Haaland': 'Bryne', 'Lewandowski': 'Varsovia', 'Dibu Martínez': 'Emi',
            'Julián Álvarez': 'Calchín', 'Di María': 'Perdriel', 'Hulk': 'Campina', 'Vinícius Jr': 'Sao-Goncalo', 'Lautaro Martínez': 'Bahía'
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
            'Boca Juniors': 'Brandzen', 'River Plate': 'Udaondo', 'Real Madrid': 'Chamartín', 'Barcelona': 'San-Jordi', 'Manchester City': 'Maine',
            'Manchester United': 'Munich', 'Liverpool': 'Hillsborough', 'Bayern Múnich': 'Bávaro', 'Juventus': 'Cebra', 'Milan': 'Invernales',
            'Inter': 'Serpiente', 'PSG': 'Príncipes', 'Atlético Madrid': 'Indio', 'Arsenal': 'Cañón', 'Chelsea': 'Stamford',
            'Flamengo': 'Gávea', 'Palmeiras': 'Porco', 'Independiente': 'Avellaneda', 'Racing': 'Cilindro', 'San Lorenzo': 'Boedo',
            'Talleres': 'Fassi', 'Belgrano': 'Gigante', 'Ajax': 'Godenzonen', 'Borussia Dortmund': 'Muro', 'Napoli': 'Diego',
            'Roma': 'Totti', 'Benfica': 'Encarnizados', 'Porto': 'Dragones', 'Peñarol': 'Carbonero', 'Nacional': 'Bolso'
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
            'Los Angeles Lakers': 'Showtime', 'Golden State Warriors': 'Bahía', 'Chicago Bulls': 'Dinastía', 'Boston Celtics': 'Trébol', 'Miami Heat': 'South-Beach',
            'San Antonio Spurs': 'Popovich', 'Dallas Mavericks': 'Cuban', 'Brooklyn Nets': 'Barclays', 'Milwaukee Bucks': 'Giannis', 'Phoenix Suns': 'Desierto',
            'New York Knicks': 'Madison', 'Philadelphia 76ers': 'Iverson', 'Houston Rockets': 'Hakeem', 'Cleveland Cavaliers': 'LeBron', 'Denver Nuggets': 'Jokic',
            'Toronto Raptors': 'Kawhi', 'Utah Jazz': 'Malone', 'Atlanta Hawks': 'Wilkins', 'Detroit Pistons': 'Bad-Boys', 'Portland Trail Blazers': 'Lillard',
            'Real Madrid Básquet': 'Llull', 'Barcelona Básquet': 'Navarro', 'Atenas de Córdoba': 'Milanesio', 'Instituto de Córdoba': 'Gloria', 'Quimsa': 'Santiago',
            'San Lorenzo Básquet': 'Casla', 'Olimpia Milano': 'Armani', 'Maccabi Tel Aviv': 'Amarillos', 'Panathinaikos': 'Trébol-Verde', 'Fenerbahçe': 'Estambul'
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
            'Friends': 'Bote', 'The Office': 'Remolacha', 'Stranger Things': 'Waffles', 'Breaking Bad': 'Pollos', 'The Simpsons': 'Cerveza',
            'Game of Thrones': 'Cuervo', 'Grey\'s Anatomy': 'Bisturí', 'Casados con Hijos': 'Zapatos', 'La Casa de Papel': 'Máscara', 'El Encargado': 'Cámaras',
            'Okupas': 'Perro', 'Los Simuladores': 'Operativo', 'South Park': 'Nieve', 'Narcos': 'Plata', 'El marginal': 'Patio', 'Black Mirror': 'Cerdo',
            'Euphoria': 'Brillos', 'Succession': 'Jet', 'The Bear': 'Navaja', 'Lost': 'Escotilla', 'How I Met Your Mother': 'Corbatín',
            'The Big Bang Theory': 'Pizarrón', 'Modern Family': 'Entrevista', 'The Crown': 'Protocolo', 'Dark': 'Cueva', 'Chernobyl': 'Grafito'
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
            'Médico': 'Guardia', 'Bombero': 'Sirena', 'Policía': 'Patrulla', 'Arquitecto': 'Maqueta', 'Cocinero': 'Batch',
            'Programador': 'Bug', 'Dentista': 'Fresa', 'Abogado': 'Bufete', 'Astronauta': 'Apolo', 'Veterinario': 'Boza',
            'Maestro': 'Tiza', 'Carpintero': 'Garlopa', 'Electricista': 'Diferencial', 'Enfermero': 'Coche', 'Piloto': 'Radar',
            'Taxista': 'Radio', 'Mecánico': 'Fosa', 'Plomero': 'Llave-inglesa', 'Jardinero': 'Tijera', 'Panadero': 'Amasadora',
            'Periodista': 'Redacción', 'Actor': 'Telón', 'Músico': 'Atril', 'Bartender': 'Macerado', 'Influencer': 'Selfie',
            'Árbitro': 'Tarjeta', 'Entrenador': 'Silbato', 'Psicólogo': 'Transferencia', 'Científico': 'Probeta', 'Fotógrafo': 'Trípode',
            'Diseñador': 'Boceto', 'Escultor': 'Hormón', 'Peluquero': 'Navaja', 'Cartero': 'Sacude', 'Carnicero': 'Balanza',
            'Soldador': 'Mascara', 'Economista': 'Inflación'
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
            'Nike': 'Pipino', 'Apple': 'Woz', 'Coca Cola': 'Jarabe', 'Samsung': 'Chaebol', 'Adidas': 'Adi',
            'McDonalds': 'Kroc', 'Google': 'Garage', 'Netflix': 'Randolph', 'Disney': 'Mickey', 'Toyota': 'Toyoda',
            'Starbucks': 'Schultz', 'Amazon': 'Bezos', 'Sony': 'Ibuka', 'Lego': 'Christiansen', 'Microsoft': 'Gates',
            'Pepsi': 'Bradham', 'Ferrari': 'Enzo', 'Ford': 'Henry', 'Spotify': 'Ek', 'Uber': 'Kalanick',
            'Mercado Libre': 'Galperin', 'Tesla': 'Musk', 'Instagram': 'Kevin', 'BMW': 'Bayerische', 'Visa': 'Dee-Hock',
            'Mastercard': 'Purchase', 'Rolex': 'Wilsdorf', 'IKEA': 'Kamprad', 'Huawei': 'Ren', 'Zara': 'Amancio',
            'Puma': 'Rudolf', 'Honda': 'Soichiro', 'Dell': 'Michael', 'Canon': 'Ota', 'Nintendo': 'Yamauchi', 'Vans': 'Van-Doren',
            'Red Bull': 'Mateschitz'
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
    }
];
