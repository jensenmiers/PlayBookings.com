
import { createServerClient } from "@supabase/ssr";

export const createClient = (request) => {
  return createServerClient (
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      headers: request.headers,
    }
  );


};

