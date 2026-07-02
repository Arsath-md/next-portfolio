import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
export async function POST(request) {
    try{
    const {name,email,phone,message} =await request.json()

    const trans = await nodemailer.createTransport({
        host:"smtp.gmail.com",
        port:465,
        secure:true,
        auth:{
            user:"studytamilah@gmail.com",
            pass:"hcgjyjqmhxybjgzn"
        }
    })

    const mailing ={
        from:"studytamilah@gmail.com",
        to:"vippismart@gmail.com",
        subject:"test mail",
        html:`<h1> Here are the messages 
               name:${name}
               email:${email}
               phone:${phone}
               and 
               
               the msg:
               ${message}</h1>`
    }
        const info = await trans.sendMail(mailing)

        return NextResponse.json({
        message:"done" })
    }
    catch(e){
        console.log("there is an errror occur in email js"+e)
        return NextResponse.json(
            { error: "Failed to send email." }, 
            { status: 500 }
        );
    }
    

}