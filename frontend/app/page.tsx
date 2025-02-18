"use client";

import React, { useState } from "react";
import Header from "@/app/menusHeader";
import FormMenu from "@/components/menuForm";
import DropdownMenu from "@/components/menuDropdown";
import TreeView from "@/components/menuTree";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../app/redux/store";

export default function MenuManagementPage() {
  const dispatch = useDispatch<AppDispatch>();
  const [activeMenuId, setActiveMenuId] = useState<string | null>(null);

  return (
    <div className="flex flex-col p-4">
      {/* Header Section */}
      <Header />

      {/* Dropdown for Menu Selection */}
      <div className="mb-8 max-w-xs">
        <h2 className="text-sm font-medium text-gray-700 mb-2">Select Menu</h2>
        <DropdownMenu selectedMenuId={activeMenuId} onSelect={setActiveMenuId} />
      </div>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Hierarchical Menu Display */}
        <div className="bg-white rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Menu Hierarchy</h3>
          <TreeView selectedMenuId={activeMenuId} onSelect={setActiveMenuId} />
        </div>

        {/* Menu Editing Section */}
        <div className="bg-white rounded-lg p-6">
          <FormMenu
            selectedMenuId={activeMenuId}
            onSuccess={() => setActiveMenuId(null)} // Reset selection after modification
          />
        </div>
      </div>
    </div>
  );
}