import React from "react";
import { Helmet } from "react-helmet";
import { Button, Img, Text, CheckBox, Heading } from "../../components";
import Header1 from "../../components/Header1";
import { ReactTable } from "../../components/ReactTable";
import Sidebar1 from "../../components/Sidebar1";
import { createColumnHelper } from "@tanstack/react-table";
import { FaSearch } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import "../CarClasses/CarClasses.css";

const table1Data = [
  {
    orderNo: "OR128987953",
    customer: "Sierra Ferguson",
    driver: "Sierra Ferguson",
    date: "April 24, 2024",
    totalAmount: "100 USD",
    commission: "20 USD",
    refundStatus: "Nill",
    paymentStatus: "Payed",
    action: <FaEye className="text-pink-500" />,
  },
  {
    orderNo: "OR128987953",
    customer: "Sierra Ferguson",
    driver: "Sierra Ferguson",
    date: "April 24, 2024",
    totalAmount: "100 USD",
    commission: "20 USD",
    refundStatus: "Nill",
    paymentStatus: "Payed",
    action: <FaEye className="text-pink-500" />,
  },
];

type Table1RowType = {
  checkboxRow?: any;
  orderNo: string;
  customer: string;
  driver: string;
  date: string;
  totalAmount: string;
  commission: string;
  refundStatus: string;
  paymentStatus: string;
  action: any;
};
const DriverPaymentPage = () => {
  const table1Columns = React.useMemo(() => {
    const table1ColumnHelper = createColumnHelper<Table1RowType>();
    return [
      table1ColumnHelper.accessor("checkboxRow", {
        cell: (info) => (
          <div className="flex">
            <CheckBox
              name="Checkbox"
              label=""
              id="Checkbox4"
              checked={info?.getValue?.()}
            />
          </div>
        ),
        header: (info) => (
          <div className="flex py-[17px]">
            <CheckBox name="Checkbox" label="" id="Checkbox5" />
          </div>
        ),
        meta: { width: "20px" },
      }),
      table1ColumnHelper.accessor("orderNo", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Heading as="h4" className="pb-3 flex pt-4">
            Order No
          </Heading>
        ),
        meta: { width: "133px" },
      }),
      table1ColumnHelper.accessor("customer", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Heading as="h4" className="pb-3 flex pt-4">
            Customer
          </Heading>
        ),
        meta: { width: "133px" },
      }),
      table1ColumnHelper.accessor("driver", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Heading as="h4" className="pb-3 flex pt-4">
            Driver
          </Heading>
        ),
        meta: { width: "133px" },
      }),
      table1ColumnHelper.accessor("date", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Heading as="h4" className="pb-3 flex pt-4">
            Date
          </Heading>
        ),
        meta: { width: "133px" },
      }),
      table1ColumnHelper.accessor("totalAmount", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Heading as="h4" className="pb-3 flex pt-4">
            Total Amount
          </Heading>
        ),
        meta: { width: "133px" },
      }),
      table1ColumnHelper.accessor("commission", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Heading as="h4" className="pb-3 flex pt-4">
            Commission
          </Heading>
        ),
        meta: { width: "133px" },
      }),
      table1ColumnHelper.accessor("refundStatus", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Heading as="h4" className="pb-3 flex pt-4">
            Refund Status
          </Heading>
        ),
        meta: { width: "133px" },
      }),
      table1ColumnHelper.accessor("paymentStatus", {
        cell: (info) => (
          <Text
            size="s"
            as="p"
            className="flex items-center justify-center py-2 rounded-[20px] bg-teal-400_19 !text-teal-400"
          >
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Heading as="p" className="py-3.5  justify-center flex">
            Payment Status
          </Heading>
        ),
        meta: { width: "115px" },
      }),
      table1ColumnHelper.accessor("action", {
        cell: (info) => (
          <div className="flex justify-center">
            <FaEye className="text-pink-500 " />
          </div>
        ),
        header: (info) => (
          <Heading as="p" className="py-3.5 flex justify-center">
            Action
          </Heading>
        ),
        meta: { width: "115px" },
      }),
    ];
  }, []);

  return (
    <>
      <Helmet>
        <title>Driver History - Detailed View</title>
        <meta
          name="description"
          content="Review your driver history including in-progress, completed, and canceled rides. Get details on car types, booking times, and ride types for efficient tracking."
        />
      </Helmet>
      <div className="flex w-full items-start justify-center bg-gray-900 py-[22px] pl-1.5 pr-[22px] md:flex-col sm:py-5 sm:pr-5">
        {/* sidebar navigation section */}
        <Sidebar1 />
        <div className="flex flex-1 flex-col items-center rounded-[30px] bg-white-A700 px-[11px] pb-[33px] pt-[11px] md:self-stretch md:p-5 sm:pb-5">
          {/* header announcement section */}
          <Header1 className="flex-col items-center gap-[39px] md:w-full" />

          {/* ride status filters section */}
          <div className="mt-1.5 flex w-[94%] justify-between overflow-auto md:w-full">
            <div className="flex w-full items-center justify-start gap-5 md:flex-col">
              <div className="flex w-[20%]  self-start md:w-full sm:flex-col">
                <Heading
                  size="md"
                  as="h1"
                  className="relative z-[1] !text-black-900"
                >
                  Driver Payments
                </Heading>
              </div>
              <div className="flex w-[38%] relative  self-start md:w-full sm:flex-col">
                <input
                  type=""
                  placeholder="Search Name"
                  className="w-full px-4 py-2    rounded-3xl border-gray-100 bg-white-A700 border-2"
                />
                <FaSearch className="absolute right-4 top-3.5 text-pink-500" />
              </div>
            </div>
            <div className="flex w-[20%] self-start md:w-full sm:flex-col">
              <select className="w-full custom-select px-4 py-2 rounded-3xl border-gray-100 bg-white-A700 border-2 focus:border-2 text-gray-600">
                <option>All Payments</option>
                {/* Add other options here */}
              </select>
            </div>
          </div>

          <div className="mt-6 flex w-[96%] flex-col gap-[259px] md:w-full md:gap-[194px] sm:gap-[129px]">
            {/* rides table section */}
            <ReactTable
              size="xs"
              bodyProps={{ className: "" }}
              headerProps={{
                className:
                  "border-blue_gray-50 border border-solid bg-gray-50_01 md:flex-col rounded-lg",
              }}
              rowDataProps={{ className: "md:flex-col" }}
              columns={table1Columns}
              data={table1Data}
            />

            {/* pagination controls section */}
            <div className="flex flex-col justify-center gap-7">
              <div className="h-px w-full flex  self-stretch bg-blue_gray-50" />

              <div className="flex justify-between">
                <Heading as="p" className="py-3.5 flex ">
                  Total Payments : 98
                </Heading>

                <div className="flex items-center ">
                  <Text size="xl" as="p" className=" !text-blue_gray-900_03">
                    1-2 of items
                  </Text>
                  <Button className="ml-4 flex h-[27px] w-[26px] items-center justify-center rounded-[3px] border border-solid border-blue_gray-50 p-[9px]">
                    <Img src="images/img_group_233.svg" />
                  </Button>
                  <Button className="ml-[5px] flex h-[27px] min-w-[26px] flex-row items-center justify-center rounded-[3px] bg-red-A100 px-[11px] text-center text-xs font-medium text-white-A700">
                    1
                  </Button>
                  <Button className="ml-1.5 flex h-[27px] min-w-[26px] flex-row items-center justify-center rounded-[3px] border border-solid border-blue_gray-50 px-2 text-center text-xs font-medium text-blue_gray-700">
                    2
                  </Button>
                  <Button className="ml-1.5 flex h-[27px] w-[26px] items-center justify-center rounded-[3px] border border-solid border-blue_gray-50 p-[9px]">
                    <Img src="images/img_group_231.svg" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DriverPaymentPage;
