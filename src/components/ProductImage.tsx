import Image from "next/image";
import imagePath from "public/product.jpg";

const ProductImage = () => {
  return (
    <Image className="rounded-xl" src={imagePath} alt="Landscape picture" />
  );
};

export default ProductImage;
