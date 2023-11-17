import Link from "next/link";
import { simplifiedProduct } from "../lib/interface";
import { client } from "../lib/sanity";
import { ArrowRight } from "lucide-react";

async function getData() {
  const query = `*[_type == 'product'][0...4] | order(_createdAt desc) {
    _id,
    price,
    name,
    "slug": slug.current,
    "categoryName": category->name,
    "imageUrl": images[0].asset->url
  }`;

  const data = await client.fetch(query);

  return data;
}

export default function Newest() {
  const fetchData = async () => {
    const data: simplifiedProduct[] = await getData();
    console.log(data); // Use data as needed
  };

  fetchData();

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight">Newest In!</h2>
          <Link className="text-primary flex items-center gap-x-1" href="/all">
            See All{" "}
            <span>
              <ArrowRight />{" "}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
