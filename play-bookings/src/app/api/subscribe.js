import { createClient } from '@/utils/supabase/server'
import { NextResponse } from 'next/server';

export async function POST(request) {
    console.log('Supabase URL:', process.env.NEXT_PUBLIC_SUPABASE_URL); // Add this line
    console.log('Received POST request');

    try {
        const { email } = await request.json();
        console.log('Email received:', email)

        // Inititalize Supabase client
        const supabase = createClient();
        console.log('Supabase client initialized');

        // Insert the email into the Supabase database
        const { data, error } = await supabase
            .from('subscribers')
            .insert([{ email }]);

        if (error) {
            console.error('Supabase:', error);
            throw new Error('Failed to insert email into the database');
        }
        return NextResponse.json({message: 'Email subscribed successfully', data });
    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 500});
    }
}