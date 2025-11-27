import { Post } from './types';

// Datos compartidos entre todas las rutas API
const posts: Post[] = [
  {
    id: 1,
    title: "¡Bienvenido al Blog personal de notas!",
    content: "Escribe lo que quieras, puedes eliminar este Post.",
    author: "Sistema",
    createdAt: new Date().toISOString(),
    likes: 0
  }
];

let idCounter = 2;

// Funciones para manejar los datos
export function getPosts() {
  return posts;
}

export function addPost(post: { title: string; content: string; author: string }) {
  const newPost = {
    id: idCounter++,
    ...post,
    createdAt: new Date().toISOString(),
    likes: 0
  };
  posts.push(newPost);
  return newPost;
}

export function deletePost(id: number) {
  const postIndex = posts.findIndex(p => p.id === id);
  if (postIndex === -1) return null;
  
  return posts.splice(postIndex, 1)[0];
}

export function updatePost(id: number, updates: Partial<Pick<Post, 'title' | 'content' | 'author' | 'likes'>>) {
  const postIndex = posts.findIndex(p => p.id === id);
  if (postIndex === -1) return null;
  
  posts[postIndex] = {
    ...posts[postIndex],
    ...updates,
    updatedAt: new Date().toISOString()
  };
  
  return posts[postIndex];
}
