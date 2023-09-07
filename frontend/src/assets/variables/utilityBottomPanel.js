const citiesFrance = [
  { id: 1, city: "Bordeaux", lat: 44.8378, lng: -0.5792 },
  { id: 2, city: "Lille", lat: 50.6292, lng: 3.0573 },
  { id: 3, city: "Lyon", lat: 45.764, lng: 4.8357 },
  { id: 4, city: "Marseille", lat: 43.2965, lng: 5.3698 },
  { id: 5, city: "Toulouse", lat: 43.6047, lng: 1.4442 },
  { id: 6, city: "Nice", lat: 43.7034, lng: 7.2663 },
  { id: 7, city: "Nantes", lat: 47.2184, lng: -1.5536 },
  { id: 8, city: "Strasbourg", lat: 48.5734, lng: 7.7521 },
  { id: 9, city: "Montpellier", lat: 43.6119, lng: 3.8772 },
  { id: 10, city: "Rennes", lat: 48.1173, lng: -1.6778 },
  { id: 11, city: "Reims", lat: 49.2583, lng: 4.0317 },
  { id: 12, city: "Le Havre", lat: 49.4944, lng: 0.1077 },
  { id: 13, city: "Cannes", lat: 43.5528, lng: 7.0174 },
  { id: 14, city: "Avignon", lat: 43.9493, lng: 4.8055 },
  { id: 15, city: "Toulon", lat: 43.1242, lng: 5.928 },
  { id: 16, city: "Le Mans", lat: 48.0061, lng: 0.1996 },
  { id: 17, city: "Aix-en-Provence", lat: 43.5297, lng: 5.4474 },
  { id: 18, city: "Amiens", lat: 49.8951, lng: 2.3022 },
  { id: 19, city: "Limoges", lat: 45.8355, lng: 1.2611 },
  { id: 20, city: "Perpignan", lat: 42.6976, lng: 2.8954 },
  { id: 21, city: "Metz", lat: 49.1193, lng: 6.1757 },
  { id: 22, city: "Besançon", lat: 47.2378, lng: 6.0241 },
  { id: 23, city: "Orléans", lat: 47.903, lng: 1.9046 },
  { id: 24, city: "Mulhouse", lat: 47.7508, lng: 7.3359 },
  { id: 25, city: "Caen", lat: 49.1829, lng: -0.3707 },
  { id: 26, city: "Nîmes", lat: 43.8374, lng: 4.3601 },
  { id: 27, city: "Angers", lat: 47.4784, lng: -0.5632 },
  { id: 28, city: "Villeurbanne", lat: 45.7711, lng: 4.8902 },
  { id: 29, city: "Boulogne-Billancourt", lat: 48.8331, lng: 2.2535 },
  { id: 30, city: "Saint-Denis", lat: 48.9362, lng: 2.3574 },
  { id: 31, city: "Argenteuil", lat: 48.9474, lng: 2.2455 },
  { id: 32, city: "Rouen", lat: 49.4432, lng: 1.0999 },
  { id: 33, city: "Montreuil", lat: 48.8632, lng: 2.4438 },
  { id: 34, city: "Clermont-Ferrand", lat: 45.7772, lng: 3.087 },
  { id: 35, city: "Tourcoing", lat: 50.7255, lng: 3.1592 },
  { id: 36, city: "Nancy", lat: 48.6921, lng: 6.1844 },
  { id: 37, city: "Avignon", lat: 43.9493, lng: 4.8055 },
  { id: 38, city: "Béziers", lat: 43.3442, lng: 3.2151 },
  { id: 39, city: "Pau", lat: 43.2951, lng: -0.3708 },
  { id: 40, city: "La Rochelle", lat: 46.1591, lng: -1.1526 },
  { id: 41, city: "Ajaccio", lat: 41.9199, lng: 8.7388 },
  { id: 42, city: "Issy-les-Moulineaux", lat: 48.8201, lng: 2.2774 },
  { id: 43, city: "Le Blanc-Mesnil", lat: 48.9352, lng: 2.4588 },
  { id: 44, city: "Calais", lat: 50.9513, lng: 1.8581 },
  { id: 45, city: "Saint-Maur-des-Fossés", lat: 48.8048, lng: 2.4999 },
  { id: 46, city: "Vitry-sur-Seine", lat: 48.7883, lng: 2.3925 },
  { id: 47, city: "Antibes", lat: 43.5804, lng: 7.1251 },
  { id: 48, city: "Troyes", lat: 48.2976, lng: 4.0746 },
  { id: 49, city: "La Seyne-sur-Mer", lat: 43.1014, lng: 5.8861 },
  { id: 50, city: "Le Tampon", lat: -21.2785, lng: 55.5235 },
  { id: 51, city: "Saint-Quentin", lat: 49.8468, lng: 3.2869 },
  { id: 52, city: "Colmar", lat: 48.0794, lng: 7.3585 },
  { id: 53, city: "Quimper", lat: 48.0059, lng: -4.1007 },
  { id: 54, city: "Cergy", lat: 49.0388, lng: 2.0786 },
  { id: 55, city: "Ajaccio", lat: 41.9199, lng: 8.7388 },
  { id: 56, city: "Chambéry", lat: 45.5646, lng: 5.9176 },
  { id: 57, city: "Niort", lat: 46.3242, lng: -0.4585 },
  { id: 58, city: "Lorient", lat: 47.7485, lng: -3.3701 },
  { id: 59, city: "Saint-Nazaire", lat: 47.2734, lng: -2.2137 },
  { id: 60, city: "Roanne", lat: 46.0387, lng: 4.0674 },
  { id: 61, city: "Fréjus", lat: 43.4321, lng: 6.7352 },
  { id: 62, city: "La Roche-sur-Yon", lat: 46.6705, lng: -1.4265 },
  { id: 63, city: "Angoulême", lat: 45.6486, lng: 0.1566 },
  { id: 64, city: "Bourges", lat: 47.0834, lng: 2.3984 },
  { id: 65, city: "Tarbes", lat: 43.2326, lng: 0.0838 },
  { id: 66, city: "Sète", lat: 43.4017, lng: 3.6964 },
  { id: 67, city: "Pessac", lat: 44.8079, lng: -0.6358 },
  { id: 68, city: "Valence", lat: 44.9355, lng: 4.8929 },
  { id: 69, city: "Quimper", lat: 48.0059, lng: -4.1007 },
  { id: 70, city: "Plan d'Aups Sainte Baume", lat: 43.3346, lng: -5.7039 },
  { id: 71, city: "Laval", lat: 48.0707, lng: -0.7703 },
  { id: 72, city: "Clichy", lat: 48.9041, lng: 2.3046 },
  { id: 73, city: "Ivry-sur-Seine", lat: 48.8151, lng: 2.3841 },
  { id: 74, city: "Paris", lat: 48.8566, lng: 2.3522 },
  { id: 75, city: "Saint-Étienne", lat: 45.4397, lng: 4.3872 },
]

const sentencesBFMTV = [
  {
    id: 1,
    event: "Attention : Une petite tornade est en cours près de la ville de ",
  },
  {
    id: 2,
    event: "Attention : Une  tornade est en cours près de la ville de ",
  },
  {
    id: 3,
    event: "Prudence : Une grosse tornade est en cours près de la ville de ",
  },
  {
    id: 4,
    event:
      "Grande prudence : Une tornade anormalement puissante est en cours près de la ville de ",
  },
  {
    id: 5,
    event:
      "Attention : Un tremblement de Terre de 7 sur l'echelle de Richer a eu lieu près de la ville de ",
  },
  {
    id: 6,
    event:
      "Attention : Un tremblement de Terre de 8 sur l'echelle de Richer a eu lieu près de la ville de ",
  },
  {
    id: 7,
    event:
      "Attention : Un tremblement de Terre de 10 sur l'echelle de Richer a eu lieu près de la ville de ",
  },
  {
    id: 8,
    event:
      "Attention : Un tremblement de Terre de 11 sur l'echelle de Richer a eu lieu près de la ville de ",
  },
  {
    id: 9,
    event:
      "Attention : Un tremblement de Terre de 12 sur l'echelle de Richer a eu lieu près de la ville de ",
  },
  {
    id: 10,
    event: "Prudence : Un incendie ravage les alentours de la ville de ",
  },
  {
    id: 11,
    event:
      "Grande prudence : Un nuage radiactif intense menace la region vers la ville de ",
  },
  {
    id: 12,
    event:
      "Attention : Une pluie acide est prévue d'ici une heure sur la ville de ",
  },
  {
    id: 13,
    event:
      "Attention : Une pluie acide est prévue d'ici deux heures sur la ville de ",
  },
  {
    id: 14,
    event:
      "Prudence : Une tornade est redoutée dans la journée près de la ville de ",
  },
  {
    id: 15,
    event:
      "Grande prudence : Une grosse tornade est redoutée dans la journée près de la ville de ",
  },
  {
    id: 16,
    event: "Attention : Une tornade a ravagée une partie de la ville de ",
  },
  {
    id: 17,
    event:
      "Attention : Une grosse tornade a ravagée une partie de la region et de la ville de ",
  },
  {
    id: 18,
    event:
      "Prudence : Une tempete magnétique est attendue dans l'après-midi près de la ville de ",
  },
  {
    id: 19,
    event: "Attention : Une innondation paralyse la ville de ",
  },
  {
    id: 20,
    event:
      "Prudence : Un cyclone balaie la cote atlantique, notament la ville de  ",
  },
  {
    id: 21,
    event:
      "Grande prudence : Des castors mutants, qui crache de l'acide par les yeux, attaquent la ville de  ",
  },
]

export { citiesFrance, sentencesBFMTV }
