export interface User {
  name: string;
  email: string;
  role: string;
  photo: string;
  _id: string;
  id: string;
  created_at: string;
  updated_at: string;
  __v: number;
}

export interface GenericResponse {
  status: string;
  message: string;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  image: string;
  logo: string;
  category: string;
  images?: string[];
  author: string;
  created_at: string;
}
