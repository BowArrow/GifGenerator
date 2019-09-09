import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdbreact';
import Dropzone from 'react-dropzone';
import styled from 'styled-components';


class Drop extends Component {
    
    getColor = (props) => {
        if (props.isDragAccept) {
            return '#00e676';
        }
        if (props.isDragReject) {
            return '#ff1744';
        }
        if (props.isDragActive) {
            return '#2196f3';
        }
        return '#eeeeee';
      }
    
    state = {
        dropStyle: {color: 'green'},
        defaultStyle: {}
    }

    changeEnter = () => {
        this.setState({dropStyle: {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '20px',
            borderWidth: '2px',
            borderRadius: '2px',
            borderColor: `#00e676`,
            bordeStyle: 'dashed',
            backgroundColor: '#fafafa',
            color: '#bdbdbd',
            outline: 'none',
            transition: 'border .24s ease -in -out',
        }})
    }

    changeExit = () => {
        this.setState({dropStyle: {color: 'green'}});
    }





render() {
    return (
        <MDBContainer>
            <MDBRow center>
                <MDBCol md='8'>
                    <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)} onDragEnter={this.changeEnter} onDragLeave={this.changeExit}>
                        {({ getRootProps, getInputProps }) => (
                            <section>
                                <div {...getRootProps()} style={this.state.dropStyle}>
                                    <input {...getInputProps()} />
                                    <MDBIcon icon="cloud-upload-alt" size='3x' />
                                    <h1>Drag your models here or click to select</h1>
                                </div>
                            </section>
                        )}
                    </Dropzone>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}
}

export default Drop;