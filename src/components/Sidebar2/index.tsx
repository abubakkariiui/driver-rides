import React from "react";
import { Img, Heading } from "./..";
import { MenuItem, Menu, Sidebar, sidebarClasses } from "react-pro-sidebar";

interface Props {
  className?: string;
}

export default function Sidebar2({ ...props }: Props) {
  const [collapsed, setCollapsed] = React.useState(false);

  //use this function to collapse/expand the sidebar
  //function collapseSidebar() {
  //    setCollapsed(!collapsed)
  //}

  return (
    <Sidebar
      {...props}
      width="275px !important"
      collapsedWidth="80px !important"
      collapsed={collapsed}
      rootStyles={{ [`.${sidebarClasses.container}`]: { gap: 24 } }}
      className={`${props.className} flex flex-col h-screen mt-20 gap-6 top-0 !sticky overflow-auto md:hidden`}
    >
      <Heading
        as="p"
        className="ml-[15px] !font-montserrat !font-bold !text-white-A700_99 md:ml-0"
      >
        MAIN MENU
      </Heading>
      <Menu
        menuItemStyles={{
          button: {
            padding: "10px 10px 10px 15px",
            gap: "18px",
            alignSelf: "start",
            color: "#ffffff",
            fontWeight: 600,
            fontSize: "14px",
            borderTopLeftRadius: "20.5px",
            borderBottomLeftRadius: "20.5px",
            borderBottomRightRadius: "0px",
            borderTopRightRadius: "0px",
            [`&:hover, &.ps-active`]: {
              color: "#ff7e86",
              backgroundColor: "#ffffff !important",
            },
          },
        }}
        className="flex w-full flex-col self-stretch"
      >
        <MenuItem
          icon={
            <Img
              src="images/img_bx_bxs_dashboard_white_a700.svg"
              alt="dashboard icon"
              className="h-[20px] w-[20px]"
            />
          }
          suffix={
            <div className="flex flex-col self-start pt-1">
              <Img
                src="images/img_settings.svg"
                alt="settings icon"
                className="h-[30px]"
              />
            </div>
          }
        >
          Dashboard
        </MenuItem>
        <MenuItem
          icon={
            <Img
              src="images/img_mdi_account_clock_outline_red_a100.svg"
              alt="rides icon"
              className="h-[20px] w-[20px]"
            />
          }
        >
          Rides
        </MenuItem>
        <MenuItem
          icon={
            <Img
              src="images/img_healthicons_truck_driver.svg"
              alt="drivers icon"
              className="h-[20px] w-[20px]"
            />
          }
          suffix={
            <div className="flex flex-col pb-[7px]">
              <Img
                src="images/img_contrast.svg"
                alt="contrast icon"
                className="h-[32px]"
              />
            </div>
          }
        >
          Drivers
        </MenuItem>
        <MenuItem
          icon={
            <Img
              src="images/img_dashicons_money_alt.svg"
              alt="payments icon"
              className="h-[20px] w-[20px]"
            />
          }
        >
          My Payments
        </MenuItem>
        <MenuItem
          icon={
            <Img
              src="images/img_dashicons_money_alt.svg"
              alt="driver payments icon"
              className="h-[20px] w-[20px]"
            />
          }
        >
          Drivers Payments
        </MenuItem>
        <MenuItem
          icon={
            <Img
              src="images/img_vuesax_linear_profile_2user.svg"
              alt="moderators icon"
              className="h-[20px] w-[20px]"
            />
          }
        >
          Moderators
        </MenuItem>
        <MenuItem
          icon={
            <Img
              src="images/img_car.svg"
              alt="car icon"
              className="h-[15px] w-[20px]"
            />
          }
        >
          Car classes
        </MenuItem>
      </Menu>
    </Sidebar>
  );
}
