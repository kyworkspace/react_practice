import React, { Component } from 'react';

class MyComponent extends Component {
    
    render() {
        const name = this.props.name;
        return (
            <div>
                {name}
            </div>
        );
    }
}

export default MyComponent;