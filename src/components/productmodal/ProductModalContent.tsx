import ProductModalButtonGroup from "@/components/productmodal/ProductModalButtonGroup";
import ProductModalStock from "@/components/productmodal/ProductModalStock";
import ProductModalButtonContainer from "@/components/productmodal/ProductModalButtonContainer";
import ProductModalButton from "@/components/productmodal/ProductModalButton";

export default function ProductModalContent({contentData}: { contentData: ProductModalContentDataType }) {

    return (
        <>
            {/* image */}
            <div>
                <img
                    className="mx-auto duration-200 w-60 hover:scale-105"
                    src={contentData.image} alt="headphone"
                />
            </div>

            {/* content */}
            <div className="flex flex-col space-y-6">

                {/* label && title container */}
                <div className="flex flex-col mb-4 space-y-3 text-center md:text-left">

                    {/* label */}
                    <div>
                        <div className="inline-block px-3 py-1 text-sm text-white bg-black rounded-full">
                            {contentData.shipping}
                        </div>
                    </div>

                    {/* title */}
                    <div className="max-w-sm text-2xl font-medium">
                        {contentData.title}
                    </div>

                    {/* price */}
                    <div className="flex flex-col mb-4 space-y-3 text-center md:text-left">
                        <p className="line-through">
                            {contentData.price}
                        </p>
                        <p className="text-5xl font-bold">
                            {contentData.salePrice}
                        </p>
                        <p className="text-xm font-light text-gray-400">
                            {contentData.description}
                        </p>
                    </div>

                    {/* button group */}
                    <ProductModalButtonGroup>
                        Buy
                    </ProductModalButtonGroup>

                    {/* stock */}
                    <ProductModalStock>
                        {contentData.stock} pcs. in stock
                    </ProductModalStock>

                    {/* bottom */}
                    <ProductModalButtonContainer>
                        <ProductModalButton imagePath={`/product-modal/images/weight.png`}>
                            <span>Add to cart</span>
                        </ProductModalButton>
                        <ProductModalButton imagePath={`/product-modal/images/heart.png`}>
                            <span>Add to wishlist</span>
                        </ProductModalButton>
                    </ProductModalButtonContainer>

                </div>
            </div>
        </>
    )

}