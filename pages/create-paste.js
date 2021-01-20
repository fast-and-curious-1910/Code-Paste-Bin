import React from 'react';
import {Form} from 'react-bootstrap'

function CreateSnippet() {
    return (
        <div className='text-center mt-4'> 
            <h1>
                Upload you snippet now!
            </h1>
            <p>
                Paste whatever you want, and share the link with your friends! 
            </p>

            <Form className='form'> 
                <Form.Group controlId='exampleForm.control.textArea1' > 
                <Form.Label> Example text area</Form.Label>
                <Form.Control as='textarea' rows='3'/> 
                </Form.Group>
            </Form>
        </div>
    )
}

export default CreateSnippet
