import React from "react";
import { Helmet } from "react-helmet";
import { Button, Img, Text, CheckBox, Heading } from "../../components";
import Header1 from "../../components/Header1";
import { ReactTable } from "../../components/ReactTable";
import Sidebar1 from "../../components/Sidebar1";
import { createColumnHelper } from "@tanstack/react-table";

const table1Data = [
  {
    userText: "Sierra Ferguson",
    carTypeText: "Mercedes Benz",
    bookingTimeText: "04.12.2021 20:30",
    rideTypeRow: "City to City",
    destinationText: "пл. Беш Агач, Furkat Street, Tashkent, Oʻzbekiston",
    totalAmountText: "50 300 000 SUM",
  },
  {
    userText: "Sierra Ferguson",
    carTypeText: "Mercedes Benz",
    bookingTimeText: "04.12.2021 20:24\t",
    rideTypeRow: "City to City",
    destinationText: "21 Hamidulla Oripov ko\\'chasi, Тошкент, Oʻzbekiston",
    totalAmountText: "300 000 SUM",
  },
  {
    userText: "Sierra Ferguson",
    carTypeText: "Mercedes Benz",
    bookingTimeText: "04.12.2021 20:23\t",
    rideTypeRow: "City to City",
    destinationText: "76 Фарғона Йўли, Тошкент, Oʻzbekiston",
    totalAmountText: "5 300 000 SUM",
  },
  {
    userText: "Sierra Ferguson",
    carTypeText: "Mercedes Benz",
    bookingTimeText: "17.11.2021 12:19\t",
    rideTypeRow: "City to City",
    destinationText: "13 Kumarik ko\\'chasi, Tashkent 100167, Oʻzbekiston",
    totalAmountText: "500 300 000 SUM",
  },
  {
    userText: "Sierra Ferguson",
    carTypeText: "Mercedes Benz",
    bookingTimeText: "04.12.2021 20:30\t",
    rideTypeRow: "City to City",
    destinationText: "1 Kuyi Talarik ko\\'chasi, Тошкент 100091, Oʻzbekiston",
    totalAmountText: "50 300 000 SUM",
  },
];

type Table1RowType = {
  checkboxRow?: any;
  userText: string;
  carTypeText: string;
  bookingTimeText: string;
  rideTypeRow: string;
  destinationText: string;
  totalAmountText: string;
};

export default function RidesPage() {
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
      table1ColumnHelper.accessor("userText", {
        cell: (info) => (
          <div className="flex items-start gap-2.5">
            <Img
              src="images/img_image_2_3.png"
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
          <Heading as="h2" className="py-3.5">
            User
          </Heading>
        ),
        meta: { width: "169px" },
      }),
      table1ColumnHelper.accessor("carTypeText", {
        cell: (info) => (
          <div className="flex items-center gap-2.5">
            <Img
              src="images/img_2014_mercedes_b.png"
              alt="car image"
              className="h-[25px] self-end object-cover"
            />
            <div className="flex flex-col items-start">
              <Text size="xl" as="p">
                {info?.getValue?.()}
              </Text>
              <Text
                as="p"
                className="relative mt-[-2px] tracking-[0.10px] !text-blue_gray-300_01"
              >
                MCYZ 12903
              </Text>
            </div>
          </div>
        ),
        header: (info) => (
          <Heading as="h3" className="pb-[11px] pl-[26px] pt-[17px] sm:pl-5">
            Car Type
          </Heading>
        ),
        meta: { width: "156px" },
      }),
      table1ColumnHelper.accessor("bookingTimeText", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Heading as="h4" className="pb-3 pt-4">
            Booking Time
          </Heading>
        ),
        meta: { width: "133px" },
      }),
      table1ColumnHelper.accessor("rideTypeRow", {
        cell: (info) => (
          <div className="flex flex-1 items-start justify-between gap-5 md:self-stretch">
            <Text as="p" className="mt-1.5">
              {info?.getValue?.()}
            </Text>
            <Text as="p" className="w-[52%] leading-[15px]">
              пл. Беш Агач, Furkat Street, Tashkent, Oʻzbekiston
            </Text>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-wrap pb-3 pl-[9px] pr-[35px] pt-4 sm:pr-5">
            <Heading as="h5">Ride Type</Heading>
            <Heading as="h6" className="capitalize">
              Pickup location
            </Heading>
          </div>
        ),
        meta: { width: "297px" },
      }),
      table1ColumnHelper.accessor("destinationText", {
        cell: (info) => (
          <Text as="p" className="leading-[15px]">
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Heading as="p" className="py-3.5 pl-1.5 capitalize">
            Destination location
          </Heading>
        ),
        meta: { width: "159px" },
      }),
      table1ColumnHelper.accessor("totalAmountText", {
        cell: (info) => (
          <Text
            size="s"
            as="p"
            className="flex items-center justify-center rounded-[9px] bg-teal-400_19 !text-teal-400"
          >
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Heading as="p" className="py-3.5">
            Total Amount
          </Heading>
        ),
        meta: { width: "115px" },
      }),
    ];
  }, []);

  return (
    <>
      <Helmet>
        <title>Ride History - Detailed View</title>
        <meta
          name="description"
          content="Review your ride history including in-progress, completed, and canceled rides. Get details on car types, booking times, and ride types for efficient tracking."
        />
      </Helmet>
      <div className="flex w-full items-start justify-center bg-gray-900 py-[22px] pl-1.5 pr-[22px] md:flex-col sm:py-5 sm:pr-5">
        {/* sidebar navigation section */}
        <Sidebar1 />
        <div className="flex flex-1 flex-col items-center rounded-[30px] bg-white-A700 px-[11px] pb-[33px] pt-[11px] md:self-stretch md:p-5 sm:pb-5">
          {/* header announcement section */}
          <Header1 className="flex-col items-center gap-[39px] md:w-full" />

          {/* ride status filters section */}
          <div className="mt-1.5 flex w-[94%] justify-center overflow-auto md:w-full">
            <div className="flex w-full items-center justify-between gap-5 md:flex-col">
              <div className="flex w-[38%] justify-center self-start md:w-full sm:flex-col">
                <Heading
                  size="md"
                  as="h1"
                  className="relative z-[1] !text-black-900"
                >
                  In progress (1)
                </Heading>
                <Img
                  src="images/img_arrow_right.svg"
                  alt="right arrow icon"
                  className="relative ml-[-2px] h-[24px] w-[24px] self-start sm:ml-0 sm:w-full"
                />
                <Heading
                  size="md"
                  as="h2"
                  className="relative z-[2] ml-2 !text-black-900 sm:ml-0"
                >
                  Completed (70)
                </Heading>
                <Img
                  src="images/img_arrow_right_black_900.svg"
                  alt="right arrow black"
                  className="relative ml-[-5px] h-[24px] w-[24px] self-start sm:ml-0 sm:w-full"
                />
                <div className="relative h-[24px] w-[31%] sm:w-full">
                  <Heading
                    size="md"
                    as="h3"
                    className="absolute bottom-0 left-[0.00px] top-0 my-auto h-max !text-black-900"
                  >
                    Canceled (70)
                  </Heading>
                  <Img
                    src="images/img_arrow_right_black_900.svg"
                    alt="right arrow stack"
                    className="absolute bottom-0 right-[0.00px] top-0 my-auto h-[24px] w-[24px]"
                  />
                </div>
              </div>
              <div className="flex w-[16%] items-center justify-between gap-5 md:w-full">
                <div className="flex items-center">
                  <Heading
                    size="md"
                    as="h4"
                    className="self-start !text-red-A100"
                  >
                    Action
                  </Heading>
                  <Img
                    src="images/img_eye_red_a100.svg"
                    alt="eye icon"
                    className="h-[27px]"
                  />
                </div>
                <Img
                  src="images/img_arrow_right_black_900.svg"
                  alt="right arrow row"
                  className="h-[24px] w-[24px] self-start"
                />
              </div>
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
            <div className="flex flex-col items-end gap-7">
              <div className="h-px w-full self-stretch bg-blue_gray-50" />
              <div className="flex items-center">
                <Text
                  size="xl"
                  as="p"
                  className="self-start !text-blue_gray-900_03"
                >
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
    </>
  );
}
