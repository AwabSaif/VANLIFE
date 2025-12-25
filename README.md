# VANLIFE

A van rental platform for travel and road trip experiences.

## Description

A web application built with React that allows users to rent vans for road trips. The application features a user interface for regular users and a dashboard for hosts to manage their vans.

## Features

### For Users
- Browse available vans
- View detailed information for each van
- Search and filter by type
- About page

### For Hosts
- Comprehensive dashboard
- Van management (view, edit information, photos, pricing)
- View income
- View reviews and ratings
- Protected routes requiring authentication

## Technologies Used

- React 18.2.0
- React Router DOM 6.14.2
- Vite 4.4.0
- Firebase 10.0.0 (Firestore)
- MirageJS 0.1.47 (for development mocking)
- React Icons 4.10.1
- Classnames 2.3.2

## Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
```

2. Navigate to the project directory:
```bash
cd vanslife
```

3. Install dependencies:
```bash
npm install
```

## Running the Application

### Development Mode
```bash
npm run dev
```
The application will run on `http://localhost:5173`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Lint Code
```bash
npm run lint
```

## Project Structure

```
src/
├── API/              # API files and Firebase connection
├── assets/           # Images and static resources
├── components/       # Reusable components
│   ├── AuthRequired/    # Route protection
│   ├── Container/        # Main container
│   ├── Error/            # Error handler
│   ├── Footer/           # Footer
│   ├── Header/           # Header
│   ├── HostLayout/       # Host dashboard layout
│   └── Loaders/          # Loading indicators
└── Pages/            # Application pages
    ├── About/            # About page
    ├── DetailVan/        # Van details
    ├── Home/             # Home page
    ├── Host/             # Host pages
    │   ├── Dashboard/        # Dashboard
    │   ├── HostVanInfo/      # Van information
    │   ├── HostVans/         # Host vans list
    │   ├── Income/           # Income
    │   └── Reviews/          # Reviews
    ├── Login/            # Login page
    ├── NotFound/         # 404 page
    └── Vans/             # Vans list
```

## Routes

- `/` - Home page
- `/about` - About page
- `/vans` - Vans listing
- `/vans/:id` - Specific van details
- `/login` - Login page
- `/host` - Host dashboard (requires authentication)
- `/host/income` - Income
- `/host/reviews` - Reviews
- `/host/vans` - Van management
- `/host/vans/:id` - Host van details
- `/host/vans/:id/photos` - Van photos management
- `/host/vans/:id/pricing` - Van pricing management

## Configuration

The application uses Firebase Firestore for data storage. Make sure to configure `src/API/api.js` with your Firebase settings.

## License

This project is private.

## Contributing

To contribute to the project, please open an Issue or Pull Request.
