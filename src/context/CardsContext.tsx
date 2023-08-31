import { createContext, useState, useEffect } from 'react';
import data from './cards_data.json';
interface Props {
    children: React.ReactNode;
}

const defaultCard : Card = {
    adresse: '',
    sub_title: '',
    title: '',
    description: '',
    idcard: 0,
    date: '',
    site_web: '',
    telephone: ''
}

export const CardsContext = createContext({ cards: [] as Card[], setCards: (cards: Card[]) => {}, card: defaultCard, setCard: (card: Card) => {}, sortCardsByDate: () => {}, sortCardsById: () => {}, filterCardByTitle: (input: string) => {}});

export const CardsProvider = (props: Props) => {

    const { children } = props;
    const [cards, setCards] = useState<Card[]>(data as Card[]);
    const [card, setCard] = useState<Card>(cards[0]);

    const sortCardsByDate = () => {
      const sortedCards = [...cards].sort((a, b) => {
          return new Date(b.date).getTime() - new Date(a.date).getTime();
      });
      setCards(sortedCards);
  }

    const sortCardsById = () => {
      setCards(data as Card[])
    }

    const filterCardByTitle = (input: string) => {
      const filteredCards = data.filter((card) => {
        return card.title.toLowerCase().includes(input.toLowerCase());
      });
      setCards(filteredCards);
    }

    return (
      <CardsContext.Provider value={{ cards, setCards, card, setCard, sortCardsByDate, sortCardsById, filterCardByTitle }}>
        {children}
      </CardsContext.Provider>
    );

};