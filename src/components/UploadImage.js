import classes from './UploadImage.module.css';

export default function UploadImage(){

    const uploadHandler = () => {

    }

    return <div className = {`section small-section shaded-section ${classes.uploadContainer}`}>
        <h1>Start Enhancing</h1>
        <button onClick = {uploadHandler}>Upload Image</button>
    </div>
}