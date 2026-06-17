# Inventory Application

A full-stack inventory management application for managing cars, car parts, and manufacturers. Built with Node.js, Express, and PostgreSQL.

## 🌐 Live Preview

Check out the live application here:
**[https://inventory-application-production-fc07.up.railway.app/](https://inventory-application-production-fc07.up.railway.app/)**

## 📋 Overview

This Inventory Application is a web-based system designed to manage an automotive inventory. It allows users to:

- View, create, update, and delete car listings
- Manage vehicle parts inventory
- Track car manufacturers and their information
- Associate parts with vehicles
- Maintain structured relationships between cars, parts, and companies

## ✨ Features

- **Car Management**: Create, read, update, and delete car entries with details like model year, trim level, and pricing
- **Parts Management**: Maintain an inventory of automotive parts with pricing
- **Company Management**: Track vehicle manufacturers with country and rating information
- **Car-Parts Association**: Link parts to specific cars for comprehensive inventory tracking
- **Responsive UI**: Built with EJS templating for dynamic views
- **Data Validation**: Using express-validator for secure form submissions
- **RESTful API Routes**: Organized routing for different resources (cars, parts, companies)

## 🛠️ Technology Stack

- **Backend**: Node.js with Express.js
- **Frontend**: EJS (Embedded JavaScript Templates)
- **Database**: PostgreSQL (Deployed on Neon)
- **Deployment**: Railway (Application) + Neon (Database)
- **Form Validation**: express-validator
- **Driver**: pg (PostgreSQL client for Node.js)

## 📦 Project Structure

```
Inventory-Application/
├── app.js                          # Main Express application
├── package.json                    # Project dependencies and scripts
├── package-lock.json               # Dependency lock file
├── README.md                       # This file
├── .env                            # Environment variables (not in repo)
├── .gitignore                      # Git ignore rules
│
├── controllers/
│   ├── indexController.js          # Homepage controller
│   ├── carsController.js           # Car management logic
│   ├── partsController.js          # Parts management logic
│   └── companyController.js        # Company/manufacturer logic
│
├── routes/
│   ├── indexRoute.js               # Homepage routes
│   ├── carsRoute.js                # Car-related routes
│   ├── partsRoute.js               # Parts-related routes
│   └── companyRoute.js             # Company-related routes
│
├── database/
│   ├── dbConnection.js             # PostgreSQL connection pool
│   ├── carsModel.js                # Car database queries
│   ├── partsModel.js               # Parts database queries
│   ├── companyModel.js             # Company database queries
│   └── populatedb.js               # Database seeding script
│
└── views/
    ├── index.ejs                   # Homepage
    ├── cars.ejs                    # Cars listing page
    ├── createCar.ejs               # Create car form
    ├── updateCar.ejs               # Update car form
    ├── parts.ejs                   # Parts listing page
    ├── createParts.ejs             # Create parts form
    ├── updatePart.ejs              # Update parts form
    ├── company.ejs                 # Company listing page
    ├── createCompany.ejs           # Create company form
    └── updateCompany.ejs           # Update company form
```

## 📊 Database Schema

### Tables

- **company**: Stores manufacturer information
  - id (Primary Key)
  - name, country, rating

- **cars**: Stores vehicle listings
  - id (Primary Key)
  - name, model_year, trim, price
  - company_id (Foreign Key)

- **parts**: Stores automotive parts
  - id (Primary Key)
  - name, price

- **car_parts**: Junction table for car-parts relationships
  - car_id (Foreign Key)
  - part_id (Foreign Key)

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- PostgreSQL database (or use Neon cloud database)

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd Inventory-Application
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory with the following variables:

   ```env
   DBHOST=your_database_host
   DBNAME=your_database_name
   USERNAME=your_database_user
   PASSWORD=your_database_password
   PORT=5432
   ```

4. **Initialize the database**

   Run the population script to create tables and seed initial data:

   ```bash
   node database/populatedb.js
   ```

5. **Start the application**

   ```bash
   node app.js
   ```

   The application will be available at `http://localhost:3000`

## 🌍 Deployment

### Database: Neon

This project uses **Neon** for PostgreSQL hosting. Neon provides:

- Serverless PostgreSQL database
- Automatic backups
- Built-in SSL connections
- Scalable infrastructure

### Application: Railway

The application is deployed on **Railway**, which provides:

- Easy deployment from GitHub
- Automatic builds on commits
- Environment variable management
- Production-ready hosting

**Live URL**: https://inventory-application-production-fc07.up.railway.app/

## 📡 API Endpoints

### Cars

- `GET /cars` - Get all cars
- `GET /cars/create` - Show create car form
- `POST /cars/create` - Create a new car
- `GET /cars/update/:carId` - Show update car form
- `POST /cars/update/:carId` - Update a car
- `DELETE /cars/delete/:carId` - Delete a car

### Parts

- `GET /parts` - Get all parts
- `GET /parts/create` - Show create parts form
- `POST /parts/create` - Create new parts
- `GET /parts/update/:partId` - Show update parts form
- `POST /parts/update/:partId` - Update parts
- `DELETE /parts/delete/:partId` - Delete parts

### Companies

- `GET /company` - Get all companies
- `GET /company/create` - Show create company form
- `POST /company/create` - Create a new company
- `GET /company/update/:companyId` - Show update company form
- `POST /company/update/:companyId` - Update a company
- `DELETE /company/delete/:companyId` - Delete a company

### Home

- `GET /` - Display inventory dashboard

## 📝 Available Scripts

```bash
# Start the server
node app.js

# Seed the database with initial data
node database/populatedb.js
```

## 🔧 Dependencies

- **express** (^5.2.1): Web application framework
- **ejs** (^6.0.1): Templating engine
- **pg** (^8.21.0): PostgreSQL client
- **express-validator** (^7.3.2): Input validation middleware

## 🎓 Learning Context

This project is part of The Odin Project's Node.js curriculum and demonstrates:

- Full-stack web development with Node.js
- RESTful API design patterns
- Database relationships and foreign keys
- Form handling and validation
- MVC (Model-View-Controller) architecture
- Environmental configuration management

## 📄 License

ISC

## 👨‍💻 Author

Created as part of The Odin Project curriculum.

---

For more information about The Odin Project, visit: [https://www.theodinproject.com](https://www.theodinproject.com)
