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
            'Pizza': 'W300-Fuerza', 'Hamburguesa': 'Maillard-Disco', 'Sushi': 'Shari-Vinagre', 'Tacos': 'Nixtamal-Grano', 'Pasta': 'Trefilado-Bronce',
            'Asado': 'Quebracho-Blanco', 'Paella': 'Socarrat-Base', 'Empanadas': 'Frepue-Trece', 'Lasagna': 'Béchamel-Capa', 'Ceviche': 'Tiradito-Corte',
            'Ravioles': 'Sorrento-Origen', 'Milanesa': 'Cotoletta-Hueso', 'Hot Dog': 'Relish-Acidez', 'Locro': 'Pulsada-Olla', 'Gnocchi': 'Venti-Nueve',
            'Alfajor': 'Al-Hasu-Moro', 'Medialunas': 'Grasa-Viena', 'Tiramisú': 'Mascarpone-Treviso', 'Churros': 'Lazo-Estriado', 'Provoleta': 'Hilado-Parrilla',
            'Tarta': 'Quebrada-Masa', 'Sándwich': 'Montagu-Conde', 'Quesadilla': 'Epazote-Fresco', 'Ramen': 'Kansui-Sal', 'Burritos': 'Misión-Distrito',
            'Cheesecake': 'Graham-Base', 'Flan': 'Baño-Maria', 'Dulce de leche': 'Bicarbonato-Sodio', 'Humita': 'Chala-Nudo', 'Polenta': 'Grano-Decorticado',
            'Shawarma': 'Eje-Vertical', 'Wrap': 'Tortilla-Fría', 'Wok': 'Aliento-Dragón', 'Bondiola': 'Red-Elástica', 'Choripán': 'Costanera-Sur',
            'Tortilla': 'Termo-Babé', 'Risotto': 'Arborio-Almidón'
        },
    },
    {
        id: '16',
        name: 'Futbolistas',
        description: 'Jugadores mundiales',
        items: [
            'Messi', 'Maradona', 'Cristiano Ronaldo', 'Pelé', 'Neymar', 'Mbappé', 'Ronaldinho', 'Zidane', 'Ronaldo Nazario', 'Cruyff',
            'Di Stefano', 'Puskas', 'Lev Yashin', 'Beckenbauer', 'Platini', 'Zico', 'Henry', 'Eto\'o', 'Iniesta', 'Xavi',
            'Modric', 'Benzema', 'Haaland', 'Lewandowski', 'Dibu Martínez', 'Julián Álvarez', 'Di María', 'Hulk', 'Vinícius Jr', 'Lautaro Martínez'
        ],
        hint: 'Dorsal',
        itemHints: {
            'Messi': 'Servilleta-00', 'Maradona': 'Cebollita-76', 'Cristiano Ronaldo': 'Madeira-Viento', 'Pelé': 'Tres-Coracoes', 'Neymar': 'Mogi-Cruzes',
            'Mbappé': 'Bondy-Distrito', 'Ronaldinho': 'Prisión-Asunción', 'Zidane': 'Cabezazo-Final', 'Ronaldo Nazario': 'Rodilla-Frágil', 'Cruyff': 'Naranja-Mecánica',
            'Di Stefano': 'Saeta-Rubia', 'Puskas': 'Cañoncito-Pun', 'Lev Yashin': 'Gorra-Negra', 'Beckenbauer': 'Líbero-Unico', 'Platini': 'Nancy-Ciudad',
            'Zico': 'Galinho-Brasil', 'Henry': 'Les-Ulis', 'Eto\'o': 'Indomable-Camerún', 'Iniesta': 'Fuentealbilla-Vino', 'Xavi': 'Terrassa-Pase',
            'Modric': 'Zadar-Pastoreo', 'Benzema': 'Valbuena-Video', 'Haaland': 'Androide-Multigol', 'Lewandowski': 'Varsovia-Nueve', 'Dibu Martínez': 'Baile-Final',
            'Julián Álvarez': 'Calchín-Araña', 'Di María': 'Perdriel-Rosario', 'Hulk': 'Paraíba-Musculo', 'Vinícius Jr': 'Bailá-Vini', 'Lautaro Martínez': 'Bahía-Blanca'
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
            'Boca Juniors': 'Puente-Transbordador', 'River Plate': 'Banda-Roja', 'Real Madrid': 'Chamartín-Estación', 'Barcelona': 'San-Jordi-Cruz', 'Manchester City': 'Maine-Road',
            'Manchester United': 'Munich-Desastre', 'Liverpool': 'Hillsborough-Memorial', 'Bayern Múnich': 'Bávaro-Estado', 'Juventus': 'Agnelli-Familia', 'Milan': 'Berlusconi-Era',
            'Inter': 'Moratti-Control', 'PSG': 'Al-Khelaifi-Qatar', 'Atlético Madrid': 'Manzanares-Río', 'Arsenal': 'Highbury-Reloj', 'Chelsea': 'Abramovich-Yate',
            'Flamengo': 'Maracaná-Sede', 'Palmeiras': 'Porco-Mascota', 'Independiente': 'Bocha-Leyenda', 'Racing': 'Cilindro-Acero', 'San Lorenzo': 'Boedo-Gasómetro',
            'Talleres': 'La-Boutique', 'Belgrano': 'Gigante-Alberdi', 'Ajax': 'Godenzonen-Hijos', 'Borussia Dortmund': 'Muro-Amarillo', 'Napoli': 'Vesubio-Sombra',
            'Roma': 'Totti-Capitolio', 'Benfica': 'Eusebio-Pantera', 'Porto': 'Dragones-Norte', 'Peñarol': 'Carbonero-Tren', 'Nacional': 'Bolso-Uruguay'
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
            'Los Angeles Lakers': 'Showtime-Magic', 'Golden State Warriors': 'Bahía-Puente', 'Chicago Bulls': 'Dinastía-Noventa', 'Boston Celtics': 'Trebol-Celta', 'Miami Heat': 'South-Beach-Riley',
            'San Antonio Spurs': 'Popovich-Alamo', 'Dallas Mavericks': 'Cuban-Vaquero', 'Brooklyn Nets': 'Barclays-Center', 'Milwaukee Bucks': 'Antetokounmpo-Hélade', 'Phoenix Suns': 'Desierto-Valle',
            'New York Knicks': 'Ewing-Madison', 'Philadelphia 76ers': 'Iverson-Campana', 'Houston Rockets': 'Olajuwon-NASA', 'Cleveland Cavaliers': 'Ohio-Return', 'Denver Nuggets': 'Jokic-Milla',
            'Toronto Raptors': 'Kawhi-Garra', 'Utah Jazz': 'Malone-Salado', 'Atlanta Hawks': 'Wilkins-Halcón', 'Detroit Pistons': 'Bad-Boys-Motores', 'Portland Trail Blazers': 'Drexl-Oregon',
            'Real Madrid Básquet': 'Llull-Palacio', 'Barcelona Básquet': 'Navarro-Palau', 'Atenas de Córdoba': 'Milanesio-Griego', 'Instituto de Córdoba': 'Gloria-Alta', 'Quimsa': 'Madre-Santiago',
            'San Lorenzo Básquet': 'Casla-Boedo', 'Olimpia Milano': 'Armani-Moda', 'Maccabi Tel Aviv': 'Menorá-Amarillo', 'Panathinaikos': 'Obradovic-Atenas', 'Fenerbahçe': 'Estambul-Canario'
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
            'Agustín Pichot': 'Bristol-Casino', 'Hugo Porta': 'Banco-Nación', 'Pablo Matera': 'Tuit-2012', 'Agustín Creevy': 'Montpellier-Haka', 'Jonah Lomu': 'Genética-Falla',
            'Dan Carter': 'Racing-Paris', 'Richie McCaw': 'Siete-Plástico', 'Jonny Wilkinson': 'Drop-Zurdo', 'Siya Kolisi': 'Sharks-Líder', 'Santi Cordero': 'Exeter-Wings',
            'Emiliano Boffelli': 'Edimburgo-Kicks', 'Juan Martín Hernández': 'Mago-Duende', 'Felipe Contepomi': 'Leinster-Twin', 'Marcos Kremer': 'Clermont-Fuerza', 'Julian Montoya': 'Leicester-Hook',
            'Antonne Dupont': 'Toulouse-Medio', 'Beauden Barrett': 'Suntory-Zip', 'Ardie Savea': 'Hurricanes-Haka', 'Cheslin Kolbe': 'Stormers-Small', 'Owen Farrell': 'Saracens-Kicks',
            'Maro Itoje': 'London-Loft', 'Alun Wyn Jones': 'Ospreys-Record', 'Bryan Habana': 'Guepardo-Race', 'Sergio Parisse': 'Stade-Francaise', 'Gonzalo Quesada': 'Paris-Coach',
            'Sebastian Bertranou': 'Gloucester-Hills', 'Juan Imhoff': 'Racing-Try', 'Facundo Isa': 'Toulon-Power', 'Bautista Delguy': 'Perpignan-Side', 'Santiago Carreras': 'Gloucester-Fly',
            'Finn Russell': 'Racing-Magic', 'Bundee Aki': 'Connacht-Hard', 'Charles Ollivon': 'Toulon-High', 'Josh van der Flier': 'Leinster-Vibe', 'Lukhanyo Am': 'Sharks-Key',
            'Eben Etzebeth': 'Fisico-Massive', 'Gregory Alldritt': 'Rochelle-Base', 'Damian Penaud': 'Bordeaux-Speed', 'Romain Ntamack': 'Toulouse-Line', 'Marcus Smith': 'Harlequins-Fly',
            'Sacha Feinberg-Mngomezulu': 'Stormers-Next', 'Tomas Lavanini': 'Lock-Aggro', 'Matias Alemanno': 'Cordobes-Lock', 'Joaquin Oviedo': 'Perpignan-Eight', 'Thomas Gallo': 'Treviso-Angus',
            'Francisco Gomez Kodela': 'Lyon-Prop'
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
            'Peñarol Rugby', 'Selknam', 'American Raptors', 'Highlanders', 'Hurricanes', 'Chiefs', 'La Rochelle', 'Bordeaux Begles', 'Racing 92', 'Sale Sharks'
        ],
        hint: 'Ovalada',
        itemHints: {
            'All Blacks': 'Helecho-Plateado', 'Springboks': 'Gacela-Dorada', 'Los Pumas': 'Yaguareté-Nativo', 'Wallabies': 'Marsupio-Austral', 'Tala RC': 'Warcalde-Sede',
            'La Tablada': 'Urca-Bosque', 'Urú Curé': 'Lechuza-Solitaria', 'Jockey Club Córdoba': 'Hípico-Club', 'Córdoba Athletic': 'Ingleses-Origen', 'Palermo Bajo': 'Escarabajo-Nido',
            'Saracens': 'Londres-Norte', 'Leinster': 'Dublín-Azul', 'Crusaders': 'Christchurch-Gap', 'Toulouse': 'Ciudad-Rosa', 'Jaguares': 'Súper-Franquicia',
            'Dogos XV': 'Cachorro-Fiel', 'Pampas': 'Buenos-Aires-Llanura', 'England Rugby': 'Rosa-Blanca', 'France Rugby': 'Gallo-Galico', 'Ireland Rugby': 'Trébol-Verde',
            'Wales Rugby': 'Dragón-Rojo', 'Scotland Rugby': 'Cardo-Púrpura', 'Fiji Rugby': 'Palmera-Sola', 'Japan Rugby': 'Cerezo-Flor', 'Leicester Tigers': 'Welford-Road',
            'Harlequins': 'Mural-Multicolor', 'Munster': 'Limerick-Thomond', 'Stormers': 'Ciudad-Cabo-Viento', 'Brumbies': 'Caballo-Salvaje', 'Blues': 'Auckland-Nave',
            'Peñarol Rugby': 'Uruguay-Carbonero', 'Selknam': 'Chile-Espiritu', 'American Raptors': 'Colorado-Roca', 'Highlanders': 'Dunedin-Frio', 'Hurricanes': 'Wellington-Wind',
            'Chiefs': 'Hamilton-Mana', 'La Rochelle': 'Amarillo-Negro', 'Bordeaux Begles': 'Burdeos-Girasol', 'Racing 92': 'Paris-Sky', 'Sale Sharks': 'Tiburones-Norte'
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
            'Médico': 'Caduceo-Hermes', 'Bombero': 'Ignífugo-Sirena', 'Policía': 'Insignia-Placa', 'Arquitecto': 'Fachada-Plano', 'Cocinero': 'Batch-Mise',
            'Programador': 'Binario-Compila', 'Dentista': 'Esmalte-Fresa', 'Abogado': 'Litigio-Bufete', 'Astronauta': 'Gravedad-Cero', 'Veterinario': 'Boza-Pelaje',
            'Maestro': 'Pizarrón-Tiza', 'Carpintero': 'Viruta-Garlopa', 'Electricista': 'Voltaje-Fase', 'Enfermero': 'Suero-Vía', 'Piloto': 'Radar-Cabina',
            'Taxista': 'Bajada-Bandera', 'Mecánico': 'Engranaje-Fosa', 'Plomero': 'Sifón-Llave', 'Jardinero': 'Poda-Injerto', 'Panadero': 'Levadura-Madura',
            'Periodista': 'Primicia-Off', 'Actor': 'Guion-Bambalina', 'Músico': 'Pentagrama-Clave', 'Bartender': 'Macerado-Jigger', 'Influencer': 'Scroll-Tag',
            'Árbitro': 'Silbato-VAR', 'Entrenador': 'Táctica-Pizarra', 'Psicólogo': 'Diván-Transferencia', 'Científico': 'Hipótesis-Probeta', 'Fotógrafo': 'Obturador-ISO',
            'Diseñador': 'Vector-Bezier', 'Escultor': 'Cincel-Hormón', 'Peluquero': 'Navaja-Filo', 'Cartero': 'Buzón-Saca', 'Carnicero': 'Cuchilla-Balanza',
            'Soldador': 'Chispa-Mascara', 'Economista': 'Índice-PIB'
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
            'Nike': 'Olimpo-Victoria', 'Apple': 'Woz-Garage', 'Coca Cola': 'Atlanta-Pemberton', 'Samsung': 'Corea-Chaebol', 'Adidas': 'Adi-Dassler',
            'McDonalds': 'Kroc-Arcos', 'Google': 'Alphabet-Sergey', 'Netflix': 'Reed-Blockbuster', 'Disney': 'Ratón-Burbank', 'Toyota': 'Toyoda-Nagoya',
            'Starbucks': 'Schultz-Seattle', 'Amazon': 'Bezos-Selva', 'Sony': 'Minato-Ibuka', 'Lego': 'Ladrillo-Billund', 'Microsoft': 'Redmond-Gates',
            'Pepsi': 'Azul-Bradham', 'Ferrari': 'Maranello-Enzo', 'Ford': 'Detroit-Henry', 'Spotify': 'Estocolmo-Ek', 'Uber': 'Kalanick-Ubercab',
            'Mercado Libre': 'Galperin-Zarcillo', 'Tesla': 'Musk-Voltaje', 'Instagram': 'Kevin-Systrom', 'BMW': 'Múnich-Hélice', 'Visa': 'Foster-Dee',
            'Mastercard': 'Purchase-Círculos', 'Rolex': 'Ginebra-Wilsdorf', 'IKEA': 'Kamprad-Småland', 'Huawei': 'Shenzhen-Ren', 'Zara': 'Arteixo-Ortega',
            'Puma': 'Rudolf-Dassler', 'Honda': 'Soichiro-VTEC', 'Dell': 'Michael-Austin', 'Canon': 'Ota-Lente', 'Nintendo': 'Kioto-Yamauchi', 'Vans': 'Van-Doren-Skate',
            'Red Bull': 'Mateschitz-Tailandia'
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
            'La Cañada': 'Encauce-Muro', 'Catedral': 'Cúpula-Religión', 'Villa Carlos Paz': 'Reloj-Cucú', 'Cosquín': 'Folklor-Nueve', 'Río Cuarto': 'Imperio-Sur',
            'Alta Gracia': 'Virrey-Che', 'La Falda': 'Eden-Hotel', 'Mina Clavero': 'Río-Piedra', 'Patio Olmos': 'Prisión-Escuela', 'Nueva Córdoba': 'Estudiante-Alto',
            'Barrio Güemes': 'Anticuario-Noche', 'Estadio Kempes': 'Mundial-Auto', 'Parque Sarmiento': 'Rosedal-Lago', 'Buen Pastor': 'Agua-Fuente',
            'Capilla del Monte': 'Uritorco-Alien', 'Jesús María': 'Jineteada-Doma', 'Villa María': 'Anfiteatro-Peña', 'Los Reartes': 'Abuelo-Antiguo', 'Calamuchita': 'Valle-Sierras',
            'Villa Belgrano': 'Oktoberfest-Cerveza', 'Cerro Colorado': 'Pintura-Indigena', 'San Marcos Sierras': 'Hippy-Miel', 'Nono': 'Río-Abuela', 'Yacanto': 'Champaquí-Cumbre',
            'La Cumbrecita': 'Peatonal-Suizo', 'Villa General Belgrano': 'Tirol-Alemán', 'Miramar': 'Agua-Salada', 'Los Terrones': 'Rojizo-Figura', 'Ongamira': 'Indio-Gruta'
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
        hint: 'Celoide',
        itemHints: {
            'Titanic': 'Calpathia-1912', 'Batman': 'Perlas-Callejón', 'El Padrino': 'Cabeza-Caballo', 'Shrek': 'Cebolla-Capas', 'Harry Potter': 'Andén-Muro',
            'Avatar': 'Unobtainium-Rocas', 'Star Wars': 'Planos-Death', 'Joker': 'Escaleras-Baile', 'Toy Story': 'Ganchos-Garra', 'El Rey León': 'Acantilado-Mufasa',
            'Gladiador': 'Trigo-Mano', 'Matrix': 'Gato-Bug', 'Rocky': 'Escaleras-Philadelphia', 'Jurassic Park': 'Vaso-Vibración', 'John Wick': 'Continental-Lápiz',
            'Frozen': 'Guantes-Frio', 'Buscando a Nemo': 'Sídney-Calle', 'Coco': 'Pétalos-Puente', 'Iron Man': 'Cueva-Mark-I', 'Terminator': 'Pulgar-Arriba',
            'Pulp Fiction': 'Maletín-Luz', 'Inception': 'Trompo-Gira', 'Spider-Man': 'Besos-Lluvia', 'Moana': 'Corazón-Tefiti', 'Rápido y Furioso': 'Corona-Cerveza',
            'El Exorcista': 'Sopa-Gisante', 'Batman Begins': 'Murciélago-Hielo', 'Interstellar': 'Estantería-Libros', 'The Avengers': 'Shawarma-Créditos', 'Dune': 'Especia-Brillo',
            'Parasite': 'Sótano-Oculto', 'Fight Club': 'Jabón-Rosa', 'Forrest Gump': 'Caja-Bombones', 'Braveheart': 'Pintura-Azul', 'Indiana Jones': 'Sombrero-Látigo',
            'Top Gun': 'Aviador-Lentes'
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
        hint: 'Especie',
        itemHints: {
            'León': 'Panthera-Leo', 'Elefante': 'Infrasonido-Hertz', 'Perro': 'Canis-Familiaris', 'Pingüino': 'Spheniscidae-Hielo', 'Tiburón': 'Ampollas-Lorenzini',
            'Águila': 'Accipitridae-Vista', 'Mono': 'Primate-Pulgar', 'Canguro': 'Macropodidae-Marsupio', 'Jirafa': 'Giraffa-Siete', 'Cebra': 'Hippotigris-Rayas',
            'Oso Panda': 'Ailuropoda-Bambú', 'Gato': 'Vibrisas-Bigotes', 'Caballo': 'Herraduras-Casco', 'Delfín': 'Delphinidae-Sonar', 'Serpiente': 'Jacobson-Lengua',
            'Cocodrilo': 'Crocodilia-Duro', 'Lobo': 'Lupus-Manada', 'Oso': 'Hibernación-Invierno', 'Vaca': 'Bos-Taurus', 'Gallina': 'Gallus-Huevo',
            'Abeja': 'Danza-Ocho', 'Ballena': 'Barbas-Salto', 'Murciélago': 'Quiróptero-Radar', 'Zorro': 'Cola-Espesa', 'Águila Real': 'Caza-Cielo',
            'Rinoceronte': 'Queratina-Cuerno', 'Hipopótamo': 'Sudor-Rojo', 'Búho': 'Vuelo-Silencioso', 'Koala': 'Eucalipto-Sueño', 'Flamenco': 'Pico-Curvo',
            'Ardilla': 'Sciuridae-Nueces', 'Camello': 'Camelus-Giba', 'Tortuga': 'Testudines-Caparazón', 'Pulpo': 'Octopoda-Tinta', 'Medusa': 'Medusozoa-Tentáculo',
            'Tigre': 'Tigris-Acecho', 'Hormiga': 'Formicidae-Fila'
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
            'Fútbol': 'Offside-Goles', 'Tenis': 'Tie-Break', 'Básquet': 'Triple-Doble', 'Rugby': 'Scrum-Try', 'Natación': 'Cloro-Largo',
            'Boxeo': 'K.O.-Ring', 'Golf': 'Birdie-Hoyo', 'Hockey': 'Córner-Corto', 'Vóley': 'Libero-Set', 'Automovilismo': 'Pit-Stop',
            'Ciclismo': 'Cadencia-Tour', 'Surf': 'Wax-Tubo', 'Padel': 'Vidrio-Pared', 'Béisbol': 'Home-Run', 'Gimnasia': 'Magnesio-Suelo',
            'Esquí': 'Canto-Nieve', 'Atletismo': 'Taco-Salto', 'Handball': 'Rosca-Gol', 'Esgrima': 'Estocada-Toque', 'Karate': 'Kata-Cinturón',
            'Judo': 'Ippon-Tatami', 'Remo': 'Palada-Proa', 'Vela': 'Sotavento-Viento', 'Waterpolo': 'Flotabilidad-Gorro', 'Patinaje': 'Eje-Filo',
            'Motociclismo': 'Grip-Curva', 'Polo': 'Chukker-Bocha', 'Ping Pong': 'Efecto-Hule', 'Ciclismo de montaña': 'Suspensión-Trocha'
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
            'Messi': 'Rosario-Ankara', 'Maradona': 'Lanús-Fiorito', 'Shakira': 'Waka-Barranquilla', 'Will Smith': 'Bel-Air-Slap', 'Elon Musk': 'X-Starlink',
            'Beyoncé': 'Ivy-Destiny', 'Ricky Martin': 'Menudo-Vida', 'Angelina Jolie': 'Lara-Maléfica', 'Cristiano Ronaldo': 'Siu-Madeira', 'Taylor Swift': 'Eras-Midnight',
            'Steve Jobs': 'Garage-Cupertino', 'Barack Obama': 'Hope-Honolulu', 'Papa Francisco': 'Flores-Mate', 'Michael Jackson': 'Glove-Neverland', 'Justin Bieber': 'Baby-Stratford',
            'Bad Bunny': 'Conejo-Panting', 'Mirtha Legrand': 'Cañás-Almuerzo', 'Susana Giménez': 'Shock-Buenos', 'Brad Pitt': 'Oklahoma-Ad-Astra', 'Leonardo DiCaprio': 'Oscars-Echo',
            'Lady Gaga': 'Meat-Poker', 'Bill Gates': 'Seattle-Windows', 'Oprah Winfrey': 'Show-Mississippi', 'Robert Downey Jr.': 'Iron-Manhattan', 'Johnny Depp': 'Pirate-Kentucky',
            'Jennifer Aniston': 'Friends-Rachel', 'Marilyn Monroe': 'Norma-Blonde', 'Elvis Presley': 'Memphis-Graceland', 'Nelson Mandela': 'Mvezo-Robben'
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
            'Celular': 'Litio-Chip', 'Llaves': 'Perno-Paleta', 'Reloj': 'Escape-Cristal', 'Lentes': 'Dioptría-Armazón', 'Mochila': 'Asa-Hebilla',
            'Billetera': 'Cuero-Bolsillo', 'Silla': 'Respaldo-Pata', 'Mesa': 'Tablero-Soporte', 'Cama': 'Saban-Somier', 'Televisor': 'Píxel-Remoto',
            'Control remoto': 'Infrarrojo-Pila', 'Espejo': 'Plata-Reflejo', 'Ventilador': 'Eje-Aspa', 'Paraguas': 'Varilla-Varilla', 'Sombrero': 'Ala-Copa',
            'Tijeras': 'Pivote-Filo', 'Cuchillo': 'Espiga-Filo', 'Tenedor': 'Diente-Mango', 'Cuchara': 'Concavidad-Cuchara', 'Plato': 'Loza-Base',
            'Taza': 'Asa-Porcelana', 'Botella': 'Pico-Tapa', 'Termo': 'Ampolla-Vacío', 'Mate': 'Porongo-Calabaza', 'Escoba': 'Sorgo-Mango',
            'Martillo': 'Uña-Mango', 'Almohada': 'Funda-Dormir', 'Lámpara': 'Soporte-Luz', 'Cargador': 'Transformador-Cable', 'Auriculares': 'Diafragma-Audición',
            'Maleta': 'Rueda-Telescópica', 'Guitarras': 'Traste-Puente', 'Cuadernos': 'Espiral-Hoja', 'Pinceles': 'Virola-Pelo', 'Secador de pelo': 'Resistencia-Aire',
            'Plancha': 'Suela-Vapor', 'Abridor': 'Palanca-Chapa', 'Sacacorchos': 'Hélice-Vino', 'Libro': 'Lomo-Pagina', 'Mapa': 'Leyenda-Plano', 'Perchero': 'Ménsula-Ropa'
        },
    },
    {
        id: '10',
        name: 'Apps',
        description: 'Plataformas digitales',
        items: [
            'WhatsApp', 'Instagram', 'TikTok', 'Spotify', 'YouTube', 'Facebook', 'Twitter', 'Tinder', 'Uber', 'Airbnb',
            'Telegram', 'Google Maps', 'Pinterest', 'Netflix', 'Pedidos Ya', 'Mercado Pago', 'Snapchat', 'Reddit', 'LinkedIn', 'Twitch',
            'Duolingo', 'Slack', 'Discord', 'Chrome', 'Gmail', 'Zoom', 'Canva', 'Shazam', 'CapCut'
        ],
        hint: 'Código',
        itemHints: {
            'WhatsApp': 'Check-Azul-Jan', 'Instagram': 'Scroll-Feed-Kevin', 'TikTok': 'Algoritmo-Byte-China', 'Spotify': 'Stream-Loop-Ek', 'YouTube': 'Intro-Skip-Susan',
            'Facebook': 'Meta-Muro-Zuck', 'Twitter': 'X-Alpiste-Elon', 'Tinder': 'Swipe-Right-Match', 'Uber': 'GPS-Pin-Kalanick', 'Airbnb': 'Huésped-Chesky-Capa',
            'Telegram': 'Avion-Durov-Nube', 'Google Maps': 'Page-Ruta-Pin', 'Pinterest': 'Pin-Board-Board', 'Netflix': 'Autoplay-Next-Reed', 'Pedidos Ya': 'Mochila-Ruta-Ariel',
            'Mercado Pago': 'QR-Escáner-Galperin', 'Snapchat': 'Filtro-Ghost-Spiegel', 'Reddit': 'Upvote-Snoo-Hilo', 'LinkedIn': 'CV-Red-Reid', 'Twitch': 'Bits-Live-Shear',
            'Duolingo': 'Búho-Verde-Luis', 'Slack': 'Canal-Team-Stewart', 'Discord': 'Bot-Voz-Jason', 'Chrome': 'Pestaña-Ram-Sundar', 'Gmail': 'Inbox-Etiqueta-Paul',
            'Zoom': 'Webcam-Mute-Eric', 'Canva': 'Layout-Edit-Melanie', 'Shazam': 'Sample-Mic-Barton', 'CapCut': 'Timeline-Cut-Byte'
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
        hint: 'Geopolítica',
        itemHints: {
            'Argentina': 'Mate-Pampa-Rosario', 'Brasil': 'Amazonas-Verde-Rio', 'España': 'Toro-Sombra-Madrid', 'Japón': 'Sol-Naciente-Tokio', 'Italia': 'Bota-Mediterráneo-Roma',
            'Francia': 'Gallo-Libertad-Paris', 'México': 'Águila-Nopal-DF', 'Estados Unidos': 'Barras-Estrellas-NY', 'China': 'Dragón-Muralla-Pekín', 'Alemania': 'Águila-Federal-Berlín',
            'Canadá': 'Arce-Hoja-Toronto', 'Australia': 'Canguro-Outback-Sídney', 'Egipto': 'Pirámide-Nilo-Cairo', 'Uruguay': 'Sol-Mayo-Montevideo', 'Chile': 'Andes-Fina-Santiago',
            'Rusia': 'Plaza-Roja-Moscú', 'India': 'Tigre-Bengala-Mumbai', 'Portugal': 'Gallo-Barcelos-Lisboa', 'Grecia': 'Columnas-Blanco-Atenas', 'Turquía': 'Media-Luna-Estambul',
            'Suiza': 'Reloj-Alpes-Berna', 'Holanda': 'Molino-Tulipa-Amsterdam', 'Bélgica': 'Atómium-Chocolate-Bruselas', 'Corea del Sur': 'Tigre-Oriental-Seúl', 'Colombia': 'Café-Montaña-Bogotá',
            'Perú': 'Machu-Picchu-Lima', 'Islandia': 'Geiser-Frio-Reikiavik', 'Noruega': 'Fiordo-Vikingo-Oslo', 'Suecia': 'IKEA-Azul-Estocolmo'
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
            'Rock': 'Guitarra-Distorsión', 'Pop': 'Estrella-Chart', 'Reggaeton': 'Dembow-Puerto', 'Jazz': 'Síncopa-Impro', 'Cuarteto': 'Tunga-Cordobes',
            'Trap': '808-AutoTune', 'Clásica': 'Partitura-Maestro', 'Blues': 'Tríada-Delta', 'Salsa': 'Clave-Caribe', 'Tango': 'Bandoneón-Arrabal',
            'Cumbia': 'Güiro-Barrio', 'Reggae': 'Offbeat-Marley', 'Heavy Metal': 'Doble-Bombo', 'Hip Hop': 'Graffiti-Rap', 'Folklore': 'Bombo-Peña',
            'Bachata': 'Güira-Romeo', 'Soul': 'Gospel-Motown', 'Funk': 'Slap-Bajo', 'Disco': 'Fiebre-Bola', 'Techno': 'BPM-Club',
            'Indie': 'Alternativa-Indie', 'Punk': 'Cresta-Imperdible', 'Flamenco': 'Taconeo-Cante', 'Bossa Nova': 'Baton-Jobim', 'Samba': 'Sambo-Rio',
            'K-pop': 'Idol-Corea', 'Electro-pop': 'Sinte-Hook', 'House': 'Four-Floor', 'Country': 'Fiddle-Banjo'
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
        hint: 'Capas',
        itemHints: {
            'Spider-Man': 'Tio-Ben-Parker', 'Iron Man': 'Reactor-Arc-Stark', 'Wonder Woman': 'Lazo-Verdad-Diana', 'Superman': 'Kriptonita-Verde-Kent', 'Hulk': 'Rayos-Gamma-Banner',
            'Flash': 'Speed-Force-Allen', 'Thor': 'Mjolnir-Rayo-Odin', 'Batman': 'Bati-Señal-Wayne', 'Capitán América': 'Suero-Soldado-Rogers', 'Aquaman': 'Tridente-Mar-Arthur',
            'Wolverine': 'Adamantium-Logan', 'Deadpool': 'Factor-Curación-Wade', 'Pantera Negra': 'Vibranium-TChalla', 'Ant-Man': 'Partículas-Pym-Scott', 'Doctor Strange': 'Ojo-Agamotto-Stephen',
            'Bruja Escarlata': 'Magia-Caos-Wanda', 'Green Lantern': 'Lanterna-Anillo-Hal', 'Shazam': 'Mago-Rayo-Billy', 'Daredevil': 'Radar-Sentido-Matt', 'Robin': 'Ayudante-Dick',
            'Catwoman': 'Látigo-Selina', 'Joker': 'Gas-Risa-Arthur', 'Lex Luthor': 'Kryptonita-Fijación-Lex', 'Venom': 'Simbionte-Eddie', 'Storm': 'Clima-Ororo', 'Groot': 'Groot-Flora',
            'Star-Lord': 'Mix-Cinta-Quill'
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
        hint: 'Píxel',
        itemHints: {
            'Mario Bros': 'Hongo-Rojo-Luigi', 'Minecraft': 'Pico-Diamante-Steve', 'FIFA': 'Sobre-Ultimate-Pelota', 'GTA': 'Cinco-Estrellas-Robo', 'Fortnite': 'Pico-Construcción-Bus',
            'Zelda': 'Trifuerza-Espada-Link', 'Pac-Man': 'Cerezas-Fantasma-Waka', 'Tetris': 'Pieza-L-Tetramino', 'Counter-Strike': 'A-Plant-Rush', 'Among Us': 'Rejilla-Venteo-Suso',
            'Candy Crush': 'Caramelo-Color-Sugar', 'Sonic': 'Anillo-Dorado-Erizo', 'Pokémon': 'Pokébola-Atrapa-Pika', 'Roblox': 'Avatar-Bloque-Oof', 'Mortal Kombat': 'Fatality-Finish-Scorp',
            'Call of Duty': 'Racha-Bajas-Milla', 'LoL': 'Nexo-Roto-Lane', 'Valorant': 'Spike-Bomba-Agent', 'God of War': 'Espadas-Caos-Kratos', 'The Last of Us': 'Hongo-Cordyceps-Joel',
            'Street Fighter': 'Hadouken-Combo-Ryu', 'Final Fantasy': 'Cristal-Luz-Cloud', 'The Sims': 'Plumbob-Verde-Kaching', 'Clash Royale': 'Cofre-Oro-Torre', 'Free Fire': 'Paracaídas-Salto-Booyah',
            'Subway Surfers': 'Spray-Pintura-Jake', 'Doom': 'Escopeta-Infierno-Slayer'
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
        hint: 'Producción',
        itemHints: {
            'Friends': 'Fuente-Azul-Ross', 'The Office': 'Remolacha-Dunder-Jim', 'Stranger Things': 'Waffles-Upside-Eleven', 'Breaking Bad': 'Pollos-Metanfetamina-Heis', 'The Simpsons': 'Cerveza-Duff-Homer',
            'Game of Thrones': 'Cuervo-Tres-Bran', 'Grey\'s Anatomy': 'Bisturí-Meredith-Seattle', 'Casados con Hijos': 'Zapatos-Moni-Pepe', 'La Casa de Papel': 'Máscara-Dali-Prof', 'El Encargado': 'Cámaras-Conserje-Eliseo',
            'Okupas': 'Perro-Ricardo-Pollo', 'Los Simuladores': 'Operativo-Santos-Dorsal', 'South Park': 'Nieve-Colorado-Cartman', 'Narcos': 'Plata-Patrón-Pablo', 'El marginal': 'Patio-San-Diosito', 'Black Mirror': 'Cerdo-Tecno-Pantalla',
            'Euphoria': 'Brillos-Zendaya-Rue', 'Succession': 'Jet-Roy-Kendall', 'The Bear': 'Navaja-Carmy-Chef', 'Lost': 'Escotilla-Bunker-Sawyer',
            'How I Met Your Mother': 'Corbatín-Patos-Barney', 'The Big Bang Theory': 'Pizarrón-Física-Sheldon', 'Modern Family': 'Mockumentary-Phil', 'The Crown': 'Protocolo-Queen', 'Dark': 'Cueva-Bosque-Jonas', 'Chernobyl': 'Grafito-Nucleo-Planta'
        },
    },
];
