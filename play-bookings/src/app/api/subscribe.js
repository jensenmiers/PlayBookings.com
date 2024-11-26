import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const { email } = await request.json();

        // MAILCHIMP API URL & API KEY!!
        const mailchimpUrl = `https://<dc>.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members`;
        const apiKey = process.env.MAILCHIMP_API_KEY;

        const response = await fetch(mailchimpUrl, {
            method: 'POST',
            headers: {
                'Authorization': `apikey ${apiKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email_address: email,
                status: 'subscribed',
            }),
        });
        if (!response.ok) {
            throw new Error('Failed to subscribe email');
        }
        return NextResponse.json({message: 'Email subscribed successfully' });
    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 500});
    }
}