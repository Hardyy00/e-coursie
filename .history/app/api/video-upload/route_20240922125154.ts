import { auth } from "@/auth";
import { NextRequest, NextResponse } from "next/server";
import {v2 as cloudinary} from "cloudinary";

cloudinary.config({ 
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env. // Click 'View API Keys' above to copy your API secret
});

export default async function POST(request: NextRequest) {


    const session = await auth();
    
    if(!session){

        return NextResponse.json({message : "User is not logged In"}, {status : 500});
    }

    try{


    }
}