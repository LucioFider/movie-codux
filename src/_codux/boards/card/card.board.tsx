import { createBoard } from '@wixc3/react-board';
import { Card } from '../../../components/card/card';

export default createBoard({
    name: 'Card',
    Board: () => (
        <Card
            movie={{
                id: '123',
                overview:
                    'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death. As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
                release_date: '2022',
                title: 'Wakanda',
                vote_average: 7,
                poster_path: 'https://image.tmdb.org/t/p/w500//sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
            }}
        />
    ),
});
