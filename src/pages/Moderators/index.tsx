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
            </div>
            <div className="flex">
              <button className="bg-pink-500 text-white px-4 py-2 rounded-full">
                Add New Moderator
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DriverPaymentPage;
