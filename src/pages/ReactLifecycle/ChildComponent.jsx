import React, { Component, PureComponent } from 'react'

/*
    PureComponent: là class tương tự component tuy nhiên không có lifecycle shouldComponentUpdate. PureCom sẽ đảm nhiệm việc phân biệt state props của component khi có sự thay đổi thì mới cho render lại.
    Tuy nhiên: sự nhận biết này chỉ diễn ra với props là primitive value (string,number,undefined,null,boolean).
    Đối với props là object hoặc array thì khi xử lý setState lưu ý phải clone ra object hoặc array mới.
    {...} | [...]

*/
export default class ChildComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {

        }
        console.log('constructor child');
    }


    static getDerivedStateFromProps(newProps, currentState) {
        console.log('getDerivedStateFromProps child');

        return null;
    }

    // shouldComponentUpdate(newProps, newState) {
    //     if(this.props.like !== newProps.like) {
    //         return true;
    //     }
        
    //     return false;

    // }


    render() {
        console.log('render child')
        console.log(this.props)
        return (
            <div className='bg-dark text-light p-5 text-center'>
                Child component
                <br />
                <p>Like: {this.props.obLike.like}</p>
            </div>
        )
    }
    componentDidMount() {
        console.log('componentDidMount child')
    }

    componentDidUpdate(prevProps,prevState) {
        //Khi 1 thuộc tính trong state thay đổi sẽ kéo các thuộc tính khác thay đổi 
        //Lưu ý: Khi setState tại lifecycle này phải có if
        console.log('prevProps',prevProps);
        console.log('prevState',prevState);
        // if(prevProps.obLike.like !== ...) {
        //     this.setState({

        //     })
        // }
    }
}
