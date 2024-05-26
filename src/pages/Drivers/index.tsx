import React from "react";
import { Helmet } from "react-helmet";
import { Button, Img, Text, CheckBox, Heading, Input } from "../../components";
import Header1 from "../../components/Header1";
import { ReactTable } from "../../components/ReactTable";
import Sidebar1 from "../../components/Sidebar1";
import { createColumnHelper } from "@tanstack/react-table";
import { FaSearch } from "react-icons/fa";

const tableData = [
  {
    user: {
      name: "Sierra Ferguson",
      phone: "+998 (99) 436-46-15",
      image: "images/img_image_2_3.png",
    },
    totalRides: 132,
    totalFinished: 6,
    homeLocation: "пл. Беш Агач, Furkat Street, Tashkent, Oʻzbekiston",
    workLocation: "пл. Беш Агач, Furkat Street, Tashkent, Oʻzbekiston",
    car: {
      model: "Mercedes Benz",
      plate: "MCYZ 12903",
      image: "images/img_2014_mercedes_b.png",
    },
  },
  {
    user: {
      name: "Sierra Ferguson",
      phone: "+998 (99) 436-46-15",
      image: "images/img_image_2_3.png",
    },
    totalRides: 10,
    totalFinished: 3,
    homeLocation: "21 Hamidulla Oripov ko'chasi, Тошкент, Oʻzbekiston",
    workLocation: "21 Hamidulla Oripov ko'chasi, Тошкент, Oʻzbekiston",
    car: {
      model: "Mercedes Benz",
      plate: "MCYZ 12903",
      image: "images/img_2014_mercedes_b.png",
    },
  },
  {
    user: {
      name: "Sierra Ferguson",
      phone: "+998 (99) 436-46-15",
      image: "images/img_image_2_3.png",
    },
    totalRides: 100,
    totalFinished: 12,
    homeLocation: "76 Фарғона Йўли, Тошкент, Oʻzbekiston",
    workLocation: "76 Фарғона Йўли, Тошкент, Oʻzbekiston",
    car: {
      model: "Mercedes Benz",
      plate: "MCYZ 12903",
      image: "images/img_2014_mercedes_b.png",
    },
  },
  {
    user: {
      name: "Sierra Ferguson",
      phone: "+998 (99) 436-46-15",
      image: "images/img_image_2_3.png",
    },
    totalRides: 7,
    totalFinished: 1,
    homeLocation: "13 Kumarik ko'chasi, Tashkent 100167, Oʻzbekiston",
    workLocation: "13 Kumarik ko'chasi, Tashkent 100167, Oʻzbekiston",
    car: {
      model: "Mercedes Benz",
      plate: "MCYZ 12903",
      image: "images/img_2014_mercedes_b.png",
    },
  },
  {
    user: {
      name: "Sierra Ferguson",
      phone: "+998 (99) 436-46-15",
      image: "images/img_image_2_3.png",
    },
    totalRides: 13,
    totalFinished: 7,
    homeLocation: "1 Kuyi Talarik ko'chasi, Тошкент 100091, Oʻzbekiston",
    workLocation: "1 Kuyi Talarik ko'chasi, Тошкент 100091, Oʻzbekiston",
    car: {
      model: "Mercedes Benz",
      plate: "MCYZ 12903",
      image: "images/img_2014_mercedes_b.png",
    },
  },
];

type TableRowType = {
  checkboxRow?: any;
  user: {
    name: string;
    phone: string;
    image: string;
  };
  totalRides: number;
  totalFinished: number;
  homeLocation: string;
  workLocation: string;
  car: {
    model: string;
    plate: string;
    image: string;
  };
};

export default function DriversPage() {
  const columns = React.useMemo(() => {
    const columnHelper = createColumnHelper<TableRowType>();
    return [
      columnHelper.accessor("checkboxRow", {
        cell: (info) => (
          <div className="flex justify-center">
            <CheckBox
              name="Checkbox"
              label=""
              id="Checkbox4"
              checked={info?.getValue?.()}
            />
          </div>
        ),
        header: () => (
          <div className="flex justify-center py-[17px]">
            <CheckBox name="Checkbox" label="" id="Checkbox5" />
          </div>
        ),
        meta: { width: "20px" },
      }),
      columnHelper.accessor("user", {
        cell: (info) => (
          <div className="flex items-start gap-2.5">
            <Img
              src={info.getValue().image}
              alt="user image"
              className="h-[37px] w-[36px] rounded-[18px] object-cover"
            />
            <div className="flex flex-col items-start gap-0.5">
              <Text size="xl" as="p">
                {info.getValue().name}
              </Text>
              <Text as="p" className="tracking-[0.10px] !text-blue_gray-300_01">
                {info.getValue().phone}
              </Text>
            </div>
          </div>
        ),
        header: () => (
          <Heading as="h2" className="py-3.5 text-center">
            User
          </Heading>
        ),
        meta: { width: "169px" },
      }),
      columnHelper.accessor("totalRides", {
        cell: (info) => (
          <Text as="p" className="text-center">
            {info.getValue()}
          </Text>
        ),
        header: () => (
          <Heading as="h4" className="pb-3 pt-4 text-center">
            Total rides
          </Heading>
        ),
        meta: { width: "100px" },
      }),
      columnHelper.accessor("totalFinished", {
        cell: (info) => (
          <Text as="p" className="text-center">
            {info.getValue()}
          </Text>
        ),
        header: () => (
          <Heading as="h4" className="pb-3 pt-4 text-center">
            Total finished
          </Heading>
        ),
        meta: { width: "100px" },
      }),
      columnHelper.accessor("homeLocation", {
        cell: (info) => (
          <Text as="p" className="text-center">
            {info.getValue()}
          </Text>
        ),
        header: () => (
          <Heading as="h4" className="pb-3 pt-4 text-center">
            Home Location
          </Heading>
        ),
        meta: { width: "200px" },
      }),
      columnHelper.accessor("workLocation", {
        cell: (info) => (
          <Text as="p" className="text-center">
            {info.getValue()}
          </Text>
        ),
        header: () => (
          <Heading as="h4" className="pb-3 pt-4 text-center">
            Work Location
          </Heading>
        ),
        meta: { width: "200px" },
      }),
      columnHelper.accessor("car", {
        cell: (info) => (
          <div className="flex items-center gap-2.5">
            <Img
              src={info.getValue().image}
              alt="car image"
              className="h-[25px] self-end object-cover"
            />
            <div className="flex flex-col items-start">
              <Text size="xl" as="p">
                {info.getValue().model}
              </Text>
              <Text
                as="p"
                className="relative mt-[-2px] tracking-[0.10px] !text-blue_gray-300_01"
              >
                {info.getValue().plate}
              </Text>
            </div>
          </div>
        ),
        header: () => (
          <Heading
            as="h3"
            className="pb-[11px] pl-[26px] pt-[17px] sm:pl-5 text-center"
          >
            Car
          </Heading>
        ),
        meta: { width: "156px" },
      }),
      columnHelper.display({
        id: "action",
        cell: () => (
          <div className="flex justify-center gap-2">
            <button>
              <img src="images/img_edit.svg" alt="edit icon" />
            </button>
            <button>
              <img src="images/img_eye.svg" alt="view details icon" />
            </button>
          </div>
        ),
        header: () => (
          <Heading as="h4" className="text-center py-3.5">
            Action
          </Heading>
        ),
        meta: { width: "100px" },
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
                  placeholder="Search by Name"
                  className="w-full px-4 py-2    rounded-3xl border-gray-100 bg-white-A700 border-2"
                />
                <FaSearch className="absolute right-4 top-3.5 text-pink-500" />
              </div>
            </div>
            <div className="flex w-[20%] self-start md:w-full sm:flex-col">
              <select className="w-full custom-select px-4 py-2 rounded-3xl border-gray-100 bg-white-A700 border-2 focus:border-2 text-gray-600">
                <option>All Drivers</option>
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
              columns={columns}
              data={tableData}
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
