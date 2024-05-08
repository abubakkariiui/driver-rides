import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Button, Img, Text, Heading, SelectBox, Input } from "../../components";
import Header1 from "../../components/Header1";
import Sidebar1 from "../../components/Sidebar1";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function DriversPage() {
  const [searchBarValue, setSearchBarValue] = React.useState("");

  return (
    <>
      <Helmet>
        <title>Driver List - Comprehensive Overview</title>
        <meta
          name="description"
          content="Explore our comprehensive list of drivers, their total rides, and performance metrics. Find drivers by name, view their locations, and assess their vehicles for informed decisions."
        />
      </Helmet>
      <div className="flex w-full items-start justify-center bg-gray-900 py-[22px] pl-1.5 pr-[22px] md:flex-col sm:py-5 sm:pr-5">
        {/* sidebar navigation section */}
        <Sidebar1 />
        <div className="flex flex-1 flex-col items-center rounded-[30px] bg-white-A700 px-[11px] pb-[33px] pt-[11px] md:self-stretch md:p-5 sm:pb-5">
          {/* header user info section */}
          <Header1 className="items-start justify-between gap-5 md:w-full md:flex-col" />
          <div className="mt-[39px] h-px w-[95%] bg-gray-50" />

          {/* drivers filter section */}
          <div className="mt-2 flex w-[93%] justify-between gap-5 md:w-full md:flex-col">
            <div className="flex w-[55%] items-start justify-center gap-[29px] md:w-full sm:flex-col">
              <Heading size="xl" as="h1" className="mt-[7px] !text-blue_gray-800_01">
                Drivers list
              </Heading>
              <Input
                name="Search Field"
                placeholder={`Search by Name`}
                value={searchBarValue}
                onChange={(e: string) => setSearchBarValue(e)}
                suffix={
                  searchBarValue?.length > 0 ? (
                    <CloseSVG onClick={() => setSearchBarValue("")} height={15} width={15} fillColor="#ff7e86ff" />
                  ) : (
                    <Img
                      src="images/img_contrast_red_a100.svg"
                      alt="contrast"
                      className="h-[15px] w-[15px] cursor-pointer"
                    />
                  )
                }
                className="flex h-[48px] flex-grow items-center justify-center gap-[35px] rounded-[24px] border border-solid border-deep_purple-50 bg-white-A700 px-6 text-sm font-semibold text-blue_gray-300 shadow-xs sm:px-5"
              />
            </div>
            <SelectBox
              indicator={<Img src="images/img_vector.svg" alt="vector" className="h-[5px] w-[10px]" />}
              name="Driver Dropdown"
              placeholder={`All driver`}
              options={dropDownOptions}
              className="flex w-[16%] gap-px rounded-[24px] border border-solid border-deep_purple-50 bg-white-A700 py-[13px] pl-7 pr-[35px] text-sm font-semibold text-blue_gray-700 shadow-xs md:w-full sm:px-5"
            />
          </div>

          {/* drivers list section */}
          <div className="mt-[26px] w-[94%] pb-[270px] pt-[45px] md:w-full md:py-5">
            <div className="relative mt-[-315px] flex justify-between gap-5 rounded-lg border border-solid border-blue_gray-50 bg-gray-50_01 pb-[11px] pl-[17px] pr-[30px] pt-3.5 md:flex-col sm:pr-5">
              <div className="flex w-[80%] items-center justify-center md:w-full md:flex-col">
                <div className="h-[13px] w-[12px] self-start rounded-sm border border-solid border-blue_gray-100 bg-white-A700" />
                <Heading as="h2" className="ml-[87px] md:ml-0">
                  User
                </Heading>
                <div className="ml-[63px] flex flex-wrap md:ml-0">
                  <Heading as="h3" className="self-start">
                    Total rides
                  </Heading>
                  <Heading as="h4" className="ml-5 self-end">
                    Total finished
                  </Heading>
                  <Heading as="h5" className="ml-12 self-start capitalize">
                    Home location
                  </Heading>
                </div>
                <Heading as="h6" className="ml-[85px] self-start capitalize md:ml-0">
                  Work location
                </Heading>
                <Heading as="p" className="ml-[103px] capitalize md:ml-0">
                  Car
                </Heading>
              </div>
              <Heading as="p" className="self-start capitalize">
                Action
              </Heading>
            </div>
            <div className="pt-1.5">
              <div className="flex flex-col gap-1.5 pb-[15px] pl-[17px]">
                <div className="flex flex-1 items-center justify-between gap-5 md:flex-col">
                  <div className="flex w-[86%] items-start justify-center md:w-full md:flex-col">
                    <div className="flex w-[31%] items-start justify-between gap-5 md:w-full">
                      <div className="flex w-[79%] items-start justify-center gap-[13px]">
                        <div className="mt-2.5 h-[13px] w-[12px] rounded-sm border border-solid border-blue_gray-100 bg-white-A700" />
                        <div className="flex flex-1 items-center justify-center gap-2.5">
                          <Img
                            src="images/img_image_2_35x36.png"
                            alt="driver circle image"
                            className="h-[35px] w-[36px] rounded-[50%]"
                          />
                          <div className="flex flex-col items-start gap-0.5">
                            <Text size="xl" as="p">
                              Sierra Ferguson
                            </Text>
                            <Text as="p" className="tracking-[0.10px] !text-blue_gray-300_01">
                              +998 (99) 436-46-15
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Text as="p" className="mt-2 h-[15px] w-[15px]">
                        132
                      </Text>
                    </div>
                    <Text as="p" className="ml-[83px] md:ml-0">
                      6
                    </Text>
                    <div className="ml-14 flex flex-1 items-end justify-center md:ml-0 md:self-stretch sm:flex-col">
                      <Text as="p" className="mt-[7px] w-[30%] leading-[15px] sm:w-full">
                        пл. Беш Агач, Furkat Street, Tashkent, Oʻzbekiston
                      </Text>
                      <Text as="p" className="ml-[9px] w-[41%] leading-[15px] sm:ml-0 sm:w-full">
                        пл. Беш Агач, Furkat Street, Tashkent, Oʻzbekiston
                      </Text>
                      <div className="ml-4 flex items-center gap-2.5 sm:ml-0">
                        <Img
                          src="images/img_2014_mercedes_b.png"
                          alt="car image"
                          className="h-[25px] self-end object-cover"
                        />
                        <div className="flex flex-col items-start">
                          <Text size="xl" as="p">
                            Mercedes Benz
                          </Text>
                          <Text as="p" className="relative mt-[-2px] tracking-[0.10px] !text-blue_gray-300_01">
                            MCYZ 12903
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-[9px] self-end">
                    <Img src="images/img_edit.svg" alt="edit image" className="mt-1 h-[16px] w-[16px]" />
                    <Img src="images/img_eye.svg" alt="view image" className="h-[31px]" />
                  </div>
                </div>
                <div className="h-px w-full bg-blue_gray-50" />
                <div className="flex flex-1 items-center justify-between gap-5 md:flex-col">
                  <div className="flex w-[86%] items-start justify-center md:w-full md:flex-col">
                    <div className="flex w-[31%] items-start justify-between gap-5 md:w-full">
                      <div className="flex w-[79%] items-center justify-center gap-[13px]">
                        <div className="mb-[5px] h-[13px] w-[12px] self-end rounded-sm border border-solid border-blue_gray-100 bg-white-A700" />
                        <div className="flex flex-1 items-center justify-center gap-2.5">
                          <Img
                            src="images/img_image_2_7.png"
                            alt="second circle image"
                            className="h-[35px] w-[36px] rounded-[50%]"
                          />
                          <div className="flex flex-col items-start gap-0.5">
                            <Text size="xl" as="p">
                              Sierra Ferguson
                            </Text>
                            <Text as="p" className="tracking-[0.10px] !text-blue_gray-300_01">
                              +998 (99) 436-46-15
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Text as="p" className="mt-2">
                        10
                      </Text>
                    </div>
                    <Text as="p" className="ml-[85px] mt-2.5 md:ml-0">
                      3
                    </Text>
                    <div className="ml-14 flex flex-1 items-end justify-center md:ml-0 md:self-stretch sm:flex-col">
                      <Text as="p" className="mt-[5px] w-[30%] leading-[15px] sm:w-full">
                        21 Hamidulla Oripov ko&#39;chasi, Тошкент, Oʻzbekiston
                      </Text>
                      <Text as="p" className="ml-[9px] w-[41%] leading-[15px] sm:ml-0 sm:w-full">
                        21 Hamidulla Oripov ko&#39;chasi, Тошкент, Oʻzbekiston
                      </Text>
                      <div className="ml-4 flex items-center gap-2.5 sm:ml-0">
                        <Img
                          src="images/img_2014_mercedes_b.png"
                          alt="second car image"
                          className="h-[25px] self-end object-cover"
                        />
                        <div className="flex flex-col items-start">
                          <Text size="xl" as="p">
                            Mercedes Benz
                          </Text>
                          <Text as="p" className="relative mt-[-2px] tracking-[0.10px] !text-blue_gray-300_01">
                            MCYZ 12903
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-[9px] self-end">
                    <Img src="images/img_edit.svg" alt="second edit image" className="h-[16px] w-[16px]" />
                    <Img src="images/img_eye.svg" alt="second view image" className="h-[31px]" />
                  </div>
                </div>
                <div className="h-px w-full bg-blue_gray-50" />
                <div className="flex flex-1 items-start justify-between gap-5 md:flex-col">
                  <div className="flex w-[86%] items-center justify-between gap-5 md:w-full md:flex-col">
                    <div className="flex w-[26%] items-start justify-center md:w-full">
                      <div className="mb-[7px] h-[13px] w-[12px] flex-1 rounded-sm border border-solid border-blue_gray-100 bg-white-A700" />
                      <div className="ml-[13px] flex w-[84%] items-center justify-center gap-2.5">
                        <Img
                          src="images/img_image_2_8.png"
                          alt="imagetwo"
                          className="h-[35px] w-[36px] rounded-[50%]"
                        />
                        <div className="flex flex-col items-start gap-0.5">
                          <Text size="xl" as="p">
                            Sierra Ferguson
                          </Text>
                          <Text as="p" className="tracking-[0.10px] !text-blue_gray-300_01">
                            +998 (99) 436-46-15
                          </Text>
                        </div>
                      </div>
                      <Text as="p" className="ml-[33px] mt-2 h-[15px] w-[16px]">
                        100
                      </Text>
                    </div>
                    <div className="flex w-[65%] items-start justify-center md:w-full sm:flex-col">
                      <Text as="p">12</Text>
                      <Text as="p" className="ml-[54px] w-[30%] leading-[15px] sm:ml-0 sm:w-full">
                        76 Фарғона Йўли, Тошкент, Oʻzbekiston
                      </Text>
                      <Text as="p" className="ml-[9px] sm:ml-0">
                        76 Фарғона Йўли, Тошкент, Oʻzbekiston
                      </Text>
                      <div className="ml-[21px] flex items-center gap-2.5 sm:ml-0">
                        <Img
                          src="images/img_2014_mercedes_b.png"
                          alt="2014mercedesb"
                          className="h-[25px] self-end object-cover"
                        />
                        <div className="flex flex-col items-start">
                          <Text size="xl" as="p">
                            Mercedes Benz
                          </Text>
                          <Text as="p" className="relative mt-[-2px] tracking-[0.10px] !text-blue_gray-300_01">
                            MCYZ 12903
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-[9px]">
                    <Img src="images/img_edit.svg" alt="edit" className="h-[16px] w-[16px]" />
                    <Img src="images/img_eye.svg" alt="eye" className="h-[31px]" />
                  </div>
                </div>
                <div className="h-px w-full bg-blue_gray-50" />
                <div className="flex flex-1 items-start md:flex-col">
                  <div className="flex w-[28%] items-start justify-between gap-5 md:w-full">
                    <div className="flex w-[80%] items-center justify-center gap-[13px]">
                      <div className="mb-1.5 h-[13px] w-[12px] self-end rounded-sm border border-solid border-blue_gray-100 bg-white-A700" />
                      <div className="flex flex-1 items-center justify-center gap-2.5">
                        <Img
                          src="images/img_image_2_9.png"
                          alt="imagetwo"
                          className="h-[35px] w-[36px] rounded-[50%]"
                        />
                        <div className="flex flex-col items-start gap-0.5">
                          <Text size="xl" as="p">
                            Sierra Ferguson
                          </Text>
                          <Text as="p" className="tracking-[0.10px] !text-blue_gray-300_01">
                            +998 (99) 436-46-15
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Text as="p" className="mt-2">
                      7
                    </Text>
                  </div>
                  <Text as="p" className="ml-[88px] mt-[9px] md:ml-0">
                    1
                  </Text>
                  <div className="ml-[58px] flex flex-1 items-start md:ml-0 md:self-stretch sm:flex-col">
                    <Text as="p" className="w-[31%] leading-[15px] sm:w-full">
                      13 Kumarik ko&#39;chasi, Tashkent 100167, Oʻzbekiston
                    </Text>
                    <Text as="p" className="ml-[9px] w-[42%] leading-[134.5%] sm:ml-0 sm:w-full">
                      13 Kumarik ko&#39;chasi, Tashkent 100167, Oʻzbekiston
                    </Text>
                    <Img
                      src="images/img_2014_mercedes_b.png"
                      alt="2014mercedesb"
                      className="ml-4 h-[25px] object-cover sm:ml-0 sm:w-full"
                    />
                    <div className="ml-2.5 flex flex-col items-start sm:ml-0">
                      <Text size="xl" as="p">
                        Mercedes Benz
                      </Text>
                      <Text as="p" className="relative mt-[-2px] tracking-[0.10px] !text-blue_gray-300_01">
                        MCYZ 12903
                      </Text>
                    </div>
                  </div>
                  <div className="ml-[76px] flex items-start gap-[9px] md:ml-0">
                    <Img src="images/img_edit.svg" alt="edit" className="h-[16px] w-[16px]" />
                    <Img src="images/img_eye.svg" alt="eye" className="h-[31px]" />
                  </div>
                </div>
                <div className="h-px w-full bg-blue_gray-50" />
                <div className="flex flex-1 items-center md:flex-col">
                  <div className="flex w-[29%] items-start md:w-full">
                    <div className="h-[13px] w-[12px] flex-1 rounded-sm border border-solid border-blue_gray-100 bg-white-A700" />
                    <div className="ml-[13px] flex w-[87%] items-center gap-2.5">
                      <Img src="images/img_image_2_8.png" alt="imagetwo" className="h-[35px] w-[36px] rounded-[50%]" />
                      <div className="flex flex-col items-start gap-0.5">
                        <Text size="xl" as="p">
                          Sierra Ferguson
                        </Text>
                        <Text as="p" className="tracking-[0.10px] !text-blue_gray-300_01">
                          +998 (99) 436-46-15
                        </Text>
                      </div>
                    </div>
                    <Text as="p" className="ml-[37px] mt-2">
                      13
                    </Text>
                  </div>
                  <Text as="p" className="ml-[86px] mt-[13px] self-start md:ml-0">
                    7
                  </Text>
                  <div className="ml-14 flex flex-1 items-end md:ml-0 md:self-stretch sm:flex-col">
                    <Text as="p" className="w-[31%] leading-[15px] sm:w-full">
                      1 Kuyi Talarik ko&#39;chasi, Тошкент 100091, Oʻzbekiston
                    </Text>
                    <Text
                      size="xl"
                      as="p"
                      className="mb-[9px] ml-[9px] w-[42%] !font-normal leading-[140.5%] !text-blue_gray-900_01 sm:ml-0 sm:w-full"
                    >
                      1 Kuyi Talarik ko&#39;chasi, Тошкент 100091, Oʻzbekiston
                    </Text>
                    <Img
                      src="images/img_2014_mercedes_b.png"
                      alt="2014mercedesb"
                      className="ml-4 h-[25px] object-cover sm:ml-0 sm:w-full"
                    />
                    <div className="ml-2.5 flex flex-col items-start sm:ml-0">
                      <Text size="xl" as="p">
                        Mercedes Benz
                      </Text>
                      <Text as="p" className="relative mt-[-2px] tracking-[0.10px] !text-blue_gray-300_01">
                        MCYZ 12903
                      </Text>
                    </div>
                  </div>
                  <div className="ml-[76px] flex items-start gap-[9px] self-end md:ml-0">
                    <Img src="images/img_edit.svg" alt="edit" className="h-[16px] w-[16px]" />
                    <Img src="images/img_eye.svg" alt="eye" className="h-[31px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* pagination section */}
          <div className="mt-[259px] flex w-[94%] items-center justify-between gap-5 md:w-full">
            <Text size="2xl" as="p" className="!text-blue_gray-900_03">
              Total drivers: 98
            </Text>
            <div className="flex items-center">
              <Text size="xl" as="p" className="!text-blue_gray-900_03">
                1-2 of items
              </Text>
              <Button className="ml-4 flex h-[26px] w-[26px] items-center justify-center rounded-[3px] border border-solid border-blue_gray-50 px-[9px]">
                <Img src="images/img_group_233.svg" />
              </Button>
              <Button className="ml-[5px] flex h-[26px] min-w-[26px] flex-row items-center justify-center rounded-[3px] bg-red-A100 px-[11px] text-center text-xs font-medium text-white-A700">
                1
              </Button>
              <Button className="ml-1.5 flex h-[26px] min-w-[26px] flex-row items-center justify-center rounded-[3px] border border-solid border-blue_gray-50 px-2 text-center text-xs font-medium text-blue_gray-700">
                2
              </Button>
              <Button className="ml-1.5 flex h-[26px] w-[26px] items-center justify-center rounded-[3px] border border-solid border-blue_gray-50 px-[9px]">
                <Img src="images/img_group_231.svg" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
