
import { createClient } from "@supabase/supabase-js";

export const createServerClientWithHeaders = (request) => {
  return createClient (
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      headers: request.headers,
    }
  );


};

