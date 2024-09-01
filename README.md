# Property Management App

A full-featured property management application built with Django for the backend and React for the frontend. The app allows property managers to handle properties, tenants, and payments efficiently.

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Architecture](#architecture)
4. [Installation](#installation)
5. [Usage](#usage)
6. [API Endpoints](#api-endpoints)
7. [Contributing](#contributing)
8. [License](#license)

## Introduction

The Property Management App is a web application designed to help property managers handle various tasks such as managing properties, tenants, and payments. This application provides a user-friendly interface for managing these aspects and includes features like tenant tracking, payment management, and property details.

## Features

- **Property Management**: Add, update, and remove properties.
- **Tenant Management**: Track tenant information and associate them with properties.
- **Payment Management**: Record and track payments made by tenants.
- **Authentication**: Secure login and registration for property managers.
- **Responsive Design**: A fully responsive UI for managing your properties on any device.

## Architecture

The application is divided into two main parts:

1. **Backend**: Built with Django, serving the RESTful API, handling authentication, and managing the database.
2. **Frontend**: Built with React, providing a modern user interface to interact with the backend.

### Backend

- **Framework**: Django
- **Database**: PostgreSQL
- **Authentication**: Django Rest Framework (DRF) with JWT
- **Payments**: Managed through the Django admin and custom API endpoints

### Frontend

- **Framework**: React
- **State Management**: Redux (optional)
- **Styling**: CSS/SCSS

## Installation

### Prerequisites

- Python 3.x
- Node.js and npm
- PostgreSQL or another preferred database

### Backend Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/property-management-app.git
   cd property-management-app/backend
   ```

2. **Create a virtual environment and activate it:**

   ```bash
   python3 -m venv venv
   source venv/bin/activate
   ```

3. **Install the dependencies:**

   ```bash
   pip install -r requirements.txt
   ```

4. **Configure the database:**
   Update the `DATABASES` setting in `backend/settings.py` to match your PostgreSQL configuration.

5. **Apply migrations:**

   ```bash
   python manage.py migrate
   ```

6. **Create a superuser:**

   ```bash
   python manage.py createsuperuser
   ```

7. **Run the development server:**
   ```bash
   python manage.py runserver
   ```

### Frontend Setup

1. **Navigate to the frontend directory:**

   ```bash
   cd ../frontend
   ```

2. **Install the dependencies:**

   ```bash
   npm install
   ```

3. **Start the React development server:**
   ```bash
   npm start
   ```

## Usage

### Running the application

- The Django backend will run on `http://localhost:8000/`
- The React frontend will run on `http://localhost:3000/`

### Accessing the Admin Panel

To manage properties, tenants, and payments, navigate to `http://localhost:8000/admin/` and log in using the superuser credentials.

### API Endpoints

Here are some key API endpoints:

- **GET /api/properties/**: List all properties
- **POST /api/properties/**: Create a new property
- **GET /api/tenants/**: List all tenants
- **POST /api/tenants/**: Add a new tenant
- **GET /api/payments/**: List all payments
- **POST /api/payments/**: Record a new payment

## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
