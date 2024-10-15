import { auth } from "@/auth";
import { NextRequest, NextResponse } from "next/server";

export default async function POST(request: NextRequest) {


    const session = await auth();
    
    if(!session){

        return NextResponse.json({message : "User is not logged In"}, {status : 500});
    }

    try{

        
    }
}
