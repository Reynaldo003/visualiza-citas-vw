// src/pages/Citas/CitasTopNav.jsx
import vwWhite from "../../assets/vw_white.png";
import ryr from "../../assets/ryr.png";

const BRAND_BLUE = "#131E5C";

export default function CitasTopNav() {
    return (
        <header className="w-full">
            <div className="relative overflow-hidden rounded-lg shadow-lg" style={{ backgroundColor: BRAND_BLUE }}>
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -top-20 -left-28 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
                    <div className="absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl" />
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/0 to-black/15" />
                </div>

                <div className="relative px-5 py-5 sm:px-7 sm:py-6">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div className="min-w-0">
                            <h1 className="font-vw-header truncate text-lg font-extrabold text-white sm:text-xl">
                                Gestión de Citas
                            </h1>
                            <p className="mt-1 text-sm text-white/80">Registro y seguimiento de citas.</p>
                        </div>

                        <div className="flex items-center justify-between gap-3 sm:justify-end">
                            <img src={vwWhite} alt="VW" className="h-10 w-auto opacity-95" loading="lazy" />
                            <img src={ryr} alt="RYR" className="h-10 w-auto opacity-95" loading="lazy" />
                        </div>
                    </div>

                    <div className="mt-5 h-px w-full bg-gradient-to-r from-white/25 via-white/50 to-white/25" />
                </div>
            </div>
        </header>
    );
}