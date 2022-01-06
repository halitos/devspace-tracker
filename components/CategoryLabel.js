import Link from "next/link";

export default function CategoryLabel({ children }) {
  const colorKey = {
    JavaScript: "bg-yellow-500",
    Python: "bg-green-500",
    PHP: "bg-purple-500",
    CSS: "bg-blue-500",
    Ruby: "bg-red-500",
  };

  return (
    <div
      className={`${colorKey[children]} px-2 py-1 text-gray-100 font-bold rounded`}
    >
      <Link href={`/blog/category/${children.toLowerCase()}`}>
        <a>{children}</a>
      </Link>
    </div>
  );
}
