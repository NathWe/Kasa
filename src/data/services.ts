import logements from "./logements.json";

// Définition du type pour un logement
export interface Logement {
  id: string;
  title: string;
  cover: string;
}

// Assertion de type pour les données JSON
const logementsList: { id: string; title: string; cover: string }[] = logements;

// Récupération du fichier JSON et création d'un tableau pour chaque logement
export function getLogements(): Logement[] {
  return logementsList.map((logement) => ({
    id: logement.id,
    title: logement.title,
    cover: logement.cover,
  }));
}

// Filtrage des logements par ID
export function getId(id: string): Logement | undefined {
  return getLogements().find((logement) => logement.id === id);
}
