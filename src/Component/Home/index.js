import React, {Component} from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import Drop from "../Dropzone";
import Canvas from '../Canvas';

class Home extends Component {
    state = {}

    render() {
        return (
            <MDBContainer>
                <MDBRow center className='mt-4'>
                    <Canvas />
                </MDBRow>
                <MDBRow className='mt-4'>
                    <Drop />
                </MDBRow>
            </MDBContainer>
        )
    }
}

export default Home;