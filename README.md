# Module Search Application

This is a responsive web application that mimics the behavior of the now-defunct [Bower.io search](https://bower.io/search/), developed using TypeScript and React. The application allows users to search for modules, sort them by stars, and navigate through paginated results.

## Features

- **Responsive Design**: The application layout adapts to different screen sizes, providing a seamless user experience on desktop and mobile devices.
- **Header and Footer**: A consistent header and footer across all pages, maintaining navigation and branding.

- **Search Functionality**: Users can search for specific modules using a search bar. The application will query the Libraries.io API for relevant results.

- **Sortable Module List**: The list of modules can be sorted by the number of stars and contribution counts, allowing users to find popular modules quickly.

- **Pagination**: The application displays 5 items per page, with numerical pagination for easy navigation through the list of results.

- **Module Details Display**: Each module entry displays essential information such as the **name**, **owner**, and **stars**.

## User Stories

1. **As a user, I want to search for modules by name**, so that I can quickly find the modules I'm interested in.

2. **As a user, I want to sort the modules by stars**, so that I can see the most popular modules at the top of the list.

3. **As a user, I want to navigate through the results easily**, so that I can view all available modules without feeling overwhelmed.

4. **As a user, I want to see the name, owner, and stars for each module**, so that I can assess the module's popularity and authorship.

5. **As a user, I want the application to be visually appealing and user-friendly**, so that I enjoy using it and can find the information I need easily.

## Implementation Details

### Layout

- **Header**: Contains the application title and logo.
- **Left Sidebar**: This area can be used for additional resourceful links.
- **Content Area**: Displays the list of modules with their respective names, owners, and star counts.
- **Footer**: Contains supporters links.

### Pagination & Sorting

- The application uses the Libraries.io API for fetching module data.
- The module list will display 5 items per page with numerical pagination controls.
- Sorting will be implemented to allow users to organize the modules based on the number of stars.

### API Integration

The application utilizes the Libraries.io API for module data:

- **API Endpoint**: `https://libraries.io/api/search?q=MODULE_NAME&api_key=YOUR_API_KEY`
- This endpoint returns a JSON response with module details that will be rendered in the application.

## Getting Started

To set up and run the application locally, follow these steps:

1. **Clone the Repository**:

   ````bash
   git clone https://github.com/<repo-name>.git
   cd module-search-app ```

   ````

2. **Install Dependencies**:

   ```bash
   yarn install

   ```

3. **Start the Application**:

   ```bash
   yarn start

   ```

4. **Run Tests**:
   ```bash
   yarn test
   ```
