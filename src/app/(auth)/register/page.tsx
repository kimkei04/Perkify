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

export default function RegisterPage() {
  const router = useRouter();

  const handleRegister = (userType: 'consumer' | 'business') => {
    // In a real app, you'd handle form submission and API calls here.
    // For this prototype, we'll just redirect to the appropriate dashboard.
    if (userType === 'consumer') {
      router.push('/dashboard');
    } else {
      router.push('/business');
    }
  };

  const ConsumerRegisterForm = () => (
    <form onSubmit={(e) => { e.preventDefault(); handleRegister('consumer'); }}>
      <div className="grid gap-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="grid gap-2">
            <Label htmlFor="first-name">First name</Label>
            <Input id="first-name" placeholder="Max" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="last-name">Last name</Label>
            <Input id="last-name" placeholder="Robinson" required />
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" />
        </div>
        <Button type="submit" className="w-full">
          Create an account
        </Button>
      </div>
    </form>
  );

  const BusinessRegisterForm = () => (
    <form onSubmit={(e) => { e.preventDefault(); handleRegister('business'); }}>
      <div className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="business-name">Business Name</Label>
          <Input id="business-name" placeholder="Acme Inc." required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="business-email">Email</Label>
          <Input id="business-email" type="email" placeholder="contact@acme.com" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="business-password">Password</Label>
          <Input id="business-password" type="password" />
        </div>
        <Button type="submit" className="w-full">
          Create Business Account
        </Button>
      </div>
    </form>
  );

  return (
    <Card className="mx-auto w-full max-w-md">
      <CardHeader className="text-center">
        <Link href="/" className="flex items-center justify-center gap-2 font-bold text-2xl mb-2">
          <Icons.logo className="h-8 w-8 text-primary" />
          LoyaltyHub
        </Link>
        <CardTitle className="text-2xl">Create an account</CardTitle>
        <CardDescription>
          Join LoyaltyHub to start earning or offering rewards.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="consumer" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="consumer">Consumer</TabsTrigger>
            <TabsTrigger value="business">Business</TabsTrigger>
          </TabsList>
          <TabsContent value="consumer" className="pt-4">
            <ConsumerRegisterForm />
          </TabsContent>
          <TabsContent value="business" className="pt-4">
            <BusinessRegisterForm />
          </TabsContent>
        </Tabs>
        <div className="mt-4 text-center text-sm">
          Already have an account?{' '}
          <Link href="/auth/login" className="underline">
            Log in
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
