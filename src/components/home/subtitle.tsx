import { Link } from "react-router-dom";

export default function Subtitle({ title, bgColor }: { title: string; bgColor?: string }) {
  return (
    <h2
      className={`mb-4 text-[24px] leading-6 font-bold ${bgColor && `border-l-4 ${bgColor}`}`}
    >
      <Link to="/news" className={`w-full ${bgColor && "pl-2"}`}>
        {title}
      </Link>
    </h2>
  );
}