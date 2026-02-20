export interface Project {
  title: string;
  category: string;
  image: string;
  tags: string[];
  featured?: boolean; // Pour la taille dans la Bento Grid
}

export interface Skill {
  name: string;
  icon: string; // Nom de l'icône Lucide ou path Lottie
  level: 'Expert' | 'Advanced' | 'Intermediate';
}
