/**
 * Grape Variety Data - intended to be used as part of a service [angular]
 *
 */

export interface VarietyData {
  id: string;
  displayName: string;
  //* any keys the object might need in the future should be added here.
}

/**
 * inital data values.
 * The intention is that this data object grows over time.
 */

export const data: VarietyData[] = [
  { id: "abouriou", displayName: "Abouriou" },
  { id: "aglianico", displayName: "Aglianico" },
  { id: "albarino ", displayName: "Albarino (Alvarinho)" },
  { id: "albillo", displayName: "Albillo" },
  { id: "aleatico", displayName: "Aléatico" },
  { id: "alfrocheiro", displayName: "Alfrocheiro" },
  { id: "alicantebouschet", displayName: "Alicante Bouschet" },
  { id: "aligote", displayName: "Aligoté" },
  { id: "alphonselavallee", displayName: "Alphonse Lavallée" },
  { id: "alvarelhao", displayName: "Alvarelhao" },
  { id: "ancellotta", displayName: "Ancellotta" },
  { id: "ansonica", displayName: "Ansonica (Inzolia)" },
  { id: "aranel", displayName: "Aranel" },
  { id: "arinto", displayName: "Arinto" },
  { id: "arneis", displayName: "Arneis" },  
  { id: "assyrtiko", displayName: "Assyrtiko" },
  { id: "azal", displayName: "Azal" },
  { id: "aubun", displayName: "Aubun" },
  { id: "auxerrois", displayName: "Auxerrois (Aucerot)" },
  { id: "barbera", displayName: "Barbera" },
  { id: "cabernetfranc", displayName: "Cabernet Franc" },
  { id: "cabernetsauvignon", displayName: "Cabernet Sauvignon" },
  { id: "chardonnay", displayName: "Chardonnay" },
  { id: "cheninblanc", displayName: "Chenin Blanc" },
  { id: "carignan", displayName: "Carignan" },
  { id: "carmenere", displayName: "Carmenere" },
  { id: "clairette", displayName: "Clairette" },
  { id: "colombard", displayName: "Colombard" },
  { id: "durif", displayName: "Durif" },
  { id: "fiano", displayName: "Fiano" },
  { id: "grenache", displayName: "Grenache" },
  { id: "gerwurztraminer", displayName: "Gerwurztraminer" },
  { id: "malbec", displayName: "Malbec" },
  { id: "marsanne", displayName: "Marsanne" },
  { id: "mataromourvedre", displayName: "Mataro/Mourvedre" },
  { id: "merlot", displayName: "Merlot" },
  { id: "montepulciano", displayName: "Montepulciano" },
  { id: "muscat ", displayName: "Muscat " },
  { id: "nerodavola", displayName: "Nero d'Avola" },
  { id: "petitverdot", displayName: "Petit Verdot" },
  { id: "pinotgrisgrigio", displayName: "Pinot Gris (Grigio)" },
  { id: "pinotnoir", displayName: "Pinot Noir" },
  { id: "riesling", displayName: "Riesling" },
  { id: "roussanne", displayName: "Roussanne" },
  { id: "rubycabernet", displayName: "Ruby Cabernet" },
  { id: "sangiovese", displayName: "Sangiovese" },
  { id: "sauvignonblanc", displayName: "Sauvignon Blanc" },
  { id: "semillon", displayName: "Semillon" },
  { id: "shiraz", displayName: "Shiraz" },
  { id: "tempranillo", displayName: "Tempranillo" },
  { id: "touriganacional", displayName: "Touriga Nacional" },
  { id: "traminer", displayName: "Traminer" },
  { id: "verdelho", displayName: "Verdelho" },
  { id: "vermentino", displayName: "Vermentino" },
  { id: "viognier", displayName: "Viognier" },
  { id: "zinfandel", displayName: "Zinfandel" },
  { id: "other", displayName: "Other " },
];
