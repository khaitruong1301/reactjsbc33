import React, { Component } from "react";

export default class StateDemo extends Component {
  state = {
    fSize: 30,
    color:'purple',
    imgSrc:'https://i.pravatar.cc?u=1'
  };

  randomAvatar = () => {
    let randomNumber = Math.random(Math.floor() * 100);
    let imgSrcNew = 'https://i.pravatar.cc?u=' + randomNumber;
    //Khi setState gọi thì giao diện render sẽ chạy lại
    this.setState({
        imgSrc: imgSrcNew
    })

  }

  render() {
    return (
      <div className="container" style={{marginBottom:500}}>
        <h3>Ví dụ 1: Tăng giảm font-size của đoạn văn bản sau</h3>
        <p style={{ fontSize: this.state.fSize }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae dolores
          aliquid expedita error, provident quisquam architecto ratione maxime
          magni earum, autem nesciunt accusantium veritatis nulla aut
          consequuntur exercitationem a! Nulla?
        </p>
        <button
          className="mx-2 btn btn-dark"
          onClick={() => {
            //Thay đổi state
            this.setState({
              fSize: this.state.fSize + 1,
            });
          }}
        >
          +
        </button>
        <button
          className="mx-2 btn btn-dark"
          onClick={() => {
            this.setState({
              fSize: this.state.fSize - 1,
            });
          }}
        >
          -
        </button>
        <hr />
        <h3>Ví dụ 2: Thay đổi màu sắc của div#home</h3>
        <div style={{color:this.state.color}} className="fa fa-home fa-10x"></div>
        <p>Chọn màu: </p>
        <select id="color" className="form-control w-25 mt-2" onChange={(event) => {
            //event.target <=> document.getElementById(color);
            this.setState({
                color: event.target.value
            })
        }}>
          <option value={"red"}>Red</option>
          <option value={"green"}>Green</option>
          <option value={"blue"}>Blue</option>
        </select>
        <hr />
        <h3>Ví dụ 3: Tinder app</h3>
        <div className="card w-25">
            <img src={this.state.imgSrc} alt="..." />
            <div className="card-body">
                <button className="btn btn-danger" onClick={()=>{
                    this.randomAvatar();
                }}>Random</button>
            </div>
        </div>

      </div>
    );
  }
}
