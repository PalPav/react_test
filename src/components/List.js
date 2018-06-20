import React, {Component} from 'react';
import Item from './Item';

class List extends Component {
    render() {
        return (
            <div className="items-list">
                {this.props.list.map(function(item, index, list){
                    return (<Item key={index} index={index} item={item} list={list}/>);
                })}
            </div>
        );
    }
}

export default List;