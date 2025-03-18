# Cristian Starter Kit

A modern, full-stack monorepo starter kit built with Turborepo. This project provides a foundation for building scalable web applications with a clear separation between frontend and backend services.

## Project Structure

This monorepo is organized into the following structure:

### Apps
- `frontend/`: A Next.js application for the frontend
- `backend/`: A Node.js application for the backend

### Packages
- `eslint-config/`: Shared ESLint configuration for consistent code style across the monorepo

## Tech Stack

- **Build System**: [Turborepo](https://turbo.build/repo) for efficient monorepo management
- **Frontend**: [Next.js](https://nextjs.org/) for the web application
- **Backend**: Node.js for the server
- **Language**: [TypeScript](https://www.typescriptlang.org/) for type-safe code
- **Code Quality**:
  - [ESLint](https://eslint.org/) for code linting
  - [Prettier](https://prettier.io) for code formatting

## Getting Started

### Prerequisites

- Node.js >= 18
- npm >= 10.2.4

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/cristian-starter-kit.git
cd cristian-starter-kit
```

2. Install dependencies:
```bash
npm install
```

### Development

To start the development servers for all applications:

```bash
npm run dev
```

This will start both the frontend and backend applications in development mode.

### Building

To build all applications:

```bash
npm run build
```

### Other Commands

- `npm run lint`: Run ESLint across all packages and apps
- `npm run format`: Format code using Prettier
- `npm run check-types`: Run TypeScript type checking

## Remote Caching

This project supports Turborepo's Remote Caching feature, which can significantly speed up builds across your team and CI/CD pipelines. To enable it:

1. Create a [Vercel account](https://vercel.com/signup) if you don't have one
2. Authenticate with Vercel:
```bash
npx turbo login
```
3. Link your repository to Remote Cache:
```bash
npx turbo link
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
