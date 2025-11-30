# AscendCare & Early Intervention

A modern, clean, and minimalistic website for AscendCare's comprehensive ABA therapy services.

## Features

- **Modern Design**: Clean, minimalistic interface with excellent UX
- **Responsive**: Mobile-first design that works on all devices
- **Booking System**: Online appointment scheduling with form validation
- **Service Showcase**: Comprehensive display of all 14 ABA programs
- **Contact Integration**: Multiple contact methods and FAQ section
- **Database Integration**: PostgreSQL with Prisma ORM

## Tech Stack

- **Frontend**: Next.js 16 with React 19
- **Styling**: Tailwind CSS v4
- **Database**: PostgreSQL with Prisma ORM
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **TypeScript**: Full type safety

## Getting Started

### Prerequisites

- Node.js 18+ 
- PostgreSQL database

### Installation

1. **Clone and install dependencies**:
   ```bash
   cd ascwebs
   npm install
   ```

2. **Set up environment variables**:
   ```bash
   # Update .env with your database URL
   DATABASE_URL="postgresql://username:password@localhost:5432/ascendcare"
   ```

3. **Set up database**:
   ```bash
   # Generate Prisma client
   npm run db:generate
   
   # Push schema to database
   npm run db:push
   
   # Seed with sample data
   npm run db:seed
   ```

4. **Run development server**:
   ```bash
   npm run dev
   ```

Visit [http://localhost:3000](http://localhost:3000) to see the website.

## Project Structure

```
src/
├── app/
│   ├── about/          # About page
│   ├── api/            # API routes
│   ├── booking/        # Booking system
│   ├── contact/        # Contact page
│   ├── services/       # Services showcase
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Homepage
├── components/
│   ├── Navigation.tsx  # Header navigation
│   └── Footer.tsx      # Footer component
prisma/
├── schema.prisma       # Database schema
└── seed.ts            # Database seeding
```

## Key Pages

- **Homepage** (`/`) - Hero section with service overview
- **Services** (`/services`) - Complete service catalog
- **Booking** (`/booking`) - Online appointment scheduling
- **About** (`/about`) - Company mission and values
- **Contact** (`/contact`) - Contact information and FAQ

## Services Included

1. 1:1 ABA Therapy
2. Dyad Sessions (Buddy Learning)
3. Social Skills Groups
4. ABA + Montessori Program
5. Early Intervention Program
6. School Readiness Program
7. Life Skills & Independence Program
8. Community Outing Program
9. Parent Coaching & Training
10. Vocational Skills Program

## Design Principles

- **Clean & Minimal**: Focused on content with plenty of white space
- **Professional**: Healthcare-appropriate color scheme and typography
- **Accessible**: High contrast, clear navigation, semantic HTML
- **Mobile-First**: Responsive design for all screen sizes
- **Fast Loading**: Optimized images and minimal JavaScript

## Database Schema

- **Services**: Program information with pricing and categories
- **Bookings**: Appointment requests with status tracking
- **Contacts**: General inquiries and messages

## Deployment

The application is ready for deployment on platforms like:
- Vercel (recommended for Next.js)
- Netlify
- Railway
- Any Node.js hosting provider

Make sure to set up your PostgreSQL database and update environment variables for production.
