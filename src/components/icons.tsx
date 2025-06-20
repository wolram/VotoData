import { type SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function StripeLogoIcon(props: IconProps) {
  return (
    <svg
      width="13"
      height="15"
      viewBox="0 0 13 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 14.0578L12.6296 11.302V0.942383L0 3.64711V14.0578Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function PlusIcon(props: IconProps) {
  return (
    <svg
      width="8"
      height="8"
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.5 4.5V8H4.5V4.5H8V3.5H4.5V0H3.5V3.5H0V4.5H3.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function PixelArrowIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 6 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect y="5" width="1" height="1" fill="currentColor" />
      <rect x="1" y="4" width="1" height="1" fill="currentColor" />
      <rect x="2" y="3" width="1" height="1" fill="currentColor" />
      <rect x="3" y="2" width="1" height="1" fill="currentColor" />
      <rect x="4" y="1" width="1" height="1" fill="currentColor" />
      <rect x="5" y="0" width="1" height="1" fill="currentColor" />
    </svg>
  );
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <svg
      width="10"
      height="7"
      viewBox="0 0 10 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.83728 0.885375C9.62032 0.668417 9.26857 0.668417 9.05161 0.885375L5 4.93698L0.948392 0.885374C0.731435 0.668416 0.379676 0.668416 0.162719 0.885374C-0.0542402 1.10233 -0.0542403 1.45409 0.162719 1.67105L4.60716 6.11549C4.82412 6.33245 5.17588 6.33245 5.39284 6.11549L9.83728 1.67105C10.0542 1.45409 10.0542 1.10233 9.83728 0.885375Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function FolderIcon(props: IconProps) {
  return (
    <svg
      width="12"
      height="10"
      viewBox="0 0 12 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Folder Icon</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 0H7V1H1V0ZM1 6V1H0V9H1V10H11V9H12V3H11V2H8V1H7V2H8V3H11V4H3V5H2V6H1ZM1 7V9H11V5H3V6H2V7H1Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function CheckboxIcon({
  checked,
  ...props
}: IconProps & { checked?: boolean }) {
  return (
    <svg
      width="10"
      height="9"
      viewBox="0 0 10 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Checkbox icon</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 1L-3.49691e-07 1L-4.37113e-08 8L1 8L1 9L9 9L9 8L10 8L10 1L9 1L9 -3.93402e-07L1 -4.37114e-08L1 1ZM1 1L9 1L9 8L1 8L1 1Z"
        fill="currentColor"
      />
      {checked && (
        <path d="M3 4L4.5 6L7 2" stroke="currentColor" strokeWidth="1.5" fill="none" />
      )}
    </svg>
  );
}

export function AccordionPlusIcon({
  isOpen,
  expanded,
  ...props
}: IconProps & { isOpen?: boolean; expanded?: boolean }) {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M 0 5 L 10 5" stroke="currentColor" strokeWidth="1" />
      <path
        d="M 5 0 L 5 10"
        stroke="currentColor"
        strokeWidth="1"
        style={{
          transform: (isOpen || expanded) ? "rotate(90deg)" : "rotate(0deg)",
          transformOrigin: "center",
          transition: "transform 0.3s ease",
        }}
      />
    </svg>
  );
}

export function PixelArrowRightIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 7 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 0H3V1H4V2H5V3H0V4H5V5H4V6H3V7H4V6H5V5H6V4H7V3H6V2H5V1H4V0Z"
        fill="currentColor"
      />
    </svg>
  );
}
