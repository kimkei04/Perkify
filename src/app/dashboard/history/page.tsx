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
import { Input } from '@/components/ui/input';
import { consumerData } from '@/lib/data';
import PageHeader from '@/components/page-header';

export default function HistoryPage() {
  const history = consumerData.purchaseHistory;

  return (
    <>
      <PageHeader
        title="Purchase History"
        description="Add new purchases and view your history."
      />
      <Card>
        <CardHeader>
          <CardTitle>Add Purchase</CardTitle>
          <CardDescription>
            Enter the code from your receipt to add a purchase and earn points.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="flex items-center gap-2">
            <Input
              id="receipt-code"
              placeholder="Enter receipt code"
              className="max-w-xs"
            />
            <Button type="submit">Add</Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>History</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Store</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Items</TableHead>
                <TableHead className="text-right">Amount</TableHead>
                <TableHead className="text-right">Points Earned</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {history.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.storeName}</TableCell>
                  <TableCell>{item.date}</TableCell>
                  <TableCell>{item.items.join(', ')}</TableCell>
                  <TableCell className="text-right">
                    ${item.amount.toFixed(2)}
                  </TableCell>
                  <TableCell className="text-right">
                    <Badge variant="secondary">+{item.pointsEarned} pts</Badge>
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
