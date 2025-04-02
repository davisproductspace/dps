"use client";

export default function Page() {
  return (
    <div className="relative w-full h-screen">
      {/* Background image */}
      <img
        src="/images/about-header.svg"
        alt="stacked logos background"
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
      />

      {/* Foreground content */}
      <div className="relative pt-20 w-full min-h-screen bg-white">
        <iframe
          src="https://airtable.com/embed/app9URmfQlcVa2te1/pag1EiBrWOyZVvvnw/form"
          title="Airtable Apply Form"
          className="w-full h-[calc(100vh-10rem)]"
          style={{ border: 0 }}
        />
      </div>
    </div>
  );
}
