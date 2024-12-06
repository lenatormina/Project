export const deleteMaterial = (materialId) =>
    fetch(`http://localhost:3001/materials/${materialId}`, {
        method: 'DELETE',
    });
