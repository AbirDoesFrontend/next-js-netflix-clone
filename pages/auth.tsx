import Input from "@/components/Input";
import Image from "next/image";

import logo from '../public/images/logo.png';
import { useCallback, useState } from "react";

const Auth = () => {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [variant, setVariant] = useState('login');

    const toggleVariant = useCallback(() => {
        setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login')
    } , [])

    return(
        <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-cover bg-fixed">
            <div className="bg-black w-full h-full lg:bg-opacity-50">
                <nav className="px-12 py-5">
                    <Image src={logo} alt='netflix logo' height={48}/>
                </nav>
                <div className="flex justify-center">
                    <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded w-full">
                        <h2 className="text-white text-4xl mb-8 font-semibold">{
                            variant === 'login' ? 'Sign In' : 'Register'
                        }</h2>
                        <div className="flex flex-col gap-4">
                            {
                                variant == 'register' && (
                                    <Input 
                                        label="Username"
                                        value={name}
                                        id="name"
                                        onChange={(event : any) => {setName(event.target.value)}}
                                    />
                                )
                            }
                            <Input 
                                label="Email"
                                value={email}
                                type="email"
                                id="email"
                                onChange={(event : any) => {setEmail(event.target.value)}}
                            />
                            <Input
                                label="Password"
                                value={password}
                                type="password"
                                id="password"
                                onChange={(event : any) => {setPassword(event.target.value)}}
                            />
                        </div>
                        <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
                            { variant == 'login' ? 'Login' : 'Sign Up'}
                        </button>
                        <p className="text-neutral-500 mt-12">
                            { variant == 'login' ? 'New to Netflix?' : 'Already have an account?' }
                            <span onClick={toggleVariant} className="text-white ml-1 hover:underline cursor-pointer">
                                { variant == 'login' ? 'Create an account' : 'Login' }
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Auth;