import { IMovie } from './IMovies';

export interface ICart {
    movie: IMovie;
    amount: number;
    totalprice: number;
}