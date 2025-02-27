import { useEffect, useRef, useState } from "react";
import ProductList from "../productList/ProductList";
import Error from "mainApp/error";

const ProductCoupled: React.FC = () => {
    const vueRef = useRef<HTMLDivElement>(null);
    const [hasError, setHasError] = useState(false);

    const importProductView = async () => {
        if (!vueRef.current) return;
        
        try {
            const mountProductView = await import("productViewVue/mountProductView"); // Micro Frontend Vue
            mountProductView.default(vueRef.current);
        } catch (error) {
            setHasError(true);
            console.error("Vue Micro Frontend failed to mount:", error);
        }
    };

    useEffect(() => {
        importProductView();
    }, []);

    return (
        <div className="flex flex-wrap justify-center h-screen overflow-y-auto">
            <ProductList />
            <div className="w-1/2 h-full">
                {hasError ? (
                    <Error />
                ) : (
                    <div ref={vueRef} className="w-full h-full"></div>
                )}
            </div>
        </div>
    );
};

export default ProductCoupled;
