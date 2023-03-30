export interface User {
  name: string;
  email: string;
  role: string;
  avatar: string;
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
  _id: string;
  title: string;
  content: string;
  image: string;
  logo: string;
  category: {
    _id: string;
    name: string;
  };
  images?: string[];
  userInfo: {
    _id: string;
    name: string;
    email: string;
    role: string;
    avatar: string;
    created_at: string;
  };
  created_at: string;
}

export interface Category {
  _id: string;
  name: string;
  image: string;
}

export interface PostByCategoryRequest {
  categoryId: string;
  page: number;
}
