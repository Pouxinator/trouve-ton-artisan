USE trouve_ton_artisan;

INSERT INTO categories (name) VALUES
('Alimentation'),
('Bâtiment'),
('Fabrication'),
('Services');

INSERT INTO specialties (name, category_id) VALUES
('Boucher', (SELECT id FROM categories WHERE name = 'Alimentation')),
('Boulanger', (SELECT id FROM categories WHERE name = 'Alimentation')),
('Chocolatier', (SELECT id FROM categories WHERE name = 'Alimentation')),
('Traiteur', (SELECT id FROM categories WHERE name = 'Alimentation')),
('Chauffagiste', (SELECT id FROM categories WHERE name = 'Bâtiment')),
('Electricien', (SELECT id FROM categories WHERE name = 'Bâtiment')),
('Menuisier', (SELECT id FROM categories WHERE name = 'Bâtiment')),
('Plombier', (SELECT id FROM categories WHERE name = 'Bâtiment')),
('Bijoutier', (SELECT id FROM categories WHERE name = 'Fabrication')),
('Couturier', (SELECT id FROM categories WHERE name = 'Fabrication')),
('Ferronier', (SELECT id FROM categories WHERE name = 'Fabrication')),
('Coiffeur', (SELECT id FROM categories WHERE name = 'Services')),
('Fleuriste', (SELECT id FROM categories WHERE name = 'Services')),
('Toiletteur', (SELECT id FROM categories WHERE name = 'Services')),
('Webdesign', (SELECT id FROM categories WHERE name = 'Services'));

INSERT INTO artisans (name, note, city, about, email, website, is_top, specialty_id) VALUES
('Boucherie Dumont', 4.5, 'Lyon', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'boucherie.dumond@gmail.com', NULL, false, (SELECT id FROM specialties WHERE name = 'Boucher')),
('Au pain chaud', 4.8, 'Montélimar', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'aupainchaud@hotmail.com', NULL, true, (SELECT id FROM specialties WHERE name = 'Boulanger')),
('Chocolaterie Labbé', 4.9, 'Lyon', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'chocolaterie-labbe@gmail.com', 'https://chocolaterie-labbe.fr', true, (SELECT id FROM specialties WHERE name = 'Chocolatier')),
('Traiteur Truchon', 4.1, 'Lyon', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'contact@truchon-traiteur.fr', 'https://truchon-traiteur.fr', false, (SELECT id FROM specialties WHERE name = 'Traiteur')),
('Orville Salmons', 5.0, 'Evian', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'o-salmons@live.com', NULL, true, (SELECT id FROM specialties WHERE name = 'Chauffagiste')),
('Mont Blanc Eléctricité', 4.5, 'Chamonix', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'contact@mont-blanc-electricite.com', 'https://mont-blanc-electricite.com', false, (SELECT id FROM specialties WHERE name = 'Electricien')),
('Boutot & fils', 4.7, 'Bourg-en-bresse', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'boutot-menuiserie@gmail.com', 'https://boutot-menuiserie.com', false, (SELECT id FROM specialties WHERE name = 'Menuisier')),
('Vallis Bellemare', 4.0, 'Vienne', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'v.bellemare@gmail.com', 'https://plomberie-bellemare.com', false, (SELECT id FROM specialties WHERE name = 'Plombier')),
('Claude Quinn', 4.2, 'Aix-les-bains', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'claude.quinn@gmail.com', NULL, false, (SELECT id FROM specialties WHERE name = 'Bijoutier')),
('Amitee Lécuyer', 4.5, 'Annecy', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'a.amitee@hotmail.com', 'https://lecuyer-couture.com', false, (SELECT id FROM specialties WHERE name = 'Couturier')),
('Ernest Carignan', 5.0, 'Le Puy-en-Velay', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'e-carigan@hotmail.com', NULL, false, (SELECT id FROM specialties WHERE name = 'Ferronier')),
('Royden Charbonneau', 3.8, 'Saint-Priest', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'r.charbonneau@gmail.com', NULL, false, (SELECT id FROM specialties WHERE name = 'Coiffeur')),
('Leala Dennis', 3.8, 'Chambéry', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'l.dennos@hotmail.fr', 'https://coiffure-leala-chambery.fr', false, (SELECT id FROM specialties WHERE name = 'Coiffeur')),
('C''est sup''hair', 4.1, 'Romans-sur-Isère', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'sup-hair@gmail.com', 'https://sup-hair.fr', false, (SELECT id FROM specialties WHERE name = 'Coiffeur')),
('Le monde des fleurs', 4.6, 'Annonay', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'contact@le-monde-des-fleurs-annonay.fr', 'https://le-monde-des-fleurs-annonay.fr', false, (SELECT id FROM specialties WHERE name = 'Fleuriste')),
('Valérie Laderoute', 4.5, 'Valence', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'v-laredoute@gmail.com', NULL, false, (SELECT id FROM specialties WHERE name = 'Toiletteur')),
('CM Graphisme', 4.4, 'Valence', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'contact@cm-graphisme.com', 'https://cm-graphisme.com', false, (SELECT id FROM specialties WHERE name = 'Webdesign'));