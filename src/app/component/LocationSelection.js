"use client";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const locations = [
  "Main Start 123, Untilw Start",
  "Business Avenue 456, Canada",
  "Park Road 787, United Kingdom",
];

export default function LocationSelection() {
  const [selectedLocation, setSelectedLocation] = useState("Select Location");

  return (
    <Menu as="div" className="w-full h-full flex xl:flex-row">
      <div className="relative flex-1">
        <Menu.Button className="dropdown-btn w-full h-full flex flex-col justify-center items-center">
          <div className="w-full h-16 xl:h-full flex justify-center xl:justify-start xl:border-r xl:border-black/10 ">
            <div className="flex flex-col  justify-center">
              <div className="flex flex-col xl:flex-row
               items-center xl:gap-x-2 gap-y-2 xl:gap-y-0">
                <FaMapMarkerAlt className="text-accent" />
               <div className="flex-col flex">
               <div className="text-[15px] uppercase font-bold">
                  Select Location
                </div>
                <div className="uppercase font-medium text-[13px] text-secondary text-center xl:ml-6 xl:text-left">
                  {selectedLocation}
                </div>
               </div>
              </div>
            </div>
          </div>
        </Menu.Button>
        <Menu.Items className="dropdown-menu shadow-lg absolute -top-56 xl:top-[90px] left-1/2 xl:left-0 z-10 transform -translate-x-1/2 xl:-translate-x-0 text-sm text-center xl:text-left w-full bg-white max-w-[332px] py-6 rounded-[10px]">
          {locations.map((location, index) => (
            <MenuItem
              key={index}
              as="div"
              className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
              onClick={() => setSelectedLocation(location)}
            >
              {location}
            </MenuItem>
          ))}
        </Menu.Items>
      </div>
    </Menu>
  );
}
