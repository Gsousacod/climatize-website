"use client";

import type { ReactNode } from "react";

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 32 32" width={size} height={size} className="fill-current">
      <path d="M16.02 3.2A12.67 12.67 0 0 0 5.25 22.55L3.6 28.8l6.39-1.63A12.67 12.67 0 1 0 16.02 3.2Zm0 22.94a10.25 10.25 0 0 1-5.22-1.43l-.37-.22-3.78.97.99-3.69-.24-.38a10.25 10.25 0 1 1 8.62 4.75Zm5.8-7.68c-.32-.16-1.88-.93-2.17-1.03-.29-.11-.5-.16-.71.16-.21.32-.82 1.03-1 1.24-.18.21-.37.24-.69.08-.32-.16-1.35-.5-2.58-1.59-.95-.85-1.6-1.9-1.79-2.22-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.55.16-.18.21-.32.32-.53.11-.21.05-.4-.03-.55-.08-.16-.71-1.72-.98-2.35-.26-.62-.52-.53-.71-.54h-.61c-.21 0-.55.08-.84.4-.29.32-1.11 1.09-1.11 2.64 0 1.56 1.14 3.07 1.29 3.28.16.21 2.24 3.42 5.43 4.8.76.33 1.35.53 1.81.68.76.24 1.46.21 2.01.13.61-.09 1.88-.77 2.15-1.51.27-.74.27-1.37.19-1.51-.08-.13-.29-.21-.61-.37Z" />
    </svg>
  );
}

export const inputClasses =
  "w-full rounded-md border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-climatize-blue focus:ring-4 focus:ring-climatize-blue/10";

export const labelClasses =
  "grid gap-2 text-sm font-semibold text-climatize-gray";

type FieldProps = {
  label: string;
  htmlFor: string;
  required?: boolean;
  className?: string;
  children: ReactNode;
};

export function Field({
  label,
  htmlFor,
  required,
  className,
  children,
}: FieldProps) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className={labelClasses}>
        <span>
          {label}{" "}
          {required ? (
            <span aria-hidden="true" className="text-climatize-blue">
              *
            </span>
          ) : null}
        </span>
        {children}
      </label>
    </div>
  );
}

export function FormError({ message }: { message: string | null }) {
  if (!message) return null;
  return (
    <p
      role="alert"
      className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700"
    >
      {message}
    </p>
  );
}

export function ToolResultCard({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-climatize-blue/15 bg-climatize-lightBlue p-6 sm:p-8">
      {children}
    </div>
  );
}

export function WhatsAppSubmitButton({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#25D366] px-6 py-4 text-sm font-bold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-[#128C4A] sm:w-auto"
    >
      <WhatsAppIcon size={18} />
      {label}
    </a>
  );
}

type RadioOption = { value: string; label: string };

type RadioGroupProps = {
  legend: string;
  name: string;
  options: RadioOption[];
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
};

export function RadioGroup({
  legend,
  name,
  options,
  value,
  onChange,
  required,
}: RadioGroupProps) {
  return (
    <fieldset className="grid gap-3">
      <legend className="text-sm font-semibold text-climatize-gray">
        {legend}{" "}
        {required ? (
          <span aria-hidden="true" className="text-climatize-blue">
            *
          </span>
        ) : null}
      </legend>
      <div className="grid gap-2 sm:grid-cols-2">
        {options.map((option) => {
          const id = `${name}-${option.value}`;
          const checked = value === option.value;
          return (
            <label
              key={option.value}
              htmlFor={id}
              className={`flex cursor-pointer items-center gap-3 rounded-xl border p-3 text-sm font-medium transition focus-within:ring-4 focus-within:ring-climatize-blue/15 ${
                checked
                  ? "border-climatize-blue bg-climatize-lightBlue text-climatize-darkBlue"
                  : "border-slate-200 bg-white text-slate-700 hover:border-climatize-blue/40"
              }`}
            >
              <input
                id={id}
                type="radio"
                name={name}
                value={option.value}
                checked={checked}
                onChange={() => onChange(option.value)}
                className="h-4 w-4 shrink-0 accent-climatize-blue"
              />
              {option.label}
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}
