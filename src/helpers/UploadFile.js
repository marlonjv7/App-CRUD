export const UploadFile = async (file) => {
    const cloudURL = 'https://api.cloudinary.com/v1_1/doaijv8m0/upload'
    const formData = new FormData();
    formData.append('upload_preset', 'mj7Ejemplo')
    formData.append('file', file)

    const resp = await fetch(cloudURL, {
        method: 'POST',
        body: formData
    });

    const cloudResp = await resp.json();
    return cloudResp.secure_url
}
