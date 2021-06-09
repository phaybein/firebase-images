import React from 'react'

export default function UploadForm() {
    const [ file, setFile ] = React.useState(null);
    const [ error, setError ] = React.useState(null);

    const types = [
        'image/png',
        'image/jpeg'
    ];

    const changeHandler = e => {
        let selected = e.target.files[0];

        if( selected && types.includes(selected.type) )
        {
            setError(null)
            setFile(selected);
        } else {
            setFile(null);
            setError('Please select an image file ( png or jpeg )')
        }

    };

    return (
        <form>
            <input type="file" onChange={changeHandler} />
            <div className="output">
                {
                    error
                    && (
                        <div className="error">{ error }</div>
                    )
                }

                {
                    file
                    && (
                        <div>{ file.name }</div>
                    )
                }
            </div>
        </form>
    )
}
