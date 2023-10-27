import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { type NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

// ? Esto es una opción de Next.js, para evitar que
// ? cachee la ruta, y que siempre se ejecute en el servidor
export const dynamic = 'force-dynamic'

export async function GET (request: NextRequest) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')

  if (code != null) {
    // ? Usando el código que le hemos pasado por url
    // ? nos devuelve la sesión del usuario
    const supabase = createRouteHandlerClient({ cookies })
    await supabase.auth.exchangeCodeForSession(code)
  }

  return NextResponse.redirect(requestUrl.origin)
}
