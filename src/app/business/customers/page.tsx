import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { businessData } from '@/lib/data';
import PageHeader from '@/components/page-header';
import { Download } from 'lucide-react';

export default function CustomersPage() {
  const customers = businessData.customers;

  return (
    <>
      <PageHeader
        title="Customers"
        description="Manage your subscribed customers and view their details."
      >
        <Button>
          <Download className="mr-2 h-4 w-4" />
          Export
        </Button>
      </PageHeader>
      <Card>
        <CardContent className="pt-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Customer</TableHead>
                <TableHead>Email</TableHead>
                <TableHead className="hidden md:table-cell">
                  Subscription Date
                </TableHead>
                <TableHead className="text-right">Total Spent</TableHead>
                <TableHead className="hidden sm:table-cell">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {customers.map((customer) => (
                <TableRow key={customer.id}>
                  <TableCell>
                    <div className="font-medium">{customer.name}</div>
                    <div className="text-sm text-muted-foreground md:hidden">
                      {customer.email}
                    </div>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {customer.email}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {customer.subscriptionDate}
                  </TableCell>
                  <TableCell className="text-right">
                    ${customer.totalSpent.toFixed(2)}
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    <Badge variant={customer.status === 'Active' ? 'default' : 'secondary'} className={customer.status === 'Active' ? 'bg-green-500/20 text-green-700 dark:bg-green-500/10 dark:text-green-400 border-green-500/20' : ''}>
                      {customer.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
}
