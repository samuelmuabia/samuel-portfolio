'use client';

interface FooterProps {
  dict: {
    footer: {
      text: string;
    };
  };
}

export default function Footer({ dict }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-400 text-sm sm:text-base">{dict.footer.text}</p>
      </div>
    </footer>
  );
}

