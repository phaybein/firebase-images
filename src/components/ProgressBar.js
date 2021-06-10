import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';
import { motion } from 'framer-motion';


export default function ProgressBar({ file, setFile }) {
    const { url, progress } = useStorage(file);

    useEffect(() => {
        if(url)
        {
            setFile(null)
        }
    }, [url, setFile]);

    return (
        <motion.div
            className='progress-bar'
            initial={{ width: 0 }}
            animate={{ width: progress + '%' }}
        >
            {/* <progress value={progress} max='100' /> */}
        </motion.div>
    )
}
