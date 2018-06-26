import React, {Component} from 'react';
import Item from './Item';

class List extends Component {
    render() {
        return (
            <div className="items-list">
                {this.props.list.map((item, index) => {
                    return (
                        <Item key={'list_element_' + index}
                              item={item}
                              onClick={()=>this.props.removeTask(index)}
                        />
                    );
                })}
            </div>
        );
    }
}

export default List;