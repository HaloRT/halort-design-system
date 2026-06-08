export function CommunityIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <rect x="20" y="60" width="50" height="80" rx="8" fill="#fe8400" opacity="0.2" />
      <rect x="75" y="40" width="50" height="100" rx="8" fill="#6d9c24" opacity="0.25" />
      <rect x="130" y="70" width="50" height="70" rx="8" fill="#22c55e" opacity="0.2" />
      <circle cx="100" cy="30" r="16" fill="#fe8400" />
    </svg>
  );
}

export function EmptyStateIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <rect x="40" y="30" width="120" height="100" rx="12" stroke="#d1d5db" strokeWidth="2" />
      <circle cx="100" cy="70" r="20" fill="#f3f4f6" />
      <rect x="60" y="110" width="80" height="8" rx="4" fill="#e5e7eb" />
    </svg>
  );
}
