# WebSanity Builder
_"This is your next website builder!"_

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) ![GitHub repo size](https://img.shields.io/github/repo-size/egarrisxn/websanity-builder)

## Overview

Websanity Builder is a powerful, user-friendly tool designed to help you create stunning websites effortlessly.<br/>
Built with Next.js, TailwindCSS, Sanity, and more to offer a seamless experience for both developers and content creators.

![websanity-builder](https://github.com/egarrisxn/website-builder/assets/126130230/84e5a962-5155-4f40-adc2-ee0e910d363d)

## Technologies

- **Sanity**: A customizable headless content management system.
- **Next.js**: A React framework for server-side rendering and static site generation.
- **TailwindCSS**: A utility-first CSS framework for rapidly building custom user interfaces.
- **Node.js**: A JavaScript runtime for server-side development.

## Features 

- Real-time Content Editing: Leverage Sanity's CMS capabilities to manage your content in real time.
- Responsive Design: Built with TailwindCSS to ensure your site looks great on any device.
- Performance Optimized: Next.js ensures fast loading times and great performance.
- SEO Friendly: Easily manage SEO settings and ensure your site is search engine optimized.
- Customizable: Highly customizable to fit your specific needs.

## Installation

To get started with Websanity Builder, follow these steps:

1.  **Clone the repository:**

```
git clone https://github.com/egarrisxn/websanity-builder.git
```

2. **Navigate to the project directory:**

```
cd websanity-builder
```

3. **Install dependencies using `pnpm`:**

```
pnpm install
```

## Setup

To integrate Sanity.io with your project, follow these additional steps:

### 1. Create a Sanity.io account

Sign up on [Sanity.io](https://www.sanity.io/) and create a new account if you haven't already.

### 2. Set up a new Sanity project

Create a new project on Sanity.io and configure it.

### 3. Configure environment variables

- Generate a `SANITY_API_TOKEN` and `SANITY_PROJECT_ID` from your Sanity project.

- Create a `.env` file in the root of your project based on `.env.example`.

- Replace placeholders with your actual API token, project ID, and dataset information.

### 4. Start Sanity Studio

After configuring your environment variables, run the following command:

```
pnpm run dev
```

This will launch the development server on `https://localhost:3000`.

Navigate to `localhost:3000/studio` to access your Sanity Studio interface.

### Build

To build the project for production, run:

```
pnpm run build
```

This will create an optimized build of your application.

### Start

To start the production server, run:

```
pnpm run start
```

This will start the Next.js server to serve your optimized application.

### Formatting and Linting

To check code formatting with Prettier:

```
pnpm run format
```

To lint your code with ESLint:

```
pnpm run lint
```

To automatically fix linting issues:

```
pnpm run lint:fix
```

## Contributing

Contributions are welcome. If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (git checkout -b feature/YourFeature).
3. Commit your changes (git commit -m 'Add some feature').
4. Push to the branch (git push origin feature/YourFeature).
5. Open a Pull Request.

## License

This project is licensed under the [MIT license](https://opensource.org/licenses/MIT).

## Questions

Feel free to reach out to me via [GitHub](https://github.com/EGARRISXN), or email at egarrisxn@gmail.com.
