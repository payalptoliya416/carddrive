"use client";

import { Menu, MenuItem } from "@headlessui/react";
import { FaCalendarAlt } from "react-icons/fa";
import { DateRange } from "react-date-range";
import { format, addDays, formatRelative } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

export default function DateSelection() {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key:'selection'
    },
  ]);
  return (
    <>
      <Menu as="div" className="w-full h-full flex xl:flex-row">
        <div className="relative flex-1">
          <Menu.Button className="dropdown-btn w-full h-full flex flex-col justify-center items-center">
            <div className="flex flex-col xl:flex-row items-center xl:gap-x-2 gap-y-2 xl:gap-y-0">
              <FaCalendarAlt className="text-accent" />
              <div className="text-[15px] uppercase font-bold">Select Date</div>
            </div>
              <div className="uppercase font-medium text-[13px] text-secondary text-center xl:ml-6 xl:text-left flex gap-3">
                <div className="">{format(date[0].startDate , 'dd/MM/yyy')}</div>
                <FaArrowRightLong className="text-accent text-[12px]"/>
                <div className="text-[13px] font-medium text-secondary">
                  {date[0].endDate ? <div>{format(date[0].endDate, 'dd/MM/yyy')}</div> : <div>{format(date[0].startDate, 'dd/MM/yyy')}</div>}
                </div>
              </div>
          </Menu.Button>
          <Menu.Items className="dropdown-menu shadow-lg absolute -top-56 xl:top-[90px] left-1/2 xl:left-0 z-10 transform -translate-x-1/2 xl:-translate-x-0 text-sm text-center xl:text-left w-full bg-white max-w-[332px] py-6 rounded-[10px] overflow-hidden">
            <DateRange
            onChange={(item)=> setDate([item.selection])}
              editableDateInputs={true}
              moveRangeOnFirstSelection={false}
              ranges={date}
              rangeColors={["#ed1d24"]}
              minDate={addDays(new Date(), 0)}
            />
          </Menu.Items>
        </div>
      </Menu>
    </>
  );
}
