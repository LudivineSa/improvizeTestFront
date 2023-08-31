import { createContext, useState, useEffect } from 'react';
import data from './cards_data.json';
interface Props {
    children: React.ReactNode;
}

const defaultCard : Card = {
    adresse: '',
    sub_title: '',
    title: '',
    sub_titledescription: '',
    idcard: 0,
    date: '',
    site_web: '',
    telephone: ''
}

export const CardsContext = createContext({ cards: [] as Card[], setCards: (cards: Card[]) => {}, card: defaultCard, setCard: (card: Card) => {}});

export const CardsProvider = (props: Props) => {

    const { children } = props;
    const [cards, setCards] = useState<Card[]>(data as Card[]);
    const [card, setCard] = useState<Card>(defaultCard);

    return (
      <CardsContext.Provider value={{ cards, setCards, card, setCard }}>
        {children}
      </CardsContext.Provider>
    );

};