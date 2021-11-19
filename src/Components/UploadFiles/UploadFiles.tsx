import React, { useRef } from 'react'
import { makeStyles } from '@mui/styles'
import {FormControl,RadioGroup,FormControlLabel,Radio} from '@mui/material'
import StyledUploadFiles from './StyledUploadFiles'
import {ReactComponent as UploadFileContainer} from '../../assets/svg/uploadFiles.svg'
import {ReactComponent as UploadedFileContainer} from '../../assets/svg/uploadedFile.svg'
import CustomButton from '../CustomButton/CustomButton'
import CustomSquareButton from '../CustomSquareButton/CustomSquareButton'

const createStyles = makeStyles({
    radioGroup:{
        marginLeft:'15px',
        marginTop:'-5px'
    },
    formControl:{
        background: '#0A101B',
        border: '1px solid #7EFACD',
        boxSizing: 'border-box',
        borderRadius: '59px',
        width: '143px',
        height: '30px',
        margin: '5px 0',
    },
    formControlChecked:{
            border: '1px solid #DD56FF',
            color:'#DD56FF'
    }
})

interface Props {
    fileName:string,
    description:string,
    setFileName:(value:string) =>void,
    setDescription:(value:string) => void,
    setUploadFile:(file:any) => void,
    setUploadType:(type:any) => void,
    creationType:string,
    selectedFile:any,
    confirmUploadFile:() => void
}

const UploadFiles = ({fileName='', description='', setFileName, setDescription, setUploadFile, setUploadType,confirmUploadFile, creationType, selectedFile}:Props) => {
    const classes = createStyles()
    const inputRef:any = useRef(null)

    const handleUploadClick = () => {
        if(!inputRef?.current){
            return
        }

        inputRef.current.click()
    }

    return(
        <StyledUploadFiles>
                <UploadFileContainer className='upload-files__img' />
                <div className='upload-files__title'>
                    <span>Title</span>
                    <input value={fileName} onChange={(e) => setFileName(e.target.value)} className='upload-files__upload-title-input' type='text' />
                </div>

                <div className='upload-files__description'>
                    <span>Description</span>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} className='upload-files__upload-description-input' />
                </div>
                <div className='upload-files__uploaded-file-container'>
                    <UploadedFileContainer />
                </div>
                <div className='upload-files__upload-file-button'>
                    <CustomSquareButton handleClick={handleUploadClick} text='Upload file' />
                </div>
                <div className='upload-files__info'>
                    <input ref={inputRef} type='file' onChange={e => setUploadFile(e.target.files![0])} hidden />
                    {selectedFile?.name || 'No file chosen'}
                </div>
                <div className='upload-files__upload-button'>
                    <CustomButton handleClick={() => confirmUploadFile()} buttonText='Upload to IPFS' />
                </div>
                <div className='upload-files__type-selection'>
                    <span className='upload-files__type-selection-title'>type</span>
                    <FormControl component="fieldset" >
                        <RadioGroup
                            aria-label="type"
                            defaultValue="avatar"
                            name="radio-buttons-group"
                            onChange={(e) => setUploadType(e.target.value)}
                            classes={{root:classes.radioGroup}}
                        >
                            <FormControlLabel 
                                checked={creationType === 'badge'}
                                classes={{root:`${classes.formControl} ${creationType === 'badge' ? classes.formControlChecked : ''}`}} 
                                value="badge" 
                                control={<Radio size="small" />} 
                                label="Badge" 
                            />
                            <FormControlLabel  
                                checked={creationType === 'NFT'}
                                classes={{root:`${classes.formControl} ${creationType === 'NFT' ? classes.formControlChecked : ''}`}} 
                                value="NFT" 
                                control={<Radio size="small" />} 
                                label="Avatar"
                            />
                        </RadioGroup>
                    </FormControl>
                </div>
        </StyledUploadFiles>
    )
}

export default UploadFiles