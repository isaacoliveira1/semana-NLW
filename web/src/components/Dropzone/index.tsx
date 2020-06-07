import React ,{useCallback, useState}from 'react';
import {useDropzone} from 'react-dropzone';
import {FiUpload} from 'react-icons/fi'

import './styles.css'

interface Props{
    onFileUpload: (file: File) => void;
}

const DropZone: React.FC<Props> = ({
    onFileUpload
}) => {


    const [selectFileUrl, setSelectFileUrl] = useState('');
        

    const onDrop = useCallback(acceptedFiles => {
        const singleFile = acceptedFiles[0];

        const fileUrl = URL.createObjectURL(singleFile);
        setSelectFileUrl(fileUrl);
        onFileUpload(singleFile);
    }, [onFileUpload])

    const {getRootProps, 
        getInputProps} = 
    useDropzone({onDrop, 
        accept: 'image/*'
    });

    return (
        <div className="dropzone" {...getRootProps()}>
            <input {...getInputProps()} accept='image/*' />
            
            {selectFileUrl
                ? <img src={selectFileUrl} alt="Point thumbnail" />
                : (
                    <p>
                    <FiUpload />
                    Imagem do estabelecimento</p>
                )
            }
           
        </div>
    )
}


export default DropZone;