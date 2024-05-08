import React from "react";
import { Img, Heading } from "./..";
import { MenuItem, Menu, Sidebar, sidebarClasses } from "react-pro-sidebar";
import { Link } from "react-router-dom";
interface Props {
  className?: string;
}

export default function Sidebar1({ ...props }: Props) {
  const [collapsed, setCollapsed] = React.useState(false);

  //use this function to collapse/expand the sidebar
  //function collapseSidebar() {
  //    setCollapsed(!collapsed)
  //}

  return (
    <Sidebar
      {...props}
      width="272px !important"
      collapsedWidth="80px !important"
      collapsed={collapsed}
      className={`${props.className} flex flex-col h-screen mt-[93px] top-0 !sticky overflow-auto md:hidden`}
    >
      <div className="self-stretch">
        <div className="flex items-start justify-between gap-5">
          <Heading as="p" className="!font-bold !text-white-A700_99">
            MAIN MENU
          </Heading>
        </div>
        <Menu
          menuItemStyles={{
            button: {
              padding: "10px",
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
          className="flex flex-col items-end"
        >
          <div className="self-stretch">
            <MenuItem
              component={<Link to="/" />}
              icon={
                <Img
                  src="images/img_bx_bxs_dashboard.svg"
                  alt="dashboard icon"
                  className="h-[20px] w-[20px]"
                />
              }
            >
              Dashboard
            </MenuItem>
          </div>
          <div className="flex flex-col self-stretch">
            <MenuItem
              component={<Link to="/rides" />}
              icon={
                <Img
                  src="images/img_mdi_account_clock_outline.svg"
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
          </div>
        </Menu>
      </div>
    </Sidebar>
  );
}
