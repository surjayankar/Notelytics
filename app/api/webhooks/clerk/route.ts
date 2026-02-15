import { prisma } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';
import { Webhook } from 'svix';
export async function POST(request: NextRequest) {
    try{
        const payload = await request.text();
        const headers={
            'svix-id': request.headers.get('svix-id') || '',
            'svix-signature': request.headers.get('svix-signature') || '',
            'svix-timestamp': request.headers.get('svix-timestamp') || '',
        }
        const webhookSecret = process.env.CLERK_WEBHOOK_SECRET || '';
        if(webhookSecret){
            const wh= new Webhook(webhookSecret);
            try{
                wh.verify(payload, headers);
            }catch(err){
                return NextResponse.json({error: 'Invalid signature'}, {status: 400});
            }
        }
        const event = JSON.parse(payload);
        console.log('clerk webhook received', event.type);
        if(event.type === 'user.created'){
            const {id,email_addresses,first_name,last_name} = event.data;
            const primaryEmail=email_addresses?.find((email:any)=>
                email.id === event.data.primary_email_address_id
            )?.email_address;
            const newUser= await prisma.user.create({
                data:{
                    id:id,
                    clerkId:id,
                    email:primaryEmail || null,
                    name: `${first_name} ${last_name}`,
                }
            })
            console.log('New user created in database', newUser.id,newUser.email);
            return NextResponse.json({message: 'User created successfully'});
        }
        return NextResponse.json({message: 'Webhook received'});
    }catch(error){
        console.error('Webhook error:', error);
        return NextResponse.json({error: 'Webhook processing failed'}, {status: 500});
    }
}