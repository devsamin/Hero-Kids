import Banner from "@/components/home/Banner";
import Products from "@/components/home/Products";
export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div className="">
      <section>
        <Banner />
      </section>
      <section>
        <Products />
      </section>
    </div>
  );
}
