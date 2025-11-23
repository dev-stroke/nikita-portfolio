const contactInfo = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email',
    value: 'strokenikita@gmail.com',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Address',
    value: 'Bengaluru, India',
  },
];

export default function ContactInfo() {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 justify-items-center">
      {contactInfo.map((item) => (
        <div key={item.label} className="flex flex-col items-center gap-3 text-center">
          <div className="text-foreground/35">{item.icon}</div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-foreground/50 mb-2">
              {item.label}
            </p>
            <p className="text-base leading-relaxed text-foreground">{item.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

