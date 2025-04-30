# CV React

A old web application built with React, TypeScript, and Node.js for displaying CV.

## 🚀 Features

- Full-stack application with separate client and server components
- TypeScript for type safety and better developer experience
- Modern React frontend with Vite
- Docker support for easy deployment
- Comprehensive development tools and configurations

## 🛠️ Tech Stack

### Frontend (Client)
- React
- TypeScript
- Vite
- Storybook
- ESLint & Prettier for code quality

### Backend (Server)
- Node.js
- TypeScript
- Express
- Docker support

## 📦 Prerequisites

- Node.js (v16 or higher)
- Yarn package manager
- Docker (optional, for containerized deployment)

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/fadihanna123/CV_React.git
   cd CV_React
   ```

2. **Install dependencies**
   ```bash
   yarn setup
   ```

3. **Start development servers**
   ```bash
   yarn dev
   ```
   This will start both the client and server in development mode.

4. **Seed the database (if applicable)**
   ```bash
   yarn seed
   ```

## 🐳 Docker Deployment

The project includes Docker support for both client and server:

1. **Build and run with Docker Compose**
   ```bash
   docker-compose up --build
   ```

2. **Environment Configuration**
   - Copy `.docker.env.example` to `.docker.env` in both client and server directories
   - Update the environment variables as needed

## 📝 Available Scripts

- `yarn setup` - Install all dependencies for both client and server
- `yarn dev` - Start development servers for both client and server
- `yarn seed` - Seed the database (if applicable)
- `yarn clear` - Remove all node_modules directories

## 🔧 Development Tools

- ESLint for code linting
- Prettier for code formatting
- TypeScript for type checking
- Storybook for component development

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- Fadi Hanna - [GitHub](https://github.com/fadihanna123)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
