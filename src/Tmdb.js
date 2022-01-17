const API_KEY = '3eac35aa84a62ff9475a79c22c95c952';
const API_BASE = 'https://api.themoviedb.org/3';

/*
- originais da netflix
- recomendados
- em alta (top rated)
- ação
- comédia
- terror
- romance
- documentários 
*/
export default {
  getHomeList: async () => {
    return [
      {
        slug: 'originals',
        title: 'Originais da Netflix',
        items: []
      },
      {
        slug: 'trending',
        title: 'Recomendados para Você',
        items: [] 
      },
      {
        slug: 'toprated',
        title: 'Em Alta',
        items: [] 
      },
      {
        slug: 'action',
        title: 'Ação',
        items: [] 
      },
      {
        slug: 'comedy',
        title: 'Comédia',
        items: [] 
      },
      {
        slug: 'horror',
        title: 'Terror',
        items: [] 
      },
      {
        slug: 'romance',
        title: 'Romance',
        items: [] 
      },
      {
        slug: 'documentary',
        title: 'Documentários',
        items: [] 
      },
    ]
  }
}