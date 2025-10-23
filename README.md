# Notifications Page

A modern, responsive notifications page built with React and Vite. This project displays a clean notification interface with unread indicators, user avatars, and interactive elements.

## Features

- **Modern UI Design**: Clean, minimalist interface with proper spacing and typography
- **Unread Notifications**: Visual indicators for unread notifications with red dots
- **Interactive Elements**: Click to mark notifications as read
- **Mark All as Read**: Bulk action to mark all notifications as read
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Real-time Counter**: Dynamic badge showing number of unread notifications

## Technologies Used

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **CSS3** - Modern styling with flexbox and custom properties
- **PropTypes** - Type checking for React components

## Project Structure

```
src/
├── components/
│   ├── notification/
│   │   ├── Notification.jsx
│   │   └── notification.css
│   └── starter/
│       ├── Starter.jsx
│       └── starter.css
├── data.json
├── App.jsx
├── App.css
└── main.jsx
```

## Getting Started

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd React-Notifications-page
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Design

The project follows modern UI/UX principles with:

- Clean typography using Plus Jakarta Sans font family
- Consistent color scheme with proper contrast
- Smooth hover effects and transitions
- Proper spacing and alignment
- Mobile-first responsive design

## Figma Design

- https://www.figma.com/design/G09JA6Wjksi3IXa8CAnoDF/notifications-page?node-id=0-1&p=f

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
