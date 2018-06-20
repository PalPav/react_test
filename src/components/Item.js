import React, {Component} from 'react';

class Item extends Component {
    constructor(props) {
        super(props);
        this.destroy = this.destroy.bind(this);
    }
    destroy() {
        console.log(this.props.list);
        this.props.list.splice(this.props.index, 1);
        this.setState({});
    }
    render() {
        return (
            <div className="item" onClick={this.destroy}>
                {this.props.index} {this.props.item.name}
            </div>
        );
    }
}

export default Item;