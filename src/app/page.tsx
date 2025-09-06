import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Gift, BarChart, Users } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import { Icons } from '@/components/icons';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="container mx-auto h-20 flex items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <Icons.logo className="h-8 w-8 text-primary" />
          LoyaltyHub
        </Link>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button variant="ghost" asChild>
            <Link href="/auth/login">Login</Link>
          </Button>
          <Button asChild>
            <Link href="/auth/register">Sign Up <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </header>

      <main className="flex-grow">
        <section className="relative py-24 md:py-32 text-center bg-gradient-to-b from-background to-secondary">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 font-headline">
              Unlock Loyalty, Drive Growth
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              The all-in-one platform for businesses to create rewarding loyalty programs and for customers to enjoy exclusive benefits.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/auth/register">Get Started for Free</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/#features">Learn More</Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="features" className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-headline">Features for Everyone</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Whether you're a business owner or a savvy shopper, LoyaltyHub has something for you.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit mb-4">
                    <Gift className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>For Customers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Discover local businesses, subscribe to their loyalty programs, and earn rewards with every purchase. Track your progress and never miss a deal.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit mb-4">
                    <BarChart className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>For Businesses</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Create and manage custom loyalty programs effortlessly. Understand your customers better with powerful analytics and AI-driven insights.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Build Community</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Foster stronger relationships between businesses and their customers. Turn one-time buyers into loyal fans and brand advocates.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 bg-secondary">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} LoyaltyHub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
