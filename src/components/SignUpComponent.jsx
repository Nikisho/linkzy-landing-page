import React, { useState } from 'react';
import validateEmail from '../functions/validateEmail';
import supabase from '../../supabase';

const SignUpComponent = () => {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (event) => {
        setEmail(event.target.value);
    };

    const sendEmail = async () => {
        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        setIsSubmitting(true);
        const { error } = await supabase.from('email-list').insert({ email: email });

        if (error) {
            console.error(error.message);
            if (error.code === 23505) {
                alert("You're already signed up!")
            }
            setIsSubmitting(false);
            return;
        }

        setEmail('');
        setTimeout(() => {
            setIsSubmitted(true);
        }, 1000);
    };

    return (
        <div className='flex flex-col space-y-3 w-full md:px-1 xl:w-3/4'>
            {isSubmitted ? (
                <div className='transition-opacity ease-in duration-700 font-sans text-green-600'>
                    Thank you for signing up! &#10003;
                </div>
            ) : (
                <div className={`flex items-center ${isSubmitting ? 'transition-opacity ease-in duration-700 opacity-0' : ''}`}>
                    <input
                        className='h-10 w-2/3 border border-gray-400 p-4 rounded-l-xl'
                        placeholder='example@gmail.com'
                        value={email}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                    />
                    <button
                        className='h-10 w-1/3 rounded-r-xl bg-[#20444c] hover:scale-95 transition duration-700 font-bold font-sans text-lg text-white'
                        type='submit'
                        onClick={sendEmail}
                        disabled={isSubmitting}
                    >
                        Sign up
                    </button>
                </div>
            )}
        </div>
    );
};

export default SignUpComponent;
