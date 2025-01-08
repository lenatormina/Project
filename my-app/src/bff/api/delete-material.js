export const deleteMaterial = (materialId) =>
	fetch(`http://localhost:3005/materials/${materialId}`, {
		method: 'DELETE',
	});
