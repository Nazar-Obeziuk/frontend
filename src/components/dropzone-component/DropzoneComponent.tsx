import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from "../../utils/axios/axios";

interface DropzoneComponentProps {
    token: string;
}

interface PreviewFile extends File {
    preview: string;
}

const DropzoneComponent: React.FC<DropzoneComponentProps> = ({ token }) => {
    const [files, setFiles] = useState<PreviewFile[]>([]);
    const [uploading, setUploading] = useState(false);

    const onDrop = useCallback((acceptedFiles: File[]) => {
        setFiles(
            acceptedFiles.map(file =>
                Object.assign(file, {
                    preview: URL.createObjectURL(file)
                })
            )
        );
    }, []);

    const handleUpload = async () => {
        if (files.length === 0) return;

        const formData = new FormData();
        files.forEach(file => {
            formData.append('images', file);
        });

        try {
            setUploading(true);
            const response = await axios.post("/workers", formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data",
                },
            });
            console.log('Upload successful:', response.data);
        } catch (error) {
            console.error('Error uploading files:', error);
        } finally {
            setUploading(false);
        }
    };

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    return (
        <div>
            <div {...getRootProps({ className: 'dropzone' })} style={dropzoneStyle}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here, or click to select files</p>
            </div>
            <div style={previewStyle}>
                {files.map(file => (
                    <div key={file.name} style={thumb}>
                        <div style={thumbInner}>
                            <img src={file.preview} style={img} />
                        </div>
                    </div>
                ))}
            </div>
            <button onClick={handleUpload} disabled={uploading}>
                {uploading ? 'Uploading...' : 'Upload'}
            </button>
        </div>
    );
};

const dropzoneStyle: React.CSSProperties = {
    border: '2px dashed #0087F7',
    borderRadius: '5px',
    padding: '20px',
    textAlign: 'center',
    cursor: 'pointer'
};

const previewStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: '16px'
};

const thumb: React.CSSProperties = {
    display: 'inline-flex',
    borderRadius: '2px',
    border: '1px solid #eaeaea',
    marginBottom: '8px',
    marginRight: '8px',
    width: '100px',
    height: '100px',
    padding: '4px',
    boxSizing: 'border-box'
};

const thumbInner: React.CSSProperties = {
    display: 'flex',
    minWidth: '0',
    overflow: 'hidden'
};

const img: React.CSSProperties = {
    display: 'block',
    width: 'auto',
    height: '100%'
};

export default DropzoneComponent;
