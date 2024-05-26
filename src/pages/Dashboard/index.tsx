import React from "react";
import { Helmet } from "react-helmet";
import { Img, Text, Heading, CheckBox } from "../../components";
import Header from "../../components/Header";
import { ReactTable } from "../../components/ReactTable";
import Sidebar1 from "../../components/Sidebar1";
import { createColumnHelper } from "@tanstack/react-table";

const tableData = [
  {
    userColumn: "Sierra Ferguson",
    bookingTimeColumn: "04.12.2021 20:30",
    rowpickuplocati: "пл. Беш Агач, Furkat Street, Tashkent, Oʻzbekiston",
    amountHeader: "50 300 000 SUM",
  },
  {
    userColumn: "Sierra Ferguson",
    bookingTimeColumn: "04.12.2021 20:24\t",
    rowpickuplocati: "21 Hamidulla Oripov ko\\'chasi, Тошкент, Oʻzbekiston",
    amountHeader: "300 000 SUM",
  },
];

type TableRowType = {
  rowtwo?: any;
  userColumn: string;
  bookingTimeColumn: string;
  rowpickuplocati: string;
  amountHeader: string;
};

type Payment = {
  orderNo: string;
  customer: string;
  driver: string;
  date: string;
  amount: string;
  commission: string;
  refundStatus: string;
  paymentStatus: string;
};

export default function DashboardPage() {
  const data: Payment[] = [
    {
      orderNo: "OR1289879S3",
      customer: "Sierra Ferguson",
      driver: "Sierra Ferguson",
      date: "April 24, 2024",
      amount: "100 USD",
      commission: "20 USD",
      refundStatus: "Nill",
      paymentStatus: "Payed",
    },
    // Add more rows as needed
  ];

  const columnHelper = createColumnHelper<Payment>();

  const columns = React.useMemo(
    () => [
      columnHelper.accessor("orderNo", {
        cell: (info) => (
          <Text as="p" className="text-center">
            {info.getValue()}
          </Text>
        ),
        header: () => <Heading>Order No</Heading>,
        meta: { width: "120px" },
      }),
      columnHelper.accessor("customer", {
        cell: (info) => (
          <Text as="p" className="text-center">
            {info.getValue()}
          </Text>
        ),
        header: () => <Heading>Customer</Heading>,
        meta: { width: "150px" },
      }),
      columnHelper.accessor("driver", {
        cell: (info) => (
          <Text as="p" className="text-center">
            {info.getValue()}
          </Text>
        ),
        header: () => <Heading>Driver</Heading>,
        meta: { width: "150px" },
      }),
      columnHelper.accessor("date", {
        cell: (info) => (
          <Text as="p" className="text-center">
            {info.getValue()}
          </Text>
        ),
        header: () => <Heading>Date</Heading>,
        meta: { width: "130px" },
      }),
      columnHelper.accessor("amount", {
        cell: (info) => (
          <Text as="p" className="text-center">
            {info.getValue()}
          </Text>
        ),
        header: () => <Heading>Amount</Heading>,
        meta: { width: "100px" },
      }),
      columnHelper.accessor("commission", {
        cell: (info) => (
          <Text as="p" className="text-center">
            {info.getValue()}
          </Text>
        ),
        header: () => <Heading>Commission</Heading>,
        meta: { width: "110px" },
      }),
      columnHelper.accessor("refundStatus", {
        cell: (info) => (
          <Text as="p" className="text-center">
            {info.getValue()}
          </Text>
        ),
        header: () => <Heading>Refund Status</Heading>,
        meta: { width: "150px" },
      }),
      columnHelper.accessor("paymentStatus", {
        cell: (info) => (
          <div className="text-center">
            <Text
              as="p"
              className={info.getValue() === "Payed" ? "text-green-500" : ""}
            >
              {info.getValue()}
            </Text>
          </div>
        ),
        header: () => <Heading>Payment Status</Heading>,
        meta: { width: "150px" },
      }),
      columnHelper.display({
        id: "action",
        cell: () => (
          <div className="text-center">
            <button>
              <img src="images/img_eye.svg" alt="view details icon" />
            </button>
          </div>
        ),
        header: () => (
          <Heading as="p" className="py-3.5 pl-[19px] md:p-5">
            Action
          </Heading>
        ),
        meta: { width: "100px" },
      }),
    ],
    []
  );

  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper<TableRowType>();
    return [
      tableColumnHelper.accessor("rowtwo", {
        cell: (info) => (
          <div className="flex">
            <CheckBox
              name="User Checkbox"
              label=""
              id="UserCheckbox"
              checked={info?.getValue?.()}
              className="rounded-sm"
            />
          </div>
        ),
        header: (info) => (
          <div className="flex px-2.5 py-[17px] md:p-5">
            <CheckBox
              name="Selection Checkbox"
              label=""
              id="SelectionCheckbox"
              className="rounded-sm "
            />
          </div>
        ),
        meta: { width: "50px" },
      }),
      tableColumnHelper.accessor("userColumn", {
        cell: (info) => (
          <div className="flex items-start gap-2.5">
            <Img
              src="images/img_image_2.png"
              alt="user image"
              className="h-[37px] w-[36px] rounded-[18px] object-cover"
            />
            <div className="flex flex-col items-start gap-0.5">
              <Text size="xl" as="p">
                {info?.getValue?.()}
              </Text>
              <Text as="p" className="tracking-[0.10px] !text-blue_gray-300_01">
                +998 (99) 436-46-15
              </Text>
            </div>
          </div>
        ),
        header: (info) => (
          <Heading as="h3" className="py-3.5 md:p-5">
            User
          </Heading>
        ),
        meta: { width: "179px" },
      }),
      tableColumnHelper.accessor("bookingTimeColumn", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Heading as="h4" className="pb-3 pt-4 md:p-5">
            Booking Time
          </Heading>
        ),
        meta: { width: "101px" },
      }),
      tableColumnHelper.accessor("rowpickuplocati", {
        cell: (info) => (
          <div className="flex items-center self-start">
            <Text as="p" className="w-[49%] self-start leading-[15px]">
              {info?.getValue?.()}
            </Text>
            <Text as="p" className="relative ml-[-9px] w-[51%] leading-[15px]">
              пл. Беш Агач, Furkat Street, Tashkent, Oʻzbekiston
            </Text>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-wrap gap-[27px] pb-3 pt-[15px] md:p-5">
            <Heading as="h5" className="self-end capitalize">
              Pickup location
            </Heading>
            <Heading as="h6" className="self-start capitalize">
              Desination location
            </Heading>
          </div>
        ),
        meta: { width: "247px" },
      }),
      tableColumnHelper.accessor("amountHeader", {
        cell: (info) => (
          <div className="relative mb-3.5 ml-[-18px] flex flex-1 justify-center self-end rounded-[9px] bg-teal-400_19 md:ml-0 md:self-stretch">
            <Text size="s" as="p" className="!text-teal-400">
              {info?.getValue?.()}
            </Text>
          </div>
        ),
        header: (info) => (
          <Heading as="p" className="py-3.5 pl-[19px] md:p-5">
            Amount
          </Heading>
        ),
        meta: { width: "110px" },
      }),
    ];
  }, []);

  return (
    <>
      <Helmet>
        <title>User Dashboard - Overview & Activity</title>
        <meta
          name="description"
          content="Access your dashboard to view in-progress and completed rides, manage payments, and monitor recent activities. Stay updated with your ride statistics and financial summaries."
        />
      </Helmet>

      {/* dashboard layout section */}
      <div className="flex w-full items-start justify-center bg-gray-900 pb-[85px] pl-2 pr-[11px] pt-[11px] md:flex-col md:pb-5">
        {/* sidebar navigation section */}
        <Sidebar1 />
        <div className="flex flex-1 flex-col items-start justify-center rounded-[30px] bg-white-A700 px-[19px] pb-[1179px] pt-[25px] md:self-stretch md:p-5 md:pb-5 sm:py-5">
          {/* header section */}
          <Header />

          {/* status overview section */}
          <div className="ml-2 mt-[21px] flex w-[95%] gap-[13px] md:ml-0 md:w-full md:flex-col">
            <div className="flex items-center gap-[9px] rounded-lg bg-blue-A700_33 py-3.5 pl-2.5 pr-3.5">
              <Img
                src="images/img_folder.svg"
                alt="folder icon"
                className="h-[32px] w-[32px]"
              />
              <div className="flex flex-col items-start self-start">
                <Text size="2xl" as="p" className="!text-blue-A700">
                  In-Progress Rides
                </Text>
                <Text as="p" className="!text-blue_gray-800_01">
                  78
                </Text>
              </div>
            </div>
            <div className="flex rounded-lg bg-lime-A700_33 py-3.5 pl-3 pr-3.5">
              <div className="flex items-center gap-2">
                <Img
                  src="images/img_folder_lime_a700.svg"
                  alt="completed icon"
                  className="h-[32px] w-[32px]"
                />
                <div className="flex flex-col items-start">
                  <Text size="2xl" as="p" className="!text-lime-A700">
                    Completed Rides
                  </Text>
                  <Text
                    as="p"
                    className="h-[10px] w-[9px] !text-blue_gray-800_01"
                  >
                    10
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex rounded-lg bg-red-500_33 pb-3.5 pl-3 pr-2.5 pt-3">
              <div className="flex gap-2">
                <Img
                  src="images/img_folder_red_500.svg"
                  alt="folder"
                  className="h-[32px] w-[32px]"
                />
                <div className="flex flex-col items-start">
                  <Text size="2xl" as="p" className="!text-red-500">
                    Cancel Ridres
                  </Text>
                  <Text
                    as="p"
                    className="h-[11px] w-[12px] !text-blue_gray-800_01"
                  >
                    20
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex rounded-lg bg-orange-400_33 p-3.5">
              <div className="flex items-center gap-2">
                <Img
                  src="images/img_folder_orange_400.svg"
                  alt="folder"
                  className="h-[32px] w-[32px]"
                />
                <div className="flex flex-col items-start">
                  <Text size="2xl" as="p" className="!text-orange-400">
                    Payments Pending
                  </Text>
                  <Text as="p" className="!text-blue_gray-800_01">
                    300 USD
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex rounded-lg bg-green-500_33 py-3.5 pl-[13px] pr-3.5">
              <div className="flex items-center gap-2">
                <Img
                  src="images/img_folder_green_500.svg"
                  alt="folder"
                  className="h-[32px] w-[32px]"
                />
                <div className="flex flex-col items-start">
                  <Text size="2xl" as="p" className="!text-green-500">
                    Payments
                  </Text>
                  <Text as="p" className="!text-blue_gray-800_01">
                    1000 USD
                  </Text>
                </div>
              </div>
            </div>
          </div>

          {/* rides table section */}
          <div className="mt-[30px] flex w-[97%] items-start gap-[17px] md:w-full md:flex-col">
            <div className="flex flex-1 flex-col gap-[19px] md:self-stretch">
              <div className="flex items-center justify-between gap-5">
                <Heading
                  size="xl"
                  as="h1"
                  className="self-start !text-blue_gray-800_01"
                >
                  Rides
                </Heading>
                <div className="flex items-center">
                  <Heading
                    size="xl"
                    as="h2"
                    className="self-start !text-red-A100"
                  >
                    Action
                  </Heading>
                  <Img
                    src="images/img_eye.svg"
                    alt="view icon"
                    className="h-[31px]"
                  />
                </div>
              </div>
              <ReactTable
                size="sm"
                bodyProps={{ className: "" }}
                headerProps={{
                  className:
                    "border-blue_gray-50 border border-solid bg-gray-50_01 md:flex-col rounded-lg",
                }}
                rowDataProps={{ className: "md:flex-col" }}
                columns={tableColumns}
                data={tableData}
              />
            </div>

            {/* recent activity section */}
            <div className="flex w-[34%] flex-col items-start gap-4 md:w-full">
              <Heading size="xl" as="h5" className="!text-blue_gray-800_01">
                Recent Activity
              </Heading>
              <div className="ml-[7px] flex flex-col gap-2.5 self-stretch rounded-[12px] border border-solid border-blue_gray-50 bg-white-A700 pb-[207px] pl-2.5 pr-[11px] pt-[15px] md:ml-0 md:pb-5">
                <div className="flex items-start gap-[18px] rounded-[12px] border border-solid border-purple-A400_0f bg-white-A700 px-[15px] pt-2">
                  <Img
                    src="images/img_car_white_a700.svg"
                    alt="car icon"
                    className="mt-[9px] h-[15px]"
                  />
                  <div className="flex w-[57%] flex-col items-start">
                    <Text as="p">Driver Complete Ride</Text>
                    <Text
                      size="xs"
                      as="p"
                      className="w-full leading-3 tracking-[0.08px] !text-blue_gray-300_01"
                    >
                      1 Kuyi Talarik ko&#39;chasi, Тошкент 100091, Oʻzbekiston
                    </Text>
                  </div>
                </div>
                <div className="flex rounded-[12px] border border-solid border-purple-A400_0f bg-white-A700 px-[15px] pt-2">
                  <div className="flex w-[67%] items-start gap-[22px] md:w-full">
                    <Img
                      src="images/img_close.svg"
                      alt="close icon"
                      className="mt-2 h-[15px] w-[16px]"
                    />
                    <div className="flex flex-1 flex-col items-start">
                      <Text as="p">Payment Recieved</Text>
                      <Text
                        size="xs"
                        as="p"
                        className="w-full leading-3 tracking-[0.08px] !text-blue_gray-300_01"
                      >
                        1 Kuyi Talarik ko&#39;chasi, Тошкент 100091, Oʻzbekiston
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* payments section */}
          <Heading size="xl" as="h2" className="mt-5 !text-blue_gray-800_01">
            Payments
          </Heading>
          <ReactTable
            size="sm"
            bodyProps={{ className: "" }}
            headerProps={{
              className:
                "border-blue_gray-50 border border-solid bg-gray-50_01 md:flex-col rounded-lg",
            }}
            rowDataProps={{ className: "md:flex-col" }}
            columns={columns}
            data={data}
          />
        </div>
      </div>
    </>
  );
}
