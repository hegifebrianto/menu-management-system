"use client";

import React, { useEffect, useState } from "react";
import MenusHeader from "@/app/menusHeader";
import MenuForm from "@/components/menuForm";
import MenuDropdown from "@/components/menuDropdown";
import MenuTree from "@/components/menuTree";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../app/redux/store";
import { fetchMenus } from "../app/redux/slices/menuSlice";

export default function MenusPage() {
  const dispatch = useDispatch<AppDispatch>();
  const [selectedMenuId, setSelectedMenuId] = useState<string | null>(null);

  // Fetch menus on component mount
  useEffect(() => {
    dispatch(fetchMenus());
  }, [dispatch]);

  return (
    <div className="flex flex-col px-6 py-5 bg-gray-50 min-h-screen">
      {/* Header with Sidebar Toggle */}
      <MenusHeader />

      {/* Dropdown Section */}
      <div className="mt-6 w-full max-w-sm">
        <h2 className="text-xs font-semibold text-gray-800 uppercase mb-1">
          Select Menu
        </h2>
        <MenuDropdown
          selectedMenuId={selectedMenuId}
          onSelect={setSelectedMenuId}
        />
      </div>

      {/* Content Sections */}
      <div className="mt-6 grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Menu Structure Section */}
        <div className="bg-white shadow-md rounded-xl p-5 border border-gray-200">
          <h3 className="text-base font-bold text-gray-900 mb-4">
            Menu Hierarchy
          </h3>
          <MenuTree
            selectedMenuId={selectedMenuId}
            onSelect={setSelectedMenuId}
          />
        </div>

        {/* Menu Form Section */}
        <div className="bg-white shadow-md rounded-xl p-5 border border-gray-200">
          <MenuForm
            selectedMenuId={selectedMenuId}
            onSuccess={() => setSelectedMenuId(null)} // Reset selectedMenuId after creating a parent
          />
        </div>
      </div>
    </div>
  );
}
