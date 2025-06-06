import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/custom/button';
import { Form } from '@/components/ui/form';
import CustomFormField from './input-field';
import { FcGoogle } from 'react-icons/fc';
import Link from 'next/link';
import { ROUTES } from '@/constants';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const SignInForm = () => {
    const router = useRouter();

    const formSchema = z.object({
        username: z.string({ required_error: 'Name or email is required' }),
        password: z
            .string({
                required_error: 'Password is required'
            })
            .min(8, { message: 'Password must be at least 8 characters' })
            .regex(/[A-Z]/, {
                message: 'Password must contain an uppercase letter'
            })
            .regex(/[a-z]/, {
                message: 'Password must contain a lowercase letter'
            })
            .regex(/\d/, { message: 'Password must contain a number' })
            .regex(/[\W_]/, {
                message: 'Password must contain a special character'
            })
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: '',
            password: ''
        }
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        const { username, password } = values;
        const data = await fetch('/api/auth/signIn', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        if (data.ok) {
            toast.success('Sign In');
            router.push(ROUTES.HOME);
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 flex flex-col">
                <CustomFormField
                    label="Email"
                    name="username"
                    control={form.control}
                    type="text"
                    placeholder="Email or user name"
                />
                <CustomFormField
                    label="Password"
                    name="password"
                    control={form.control}
                    placeholder="Password"
                    isPasswordField
                />
                <Link
                    href={ROUTES.FORGOT_PASSWORD}
                    className="text-sm font-medium text-gray-400 hover:text-button-background transition-colors cursor-pointer w-fit"
                >
                    Forgot password
                </Link>
                <Button
                    type="submit"
                    variant="default"
                    className="bg-button-background hover:bg-button-background/90 rounded-xl"
                    loading={form.formState.isSubmitting}
                >
                    Sign In
                </Button>
                <div className="flex items-center justify-center my-5">
                    <div className="flex-grow border-t border-gray-300"></div>
                    <span className="mx-2 text-sm font-semibold">Or</span>
                    <div className="flex-grow border-t border-gray-300"></div>
                </div>
                <Button className="space-x-2" variant="outline">
                    <FcGoogle />
                    <p className="text-xs sm:text-sm font-semibold">Sign in with Google</p>
                </Button>
                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-400">
                        Don&apos;t have an account?{' '}
                        <Link
                            href={ROUTES.SIGN_UP}
                            className="font-semibold text-text-category hover:text-button-background transition-colors"
                        >
                            Sign Up
                        </Link>
                    </p>
                </div>
            </form>
        </Form>
    );
};

export default SignInForm;
