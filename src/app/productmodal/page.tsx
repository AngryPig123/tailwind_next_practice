import ProductModalContainer from "@/components/productmodal/ProductModalContainer";
import ProductModalCardContainer from "@/components/productmodal/ProductModalCardContainer";
import ProductModalContent from "@/components/productmodal/ProductModalContent";

export default function ProductModalPage() {

    const contentData = {
        image: "/product-modal/images/headphone.png",
        shipping: "Free Shipping",
        title: "Free Shipping",
        price: "Free Shipping",
        salePrice: "Free Shipping",
        description: "Free Shipping",
        stock: "Free Shipping"
    }

    return (
        <>
            <ProductModalContainer>
                <ProductModalCardContainer>
                    <ProductModalContent contentData={contentData}/>
                </ProductModalCardContainer>
            </ProductModalContainer>
        </>
    )

}
