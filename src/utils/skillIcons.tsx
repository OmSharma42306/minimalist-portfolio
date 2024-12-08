import React from 'react';

const defaultIconProps = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};

export const getSkillIcon = (skill: string) => {
  const icons: { [key: string]: React.ReactNode } = {
    HTML: (
      <svg {...defaultIconProps} className="text-orange-500">
        <path d="M13 17l5-5-5-5M6 17l5-5-5-5"/>
      </svg>
    ),
    CSS: (
      <svg {...defaultIconProps} className="text-blue-500">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <path d="M14 2v6h6"/>
      </svg>
    ),
    JavaScript: (
      <svg {...defaultIconProps} className="text-yellow-400">
        <path d="M20 4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16z"/>
      </svg>
    ),
    TypeScript: (
      <svg {...defaultIconProps} className="text-blue-600">
        <path d="M20 4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16z"/>
      </svg>
    ),
    React: (
      <svg {...defaultIconProps} className="text-cyan-400">
        <circle cx="12" cy="12" r="10"/>
        <circle cx="12" cy="12" r="4"/>
      </svg>
    ),
    'Node.js': (
      <svg {...defaultIconProps} className="text-green-500">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
    Express: (
      <svg {...defaultIconProps} className="text-gray-400">
        <rect width="18" height="18" x="3" y="3" rx="2"/>
        <path d="M3 9h18M9 21V9"/>
      </svg>
    ),
    Flask: (
      <svg {...defaultIconProps} className="text-gray-300">
        <path d="M9 3v15a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V3"/>
        <path d="M3 9h18"/>
      </svg>
    ),
    MySQL: (
      <svg {...defaultIconProps} className="text-blue-400">
        <ellipse cx="12" cy="5" rx="9" ry="3"/>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      </svg>
    ),
    MongoDB: (
      <svg {...defaultIconProps} className="text-green-500">
        <path d="M12 3v19"/>
        <path d="M5 8h14"/>
        <path d="M5 16h14"/>
      </svg>
    ),
    PostgreSQL: (
      <svg {...defaultIconProps} className="text-blue-500">
        <ellipse cx="12" cy="5" rx="9" ry="3"/>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      </svg>
    ),
    Git: (
      <svg {...defaultIconProps} className="text-orange-600">
        <circle cx="12" cy="12" r="4"/>
        <line x1="1.05" y1="12" x2="7" y2="12"/>
        <line x1="17.01" y1="12" x2="22.96" y2="12"/>
      </svg>
    ),
    GitHub: (
      <svg {...defaultIconProps} className="text-gray-300">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
        <path d="M9 18c-4.51 2-5-2-7-2"/>
      </svg>
    ),
    Docker: (
      <svg {...defaultIconProps} className="text-blue-400">
        <path d="M22 13.5c0-.7-.3-1.5-.8-2-.6-.5-1.4-.8-2.2-.8h-4V8h3c.6 0 1-.4 1-1V5c0-.6-.4-1-1-1h-3V2c0-.6-.4-1-1-1H9c-.6 0-1 .4-1 1v2H5c-.6 0-1 .4-1 1v2c0 .6.4 1 1 1h3v2.7H4c-.8 0-1.6.3-2.2.8-.5.5-.8 1.3-.8 2v3c0 .7.3 1.5.8 2 .6.5 1.4.8 2.2.8h16c.8 0 1.6-.3 2.2-.8.5-.5.8-1.3.8-2v-3z"/>
      </svg>
    ),
    WebRTC: (
      <svg {...defaultIconProps} className="text-blue-300">
        <circle cx="12" cy="12" r="10"/>
        <path d="M8 12h8"/>
        <path d="M12 8v8"/>
      </svg>
    ),
    'Socket Programming': (
      <svg {...defaultIconProps} className="text-purple-400">
        <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/>
        <line x1="7" y1="2" x2="7" y2="22"/>
        <line x1="17" y1="2" x2="17" y2="22"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <line x1="2" y1="7" x2="7" y2="7"/>
        <line x1="2" y1="17" x2="7" y2="17"/>
        <line x1="17" y1="17" x2="22" y2="17"/>
        <line x1="17" y1="7" x2="22" y2="7"/>
      </svg>
    ),
    Vercel: (
      <svg {...defaultIconProps} className="text-gray-300">
        <path d="M12 2L2 19.7h20L12 2z"/>
      </svg>
    ),
    Linux: (
      <svg {...defaultIconProps} className="text-yellow-500">
        <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/>
      </svg>
    ),
    Postman: (
      <svg {...defaultIconProps} className="text-orange-500">
        <path d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9"/>
      </svg>
    ),
    Python: (
      <svg {...defaultIconProps} className="text-yellow-300">
        <path d="M12 2a9 9 0 0 1 9 9v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-3H7v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-4a9 9 0 0 1 9-9z"/>
        <path d="M12 22a9 9 0 0 1-9-9v-4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3h6v-3a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a9 9 0 0 1-9 9z"/>
      </svg>
    ),
    'C++': (
      <svg {...defaultIconProps} className="text-blue-400">
        <path d="M18 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"/>
        <path d="m9 9 6 6"/>
        <path d="m15 9-6 6"/>
      </svg>
    ),
  };

  return icons[skill] || (
    <svg {...defaultIconProps}>
      <path d="M20 7h-7L10 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Z"/>
    </svg>
  );
};