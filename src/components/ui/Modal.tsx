"use client";

import { ReactNode } from "react";

interface ModalProps {
  open: boolean;
  title?: string;
  description?: string;
  children?: ReactNode;
  onClose?: () => void;
}

export default function Modal({
  open,
  title,
  description,
  children,
  onClose,
}: ModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* overlay */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* modal */}
      <div className="relative w-[420px] rounded-2xl bg-white p-8 shadow-xl text-center">
        {title && <h2 className="text-xl font-semibold mb-2">{title}</h2>}

        {description && (
          <p className="text-gray-500 text-sm mb-6">{description}</p>
        )}

        {children}
      </div>
    </div>
  );
}