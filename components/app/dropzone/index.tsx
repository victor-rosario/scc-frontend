import { InputLabel } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import UploadContainer from "./UploadContainer";

interface IFile extends File {
    preview: string
    path: string
    lastModified: number
    lastModifiedDate: string | Date
    name: string
    size: number
    type: string
    webkitRelativePath: string
}

interface Props {
    isEditMode: boolean
    value: string
    name: string
    error?: boolean
    label: string
    disabled: boolean
    onChange: (item: Buffer | IFile) => void
}

function Dropzone({ isEditMode, onChange, value, name, disabled, label, error }: Props) {

    const [files, setFiles] = useState<readonly IFile[]>([]);
    const [fileError, setFileError] = useState<Record<string, string>>({});

    const onDrop = useCallback((acceptedFiles: IFile[]) => {
        acceptedFiles.forEach((file) => {
            const reader = new FileReader();
            reader.onload = () => {
                onChange && typeof onChange === 'function' && onChange(file);
            };
            reader.readAsArrayBuffer(file);
        });

        setFiles(acceptedFiles.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file)
        })));
    }, []);

    const { getRootProps, getInputProps, isDragAccept, } = useDropzone({
        onDrop: onDrop as any,
        disabled
    });

    const renderImage = () => {
        if (fileError[value] === 'error') return "/assets/images/companies/default.jpg"
        if (typeof value === "string") return `${value}`
    }

    const handleImageError = () => {
        setFileError(prev => {
            return { ...prev, [value]: "error" }
        });
    };

    useEffect(() => {
        return () => files.forEach(file => URL.revokeObjectURL(file.preview));
    }, []);

    if (error) {
        return (
            <UploadContainer
                {...getRootProps({
                    accepted: +isDragAccept,
                    disabled: disabled ? disabled : !isEditMode
                })}
            >
                <input {...getInputProps()} />
                <InputLabel>
                    {"Error white it tried to upload the file or image"}
                </InputLabel>
            </UploadContainer>
        )
    }

    return (
        <UploadContainer
            {...getRootProps({
                accepted: +isDragAccept,
                disabled: disabled ? disabled : !isEditMode
            })}
        >
            <input {...getInputProps()} />
            {
                (!files.length || !value) ? (
                    <InputLabel>
                        {label || "Drag 'n' drop some files here, or click to select files"}
                    </InputLabel>
                ) : null
            }
            {
                (files.length) ? (
                    <img
                        src={files[0].preview}
                        alt={files[0].name}
                        style={{ width: "50%", height: "auto", display: "block" }}
                    />
                ) : null
            }
            {
                (value && !files.length) ? (
                    <img
                        src={renderImage()}
                        alt={name}
                        style={{ width: "50%", height: "auto", display: "block" }}
                        onError={handleImageError}
                    />
                ) : null
            }

        </UploadContainer>
    )
}

export default Dropzone