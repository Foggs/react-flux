import React, { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props);
    this.arr = [];

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleChange(event) {
  //   this.setState({value: event.target.value});
  // }

  // handleSubmit(event) {
  //   // alert('A name was submitted: ' + this.state.value);
  //   event.preventDefault();

  //   this.props.handleSubmit(this.state.value);
  //   this.setState({value: ''});
  //   this.props.handleSubmit()

  // }
  renderDetails(obj) {
    let d = JSON.parse(JSON.stringify(this.props.data));
    for (let [key, value] of Object.entries(d)) {
      if (
        key === "Poster" ||
        key === "Ratings" ||
        key === "Response" ||
        key === "Type" ||
        key === "DVD" ||
        key === "Website" ||
        key === "Metascore" ||
        key === "imdbRating" ||
        key === "imdbVotes"
      )
      continue;
      this.arr.push(`${key}: ${value}`);
    }
  }

  render() {
    let data = JSON.parse(JSON.stringify(this.props.data));
    if (data != null) {
      this.renderDetails();
      return (
        <div className="row">
          <div className="card text-center">
            <img
              src={data.Poster}
              className="card-img-top"
              alt="movie poster"
            />
            {/*<div className="card-header">
                        {data.Title}
                    </div>*/}
            <div className="card-body">
              <h5 className="card-title">
                {data.Title} {data.Year}
              </h5>
              <a href="/" className="btn btn-primary">
                Save
              </a>
            </div>
            <ul className="list-group list-group-flush">
              {this.arr.map( (n,i) => (
                <li className="list-group-item" key={i}>{n}</li>
              ))}
            </ul>
            <div className="card-footer text-muted">2 days ago</div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Card;
