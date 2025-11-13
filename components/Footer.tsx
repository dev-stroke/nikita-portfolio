// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="flex justify-center items-center py-8 border-t border-border text-muted text-sm mt-16">
      © {new Date().getFullYear()} — Crafted with 💙 by Nikita
    </footer>
  );
}
