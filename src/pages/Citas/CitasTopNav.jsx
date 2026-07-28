// src/pages/Citas/CitasTopNav.jsx
import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import vwDark from "../../assets/vw_dark.png"; // ← CAMBIADO a vw_dark.png
import { Table2, BarChart3, Calendar, FileDown } from "lucide-react";

const BRAND_BLUE = "#131E5C";

export default function CitasTopNav({ vistaActual, onChangeVista, onExportarExcel }) {
    const location = useLocation();
    const navigate = useNavigate();

    const tabs = useMemo(() => [
        {
            label: "Agenda",
            key: "agenda",
            icon: Calendar,
            href: "/citas/agenda",
        },
        {
            label: "Tabla",
            key: "tabla",
            icon: Table2,
            href: "/citas/tabla",
        },
        {
            label: "Gráficos",
            key: "graficos",
            icon: BarChart3,
            href: "/citas/graficos",
        },
    ], []);

    const isActive = (key) => vistaActual === key;

    const handleTabClick = (tab) => {
        if (onChangeVista) {
            onChangeVista(tab.key);
        }
        navigate(tab.href);
    };

    return (
        <header
            className="sticky top-0 z-40 w-full border-b bg-white"
            style={{ borderColor: `${BRAND_BLUE}22` }}
        >
            <div className="flex min-h-[76px] items-center gap-4 px-4 md:px-6 lg:px-8">
                
                <img
                    src={vwDark}
                    alt="Volkswagen"
                    className="h-16 w-16 object-contain md:h-20 md:w-20 shrink-0"
                    loading="lazy"
                />

                
                <div
                    className="text-[24px] font-black tracking-normal md:text-[30px] shrink-0"
                    style={{ color: BRAND_BLUE }}
                >
                    Citas
                </div>

                
                <div
                    className="hidden h-[2px] min-w-[60px] flex-1 rounded-full lg:block"
                    style={{ background: BRAND_BLUE }}
                />

                
                <nav className="ml-auto flex items-center gap-2 overflow-x-auto py-2">
                    {tabs.map((t) => {
                        const Icon = t.icon;
                        const active = isActive(t.key);
                        return (
                            <button
                                key={t.key}
                                onClick={() => handleTabClick(t)}
                                aria-current={active ? "page" : undefined}
                                className="inline-flex shrink-0 items-center gap-2 rounded-lg px-4 py-2 text-sm font-bold transition"
                                style={{
                                    border: `1px solid ${BRAND_BLUE}`,
                                    backgroundColor: active ? BRAND_BLUE : "#FFFFFF",
                                    color: active ? "#FFFFFF" : BRAND_BLUE,
                                }}
                                onMouseEnter={(e) => {
                                    if (!active) {
                                        e.currentTarget.style.backgroundColor = BRAND_BLUE;
                                        e.currentTarget.style.color = "#FFFFFF";
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (!active) {
                                        e.currentTarget.style.backgroundColor = "#FFFFFF";
                                        e.currentTarget.style.color = BRAND_BLUE;
                                    }
                                }}
                            >
                                <Icon className="h-4 w-4" />
                                <span className="hidden sm:inline">{t.label}</span>
                            </button>
                        );
                    })}

                    {/* Botón Exportar Excel */}
                    <button
                        type="button"
                        onClick={onExportarExcel}
                        className="inline-flex shrink-0 items-center gap-2 rounded-lg px-4 py-2 text-sm font-bold transition"
                        style={{
                            border: `1px solid ${BRAND_BLUE}`,
                            backgroundColor: "#FFFFFF",
                            color: BRAND_BLUE,
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = BRAND_BLUE;
                            e.currentTarget.style.color = "#FFFFFF";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "#FFFFFF";
                            e.currentTarget.style.color = BRAND_BLUE;
                        }}
                    >
                        <FileDown className="h-4 w-4" />
                        <span className="hidden sm:inline">Exportar Excel</span>
                    </button>
                </nav>
            </div>
        </header>
    );
}