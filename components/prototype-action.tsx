"use client";

import { ArrowUpRight, X } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";

type PrototypeActionProps = {
  label: string;
  variant?: "solid" | "outline" | "text";
  className?: string;
};

export function PrototypeAction({
  label,
  variant = "solid",
  className = "",
}: PrototypeActionProps) {
  const [open, setOpen] = useState(false);
  const titleId = useId();
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <>
      <button
        className={`button button--${variant} ${className}`.trim()}
        type="button"
        onClick={() => setOpen(true)}
      >
        {label}
        <ArrowUpRight aria-hidden="true" size={16} strokeWidth={1.8} />
      </button>
      <dialog
        aria-labelledby={titleId}
        className="prototype-dialog"
        onCancel={(event) => {
          event.preventDefault();
          setOpen(false);
        }}
        onClose={() => setOpen(false)}
        ref={dialogRef}
      >
        <button
          aria-label="Close dialog"
          className="prototype-dialog__close"
          onClick={() => setOpen(false)}
          type="button"
        >
          <X aria-hidden="true" size={18} />
        </button>
        <span className="prototype-dialog__icon" aria-hidden="true">
          <ArrowUpRight size={20} />
        </span>
        <p className="eyebrow">A NOTE FOR THIS PREVIEW</p>
        <h2 id={titleId}>{label}</h2>
        <p>
          This option is planned for a future release. The foundation’s team
          will confirm the details before it becomes available.
        </p>
        <button
          className="button button--solid prototype-dialog__done"
          onClick={() => setOpen(false)}
          type="button"
        >
          Understood
        </button>
      </dialog>
    </>
  );
}
