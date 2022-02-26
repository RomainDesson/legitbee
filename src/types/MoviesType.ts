export type Movie = {
    Poster: string,
    Title: string,
    Type: string,
    Year: string,
    imdbID: string
}

export type Movies = Movie[]

export type Rating = {
    Source: string
    Value: string
}

type Ratings = Rating[]

export interface MovieInfo extends Movie {
    Actors: string
    Awards: string
    BoxOffice: string
    Country: string
    DVD: string
    Director: string
    Genre: string
    Language: string
    Metascore: string
    Plot: string
    Production: string
    Rated: string
    Ratings: Ratings
    Released: string
    Response: string
    Runtime: string
    Website: string
    Writer: string
    imdbRating: string
    imdbVotes: string
}
