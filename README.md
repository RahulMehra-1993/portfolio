# Personal Portfolio

A modern portfolio application built with Angular 20.1.3, featuring authentication, responsive design, and a clean user interface using PrimeNG components.

## Features

- **Secure Authentication**: Login system with route protection
- **Responsive Design**: Built with PrimeNG and PrimeFlex for a fully responsive experience
- **Modern Architecture**: Utilizes Angular's latest features including standalone components and signal-based state management
- **Environment Configuration**: Supports development, staging, and production environments

## Getting Started

### Prerequisites

- Node.js (LTS version recommended)
- npm (comes with Node.js)
- Angular CLI v20.1.3

### Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:4200`

## Available Scripts

- **Development Server**:
  ```bash
  npm start                # Runs in development mode
  npm run start:staging    # Runs in staging mode
  npm run start:prod       # Runs in production mode
  ```

- **Building**:
  ```bash
  npm run build           # Production build
  npm run build:staging   # Staging build
  npm run watch          # Development build with watch mode
  ```

- **Testing**:
  ```bash
  npm test               # Runs unit tests
  ```

## Project Structure

```
src/
├── app/
│   ├── components/      # Feature components
│   │   ├── dashboard/   # Dashboard component
│   │   └── login/      # Login component
│   ├── guards/         # Route guards
│   ├── services/       # Application services
│   └── shared/         # Shared modules and components
├── environments/       # Environment configurations
└── styles.css         # Global styles
```

## Tech Stack

- **Framework**: Angular 20.1.3
- **UI Components**: PrimeNG
- **Styling**: PrimeFlex
- **Icons**: PrimeIcons
- **Testing**: Jasmine & Karma

## Features Overview

### Authentication System
- Secure login system
- Route protection with guards
- Persistent session management

### Dashboard
- Modern and responsive layout
- Navigation menubar
- Protected routes

### Styling
- PrimeNG theme integration
- Responsive design
- Custom CSS utilities

## Development Guidelines

### Code Style
- Follow Angular style guide
- Use TypeScript strict mode
- Implement proper type checking

### Testing
- Write unit tests for components
- Test services and guards
- Follow TDD practices

## Building for Production

To build the application for production:

```bash
npm run build:prod
```

This creates an optimized production build in the `dist/` directory.

## Environment Configuration

Three environments are available:
- Development (default)
- Staging
- Production

Configure environment-specific settings in:
- `src/environments/environment.ts`
- `src/environments/environment.staging.ts`
- `src/environments/environment.prod.ts`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Contact

Your Name - [your-email@example.com](mailto:your-email@example.com)

Project Link: [https://github.com/yourusername/portfolio](https://github.com/yourusername/portfolio)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details