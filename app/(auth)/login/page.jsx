import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";


export default function Login (){
    return(
        <div className="bg-black/80 py-10 md:px-14 px-6 md:max-w-sm rounded mt-24 md:mt-0">
            <form>
            <h1 className="text-3xl font-semibold text-white">Sign In</h1>
            <div className="mt-5 space-y-5">

    <Input type='email' placeholder="Email" name="email" className="bg-[#333] placeholder:text-xs placeholder:text-gray-400 w-full inline-block" />
    {/* <Input type='password' placeholder="Password" name="passwprd" className="bg-[#333] placeholder:text-xs placeholder:text-gray-400 w-full inline-block" /> */}
    <Button type="submit" variant="destructive" className="bg-btnred w-full text-white">Sign In</Button>

            </div>
            </form>
            <div className="mt-3 text-gray-500 text-sm">
             New to Netflix? {""} <Link  href={'/sign-up'} className="text-white hover:underline">Sign Up now</Link>
            </div>
        </div>
    )
}