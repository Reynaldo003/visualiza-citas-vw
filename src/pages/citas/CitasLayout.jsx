// src/pages/Citas/CitasLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import CitasTopNav from "./CitasTopNav";

export default function CitasLayout() {
    return (
        <div className="min-h-screen bg-slate-100">
            <div className="mx-auto max-w-[1600px] space-y-4 px-4 py-4 sm:px-6 sm:py-6">
                <CitasTopNav />
                <Outlet />
            </div>
        </div>
    );
}