import React from 'react'
import { DerivedUsingPure } from './DerivedUsing'

type MyState = {
  name: string
  nAge: number
  strList: number[]
}

type MyProps = {
  age?: number
  email?: string
}

export default class AppComponent extends React.Component<MyProps, MyState> {
  state: MyState = {
    name: 'nn',
    // this is error
    nAge: 18,
    strList: [0, 1, 2]
  }

  constructor(props: MyProps) {
    super(props)
  }

  componentDidMount(): void {
    console.log('componentDidMount')
    // * handle side effects
    // this.setState({
    //   name: 'new name'
    // })
  }

  componentDidUpdate(): void {
    console.log('componentDidUpdate')
  }

  shouldComponentUpdate(): boolean {
    console.log('shouldComponentUpdate')
    // if (nextState.nAge == this.props.age) return false
    return true
  }

  getSnapshotBeforeUpdate() {
    console.log('getSnapshotBeforeUpdate')
    return null
  }

  // only aim
  // change of state value comes from props
  static getDerivedStateFromProps(props: MyProps, state: MyState) {
    console.log('getDerivedStateFromProps')
    if (props.age !== state.nAge) {
      return {
        nAge: props.age
      }
    }
    return null
  }

  onAddNumber() {
    this.setState((state) => ({
      strList: [...state.strList, state.strList.unshift() + 1]
    }))
  }

  onEmailChange(e: React.ChangeEvent<HTMLInputElement>): void {
    console.log(e.target.value, this, 'val')
    this.setState({
      email: e.target.value
    })
  }
  render(): React.ReactNode {
    console.log('render')
    const { strList } = this.state
    return (
      <div className="p-2">
        <div>App Component</div>
        <p>name: {this.state.name}</p>

        <p>age: {this.state.nAge}</p>

        <div className="mt-2">
          <button onClick={() => this.onAddNumber()}>add number</button>
          <p>list content</p>
          {/* <DerivedUsing lists={strList} /> */}

          <DerivedUsingPure lists={strList} />
        </div>
      </div>
    )
  }
}
