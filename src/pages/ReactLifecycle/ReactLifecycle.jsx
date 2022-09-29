import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export default class ReactLifecycle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            number: 1,
            obLike: {
                like:1
            },
            count:60
        }
        console.log('constructor');
    }

  
    //static => không sử dụng được this
    static getDerivedStateFromProps(newProps, currentState) {
        //Sử dụng để xử lý state trước render (Xử lý ngày tháng năm ...)
        console.log('getDerivedStateFromProps');
        //Xử lý => state mới

        return null;
    }

    // shouldComponentUpdate(newProps,newState) {
    //     console.log('state Hiện tại',this.state)
    //     console.log('state sau khi thay đổi trước render',newState);
    //     return false;
    // }
    render() {
        console.log('render');
        return (
            <div className='container'>
                Component<br />
                <h3>Number: {this.state.number}</h3>
                <button className='btn btn-primary' onClick={()=>{
                    this.setState({
                        number: this.state.number + 1
                    })
                }}>button</button>
                <h3>Like:{this.state.obLike.like}</h3>
                <button className='btn btn-danger' onClick={()=>{

                    let newObLike = {...this.state.obLike};
                    newObLike.like = newObLike.like + 1;


                    this.setState({
                        obLike:newObLike
                    })
                }}>Like</button>

                <hr />
                <ChildComponent obLike={this.state.obLike} />
                <hr />
                <h3>Count: {this.state.count}</h3>
                
            </div>
        )
    }

    timeout = null;

    componentDidMount() {

        //Thư viện áp lên các thẻ html, hoặc các nghiệp vụ liên quan đến api
        // => setState 
        console.log('componentDidMount');

    //    this.timeout = setInterval(()=>{
    //         this.setState({
    //             count: this.state.count - 1
    //         });

    //         console.log('123');
    //     },1000)

    }

    componentWillUnmount() {
        //Chạy trước khi component mất khỏi giao diện
        //Dùng để clear các service chạy ngầm của ứng dụng khi component này không còn load trên ui nữa
        // clearInterval(this.timeout);

    }
}
