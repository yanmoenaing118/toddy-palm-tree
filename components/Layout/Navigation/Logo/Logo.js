import Image from "next/image";
export default function Logo(props) {
  return (
    <Image
      src="/images/logo.png"
      alt="Toddy Palm Tree"
      width="30px"
      height="45px"
    />
  );
}
