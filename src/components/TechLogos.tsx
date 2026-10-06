import React from 'react';

interface TechLogoProps {
  name: string;
  className?: string;
}

export const TechLogo: React.FC<TechLogoProps> = ({ name, className = "w-6 h-6" }) => {
  const normName = name.toLowerCase().replace(/[^a-z0-9]/g, '');

  switch (normName) {
    case 'flutter':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.314 0L2.3 12L6 15.7L18 3.7L14.314 0Z" fill="#02569B"/>
          <path d="M20 9.6L14.314 15.3L18 19L24 13L20 9.6Z" fill="#0175C2"/>
          <path d="M14.314 15.3L8.629 21L12.329 24.7L20 17L14.314 15.3Z" fill="#13B9FD"/>
        </svg>
      );
    case 'dart':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.001 0L0.281 11.72C-0.093 12.095 -0.093 12.705 0.281 13.08L9.362 22.161C9.737 22.535 10.347 22.535 10.722 22.161L22.441 10.442C22.816 10.067 22.816 9.457 22.441 9.082L13.36 0C12.985 -0.375 12.376 -0.375 12.001 0Z" fill="#00A79D"/>
          <path d="M13.359 0.00195312L5.839 7.52195L13.359 15.042L20.879 7.52195L13.359 0.00195312Z" fill="#00B4AB"/>
          <path d="M13.359 15.042L5.839 7.52195L8.339 21.142L13.359 15.042Z" fill="#007A87"/>
          <path d="M13.359 15.042L20.879 7.52195L18.379 21.142L13.359 15.042Z" fill="#00968F"/>
        </svg>
      );
    case 'android':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.587 18.156C17.587 18.487 17.318 18.756 16.987 18.756H7.013C6.682 18.756 6.413 18.487 6.413 18.156V9.431H17.587V18.156Z" fill="#3DDC84"/>
          <path d="M17.587 9.43105H6.41302V9.40005C6.41302 6.30705 8.92002 3.80005 12.013 3.80005C15.106 3.80005 17.613 6.30705 17.613 9.40005V9.43105H17.587Z" fill="#3DDC84"/>
          <path d="M9.5 7.5C9.5 7.776 9.276 8 9 8C8.724 8 8.5 7.776 8.5 7.5C8.5 7.224 8.724 7 9 7C9.276 7 9.5 7.224 9.5 7.5Z" fill="white"/>
          <path d="M15.5 7.5C15.5 7.776 15.276 8 15 8C14.724 8 14.5 7.776 14.5 7.5C14.5 7.224 14.724 7 15 7C15.276 7 15.5 7.224 15.5 7.5Z" fill="white"/>
          <path d="M14.5 3.5L16 1.5" stroke="#3DDC84" strokeWidth="1" strokeLinecap="round"/>
          <path d="M9.5 3.5L8 1.5" stroke="#3DDC84" strokeWidth="1" strokeLinecap="round"/>
        </svg>
      );
    case 'java':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.467 15.293C19.789 16.421 18.258 17.469 15.922 18.195C13.585 18.922 11.233 19.117 10.669 18.632C10.106 18.632 11.543 17.172 13.879 16.446C16.216 15.719 18.57 15.1 19.467 15.293Z" fill="#E76F51"/>
          <path d="M16.634 12.39C16.956 13.518 15.425 14.566 13.089 15.292C10.752 16.019 8.4 16.214 7.836 15.729C7.273 15.245 8.71 14.269 11.046 13.543C13.383 12.816 15.737 12.197 16.634 12.39Z" fill="#F4A261"/>
          <path d="M9.9 8.2C9.2 8.9 9.5 10.1 10.5 10.8C11.5 11.5 12.8 11.4 13.5 10.7C14.2 10 13.9 8.8 12.9 8.1C11.9 7.4 10.6 7.5 9.9 8.2Z" fill="#2A9D8F"/>
          <path d="M14.5 4.5C13.5 3.5 11 3.5 9.5 4.5C8 5.5 7.5 7 8 8.5" stroke="#E76F51" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      );
    case 'react':
    case 'reactjs':
      return (
        <svg viewBox="-11.5 -10.23174 23 20.46348" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse rx="11" ry="4.2" stroke="#61DAFB" strokeWidth="1"/>
          <ellipse rx="11" ry="4.2" stroke="#61DAFB" strokeWidth="1" transform="rotate(60)"/>
          <ellipse rx="11" ry="4.2" stroke="#61DAFB" strokeWidth="1" transform="rotate(120)"/>
          <circle r="2" fill="#61DAFB"/>
        </svg>
      );
    case 'nextjs':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="12" fill="black"/>
          <path d="M18.5 19L11.5 10V19H9.5V5H11.5L16.5 11.5V5H18.5V19Z" fill="white"/>
          <circle cx="12" cy="12" r="11.5" stroke="white" strokeOpacity="0.2"/>
        </svg>
      );
    case 'tailwindcss':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.001 5.093c-2.18-.08-4.248.974-5.46 2.827-1.464 2.235-1.12 5.253.766 7.07 1.83 1.764 4.606 1.83 6.505.153a4.954 4.954 0 001.253-1.89c.123-.332.327-.61.642-.767a.978.978 0 011.294.41c.216.44.279.932.179 1.41a6.938 6.938 0 01-4.708 5.163 7.027 7.027 0 01-7.25-2.022 6.945 6.945 0 01-1.396-7.078c1.378-3.486 4.887-5.69 8.6-5.412a8.96 8.96 0 016.845 3.82c1.7 2.456 1.436 5.828-.604 7.973-.8.84-1.833 1.455-2.97 1.776-.328.093-.68.019-.94-.2-.258-.216-.395-.54-.367-.874.048-.564.398-1.055.932-1.258a3.02 3.02 0 001.954-2.88c0-1.16-.653-2.193-1.688-2.656-1.15-1.103-2.91-1.106-4.062-.007a3.047 3.047 0 00-.616.944c-.218.497-.696.82-1.234.823a1.44 1.44 0 01-1.428-1.58c.08-.72.482-1.36 1.1-1.74a4.975 4.975 0 015.867.45 4.935 4.935 0 011.428 3.42 4.962 4.962 0 01-3.666 4.793 4.982 4.982 0 01-5.112-1.503c-1.378-1.488-1.345-3.83.076-5.284a6.993 6.993 0 018.243-.9c3.09 1.785 4.67 5.4 3.733 8.802A9.043 9.043 0 0112.001 23.987c-6.627 0-12-5.373-12-12s5.373-12 12-12c6.627 0 12 5.373 12 12c0 1.25-.19 2.47-.56 3.61c-.13.397-.56.61-.95.48c-.397-.13-.61-.56-.48-.95c.32-.97.49-1.99.49-3.14c0-5.523-4.477-10-10-10z" fill="#38BDF8"/>
        </svg>
      );
    case 'redux':
    case 'reduxtoolkit':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 21.5C12.5 21.5 19 18 19 14.5V9.5L12 6L5 9.5V14.5C5 18 11.5 21.5 12 21.5Z" stroke="#764ABC" strokeWidth="1.5"/>
          <path d="M12 6V21.5" stroke="#764ABC" strokeWidth="1.5"/>
          <circle cx="12" cy="12" r="3" fill="#764ABC"/>
        </svg>
      );
    case 'nodejs':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L3 7.2V16.8L12 22L21 16.8V7.2L12 2Z" stroke="#339933" strokeWidth="1.5"/>
          <path d="M12 6.5L6.5 9.7V14.3L12 17.5L17.5 14.3V9.7L12 6.5Z" fill="#339933"/>
        </svg>
      );
    case 'express':
    case 'expressjs':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <text x="2" y="15" fill="white" fontFamily="sans-serif" fontWeight="bold" fontSize="11">ex</text>
          <circle cx="12" cy="12" r="11" stroke="white" strokeWidth="1.5"/>
        </svg>
      );
    case 'fastify':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L4 15H11L9 22L20 9H13L12 2Z" fill="#E2B857"/>
        </svg>
      );
    case 'postgresql':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#4169E1" strokeWidth="1.5"/>
          <path d="M9 8.5C10 7.5 13 7.5 14 8.5C15 9.5 15.5 12 14.5 13.5C13.5 15 10.5 15 9.5 14" stroke="#4169E1" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      );
    case 'mongodb':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C12 2 8 8 8 13.5C8 17.5 10 19.5 12 21.5C14 19.5 16 17.5 16 13.5C16 8 12 2 12 2Z" fill="#47A248"/>
          <path d="M12 2V21.5" stroke="#13AA52" strokeWidth="1.5"/>
        </svg>
      );
    case 'redis':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="4" width="16" height="5" rx="1" fill="#DC382D"/>
          <rect x="4" y="10" width="16" height="5" rx="1" fill="#DC382D"/>
          <rect x="4" y="16" width="16" height="5" rx="1" fill="#DC382D"/>
        </svg>
      );
    case 'firebase':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.59 18.22L7.33 3.39C7.45 2.91 8.08 2.8 8.35 3.2L12 9.5L3.59 18.22Z" fill="#FFC400"/>
          <path d="M20.41 18.22L14.77 7.02C14.54 6.57 13.9 6.64 13.77 7.15L12 12L20.41 18.22Z" fill="#F57C00"/>
          <path d="M12 21.5L20.41 18.22L12 12L3.59 18.22L12 21.5Z" fill="#FF9100"/>
        </svg>
      );
    case 'docker':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 13.5C3 13.5 4.5 14 7.5 14C11 14 13 11 15 11C18.5 11 21 13 21 13.5C21 16 17.5 17 12 17C6.5 17 3 16 3 13.5Z" fill="#2496ED"/>
          <rect x="5" y="7" width="2" height="2" fill="#2496ED" rx="0.5"/>
          <rect x="8" y="7" width="2" height="2" fill="#2496ED" rx="0.5"/>
          <rect x="11" y="7" width="2" height="2" fill="#2496ED" rx="0.5"/>
          <rect x="8" y="4" width="2" height="2" fill="#2496ED" rx="0.5"/>
        </svg>
      );
    case 'aws':
    case 'amazonwebservices':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 14C6.5 16.5 10 17 12 17C14.5 17 17.5 16 19.5 14" stroke="#FF9900" strokeWidth="2" strokeLinecap="round"/>
          <path d="M18.5 13L20 15L21.5 13" stroke="#FF9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <text x="7" y="10" fill="white" fontFamily="sans-serif" fontWeight="black" fontSize="9">AWS</text>
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <text x="12" y="16" textAnchor="middle" fontSize="10" fontWeight="bold" fill="currentColor" stroke="none">{name.slice(0,2).toUpperCase()}</text>
        </svg>
      );
  }
};
