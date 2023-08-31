interface Card {
    idcard: number;
    title: string;
    sub_title: string;
    description: string; 
    date: string; 
    adresse: string;
    site_web: string;
    telephone: string;
    services: string[];
    commentaires: Comment[];
}

interface Comment {
    auteur: string;
    contenu: string;
}