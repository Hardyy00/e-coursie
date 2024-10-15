import { auth } from "@/auth";
import { NextRequest, NextResponse } from "next/server";
import {v2 as cloudinary} from "cloudinary";

cloudinary.config({ 
    cloud_name: 'dlfyo8jcv', 
    api_key: '853936928142813', 
    api_secret: '<your_api_secret>' // Click 'View API Keys' above to copy your API secret
});

export default async function POST(request: NextRequest) {


    const session = await auth();
    
    if(!session){

        return NextResponse.json({message : "User is not logged In"}, {status : 500});
    }

    try{


    }
}
