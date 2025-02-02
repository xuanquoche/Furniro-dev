import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/custom/button';
import { Form } from '@/components/ui/form';
import CustomFormField from './form-field';
import { FcGoogle } from 'react-icons/fc';
import Link from 'next/link';
import { ROUTES } from '@/constants';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { signUp } from '@/apis/auth';

const SignUpForm = () => {
    const router = useRouter();

    const formSchema = z
        .object({
            email: z.string().email({
                message: 'Invalid email'
            }),
            first_name: z.string({
                required_error: 'First name is required'
            }),
            last_name: z.string({
                required_error: 'Last name is required'
            }),
            username: z.string({
                required_error: 'User name is required'
            }),
            password: z
                .string({
                    required_error: 'Password is required'
                })
                .min(8, { message: 'Password is required 8 charactors' })
                .regex(/[A-Z]/, {
                    message: 'Password must contain an uppercase letter'
                })
                .regex(/[a-z]/, { message: 'Password must contain a lowercase letter' })
                .regex(/\d/, { message: 'Password must contain a number' })
                .regex(/[\W_]/, {
                    message: 'Password must contain a special character'
                }),
            confirmPassword: z
                .string({
                    required_error: 'Confirm password is required'
                })
                .min(8, { message: 'Confirm password is required 8 charactors' })
        })
        .refine((data) => data.password === data.confirmPassword, {
            message: 'Passwords do not match',
            path: ['confirmPassword']
        });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            first_name: '',
            last_name: '',
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        const { email, first_name, last_name, password, username } = values;
        try {
            await signUp({ email, first_name, last_name, password, username });

            toast.success('Sign up Successful');
            toast.warning('Verify your email before logging in. Check your inbox for the verification link.');
            router.push(ROUTES.SIGN_IN);
        } catch (error) {
            toast.error(`Fail to sign up ${error}`);
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 flex flex-col">
                <div className="flex gap-4">
                    <CustomFormField
                        label="First name"
                        name="first_name"
                        control={form.control}
                        type="text"
                        placeholder="First Name"
                    />
                    <CustomFormField
                        label="Last name"
                        name="last_name"
                        control={form.control}
                        type="text"
                        placeholder="Last Name"
                    />
                </div>
                <CustomFormField
                    label="User name"
                    name="username"
                    control={form.control}
                    type="text"
                    placeholder="User Name"
                />
                <CustomFormField label="Email" name="email" control={form.control} type="email" placeholder="Email" />
                <CustomFormField
                    label="Password"
                    name="password"
                    control={form.control}
                    placeholder="Password"
                    isPasswordField
                />
                <CustomFormField
                    label="Confirm Password"
                    name="confirmPassword"
                    control={form.control}
                    placeholder="Confirm Password"
                    isPasswordField
                />
                <Button type="submit" variant="default" loading={form.formState.isSubmitting}>
                    Sign Up
                </Button>
                <div className="flex items-center justify-center my-5">
                    <div className="flex-grow border-t border-gray-300"></div>
                    <span className="mx-2 text-sm font-semibold">Or</span>
                    <div className="flex-grow border-t border-gray-300"></div>
                </div>
                <Button className="space-x-2" variant="outline">
                    <FcGoogle />
                    <p className="text-xs sm:text-sm font-semibold">Sign In with google</p>
                </Button>
                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-400">
                        You already have an account?{' '}
                        <Link
                            href={ROUTES.SIGN_IN}
                            className="font-semibold hover:text-button-background transition-colors"
                        >
                            Sign in
                        </Link>
                    </p>
                </div>
            </form>
        </Form>
    );
};

export default SignUpForm;
