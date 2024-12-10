import { createClient } from '@/utils/supabase/server'

export default async function handler(req, res) {
    console.log('Supabase URL:', process.env.NEXT_PUBLIC_SUPABASE_URL);
    console.log('Received POST request');

    if (req.method === 'POST') {
        try {
            const { email } = await request.json();
            console.log('Email received:', email)

            // Inititalize Supabase client
            const supabase = createClient();
            console.log('Supabase client initialized');

            // Insert the email into the Supabase database
            const { data, error } = await supabase
                .from('subscribers')
                .insert([
                    {
                        userid: null,
                        created_at: null,
                        email: `${email}`
                    }
                ])
                .select()
                ;

            if (error) {
                console.error('Supabase:', error);
                throw new Error('Failed to insert email into the database');
            }
            return new Response(JSON.stringify({message: 'Email subscribed successfully', data }), {
                status: 200,
            });
        } catch (error) {
            return new Response(JSON.stringify({error: error.message}, {status: 500}), {
                status: 500,
            });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}