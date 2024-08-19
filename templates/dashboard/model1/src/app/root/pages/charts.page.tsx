import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/molecules/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/molecules/table";
import { PageComponent } from "rasengan";

const Chart: PageComponent = () => {
  return (
    <section className="">
      <Card>
        <CardHeader>
          <CardTitle>Tables</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableCaption>User table</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Id</TableHead>
                <TableHead>User</TableHead>
                <TableHead>Cashier</TableHead>
                <TableHead className="text-right">Payed</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell>John Doe</TableCell>
                <TableCell>Jane Doe</TableCell>
                <TableCell className="text-right">$100</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell>John Doe</TableCell>
                <TableCell>Jane Doe</TableCell>
                <TableCell className="text-right">$100</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell>John Doe</TableCell>
                <TableCell>Jane Doe</TableCell>
                <TableCell className="text-right">$100</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </section>
  );
};

Chart.path = "/charts";
Chart.metadata = {
  title: "Chart | Rasengan.js",
  description: "Chart page",
};

export default Chart;
