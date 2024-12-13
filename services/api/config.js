// API configuration and base URLs
export const API_BASE_URL = 'https://xbx-server.vercel.app/'; // Update with your actual API base URL

// API endpoints
export const ENDPOINTS = {
  // Auth endpoints
  auth: {
    adminSignIn: '/admin/signin',
    adminSignOut: '/admin/signout',
    refreshToken: '/admin/refresh-token',
  },

  // Dashboard endpoints
  dashboard: {
    overview: '/dashboard/overview',
    stats: '/dashboard/stats',
  },

  // Users management
  users: {
    list: '/users',
    create: '/users',
    update: '/users/:id',
    delete: '/users/:id',
    getById: '/users/:id',
  },

  // Products management
  products: {
    list: '/products',
    create: '/products',
    update: '/products/:id',
    delete: '/products/:id',
    getById: '/products/:id',
    categories: '/products/categories',
  },

  // Investors management
  investors: {
    list: '/investors',
    create: '/investors',
    update: '/investors/:id',
    delete: '/investors/:id',
    getById: '/investors/:id',
    investments: '/investors/:id/investments',
  },
};
