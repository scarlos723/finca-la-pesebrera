import { useState } from "react";
import { BsChatRightTextFill } from "react-icons/bs";
import { Calendar } from "../ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import styles from "./FloatingButton.module.css";

export const FloatingButton = () => {
  const [open, setOpen] = useState(false);

  type DateRange = { from: Date | undefined; to?: Date | undefined };
  const [range, setRange] = useState<DateRange>({
    from: undefined,
    to: undefined,
  });

  const handleRangeSelect = (value: DateRange | undefined) => {
    setRange(value ?? { from: undefined, to: undefined });
  };

  const handleReserve = () => {
    if (!range.from) return;
    const fromStr = range.from.toLocaleDateString();
    const toStr = range.to ? `al ${range.to.toLocaleDateString()}` : "";
    const msg = encodeURIComponent(
      `Hola, quiero reservar la fecha ${fromStr}${toStr} en Finca La Pesebrera!`,
    );
    window.open(`https://wa.me/573196367600?text=${msg}`, "_blank");
    setOpen(false);
    setRange({ from: undefined, to: undefined });
  };

  return (
    <div className="sticky grid bottom-10 z-10">
      <div className="ml-auto mr-10 mb-10">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <button
              className={styles.floatingButton}
              aria-label="Reserva por WhatsApp"
              style={{ display: "flex", alignItems: "center", gap: 8 }}
            >
              <BsChatRightTextFill />
              <span style={{ fontWeight: 600, fontSize: 16 }}>
                Reserva ahora
              </span>
            </button>
          </PopoverTrigger>
          <PopoverContent
            align="end"
            sideOffset={16}
            style={{ minWidth: 320, transform: "translateY(80px)" }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 12,
                alignItems: "center",
              }}
            >
              <span style={{ fontWeight: 600, marginBottom: 4 }}>
                Selecciona el rango de fechas:
              </span>
              <Calendar
                mode="range"
                selected={range}
                onSelect={handleRangeSelect}
                numberOfMonths={1}
                disabled={{ before: new Date(new Date().setHours(0, 0, 0, 0)) }}
              />
              <button
                onClick={handleReserve}
                style={{
                  marginTop: 8,
                  background: "#25d366",
                  color: "white",
                  border: "none",
                  borderRadius: 8,
                  padding: "8px 16px",
                  fontWeight: 600,
                  cursor: range.from ? "pointer" : "not-allowed",
                  opacity: range.from ? 1 : 0.6,
                  fontSize: 16,
                }}
                disabled={!range.from}
              >
                Reservar ahora
              </button>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};
