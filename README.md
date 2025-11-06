# Recipe App

A modern, responsive recipe application built with React that allows users to browse, search, and bookmark their favorite recipes.

## Features

- 🔍 **Search Functionality** - Quickly find recipes by name
- ❤️ **Bookmark Recipes** - Save your favorite recipes with persistent storage
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices
- 🎨 **Modern UI** - Clean interface built with Tailwind CSS
- 💾 **Local Storage** - Bookmarks persist across browser sessions
- 🖼️ **Recipe Details Modal** - View detailed recipe information in an elegant modal

## Technologies Used

- **React** - UI library
- **React Hooks** - State management (useState, useEffect)
- **React Portal** - Modal rendering
- **Tailwind CSS v4** - Styling
- **Iconify** - Icons
- **Local Storage API** - Data persistence
- **Vite** - Build tool and development server

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/recipe-app.git
cd recipe-app
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Project Structure

```
recipe-app/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Search.jsx
│   │   ├── RecipeList.jsx
│   │   ├── RecipeCard.jsx
│   │   ├── RecipeDetails.jsx
│   │   ├── Bookmark.jsx
│   │   ├── FavouriteIcon.jsx
│   │   ├── Card.jsx
│   │   ├── Close.jsx
│   │   └── Favourite.jsx
│   ├── pages/
│   │   └── Home.jsx
│   ├── App.jsx
│   ├── style.css
│   └── index.js
├── public/
│   ├── bg.jpg
│   └── data/
│       └── recipes.json
├── package.json
└── README.md
```

## Usage

### Browsing Recipes

- The home page displays a list of available recipes
- By default, 8 recipes are shown

### Searching for Recipes

- Use the search bar in the header to filter recipes by name
- Search is case-insensitive and updates in real-time

### Bookmarking Recipes

- Click the heart icon on any recipe card to add it to bookmarks
- Click again to remove from bookmarks
- Bookmarked recipes are saved to browser's local storage
- View all bookmarked recipes in the Bookmark section

### Viewing Recipe Details

- Click on any recipe card to open a detailed view in a modal
- The modal shows recipe image, ingredients, instructions, and nutritional information
- Click outside the modal or press the Close button to exit

## Data Format

Recipes are stored in `/public/data/recipes.json` with the following structure:

```json
{
  "id": 1,
  "name": "Recipe Name",
  "image": "image-url.jpg",
  "ingredients": ["ingredient1", "ingredient2", "ingredient3"]
}
```

## Key Components

### Home (Main Page)

- Manages global state for recipes, search, bookmarks
- Handles data fetching and error states
- Coordinates between all child components

### RecipeCard

- Displays individual recipe preview
- Includes favorite toggle functionality
- Opens detailed modal on click

### RecipeDetails

- Modal component showing full recipe information
- Uses React Portal for rendering outside DOM hierarchy
- Scrollable content for long recipes

### Bookmark

- Displays all bookmarked recipes
- Shows empty state when no bookmarks exist
- Scrollable list with custom styling

## Local Storage

Bookmarks are persisted using the browser's localStorage API:

- **Key**: `recipe-bookmarks`
- **Format**: JSON stringified array of recipe objects
- **Persistence**: Data survives page reloads and browser restarts

## Customization

### Styling

The app uses Tailwind CSS v4 utility classes. To customize:

1. Update className props in components for styling changes
2. Modify `style.css` for global styles and Tailwind configuration
3. Add custom CSS classes as needed

### Adding More Recipes

Add new recipe objects to `/public/data/recipes.json` following the existing format.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Recipe images from [Pinterest](https://pinterest.com)
- Icons from [Iconify](https://iconify.design)
- Built with [Vite](https://vitejs.dev)

## Contact

Email - [Chisom Worlu](worluchisom4real@gmail.com)

[Project Live](https://github.com/Chisomworlu12/Recipe-finder.git)
