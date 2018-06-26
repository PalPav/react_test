import React, {Component} from 'react';

class Item extends Component {
    render() {
        return (
            <div className="item" onClick={() => this.props.onClick()}>
                {this.props.index} {this.props.item.name}
            </div>
        );
    }
}

export default Item;