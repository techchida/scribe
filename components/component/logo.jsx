import { Pacifico } from "next/font/google";
const pacifico = Pacifico({ subsets: ["latin"], weight: "400" });

export default function Logo(type) {
  return (
    <span className={`${pacifico.className} font-extrabold  `}>Scribe.</span>
  );
}
