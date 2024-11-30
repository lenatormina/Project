export const transformMaterial = (dbMaterial) => ({
	id: dbMaterial.id,
	title: dbMaterial.title,
	content: dbMaterial.content,
	imageUrl: dbMaterial.image_url,
	publishedAt: dbMaterial.published_at,
});
