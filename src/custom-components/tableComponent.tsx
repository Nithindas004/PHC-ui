import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import FormComponet from "./formComponet";
import { useState } from "react";

interface props {
  surveyData: any;
}

export function TableContent({ surveyData }: props) {
  const [selectedMember, setSelectedMember] = useState<any>(null);
  const [showDetails, setShowDetails] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handleRowClick = (member: any) => {
    setSelectedMember(member);
    setShowDetails(true);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = surveyData?.data?.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(surveyData?.data?.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      {showDetails ? (
        <FormComponet
          setShowDetails={setShowDetails}
          selectedMember={selectedMember}
        />
      ) : (
        <div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Onwner</TableHead>
                <TableHead>House Number</TableHead>
                <TableHead>House Name</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>House Type</TableHead>
                <TableHead>Religion</TableHead>
                <TableHead>Caste</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentItems?.flatMap((item, index) => (
                <TableRow
                  key={`${item.workerId}-${index}`}
                  onClick={() => handleRowClick(item)}
                  style={{ cursor: "pointer" }}
                >
                  <TableCell>{item.owner}</TableCell>
                  <TableCell>{item.houseNumber}</TableCell>
                  <TableCell>{item.houseName}</TableCell>
                  <TableCell>{item.mobile}</TableCell>
                  <TableCell>{item.houseType}</TableCell>
                  <TableCell>{item.religion}</TableCell>
                  <TableCell>{item.caste}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={() => handlePageChange(currentPage - 1)}
                />
              </PaginationItem>
              {Array.from({ length: totalPages }, (_, index) => (
                <PaginationItem key={index}>
                  <PaginationLink
                    href="#"
                    onClick={() => handlePageChange(index + 1)}
                    isActive={index + 1 === currentPage}
                  >
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </>
  );
}
