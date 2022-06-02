import React from 'react'
import { GoCloudUpload } from 'react-icons/go'
import { IconContext } from 'react-icons/lib';

export default function CreatePost() {
    return (
        <>
            <div className="card input-field"
                style={{
                    margin: '30px auto',
                    maxWidth: '500px',
                    padding: '20px',
                    textAlign: 'center',
                }}
            >
                <input type='text' placeholder='Title' />
                <input type='text' placeholder='Body' />
                <div className="file-field input-field">
                    <div className="btn blue">
                        <span>Choose Image</span>
                        <input type="file" />
                    </div>
                    <div className="file-path-wrapper">
                        <input className="file-path validate" type="text" />
                    </div>
                </div>
                <IconContext.Provider value={{ className: 'react-icons' }}>
                <button className="btn waves-effect waves-light #64b5f6 blue darken-1">Upload and Submit Post
                    <GoCloudUpload size='1.7em' />
                </button>
                </IconContext.Provider>
            </div>
        </>
    )
}
