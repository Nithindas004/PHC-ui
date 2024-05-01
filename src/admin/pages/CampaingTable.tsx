import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Navbar from "@/custom-components/NavBar/Navbar";
import { getCampaign } from "@/api/adminApi";

type Props = {};

const CampaingTable = (props: Props) => {
  const [tableData, setTableData] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getCampaign();
        setTableData(response);
      } catch (error) {
        console.error(error);
        // Handle the error from the API
      }
    };

    fetchData();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };

  return (
    <>
      <Navbar />
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Start Date</TableHead>
              <TableHead>End Date</TableHead>
              <TableHead>Conducted By</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tableData?.data?.map((item, index) => (
              <TableRow key={`${index}`}>
                <TableCell>{item?.title}</TableCell>
                <TableCell>{item?.description}</TableCell>
                <TableCell>{formatDate(item?.startDate)}</TableCell>
                <TableCell>{formatDate(item?.endDate)}</TableCell>
                <TableCell>{item?.conductedBy}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default CampaingTable;
