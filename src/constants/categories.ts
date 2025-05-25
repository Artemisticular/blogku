export interface SubCategory {
	name: string;
	description?: string;
}

export interface Category {
	name: string;
	description: string;
	subcategories?: SubCategory[];
}

export const categories: Category[] = [
	{
		name: "Teknologi",
		description: "Fokus pada review, tutorial, dan opini seputar teknologi",
		subcategories: [
			{ name: "Review Gadget" },
			{ name: "Aplikasi & Tools" },
			{ name: "AI & Inovasi" },
			{ name: "Tutorial & How-To" },
		],
	},
	{
		name: "Finansial Digital",
		description:
			"Tips, strategi, dan edukasi keuangan dari sudut pandang anak muda & digital",
		subcategories: [
			{ name: "Manajemen Uang" },
			{ name: "Side Hustle" },
			{ name: "Investasi & Tabungan" },
			{ name: "Uang & Teknologi" },
		],
	},
	{
		name: "Produktivitas & Mindset",
		description: "Tips produktivitas, life hacks, dan pengembangan diri",
		subcategories: [
			{ name: "Time Management" },
			{ name: "Mindset Digital" },
			{ name: "Alat Bantu Produktivitas" },
			{ name: "Life Design" },
		],
	},
	{
		name: "Cerita & Opini",
		description:
			"Wadah ekspresi personal, storytelling, atau opini terhadap isu/ide",
		subcategories: [
			{ name: "Alur Cerita Buku" },
			{ name: "Cerita Original" },
			{ name: "Esai Bebas" },
			{ name: "Refleksi & Renungan" },
		],
	},
	{
		name: "Digital Kreatif",
		description:
			"Cocok jika Anda membahas tools digital, desain, atau bikin aset digital",
		subcategories: [
			{ name: "Template & Tools" },
			{ name: "Desain & Branding" },
			{ name: "Produk Digital" },
			{ name: "Eksperimen Online" },
		],
	},
	{
		name: "Arsip Eksperimen",
		description:
			"Cocok untuk eksperimen, project mini, dokumentasi personal digital",
	},
];
