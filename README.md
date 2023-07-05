# CineMosaic



CineMosaic is a React application that allows users to explore and search for movies and TV series. It provides multiple including home, details, search, and explore. The app is built using React.js and leverages libraries such as Redux, React Router DOM, and Axios.

## Features

- **Search:** Search for movies and TV series by title or keyword.
- **Movie/TV Series Details:** View detailed information about a specific movie or TV series, including synopsis, release date, rating, cast, and more.
- **Explore:** Discover popular and trending movies and TV series.
- **Responsive Design:** The app is fully responsive and works well across different devices and screen sizes.

## Technologies Used

- React.js
- Redux
- React Router DOM
- Axios

## Getting Started

To get started with the CineMosaic app locally, follow these steps:

1. Clone the repository: 
```sh
git clone https://github.com/vhdcpatel/CineMosaic.git
```
2. Navigate to the project directory:
```sh
cd CineMosaic
```
3. Install the dependencies:
```sh
npm install
```
4. Create a `.env file` in the project root directory and set any required environment variables. Make sure to include any necessary `API key`s or configuration values.

5. Start the development server:
```sh
npm run dev
```

The app will be running at `http://localhost:5173`.





## License

This project is licensed under the [MIT License](LICENSE).

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

## Acknowledgements

- [The Movie Database (TMDb)](https://www.themoviedb.org/) - API provider for movie and TV series data.

## Contact

For any inquiries or questions, you can reach out to me:

Vraj - [vrajhpatel21@gmail.com](mailto:vrajhpatel21@gmail.com)

Project Link: [vhdcpatel/CineMosaic](https://github.com/vhdcpatel/CineMosaic)

## Project Structure
```
CineMosaic.
|   .env
|   .eslintrc.cjs
|   .gitignore
|   directory_tree.txt
|   index.html
|   package-lock.json
|   package.json
|   vite.config.js
|   
+---public
|       favicon.png
|       
\---src
    |   App.css
    |   App.jsx
    |   index.css
    |   main.jsx
    |   
    +---assets
    |       avatar.png
    |       mainLogo.png
    |       no-poster.png
    |       no-results.png
    |       react.svg
    |       
    +---components
    |   +---carousel
    |   |       Carousel.css
    |   |       Carousel.jsx
    |   |       
    |   +---circleRating
    |   |       circleRating.css
    |   |       CircleRating.jsx
    |   |       
    |   +---footer
    |   |       Footer.css
    |   |       Footer.jsx
    |   |       
    |   +---genres
    |   |       Genres.css
    |   |       Genres.jsx
    |   |       
    |   +---header
    |   |       Header.css
    |   |       Header.jsx
    |   |       
    |   +---lazyLoadingImages
    |   |       LazyLoadingImages.jsx
    |   |       
    |   +---movieCard
    |   |       MovieCard.css
    |   |       MovieCard.jsx
    |   |       
    |   +---ranking
    |   +---spinner
    |   |       Spinner.css
    |   |       Spinner.jsx
    |   |       
    |   +---switchTabs
    |   |       SwitchTabs.css
    |   |       SwitchTabs.jsx
    |   |       
    |   +---videoPopUp
    |   |       VideoPopUp.css
    |   |       VideoPopUp.jsx
    |   |       
    |   \---wrapper
    |           Wrapper.css
    |           Wrapper.jsx
    |           
    +---hooks
    |       useFetch.jsx
    |       
    +---pages
    |   +---details
    |   |   |   Details.css
    |   |   |   Details.jsx
    |   |   |   
    |   |   +---carousels
    |   |   |       RecommendationsSection.jsx
    |   |   |       SimilarSection.jsx
    |   |   |       
    |   |   +---cast
    |   |   |       Cast.css
    |   |   |       Cast.jsx
    |   |   |       
    |   |   +---detailsBanner
    |   |   |       DetailsBanner.css
    |   |   |       DetailsBanner.jsx
    |   |   |       PlayIcon.jsx
    |   |   |       
    |   |   \---VideoSection
    |   |           VideoSection.css
    |   |           VideoSection.jsx
    |   |           
    |   +---error
    |   |       Error.css
    |   |       Error.jsx
    |   |       
    |   +---explore
    |   |       Explore.css
    |   |       Explore.jsx
    |   |       
    |   +---home
    |   |   |   Home.css
    |   |   |   Home.jsx
    |   |   |   
    |   |   +---heroBanner
    |   |   |       HeroBanner.css
    |   |   |       HeroBanner.jsx
    |   |   |       
    |   |   +---popular
    |   |   |       Popular.css
    |   |   |       Popular.jsx
    |   |   |       
    |   |   +---topRated
    |   |   |       TopRated.css
    |   |   |       TopRated.jsx
    |   |   |       
    |   |   \---trending
    |   |           Trending.css
    |   |           Trending.jsx
    |   |           
    |   +---Root
    |   |       RootLayout.jsx
    |   |       
    |   \---serachResults
    |           SearchResults.css
    |           SearchResults.jsx
    |           
    +---store
    |   |   store.jsx
    |   |   
    |   \---Slices
    |           homeSlice.jsx
    |           
    \---utils
            apiCall.jsx
```
