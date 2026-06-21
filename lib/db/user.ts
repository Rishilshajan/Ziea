// Mock Supabase User Service
export type User = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  password?: string;
  role: 'Customer' | 'Admin';
  created_at: string;
};

// In-memory store for demo purposes.
// In a real Supabase setup, these would be calls to the supabase client.
let mockUsers: User[] = [
  {
    id: "admin-id-123",
    first_name: "Admin",
    last_name: "Ziea",
    email: "admin@ziea.in",
    password: "password123", // In real DB, store hashed
    role: "Admin",
    created_at: new Date().toISOString(),
  }
];

export const userService = {
  async findByEmail(email: string): Promise<User | null> {
    console.log(`[DB Mock] Finding user by email: ${email}`);
    return mockUsers.find(u => u.email === email) || null;
  },

  async createUser(data: Omit<User, 'id' | 'created_at'>): Promise<User> {
    console.log(`[DB Mock] Creating user:`, data);
    const newUser: User = {
      ...data,
      id: Math.random().toString(36).substring(7),
      created_at: new Date().toISOString(),
    };
    mockUsers.push(newUser);
    return newUser;
  }
};
