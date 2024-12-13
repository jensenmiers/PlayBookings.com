import { createServerClient } from '@/utils/supabase/server'

export default async function handler(req, res) {
    console.log('Supabase URL:', process.env.NEXT_PUBLIC_SUPABASE_URL);
    console.log('Received POST request');

    if (req.method === 'POST') {
        try {
            const { email } = req.body;
            console.log('Email received:', email)

            // Inititalize Supabase client
            const supabase = createServerClient();
            console.log('Supabase client initialized');

            // Insert the email into the Supabase database
            const { data, error } = await supabase
                .from('subscribers')
                .insert([
                    {
                        userid: null,
                        created_at: new Date().toISOString(),
                        email: email
                    }
                ])
                .select()
                ;

            if (error) {
                console.error('Supabase:', error);
                return res.status(500).json({ error: 'Failed to insert email into the database' });
            }
            return res.status(200).json({message: 'Email subscribed successfully', data });
        } catch (error) {
            console.error('Unexpected error:', error);
            return res.status(500).json({ error: error.message });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}