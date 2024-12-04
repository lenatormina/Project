export const transformComment = (dbComment) => ({
    id: dbComment.id,
    materialId: dbComment.material_id,
    authorId: dbComment.author_id,
    publishedAt: dbComment.published_at,
    content: dbComment.content,
});