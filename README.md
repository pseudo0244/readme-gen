# ReadmeGen

**ReadmeGen** is a simple and intuitive README generator built using the MERN stack. It allows users to dynamically generate beautiful, modern, and detailed GitHub README files for their projects.

## Features

- Interactive form to customize README sections
- Real-time preview of the generated README
- Supports various project details including work status, skills, social links, and add-ons
- Built with React for a smooth user experience
- Powered by Express.js and MongoDB for backend storage

## Table of Contents

- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Demo

You can view a live demo of **ReadmeGen** [here](https://your-demo-url.com).

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/pseudo0244/ReadmeGen.git
    cd ReadmeGen
    ```

2. **Install dependencies**:

    Backend (Express.js):
    ```bash
    cd server
    npm install
    ```

    Frontend (React.js):
    ```bash
    cd client
    npm install
    ```

3. **Set up MongoDB**:

   - Create a `.env` file in the `/server` directory and add your MongoDB URI:
     ```bash
     MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/readmegen
     ```

4. **Start the project**:

    In the backend (`server`) directory:
    ```bash
    npm start
    ```

    In the frontend (`client`) directory:
    ```bash
    npm start
    ```

5. **Open the app**:  
   Once both frontend and backend are running, open the app in your browser at `http://localhost:3000`.

## Usage

After starting the app, you will be presented with a form where you can:

1. Fill in your project details, including:
    - Title
    - Subtitle
    - Current work status
    - Skills and technologies
    - Social media links

2. Preview your README in real-time.

3. Copy or download the generated README file for use in your project.

## Contributing

We welcome contributions to improve **ReadmeGen**! Here's how you can get started:

1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add new feature: your feature"
   ```
4. Push to your forked repository:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request on the main repository.

## Issues

Feel free to submit issues and enhancement requests. You can use the GitHub issue tracker for any bugs or feature suggestions.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

## Contact

For questions or feedback, reach out at:
- GitHub: [pseudo0244](https://github.com/pseudo0244)
- Email: [workwithharshith@gmail.com](mailto:example@gmail.com)

---

### Happy Coding! ✨
