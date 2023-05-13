import Head from "next/head";
import ProductPage from "../../components/ProductPage";
import ShopCategory from "../../components/ShopCategory";
import NewProduct from "../../components/NewProduct";

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>E-Commerce</title>
        <meta name="description" content="Developed By GS Mahato" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <ShopCategory/>
      <div className="new-pro">
      <NewProduct/>
      <div
      className="p-container"
      style={{
        display: 'flex',
        // margin-left:'200px',
        // margin-right:'200px'
      }}
    >
      
        {products.map((product) => (
          <ProductPage key={product.id} id={product.id} product={product} />
        ))}
      </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://fakestoreapi.com/products?limit=5");
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
}
