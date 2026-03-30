const API_BASE_URL = 'http://127.0.0.1:8000';

export const uploadDataset = async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch(`${API_BASE_URL}/upload`, {
        method: 'POST',
        body: formData,
    });

    if (!response.ok) throw new Error('Failed to upload file.');
    return await response.json();
};

export const fetchProfile = async (datasetId) => {
    const response = await fetch(`${API_BASE_URL}/profile/${datasetId}`);
    if (!response.ok) throw new Error('Failed to fetch profile.');
    return await response.json();
};
