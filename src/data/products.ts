export interface Product {
	id: string;
	name: string;
	price: number;
	description: string;
	image: string;
	category: string;
	features: string[];
	specifications: Record<string, string>;
}

export const products: Record<string, Product> = {
	"1": {
		id: "1",
		name: "Product 1",
		price: 29.99,
		description:
			"A wonderful product description with more details about the product. This is a longer description that would typically include features, specifications, and other important information about the product.",
		image: "/images/products/product1.jpg",
		category: "Category 1",
		features: ["Feature 1", "Feature 2", "Feature 3"],
		specifications: {
			Material: "High quality material",
			Size: "Standard size",
			Weight: "Lightweight",
		},
	},
	"2": {
		id: "2",
		name: "Product 2",
		price: 39.99,
		description:
			"Another amazing product with detailed information. This product offers unique features and benefits that make it stand out from the competition.",
		image: "/images/products/product2.jpg",
		category: "Category 2",
		features: ["Premium Feature 1", "Premium Feature 2", "Premium Feature 3"],
		specifications: {
			Material: "Premium material",
			Size: "Large size",
			Weight: "Medium weight",
		},
	},
};
