import { useState, useEffect} from 'react';
import { projectFirestore, projectStorage } from '../firebase/config';

const useStorage = file => {
    const [ progress, setProgress ] = useState(0);
    const [ error, setError ] = useState(null);
    const [ url, setUrl ] = useState(null);

    useEffect(() => {
        // References
        const storageRef = projectFirestore.ref(file.name);

        // Upload file
        storageRef.put(file).on('state_changed', snap => {
            let perentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(perentage);

        }, err => {
            setError(err)
        }, async () => {
            const url = await storageRef.getdDownloadURL();
            setUrl(url)
        });
    }, [file]);

    return { progress, url, error }
};

export default useStorage;
