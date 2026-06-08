# College Event Management System

A fully responsive website for managing college events where students can view upcoming events, register for them, and explore event schedules, gallery, and FAQs.

## 📋 Project Overview

This project implements a comprehensive event management system for college with multiple pages and features using Bootstrap 5, HTML, CSS, and JavaScript.

## 📁 File Structure

```
College Management portal/
├── index.html           # Home Page
├── events.html          # Events Listing Page
├── registration.html    # Event Registration Form
├── schedule.html        # Event Schedule & Timeline
├── gallery.html         # Event Photo Gallery
├── faq.html             # Frequently Asked Questions
├── contact.html         # Contact & Coordinator Details
├── styles.css           # Custom Styling
├── script.js            # JavaScript Functionality
└── README.md           # This file
```

## 🎨 Features Implemented

### Page 1: Home Page (index.html)
- **Navbar** with navigation links to all pages
  - Home, Events, Gallery, Registration, Schedule, FAQ, Contact
- **Hero Section** with Carousel
  - 3 different carousel slides with call-to-action buttons
  - Responsive design with gradient backgrounds
- **Event Highlights** section with 3 featured events
- **Call-to-Action** section
- **Statistics Section** showing events count, students registered, and prizes
- **Footer** with links and contact information

### Page 2: Events Page (events.html)
- Displays **6+ event cards** in a responsive grid
  - Technical Quiz
  - Hackathon
  - Poster Presentation
  - Coding Contest
  - Project Expo
  - Cultural Fest
- Each card contains:
  - Event image
  - Event name
  - Date and time
  - Venue
  - Quick registration button with modal
- **Quick Registration Modal** for immediate signup

### Page 3: Event Registration (registration.html)
- **Comprehensive Registration Form** with fields:
  - Student Name (required)
  - Roll Number (required)
  - Branch selection dropdown (required)
  - Email Address (required, with validation)
  - Mobile Number (required, with format validation)
  - Event Selection (multiple checkboxes, at least one required)
  - Terms & Conditions checkbox
- **Form Validation**:
  - Client-side validation with Bootstrap form validation
  - Real-time validation feedback
- **Success Message**:
  - Displays confirmation with email and selected events
  - Auto-dismissible alert
- **Clear Form** button to reset all fields

### Page 4: Event Schedule (schedule.html)
- **Responsive Tables** for event schedules
  - Organized by month (March, April, May)
  - Columns: Date, Time, Event, Venue, Coordinator
- **Bootstrap Table Features**:
  - Table-striped for alternating row colors
  - Table-hover for interactive rows
  - Table-bordered for clear cell separation
- **Download/Print Functionality** for schedule
- Print-friendly styling

### Page 5: Gallery (gallery.html)
- **Responsive Image Grid** with 4 event categories:
  - Technical Quiz (4 images)
  - Hackathon (4 images)
  - Cultural Fest (4 images)
  - Project Expo (4 images)
- **Card-based Layout** with:
  - Responsive images
  - Image captions
  - Hover effects with zoom and brightness
- **Grid System** that adapts to different screen sizes

### Page 6: FAQ (faq.html)
- **Accordion Component** with 10 FAQs:
  - How to register for events?
  - Is there a registration fee?
  - Can I participate in multiple events?
  - What is the registration deadline?
  - How do I get event confirmation?
  - Can I cancel or modify my registration?
  - Do I need any specific skills to participate?
  - How are prizes distributed?
  - What should I bring to the event?
  - Still have questions? (Contact information)
- **Bootstrap Accordion** with smooth open/close animation
- **Detailed Answers** with helpful information
- **Contact CTA** at the bottom

### Page 7: Contact (contact.html)
- **Contact Information Cards**:
  - Email with direct link
  - Phone with clickable number
  - Address with office hours
- **Contact Form** with fields:
  - Full Name
  - Email Address
  - Subject dropdown
  - Message textarea
- **Form Validation** and success message
- **Coordinator Details**:
  - Chief Event Coordinator information
  - Assistant coordinators for different event types
  - Office hours and contact methods
- **Social Media Links** section
- **Responsive Design** with proper layout

## 🎯 Bootstrap Components Used

✅ **Navbar** - Sticky navigation with responsive toggle
✅ **Carousel** - Hero section with auto-rotating slides
✅ **Cards** - Event cards, gallery cards, info cards
✅ **Forms** - Registration and contact forms with validation
✅ **Tables** - Striped, hover, and bordered event schedule tables
✅ **Accordion** - FAQ section with expandable items
✅ **Alerts** - Success and info messages
✅ **Buttons** - Various button styles and sizes
✅ **Grid System** - Responsive layout with columns
✅ **Modals** - Quick registration popup
✅ **Badges** - Coordinator badges on schedule
✅ **Dropdowns** - Form select elements
✅ **Checkboxes** - Event selection in registration

## 🎨 Custom Styling (styles.css)

- Custom color scheme with CSS variables
- Smooth transitions and animations
- Hover effects on cards and buttons
- Responsive typography
- Custom scrollbar styling
- Print-friendly styles
- Mobile-responsive breakpoints (576px, 768px)

## 🔧 JavaScript Functionality (script.js)

- **Form Validation**:
  - Real-time validation
  - Email and phone format checking
  - Event selection validation
- **Form Submission Handlers**:
  - Registration form processing
  - Contact form processing
- **Success Notifications**:
  - Auto-dismissible alerts
  - Success message display
- **Interactive Features**:
  - Smooth scroll behavior
  - Fade-in animations on scroll
  - Navbar active state management
  - Modal event handling
- **Utility Functions**:
  - Toast notifications
  - Form prefill capabilities
  - Print functionality

## 💻 Responsive Design

The website is fully responsive and works on:
- **Desktop** (1024px and above)
- **Tablet** (768px - 1023px)
- **Mobile** (576px - 767px)
- **Small Mobile** (below 576px)

Breakpoints:
- `@media (max-width: 768px)` - Tablet adjustments
- `@media (max-width: 576px)` - Mobile adjustments

## 🚀 How to Use

1. **Open in Browser**: Open `index.html` in any modern web browser
2. **Navigate**: Use the navbar to navigate between pages
3. **Register**: Go to Registration page and fill the form
4. **View Events**: Check Events page for all available events
5. **Check Schedule**: Visit Schedule page for event timings
6. **Browse Gallery**: Explore past event photos in Gallery
7. **Get Help**: Check FAQ or Contact page for assistance

## 📱 Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 🎓 Features Highlights

### User-Friendly Interface
- Clean and modern design
- Intuitive navigation
- Clear call-to-action buttons

### Form Handling
- Client-side validation
- Helpful error messages
- Success confirmations

### Accessibility
- Semantic HTML
- ARIA labels where needed
- Keyboard navigation support

### Performance
- Optimized CSS
- Minimal JavaScript
- Fast loading times

### Mobile-First Approach
- Responsive grid system
- Touch-friendly buttons
- Optimized images

## 🎨 Color Scheme

- Primary: #667eea (Purple Blue)
- Secondary: #764ba2 (Dark Purple)
- Success: #10b981 (Green)
- Danger: #ef4444 (Red)
- Warning: #f59e0b (Orange)
- Info: #06b6d4 (Cyan)

## 📋 Sample Data

The website includes sample data for:
- 6 main events (Technical Quiz, Hackathon, etc.)
- 3 months of event schedule
- Multiple gallery images from past events
- 10 FAQ items
- Coordinator information

## 🔐 Security Notes

- All form submissions are currently handled locally
- For production, implement:
  - Backend server for form processing
  - Email verification
  - Database for storing registrations
  - HTTPS encryption

## 📞 Contact Information

In the application:
- **Email**: events@college.edu
- **Phone**: +1 (555) 123-4567
- **Office**: Admin Building, 3rd Floor

## 📝 Future Enhancements

- Backend integration for form submissions
- User authentication and dashboard
- Event booking system with payment
- Real email notifications
- Event feedback and ratings
- Social media integration
- Dark mode toggle
- Multi-language support

## 📄 License

This project is created for educational purposes.

## ✨ Credits

Built with:
- Bootstrap 5.3.0
- HTML5
- CSS3
- Vanilla JavaScript

---

**Version**: 1.0.0
**Last Updated**: 2024
**Developed for**: College Event Management
