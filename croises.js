/* Mots croisés — format : "MOT|définition" (mots sans accents) */
const CROISES=`KOALA|Marsupial gris qui mange de l'eucalyptus
EUCALYPTUS|Arbre dont le koala mange les feuilles
ADOUR|Fleuve qui traverse Dax
DAX|Ville thermale des Landes
LANDES|Département des pins et des dunes
PIN|Arbre de la forêt landaise
DUNE|Colline de sable
OCEAN|Grande étendue d'eau salée
PLAGE|On y bronze au bord de l'eau
SURF|Sport de glisse sur les vagues
VAGUE|Elle déferle sur la plage
RUGBY|Sport au ballon ovale
ESSAI|Il vaut cinq points au rugby
MELEE|Regroupement de huit avants au rugby
BALLON|Il roule ou rebondit
ARBITRE|Il siffle les fautes
PELOTE|Sport basque contre un fronton
FRONTON|Mur de la pelote basque
BERET|Couvre-chef basque
PIPERADE|Plat basque aux poivrons
JAMBON|Spécialité de Bayonne
CANARD|Il donne le magret
MAGRET|Filet de canard
GARBURE|Soupe épaisse du Sud-Ouest
CASSOULET|Plat aux haricots blancs de Castelnaudary
CANNELE|Petit gâteau bordelais
TOURTIERE|Tourte aux pommes des Landes
VIN|Il vieillit en cave
CAVE|On y range les bouteilles
TONNEAU|Fût pour le vin
RAISIN|Fruit de la vigne
VIGNE|Elle donne le raisin
POMME|Fruit tombé sur la tête de Newton
POIRE|Fruit en forme de goutte
CERISE|Petit fruit rouge à noyau
FRAISE|Fruit rouge des beaux jours
CITRON|Agrume jaune et acide
ORANGE|Agrume et couleur
BANANE|Fruit jaune qu'on épluche
MELON|Fruit d'été à côtes
ABRICOT|Fruit orangé à noyau
NOIX|Fruit du noyer
OLIVE|Petit fruit dont on tire une huile
TOMATE|Rouge, on la croit légume
CAROTTE|Légume orange des lapins
POIREAU|Légume de la soupe, blanc et vert
OIGNON|Il fait pleurer quand on le coupe
AIL|Il éloigne les vampires
SEL|Il relève les plats
SUCRE|Il adoucit le café
PAIN|On le trouve à la boulangerie
BEURRE|Il fond sur la tartine
FROMAGE|Le camembert en est un
OEUF|Pondu par la poule
CREPE|Fine galette de la Chandeleur
GATEAU|On y souffle les bougies
TARTE|Pâte garnie de fruits
MIEL|Fabriqué par les abeilles
CAFE|Boisson noire du matin
THE|Boisson chaude en sachet
LAIT|Boisson blanche de la vache
EAU|Formule H2O
SOUPE|Plat chaud à la cuillère
PIZZA|Spécialité italienne au four
PATES|Spaghettis ou coquillettes
RIZ|Céréale de l'Asie
FOUR|On y fait cuire le gâteau
POELE|Ustensile pour les crêpes
FOURCHETTE|Couvert à dents
COUTEAU|Couvert qui coupe
CUILLERE|Couvert pour la soupe
ASSIETTE|On mange dedans
TABLE|On s'y met pour manger
CHAISE|Siège à dossier
LIT|Meuble pour dormir
LAMPE|Elle éclaire le salon
PORTE|On l'ouvre pour entrer
FENETRE|Elle laisse entrer la lumière
TOIT|Il couvre la maison
JARDIN|Coin de verdure autour de la maison
GARAGE|Abri pour la voiture
VOITURE|Elle a quatre roues
VELO|Deux roues et des pédales
TRAIN|Il roule sur des rails
AVION|Il vole avec des ailes
BATEAU|Il flotte sur l'eau
ROUTE|Chemin goudronné
CARTE|Elle montre le chemin, ou se joue
VALISE|On la prépare avant le voyage
SOLEIL|Étoile de notre système
LUNE|Satellite de la Terre
ETOILE|Elle brille la nuit
NUAGE|Il apporte la pluie
PLUIE|Elle mouille
NEIGE|Flocons blancs de l'hiver
ORAGE|Tonnerre et éclairs
VENT|Air qui souffle
HIVER|Saison froide
ETE|Saison chaude
AUTOMNE|Saison des feuilles mortes
PRINTEMPS|Saison des fleurs
MATIN|Début de la journée
NUIT|Quand on dort
SOIR|Fin de la journée
LUNDI|Premier jour de la semaine
DIMANCHE|Jour de repos
CHIEN|Meilleur ami de l'homme
CHAT|Il miaule
LAPIN|Il a de grandes oreilles
SOURIS|Le chat la chasse
CHEVAL|On le monte en selle
VACHE|Elle donne du lait
MOUTON|Il donne de la laine
POULE|Elle pond des œufs
COQ|Il chante le matin
OURS|Gros animal qui hiberne
LION|Roi des animaux
TIGRE|Grand félin rayé
ZEBRE|Cheval rayé noir et blanc
GIRAFE|Animal au très long cou
SINGE|Il grimpe et mange des bananes
ELEPHANT|Il a une trompe
DAUPHIN|Mammifère marin très joueur
REQUIN|Poisson aux dents redoutables
BALEINE|Plus grand animal du monde
TORTUE|Elle porte sa maison
ESCARGOT|Lent, avec une coquille
ABEILLE|Elle fait le miel
FOURMI|Petit insecte travailleur
PAPILLON|Insecte aux ailes colorées
HIBOU|Oiseau de nuit
AIGLE|Rapace des montagnes
RENARD|Rusé, il vole les poules
LOUP|Il hurle à la lune
PANDA|Ours noir et blanc
FLEUR|La rose en est une
ROSE|Fleur à épines
ARBRE|Il a un tronc et des branches
FEUILLE|Elle tombe en automne
FORET|Beaucoup d'arbres
MONTAGNE|Elle a un sommet
RIVIERE|Cours d'eau
LAC|Étendue d'eau douce
ILE|Terre entourée d'eau
MER|La Méditerranée en est une
SABLE|On en fait des châteaux
CHATEAU|Demeure de roi ou fort de sable
ROI|Il porte une couronne
REINE|Épouse du roi
PRINCE|Fils du roi
EPEE|Arme du chevalier
TRESOR|Le pirate le cache
PIRATE|Il a un bandeau sur l'œil
MUSIQUE|Art des sons
GUITARE|Instrument à six cordes
PIANO|Instrument à touches noires et blanches
TAMBOUR|Instrument sur lequel on tape
CHANSON|Elle a des couplets et un refrain
DANSE|On la fait en musique
LIVRE|On le lit
CRAYON|On écrit ou dessine avec
STYLO|Il écrit à l'encre
ECOLE|On y apprend à lire
CLASSE|Salle de l'école
JEU|Partie de plaisir
CARTES|Jeu de 52
DES|On les lance au jeu de l'oie
DOMINO|Pièce à points qu'on aligne
ECHECS|Jeu avec roi, dame et fous
DAMES|Jeu de pions sur un damier
PUZZLE|Jeu de pièces à assembler
QUIZ|Jeu de questions
TETRIS|Jeu de blocs qui tombent
POKEMON|Pikachu en est un
PIKACHU|Pokémon jaune électrique
VINTED|Site où l'on revend ses affaires
COLIS|Paquet envoyé par la poste
TIMBRE|On le colle sur l'enveloppe
LETTRE|On l'envoie par la poste
TELEPHONE|Il sonne
ECRAN|Partie lumineuse du téléphone
APPLI|Programme sur le téléphone
INTERNET|Réseau mondial
PHOTO|Image prise par l'appareil
CAMERA|Elle filme
FILM|On le regarde au cinéma
CINEMA|Salle obscure
TELE|Petit écran du salon
RADIO|On l'écoute en voiture
FETE|Moment de joie
CADEAU|On le déballe à Noël
NOEL|Fête du 25 décembre
SAPIN|Arbre de Noël
BOUGIE|On la souffle au gâteau
AMOUR|Sentiment des amoureux
AMI|Copain
BISOU|Petit baiser
RIRE|Ha ha ha
SOURIRE|Petit rire silencieux
REVE|On le fait en dormant
SOMMEIL|État de celui qui dort
MAISON|On y habite
VILLE|Grande agglomération
VILLAGE|Petite commune
PARIS|Capitale de la France
BORDEAUX|Ville du vin et des cannelés
BAYONNE|Ville basque du jambon
BIARRITZ|Station balnéaire basque
TOULOUSE|Ville rose
FRANCE|Notre pays
EUROPE|Continent de la France
AFRIQUE|Continent du lion
ASIE|Plus grand continent
NORD|Point cardinal du froid
SUD|Point cardinal du soleil
EST|Le soleil s'y lève
OUEST|Le soleil s'y couche
ROUGE|Couleur du coquelicot
BLEU|Couleur du ciel
VERT|Couleur de l'herbe
JAUNE|Couleur du citron
NOIR|Couleur de la nuit
BLANC|Couleur de la neige
UN|Premier chiffre
DEUX|Un plus un
TROIS|Nombre des mousquetaires... avant d'Artagnan
DIX|Nombre de doigts
CENT|Dix fois dix
MILLE|Dix fois cent
HEURE|Soixante minutes
MINUTE|Soixante secondes
SEMAINE|Sept jours
MOIS|Environ trente jours
ANNEE|Douze mois
SPORT|Activité physique
COURSE|On la gagne en arrivant premier
TENNIS|Sport de Roland-Garros
FOOT|Sport à onze joueurs
JUDO|Art martial japonais
SKI|Glisse sur la neige
GOLF|Sport aux dix-huit trous
NAGE|Déplacement dans l'eau
PISCINE|Bassin pour nager
MEDAILLE|Récompense olympique
COUPE|Trophée du vainqueur
MATCH|Rencontre sportive
EQUIPE|Groupe de joueurs
STADE|On y joue au foot ou au rugby`.split('\n').map(l=>{const[w,c]=l.split('|');return{w,c}});
