# StackOverflow Assignment By Acorn

This project is a StackOverflow clone that replicates the design and functionality of the StackOverflow webpage. The web app fetches dynamic data from StackExchange APIs and implements key features like question filters, dynamic question listing, search functionality, and more.

## Features

- **Static Design Replication**: The design of the page is created to closely match the layout and look of StackOverflow with pixel-perfect precision.
- **Dynamic Question Section**: Questions are fetched dynamically from the StackOverflow API, showing real-time data using the StackExchange API.
- **Question Filters**: Users can filter questions by activity, votes, or creation date using StackOverflow's API.
- **Search Functionality**: A search bar allows users to filter questions based on keywords, implemented with the StackExchange API.
- **Responsive Design**: The page is fully responsive, providing a seamless experience across various screen sizes.
- **Loader Implementation**: A loading spinner is displayed while the questions are being fetched from the API.
- **Modern React Setup**: Uses React for building the UI and managing the application state.

## Technologies Used

- **Frontend**: 
  - React.js
  - HTML, CSS (SCSS)
  - FontAwesome icons
  - Axios for making API requests
- **Backend**:
  - StackExchange API (for dynamic question data)
- **Development Tools**:
  - Node.js
  - npm (or yarn) for package management

## Setup and Installation

Follow these steps to set up and run this project locally.

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (or [yarn](https://yarnpkg.com/))

### Step-by-Step Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/stackoverflow-clone.git
   cd stackoverflow-clone
2. **Install dependencies**:

   ```bash
     npm install
     Or if you are using yarn:

### Run the app:

    ```bash
     npm start
### File structure:

    ```bash
    /public                # Static assets like images, fonts, etc.
      /index.html          # Main HTML file
    /src
      /components          # Reusable components (e.g., Navbar, QuestionCard, etc.)
      /utils               # Utility functions like TimeAgoCheck.js
      /App.js              # Main React component
      /index.js            # ReactDOM rendering
      /styles              # SCSS/CSS files
      /api                 # API calls to fetch data

Key API Endpoints Used:
Questions:
    ```bash

    https://api.stackexchange.com/2.3/questions?order=desc&sort=activity&site=stackoverflow
    https://api.stackexchange.com/2.3/posts?order=desc&sort=activity&site=stackoverflow
Search:
  ```bash
  https://api.stackexchange.com/2.3/search?order=desc&sort=activity&site=stackoverflow&intitle={query}
