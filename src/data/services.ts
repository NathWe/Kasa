import logements from "./logements.json";

// Définition du type pour un logement
export interface Logement {
  id: string;
  title: string;
  cover: string;
  pictures: string[];
  location: string;
  tags: string[];
  host: {
    name: string;
    picture: string;
  };
  rating: number;
  description: string;
  equipments: string[];
}

// Récupération du fichier JSON et création d'un tableau pour chaque logement
export function getLogements(): Logement[] {
  // Convertir les données de logements.json au format Logement[]
  return logements.map((logement) => ({
    ...logement,
    rating: parseFloat(logement.rating), // Convertir rating en nombre
  }));
}

// Filtrage des logements par ID
export function getId(id: string): Logement | undefined {
  return getLogements().find((logement) => logement.id === id);
}
