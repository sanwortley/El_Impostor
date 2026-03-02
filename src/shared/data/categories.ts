import type { Category } from '../types/game';

/**
 * CATEGORIES DATA
 * All hints follow the "Extreme Difficulty" constraints:
 * - No main function or basic definition.
 * - Based on secondary details, obscure facts, technicalities, or non-obvious relations.
 * - No direct names or immediate identification.
 */
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
            'Messi': 'Servilleta-00', 'Maradona': 'Cebollita-76', 'Cristiano Ronaldo': 'Madeira-Viento', 'Pelé': 'Mil-Goles', 'Neymar': 'Mogi-Cruzes',
            'Mbappé': 'Bondy-Distrito', 'Ronaldinho': 'Prisión-Asunción', 'Zidane': 'Cabezazo-Final', 'Ronaldo Nazario': 'Rodilla-Frágil', 'Cruyff': 'Naranja-Mecánica',
            'Di Stefano': 'Saeta-Rubia', 'Puskas': 'Cañoncito-Pun', 'Lev Yashin': 'Gorra-Negra', 'Beckenbauer': 'Líbero-Unico', 'Platini': 'Nancy-Ciudad',
            'Zico': 'Galinho-Brasil', 'Henry': 'Estatua-Emirates', 'Eto\'o': 'Indomable-Camerún', 'Iniesta': 'Fuentealbilla-Vino', 'Xavi': 'Terrassa-Pase',
            'Modric': 'Zadar-Pastoreo', 'Benzema': 'Valbuena-Video', 'Haaland': 'Androide-Multigol', 'Lewandowski': 'Varsovia-Nueve', 'Dibu Martínez': 'Baile-Final',
            'Julián Álvarez': 'Calchín-Araña', 'Di María': 'Perdriel-Rosario', 'Hulk': 'Paraíba-Musculo', 'Vinícius Jr': 'Bailá-Vini', 'Lautaro Martínez': 'Bahía-Blanca'
        },
    },
    {
        id: '19',
        name: 'Rugbiers',
        description: 'Jugadores de elite',
        items: [
            'Agustín Pichot', 'Hugo Porta', 'Pablo Matera', 'Agustín Creevy', 'Jonah Lomu', 'Dan Carter', 'Richie McCaw', 'Jonny Wilkinson', 'Siya Kolisi', 'Santi Cordero',
            'Emiliano Boffelli', 'Juan Martín Hernández', 'Felipe Contepomi', 'Marcos Kremer', 'Julian Montoya', 'Antonne Dupont', 'Beauden Barrett', 'Ardie Savea', 'Cheslin Kolbe', 'Owen Farrell',
            'Maro Itoje', 'Alun Wyn Jones', 'Bryan Habana', 'Sergio Parisse', 'Gonzalo Quesada', 'Sebastian Bertranou', 'Juan Imhoff', 'Facundo Isa', 'Bautista Delguy', 'Santiago Carreras',
            'Finn Russell', 'Bundee Aki', 'Charles Ollivon', 'Josh van der Flier', 'Lukhanyo Am', 'Eben Etzebeth', 'Gregory Alldritt', 'Damian Penaud', 'Romain Ntamack', 'Marcus Smith'
        ],
        hint: 'Huevo',
        itemHints: {
            'Agustín Pichot': 'Bristol-Casino', 'Hugo Porta': 'Banco-Nación', 'Pablo Matera': 'Tuit-2012', 'Agustín Creevy': 'Montpellier-San', 'Jonah Lomu': 'Genética-Falla',
            'Dan Carter': 'Racing-Paris', 'Richie McCaw': 'Siete-Plástico', 'Jonny Wilkinson': 'Drop-Zurdo', 'Siya Kolisi': 'Sharks-Líder', 'Santi Cordero': 'Exeter-Wings',
            'Emiliano Boffelli': 'Edimburgo-Kicks', 'Juan Martín Hernández': 'Mago-Duende', 'Felipe Contepomi': 'Leinster-Twin', 'Marcos Kremer': 'Clermont-Fuerza', 'Julian Montoya': 'Leicester-Hook',
            'Antonne Dupont': 'Toulouse-Medio', 'Beauden Barrett': 'Suntory-Zip', 'Ardie Savea': 'Hurricanes-Haka', 'Cheslin Kolbe': 'Stormers-Small', 'Owen Farrell': 'Saracens-Kicks',
            'Maro Itoje': 'London-Loft', 'Alun Wyn Jones': 'Ospreys-Record', 'Bryan Habana': 'Guepardo-Race', 'Sergio Parisse': 'Stade-Francaise', 'Gonzalo Quesada': 'Paris-Coach',
            'Sebastian Bertranou': 'Gloucester-Hills', 'Juan Imhoff': 'Racing-Try', 'Facundo Isa': 'Toulon-Power', 'Bautista Delguy': 'Perpignan-Side', 'Santiago Carreras': 'Gloucester-Fly',
            'Finn Russell': 'Racing-Magic', 'Bundee Aki': 'Connacht-Hard', 'Charles Ollivon': 'Toulon-High', 'Josh van der Flier': 'Leinster-Vibe', 'Lukhanyo Am': 'Sharks-Key',
            'Eben Etzebeth': 'Fisico-Massive', 'Gregory Alldritt': 'Rochelle-Base', 'Damian Penaud': 'Bordeaux-Speed', 'Romain Ntamack': 'Toulouse-Line', 'Marcus Smith': 'Harlequins-Fly'
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
        id: '15',
        name: 'Series de TV',
        description: 'Programas famosos',
        items: [
            'Friends', 'The Office', 'Stranger Things', 'Breaking Bad', 'The Simpsons', 'Game of Thrones', 'Grey\'s Anatomy', 'Casados con Hijos', 'La Casa de Papel', 'El Encargado',
            'Okupas', 'Los Simuladores', 'South Park', 'Narcos', 'El marginal', 'Black Mirror', 'Euphoria', 'Succession', 'The Bear', 'Lost'
        ],
        hint: 'Producción',
        itemHints: {
            'Friends': 'Fuente-Azul', 'The Office': 'Remolacha-Dunder', 'Stranger Things': 'Waffles-Upside', 'Breaking Bad': 'Pollos-Metanfetamina', 'The Simpsons': 'Cerveza-Duff',
            'Game of Thrones': 'Cuervo-Tres', 'Grey\'s Anatomy': 'Bisturí-Meredith', 'Casados con Hijos': 'Zapatos-Moni', 'La Casa de Papel': 'Máscara-Dali', 'El Encargado': 'Cámaras-Conserje',
            'Okupas': 'Perro-Ricardo', 'Los Simuladores': 'Operativo-Santos', 'South Park': 'Nieve-Colorado', 'Narcos': 'Plata-Patrón', 'El marginal': 'Patio-San', 'Black Mirror': 'Cerdo-Tecnología',
            'Euphoria': 'Brillos-Zendaya', 'Succession': 'Helicóptero-Roy', 'The Bear': 'Navaja-Carmy', 'Lost': 'Escotilla-Bunker'
        },
    },
    {
        id: '5',
        name: 'Películas',
        description: 'Cine mundial',
        items: [
            'Titanic', 'Batman', 'El Padrino', 'Shrek', 'Harry Potter', 'Avatar', 'Star Wars', 'Joker', 'Toy Story', 'El Rey León',
            'Gladiador', 'Matrix', 'Rocky', 'Jurassic Park', 'John Wick', 'Frozen', 'Buscando a Nemo', 'Coco', 'Iron Man', 'Terminator'
        ],
        hint: 'Celoide',
        itemHints: {
            'Titanic': 'Calpathia-1912', 'Batman': 'Perlas-Callejón', 'El Padrino': 'Cabeza-Caballo', 'Shrek': 'Cebolla-Pantano', 'Harry Potter': 'Andén-Muro',
            'Avatar': 'Unobtainium-Rocas', 'Star Wars': 'Planos-Death', 'Joker': 'Escaleras-Baile', 'Toy Story': 'Ganchos-Garra', 'El Rey León': 'Acantilado-Mufasa',
            'Gladiador': 'Trigo-Mano', 'Matrix': 'Gato-Bug', 'Rocky': 'Escaleras-Philadelphia', 'Jurassic Park': 'Vaso-Vibración', 'John Wick': 'Continental-Lápiz',
            'Frozen': 'Guantes-Frio', 'Buscando a Nemo': 'Sídney-Calle', 'Coco': 'Pétalos-Puente', 'Iron Man': 'Cueva-Mark-I', 'Terminator': 'Pulgar-Arriba'
        },
    },
    {
        id: '6',
        name: 'Animales',
        description: 'Fauna diversa',
        items: [
            'León', 'Elefante', 'Perro', 'Pingüino', 'Tiburón', 'Águila', 'Mono', 'Canguro', 'Jirafa', 'Cebra',
            'Oso Panda', 'Gato', 'Caballo', 'Delfín', 'Serpiente', 'Cocodrilo', 'Lobo', 'Oso', 'Vaca', 'Gallina'
        ],
        hint: 'Especie',
        itemHints: {
            'León': 'Panthera-Leo', 'Elefante': 'Infrasonido-Hertz', 'Perro': 'Canis-Familiaris', 'Pingüino': 'Spheniscidae-Hielo', 'Tiburón': 'Ampollas-Lorenzini',
            'Águila': 'Accipitridae-Vista', 'Mono': 'Primate-Pulgar', 'Canguro': 'Macropodidae-Marsupio', 'Jirafa': 'Giraffa-Siete', 'Cebra': 'Hippotigris-Rayas',
            'Oso Panda': 'Ailuropoda-Bambú', 'Gato': 'Vibrisas-Sentido', 'Caballo': 'Herraduras-Metal', 'Delfín': 'Delphinidae-Sonar', 'Serpiente': 'Jacobson-Lengua',
            'Cocodrilo': 'Crocodilia-Duro', 'Lobo': 'Lupus-Manada', 'Oso': 'Ursidae-Hibernar', 'Vaca': 'Bos-Taurus', 'Gallina': 'Gallus-Huevo'
        },
    },
    {
        id: '10',
        name: 'Apps',
        description: 'Social y utilidades',
        items: [
            'WhatsApp', 'Instagram', 'TikTok', 'Spotify', 'YouTube', 'Facebook', 'Twitter', 'Tinder', 'Uber', 'Airbnb',
            'Telegram', 'Google Maps', 'Pinterest', 'Netflix', 'Pedidos Ya', 'Mercado Pago', 'Snapchat', 'Reddit', 'LinkedIn', 'Twitch'
        ],
        hint: 'Código',
        itemHints: {
            'WhatsApp': 'Check-Azul', 'Instagram': 'Scroll-Feed', 'TikTok': 'Algoritmo-Byte', 'Spotify': 'Stream-Loop', 'YouTube': 'Intro-Skip',
            'Facebook': 'Meta-Muro', 'Twitter': 'X-Alpiste', 'Tinder': 'Swipe-Right', 'Uber': 'GPS-Pin', 'Airbnb': 'Huésped-Capa',
            'Telegram': 'Avion-Durov', 'Google Maps': 'Page-Ruta', 'Pinterest': 'Pin-Board', 'Netflix': 'Autoplay-Next', 'Pedidos Ya': 'Mochila-Ruta',
            'Mercado Pago': 'QR-Escáner', 'Snapchat': 'Filtro-Ghost', 'Reddit': 'Upvote-Snoo', 'LinkedIn': 'CV-Red', 'Twitch': 'Bits-Live'
        },
    },
    {
        id: '4',
        name: 'Lugares de Córdoba',
        description: 'Provincia de Córdoba',
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
            'La Cumbrecita': 'Peatonal-Suizo', 'Villa General Belgrano': 'Alemán-Cerveza', 'Miramar': 'Agua-Salada', 'Los Terrones': 'Rojizo-Figura', 'Ongamira': 'Indio-Gruta'
        },
    }
];
