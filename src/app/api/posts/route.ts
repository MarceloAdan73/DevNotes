import { NextResponse } from 'next/server';
import { getPosts, addPost } from '@/lib/data';

// GET /api/posts
export async function GET() {
  const posts = getPosts();
  return NextResponse.json({
    success: true,
    data: posts
  });
}

// POST /api/posts  
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, content, author = 'Anónimo' } = body;

    if (!title || !content) {
      return NextResponse.json(
        { success: false, error: 'Título y contenido son requeridos' },
        { status: 400 }
      );
    }

    const newPost = addPost({ title, content, author });

    return NextResponse.json(
      { success: true, data: newPost },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { success: false, error: 'Error procesando la solicitud' },
      { status: 500 }
    );
  }
}
