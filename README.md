

ShopIT

ShopIT is an open-source project that transforms a Figma design of an e-commerce website into a fully responsive front-end application. It leverages Next.js 14 App Router, TypeScript, Tailwind CSS, Redux, Framer Motion, and ShadCN UI to create a modern, scalable, and high-performance eCommerce solution.

Table of Contents

ShopIT

Overview

Demo

Features

Technologies

Installation

Usage

Project Structure

Contributing

Issues

License

Contact

Overview

ShopIT bridges the gap between design and development by converting Figma designs into production-ready code. The project follows best practices for SEO, performance optimization, and accessibility, making it an ideal foundation for developers looking to create scalable and maintainable eCommerce front-ends.

Demo

Check out the live demo: ShopIT Demo

Features

Next.js 14: Server-side rendering (SSR), Static Site Generation (SSG), optimized routing, and API integrations.

TypeScript: Strongly typed code for better error detection and maintainability.

Tailwind CSS: Utility-first CSS framework for rapid UI development.

Redux: State management for handling the shopping cart and global state.

Framer Motion: Smooth animations and transitions for an enhanced user experience.

ShadCN UI: Beautifully styled, accessible, and customizable UI components.

Fully Responsive: Mobile-first design ensuring an optimal layout across devices.

Performance Optimized: Best practices followed for fast loading and interaction.

Accessible: Built with accessibility standards to provide an inclusive experience.

Technologies

Next.js 14 - A powerful React framework with built-in SSR and optimization.

TypeScript - A superset of JavaScript for strong typing and code consistency.

Tailwind CSS - A utility-first CSS framework for fast, responsive design.

Redux - A state management library used for the shopping cart and global app state.

Framer Motion - A library for animations and interactions in React.

ShadCN UI - A collection of beautifully designed, accessible, and customizable UI components.

Figma - The design tool used as the source of the project’s layout. The Figma file.

Installation

To get started with ShopIT locally, follow these steps:

Clone the repository:

git clone https://github.com/InspiredDevs/next_e-commerceWebsite_shopit.git
cd next_e-commerceWebsite_shopit

Install dependencies:

npm install

yarn install

Run the development server:

npm run dev

yarn dev

Open in your browser:
Navigate to http://localhost:3000 to view the app.

Usage

To explore or modify the code, navigate through the components, features, and app directories.

The shopping cart logic is managed using Redux. You can find the store configuration and cart actions in the src/lib/features directory.

ShadCN UI components are used across the app. They can be customized in the src/components/ui directory.

You can easily modify and extend the project to suit your needs, whether for personal use or professional projects.

Project Structure

ShopIT/
│
├── public/                # Static assets
├── src/
│   ├── app/               # Next.js App Router
│   ├── components/        # Reusable components (including ShadCN UI components)
│   └── lib/
│       ├── features/      # The Redux logic for features (e.g., shopping cart)
│       ├── hooks/         # Custom React hooks
│       ├── store.ts       # Redux store
│       ├── utils.ts       # Utility functions
│   ├── styles/            # Tailwind CSS styles (global, utilities, and fonts)
│   ├── types/             # TypeScript types
│
├── components.json         # ShadCN UI configuration
├── next.config.mjs         # Next.js configuration
├── package.json            # Node.js dependencies and scripts
├── postcss.config.mjs      # Post CSS configuration
└── README.md               # Project documentation
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration

Contributing

Contributions are welcome! If you'd like to contribute, follow these steps:

Fork the repository.

Create a new branch (git checkout -b feature/your-feature-name).

Make your changes.

Push to the branch (git push origin feature/your-feature-name).

Open a pull request.

Issues

Feel free to submit issues for any bugs, feature requests, or general questions related to the project.

License

This project is licensed under thnext-ecommerce-shopit MIT License - see the LICENSE file for details.

Contact

For any inquiries or support, feel free to reach out:

Name: Inspired Devs

Email: inspireddevshq@gmail.com

GitHub: https://github.com/InspiredDevs
