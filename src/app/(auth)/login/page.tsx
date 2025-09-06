'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Icons } from '@/components/icons';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = (userType: 'consumer' | 'business') => {
    // In a real app, you'd handle form submission and API calls here.
    // For this prototype, we'll just redirect to the appropriate dashboard.
    if (userType === 'consumer') {
      router.push('/dashboard');
    } else {
      router.push('/business');
    }
  };

  const LoginForm = ({ userType }: { userType: 'consumer' | 'business' }) => (
    <form onSubmit={(e) => { e.preventDefault(); handleLogin(userType); }}>
      <div className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor={`${userType}-email`}>Email</Label>
          <Input id={`${userType}-email`} type="email" placeholder="m@example.com" required />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor={`${userType}-password`}>Password</Label>
            <Link href="#" className="ml-auto inline-block text-sm underline">
              Forgot your password?
            </Link>
          </div>
          <Input id={`${userType}-password`} type="password" required />
        </div>
        <Button type="submit" className="w-full">
          Login
        </Button>
      </div>
      <div className="mt-4 text-center text-sm">
        Don&apos;t have an account?{' '}
        <Link href="/auth/register" className="underline">
          Sign up
        </Link>
      </div>
    </form>
  );

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <Link href="/" className="flex items-center justify-center gap-2 font-bold text-2xl mb-2">
          <Icons.logo className="h-8 w-8 text-primary" />
          LoyaltyHub
        </Link>
        <CardTitle className="text-2xl">Welcome back</CardTitle>
        <CardDescription>
          Login to access your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="consumer" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="consumer">Consumer</TabsTrigger>
            <TabsTrigger value="business">Business</TabsTrigger>
          </TabsList>
          <TabsContent value="consumer" className="pt-4">
            <LoginForm userType="consumer" />
          </TabsContent>
          <TabsContent value="business" className="pt-4">
            <LoginForm userType="business" />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
