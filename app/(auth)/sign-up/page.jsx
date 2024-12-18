import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Singup(){
    return(
        <div className="bg-black/80 py-10 md:px-14 px-6 md:max-w-sm rounded mt-24 md:mt-0">
            <form>
            <h1 className="text-3xl font-semibold text-white">Sign Up</h1>
            <div className="mt-5 space-y-5">

    <Input type='email' placeholder="Email" name="email" className="bg-[#333] placeholder:text-xs placeholder:text-gray-400 w-full inline-block" />
    <Button type="submit" variant="destructive" className="bg-btnred w-full text-white">Sign Up</Button>

            </div>
            </form>
            <div className="mt-3 text-gray-500 text-sm">
              Already have an account? {""} <Link href={'/login'} className="text-white hover:underline">log in now</Link>
            </div>
        </div>
    )
}