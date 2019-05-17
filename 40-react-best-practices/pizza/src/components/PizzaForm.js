import React, {Component} from "react"

class PizzaForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: props.pizza.id,
      isVegetarian: props.pizza.vegetarian
    }
    this.handleCheck = this.handleCheck.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.pizza.id !== prevState.id) {
      return {
        id: nextProps.pizza.id,
        isVegetarian: nextProps.pizza.vegetarian
      }
    }
    return null
  }

  handleCheck(ev) {
    this.setState({
      isVegetarian: ev.target.value === "vegetarian"
    })
  }

  handleSubmit(ev) {
    ev.preventDefault()
    let {topping, size, vegetarian} = ev.target.elements

    this.props.updatePizza({
      id: this.props.pizza.id,
      topping: topping.value,
      size: size.value,
      vegetarian: this.state.isVegetarian
    })
  }

  render() {
    return(
        <form className="form-row" onSubmit={this.handleSubmit}>
          <div className="col-5">
              <input type="text" name="topping" className="form-control" placeholder="Pizza Topping"
              defaultValue={this.props.pizza.topping} />
          </div>
          <div className="col">
            <select name="size" defaultValue={this.props.pizza.size} className="form-control">
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
          </div>
          <div className="col">
            <div className="form-check">
              <label className="form-check-label">
                <input className="form-check-input" name="vegetarian" value="vegetarian"
                type="radio" onChange={this.handleCheck}
                checked={this.state.isVegetarian} />
                Vegetarian
              </label>
            </div>
            <div className="form-check">
              <label className="form-check-label">
                <input className="form-check-input" name="vegetarian" value="non-veg"
                type="radio" onChange={this.handleCheck}
                checked={!this.state.isVegetarian} />
                Not Vegetarian
              </label>
            </div>
          </div>
          <div className="col">
            <button type="submit" className="btn btn-success" onClick={console.log}>Submit</button>
          </div>
        </form>
    )
  }
}

export default PizzaForm
