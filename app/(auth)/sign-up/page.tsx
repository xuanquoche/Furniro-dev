'use client';
import SignUpForm from '@/components/form/sign-up-form';

const SignUpPage = () => {
    return (
        <div className="shadow-lg p-8 sm:p-10 rounded-lg flex gap-6 mx-5 w-[900px]">
            <div className="hidden sm:flex justify-center items-start flex-col w-1/2">
                <h2 className="font-semibold text-3xl lg:text-4xl w-full mb-4">
                    Create a strong password
                </h2>
                <p>
                    Create a strong password with a mix of letters, numbers and
                    symbols
                </p>
            </div>
            <div className="w-full sm:w-1/2">
                <SignUpForm />
            </div>
        </div>
    );
};

export default SignUpPage;
